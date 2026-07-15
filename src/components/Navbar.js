import { authService } from '../auth.js';

export const Navbar = {
  render() {
    const isLoggedIn = authService.isAuthenticated();
    const currentUser = authService.getCurrentUser();

    return `
      <header class="sticky top-0 z-50 glass shadow-sm transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20 items-center">
            
            <!-- Logo Section -->
            <a href="#/" class="flex items-center space-x-3 group">
              <!-- Rotary Official Logo SVG (Simplified high-quality vector) -->
              <div class="relative w-12 h-12 flex-shrink-0 transition-transform duration-500 group-hover:rotate-45">
                <svg viewBox="0 0 100 100" class="w-full h-full text-rotary-gold" fill="currentColor">
                  <defs>
                    <!-- Paths for text centering (Radius 34) -->
                    <!-- Top arc: left-to-right, curves up -->
                    <path id="rotary-top-path" d="M 16,50 A 34,34 0 0,1 84,50" fill="none" />
                    <!-- Bottom arc: left-to-right, curves down -->
                    <path id="rotary-bottom-path" d="M 16,50 A 34,34 0 0,0 84,50" fill="none" />
                  </defs>

                  <!-- Blue Ring Background (Radius 30 to 40) -->
                  <circle cx="50" cy="50" r="35" stroke="#17458F" stroke-width="10" fill="none" />

                  <!-- Outer Gold Rim (Radius 40) -->
                  <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="1.5" fill="none" />
                  <!-- Inner Gold Rim (Radius 30) -->
                  <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="1.5" fill="none" />

                  <!-- 24 Cogs (Radius 40 to 44) -->
                  ${Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    return `<rect x="48" y="2" width="4" height="6" rx="0.5" transform="rotate(${angle} 50 50)" />`;
                  }).join('')}

                  <!-- Inner wheel structure (6 Spokes) (Radius 12 to 30) -->
                  ${Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i * 360) / 6;
                    return `<rect x="48.5" y="12" width="3" height="18" transform="rotate(${angle} 50 50)" />`;
                  }).join('')}

                  <!-- Center hub and keyway (Radius 12) -->
                  <circle cx="50" cy="50" r="12" fill="currentColor" />
                  <circle cx="50" cy="50" r="6" fill="#17458F" />
                  <rect x="48.5" y="44" width="3" height="6" fill="#17458F" />

                  <!-- Top Inscribed Text "ROTARY" -->
                  <text font-family="var(--font-sans), 'Arial Black', sans-serif" font-weight="900" font-size="7.5" fill="currentColor" letter-spacing="1.2">
                    <textPath href="#rotary-top-path" startOffset="50%" text-anchor="middle">ROTARY</textPath>
                  </text>

                  <!-- Bottom Inscribed Text "INTERNATIONAL" -->
                  <text font-family="var(--font-sans), 'Arial Black', sans-serif" font-weight="900" font-size="4.8" fill="currentColor" letter-spacing="0.4">
                    <textPath href="#rotary-bottom-path" startOffset="50%" text-anchor="middle">INTERNATIONAL</textPath>
                  </text>
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="font-serif text-sm font-black tracking-widest text-rotary-blue leading-none">ROTARY</span>
                <span class="font-sans text-xs font-semibold tracking-wider text-slate-500 leading-none mt-0.5">CLUB MOȘNIȚA NOUĂ</span>
              </div>
            </a>

            <!-- Desktop Navigation Links -->
            <nav class="hidden md:flex space-x-1 lg:space-x-2 items-center">
              <a href="#/" class="nav-link px-3 py-2 rounded-md text-sm font-semibold transition-colors">Acasă</a>
              <a href="#/despre-noi" class="nav-link px-3 py-2 rounded-md text-sm font-semibold transition-colors">Despre Noi</a>
              <a href="#/proiecte" class="nav-link px-3 py-2 rounded-md text-sm font-semibold transition-colors">Proiecte</a>
              <a href="#/documente-publice" class="nav-link px-3 py-2 rounded-md text-sm font-semibold transition-colors">Documente Publice</a>
              <a href="#/contact" class="nav-link px-3 py-2 rounded-md text-sm font-semibold transition-colors">Contact</a>
              
              <!-- Separator vertical -->
              <span class="h-6 w-px bg-slate-200 mx-2"></span>

              <!-- User actions -->
              ${isLoggedIn ? `
                <div class="flex items-center space-x-3">
                  <a href="#/dashboard" class="flex items-center space-x-1.5 px-3.5 py-2 rounded-md text-sm font-bold bg-rotary-blue/10 text-rotary-blue hover:bg-rotary-blue/20 transition-all border border-rotary-blue/10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Membri</span>
                  </a>
                  <button id="logout-btn" class="px-3.5 py-2 rounded-md text-sm font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                    Deconectare
                  </button>
                </div>
              ` : `
                <a href="#/login" class="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-bold btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Portal Membri</span>
                </a>
              `}
            </nav>

            <!-- Mobile Menu Button -->
            <div class="flex items-center md:hidden">
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
        <div id="mobile-menu" class="hidden md:hidden bg-white/95 border-b border-slate-100 shadow-md">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
              <a href="#/login" class="block text-center px-4 py-2.5 mx-3 rounded-md text-base font-bold btn-primary">
                Portal Membri
              </a>
            `}
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

    // Efect de micșorare navbar la scroll
    window.onscroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          header.classList.add('h-16');
          header.classList.remove('h-20');
        } else {
          header.classList.add('h-20');
          header.classList.remove('h-16');
        }
      }
    };
  }
};
