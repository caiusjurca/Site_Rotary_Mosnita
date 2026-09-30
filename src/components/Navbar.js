import { authService } from '../auth.js';

export const Navbar = {
  render() {
    const isLoggedIn = authService.isAuthenticated();
    const currentUser = authService.getCurrentUser();

    return `
      <header class="w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-2 sm:py-2.5 min-h-[4.75rem] sm:min-h-[5.25rem] lg:min-h-[5.5rem] xl:min-h-[6.25rem]">
            
            <!-- Logo Section -->
            <a href="#/" class="flex items-center group py-1 flex-shrink-0">
              <img src="./assets/logo-rotary-official.png" alt="Rotary Club Moșnița Nouă" class="h-14 sm:h-16 md:h-16 lg:h-16 xl:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </a>

            <!-- Desktop Navigation Links (Visible on lg and above to prevent wrapping) -->
            <nav class="hidden lg:flex space-x-1 xl:space-x-2 items-center flex-nowrap">
              <a href="#/" class="nav-link whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors">Acasă</a>
              <a href="#/despre-noi" class="nav-link whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors">Despre Noi</a>
              <a href="#/proiecte" class="nav-link whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors">Proiecte</a>
              <a href="#/documente-publice" class="nav-link whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors">Documente Publice</a>
              <a href="#/contact" class="nav-link whitespace-nowrap px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-colors">Contact</a>
              
              <!-- Separator vertical -->
              <span class="h-6 w-px bg-slate-200 mx-1.5 xl:mx-2 flex-shrink-0"></span>

              <!-- User actions / Portal Membri -->
              ${isLoggedIn ? `
                <div class="flex items-center space-x-1.5 xl:space-x-2 flex-shrink-0">
                  <a href="#/dashboard" class="flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs xl:text-sm font-bold bg-rotary-blue/10 text-rotary-blue hover:bg-rotary-blue/20 transition-all border border-rotary-blue/10 whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Membri</span>
                  </a>
                  <button id="logout-btn" class="px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap">
                    Deconectare
                  </button>
                </div>
              ` : `
                <a href="#/login" class="flex items-center space-x-1 px-3 py-1.5 rounded-md text-xs xl:text-sm font-bold btn-primary whitespace-nowrap flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Portal Membri</span>
                </a>
              `}

              <!-- Buton Donează (Subtil, Elegant, mutat la final inainte de Facebook) -->
              <button class="open-donate-modal-btn flex items-center space-x-1 px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-rotary-gold hover:text-white border border-amber-300/80 hover:border-rotary-gold transition-all duration-200 cursor-pointer shadow-2xs whitespace-nowrap ml-1 flex-shrink-0" title="Susține proiectele prin donație">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 fill-current text-rotary-gold" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>Donează</span>
              </button>

              <!-- Facebook link button (La FINAL) -->
              <a href="https://www.facebook.com/profile.php?id=61583636502555" target="_blank" rel="noopener noreferrer" class="p-1.5 xl:p-2 text-[#1877F2] hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center flex-shrink-0" title="Urmărește-ne pe Facebook">
                <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </nav>

            <!-- Mobile Bar Menu Toggle -->
            <div class="flex items-center space-x-2 lg:hidden">
              <button id="mobile-menu-toggle" class="p-2 rounded-md text-slate-600 hover:text-rotary-blue hover:bg-slate-100 focus:outline-none transition-colors">
                <svg id="menu-icon-closed" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg id="menu-icon-opened" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div class="px-3 pt-3 pb-4 space-y-2">
            <a href="#/" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold">Acasă</a>
            <a href="#/despre-noi" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold">Despre Noi</a>
            <a href="#/proiecte" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold">Proiecte</a>
            <a href="#/documente-publice" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold">Documente Publice</a>
            <a href="#/contact" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-semibold">Contact</a>
            
            <div class="border-t border-slate-100 my-2 pt-2"></div>
            
            ${isLoggedIn ? `
              <div class="px-3 py-2 text-xs font-semibold text-slate-400">Autentificat ca ${currentUser?.name}</div>
              <a href="#/dashboard" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-bold text-rotary-blue bg-rotary-blue/5">
                Dashboard Membri
              </a>
              <button id="mobile-logout-btn" class="w-full text-left block px-3 py-2.5 rounded-md text-base font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                Deconectare
              </button>
            ` : `
              <a href="#/login" class="block text-center px-4 py-2.5 rounded-md text-base font-bold btn-primary">
                Portal Membri
              </a>
            `}

            <!-- Donează & Facebook la finalul meniului mobil -->
            <div class="border-t border-slate-100 pt-3 flex items-center justify-between px-3">
              <button class="open-donate-modal-btn flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-rotary-gold hover:text-white border border-amber-300/80 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 fill-current text-rotary-gold" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>Donează</span>
              </button>

              <a href="https://www.facebook.com/profile.php?id=61583636502555" target="_blank" rel="noopener noreferrer" class="p-2 text-[#1877F2] hover:bg-blue-50 rounded-lg transition-colors flex items-center space-x-1.5 text-xs font-semibold" title="Facebook">
                <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    `;
  },

  mount() {
    // Evidențierea link-ului activ
    const currentHash = window.location.hash || '#/';
    let route = currentHash.replace(/^#/, '');
    if (!route.startsWith('/')) route = '/' + route;
    route = route.split('?')[0];

    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const updateLinkStyles = (links, activeClass, inactiveClass) => {
      links.forEach(link => {
        const href = link.getAttribute('href').replace(/^#/, '') || '/';
        const isMatched = (href === '/' && route === '/') || (href !== '/' && route.startsWith(href));
        
        if (isMatched) {
          link.className = `${link.className.split(' ').filter(c => !c.includes('text-')).join(' ')} ${activeClass}`;
        } else {
          link.className = `${link.className.split(' ').filter(c => !c.includes('text-')).join(' ')} ${inactiveClass}`;
        }
      });
    };

    updateLinkStyles(navLinks, 'text-rotary-blue font-bold border-b-2 border-rotary-blue rounded-none', 'text-slate-600 hover:text-rotary-blue hover:bg-slate-50');
    updateLinkStyles(mobileNavLinks, 'text-rotary-blue font-bold bg-rotary-blue/5', 'text-slate-600 hover:text-rotary-blue hover:bg-slate-50');

    // Meniu Mobil Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconClosed = document.getElementById('menu-icon-closed');
    const menuIconOpened = document.getElementById('menu-icon-opened');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.onclick = () => {
        const isClosed = mobileMenu.classList.contains('hidden');
        if (isClosed) {
          mobileMenu.classList.remove('hidden');
          menuIconClosed.classList.add('hidden');
          menuIconOpened.classList.remove('hidden');
        } else {
          mobileMenu.classList.add('hidden');
          menuIconClosed.classList.remove('hidden');
          menuIconOpened.classList.add('hidden');
        }
      };
    }

    // Închide meniul mobil la click pe un link mobil
    mobileNavLinks.forEach(link => {
      link.onclick = () => {
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
          menuIconClosed.classList.remove('hidden');
          menuIconOpened.classList.add('hidden');
        }
      };
    });

    // Logica Butoanelor de Log Out
    const handleLogout = (e) => {
      e.preventDefault();
      authService.logout();
      window.location.hash = '#/';
    };

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) logoutBtn.onclick = handleLogout;

    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    if (mobileLogoutBtn) mobileLogoutBtn.onclick = handleLogout;

    // Efect de adâncire umbră navbar la scroll (fără a forța înălțimi fixe care taie chenarul)
    window.onscroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          header.classList.add('shadow-md');
          header.classList.remove('shadow-xs');
        } else {
          header.classList.add('shadow-xs');
          header.classList.remove('shadow-md');
        }
      }
    };
  }
};
