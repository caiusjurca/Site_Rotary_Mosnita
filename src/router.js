import { authService } from './auth.js';
import { HomeView } from './views/Home.js';
import { AboutView } from './views/About.js';
import { ProjectsView } from './views/Projects.js';
import { DocumentsView } from './views/Documents.js';
import { ContactView } from './views/Contact.js';
import { LoginView } from './views/Login.js';
import { DashboardView } from './views/Dashboard.js';

import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { DonationModal } from './components/DonationModal.js';

const routes = {
  '/': { view: HomeView, title: 'Acasă | Rotary Club Moșnița Nouă', desc: 'Bun venit la Rotary Club Moșnița Nouă. Descoperă activitatea noastra, proiectele comunitare și cum te poți alătura ca voluntar.' },
  '/despre-noi': { view: AboutView, title: 'Despre Noi | Rotary Club Moșnița Nouă', desc: 'Află mai multe despre istoricul clubului nostru, valorile noastre călăuzitoare și conducerea actuală.' },
  '/proiecte': { view: ProjectsView, title: 'Proiecte | Rotary Club Moșnița Nouă', desc: 'Galeria proiectelor comunitare active și finalizate organizate de Rotary Club Moșnița Nouă.' },
  '/documente-publice': { view: DocumentsView, title: 'Documente Publice | Rotary Club Moșnița Nouă', desc: 'Descarcă formularele și contractele oficiale: Contract de sponsorizare, Contract de donație ECO HUB și Cererea D230.' },
  '/contact': { view: ContactView, title: 'Contact | Rotary Club Moșnița Nouă', desc: 'Ia legătura cu noi pentru propuneri de proiecte, parteneriate, voluntariat sau donații. Sediu Moșnița Nouă.' },
  '/login': { view: LoginView, title: 'Autentificare Membrii | Rotary Club Moșnița Nouă', desc: 'Zonă securizată pentru logarea membrilor activi ai clubului Rotary Moșnița Nouă.', guestOnly: true },
  '/dashboard': { view: DashboardView, title: 'Panou de Control Membrii | Rotary Club Moșnița Nouă', desc: 'Panou intern de administrare și documente secrete pentru membrii asociației.', authRequired: true }
};

export class Router {
  static init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
    window.addEventListener('authChange', () => {
      // Re-randăm meniul de navigare când se schimbă starea de autentificare
      const navbarContainer = document.getElementById('navbar-container');
      if (navbarContainer) {
        navbarContainer.innerHTML = Navbar.render();
        Navbar.mount();
      }
      // Dacă suntem pe o pagină ce necesită auth și s-a dat logout, redirecționăm
      const currentRoute = this.getRoute();
      const routeConfig = routes[currentRoute];
      if (routeConfig && routeConfig.authRequired && !authService.isAuthenticated()) {
        window.location.hash = '#/login';
      }
    });
  }

  static getRoute() {
    const hash = window.location.hash || '#/';
    let route = hash.replace(/^#/, '');
    if (!route.startsWith('/')) {
      route = '/' + route;
    }
    // Curățăm parametrii de query dacă există
    return route.split('?')[0];
  }

  static handleRoute() {
    // Ne asigurăm că scroll-ul paginii este deblocat la schimbarea rutei
    document.body.style.overflow = '';
    document.body.classList.remove('overflow-hidden');

    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    const currentRoute = this.getRoute();
    let routeConfig = routes[currentRoute];

    // Tratează cazurile de pagină inexistentă (404)
    if (!routeConfig) {
      routeConfig = {
        view: {
          render: () => `
            <div class="flex-grow flex flex-col items-center justify-center text-center p-8 py-20">
              <h1 class="text-6xl font-serif font-bold text-rotary-blue mb-4">404</h1>
              <p class="text-2xl font-bold mb-6 text-slate-700">Pagina nu a fost găsită</p>
              <p class="text-slate-500 mb-8 max-w-md">Pagina pe care o cauți nu există sau a fost mutată.</p>
              <a href="#/" class="btn-primary px-6 py-3 rounded-md font-bold shadow-md">Înapoi la Acasă</a>
            </div>
          `,
          mount: () => {}
        },
        title: 'Pagina Nu A Fost Găsită | Rotary Club Moșnița Nouă',
        desc: 'Pagina solicitată nu a putut fi găsită pe site-ul Rotary Club Moșnița Nouă.'
      };
    }

    const isLoggedIn = authService.isAuthenticated();

    // Verificare permisiuni rută
    if (routeConfig.authRequired && !isLoggedIn) {
      window.location.hash = '#/login';
      return;
    }

    if (routeConfig.guestOnly && isLoggedIn) {
      window.location.hash = '#/dashboard';
      return;
    }

    // Actualizare titlu pagină și meta descriere pentru SEO
    document.title = routeConfig.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', routeConfig.desc);
    }

    // Structura Layout-ului Global
    appContainer.innerHTML = `
      <div id="navbar-container" class="sticky top-0 z-50"></div>
      <main id="app-content" class="flex-grow opacity-0 fade-in"></main>
      <div id="footer-container"></div>
      <div id="donation-modal-container"></div>
    `;

    // Randare Navbar, Footer & Modal Donație Global
    document.getElementById('navbar-container').innerHTML = Navbar.render();
    document.getElementById('footer-container').innerHTML = Footer.render();
    document.getElementById('donation-modal-container').innerHTML = DonationModal.render();

    // Randare View Activ
    const appContent = document.getElementById('app-content');
    appContent.innerHTML = routeConfig.view.render();

    // Scroll înapoi sus la schimbarea paginii
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Rulăm funcțiile de inițializare a componentelor în DOM
    Navbar.mount();
    Footer.mount();
    routeConfig.view.mount();
    DonationModal.mount();
  }
}
