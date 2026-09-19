import { projects } from '../data.js';

export const HomeView = {
  render() {
    const recentProjects = projects.slice(0, 3);

    return `
      <!-- Hero Section -->
      <section class="relative bg-rotary-dark text-white overflow-hidden min-h-[85vh] flex items-center">
        <!-- Background Decorative Elements -->
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style="background-image: url('/assets/hero-bg.jpg');"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-rotary-dark via-rotary-dark/95 to-transparent"></div>
        
        <!-- Animated geometric shapes (SVG) for visual appeal -->
        <div class="absolute right-0 top-0 h-full w-1/3 hidden lg:block pointer-events-none opacity-20">
          <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
            <polygon points="50,0 100,0 100,100 0,100" class="text-rotary-gold" />
          </svg>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <div class="max-w-3xl">
            <!-- Brand Badge -->
            <div class="inline-flex items-center space-x-2 bg-rotary-gold/20 text-rotary-gold border border-rotary-gold/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span>Districul 2241 România & Republica Moldova</span>
            </div>
            
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Schimbăm vieți în <br class="hidden sm:inline">
              <span class="text-rotary-gold">Moșnița Nouă</span> prin fapte
            </h1>
            
            <p class="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Suntem o comunitate de lideri, profesioniști și prieteni dedicați servirii aproapelui. Ghidați de motto-ul <span class="italic font-semibold text-white">„Serviciu mai presus de sine”</span>, ne unim eforturile pentru a susține educația, sănătatea și dezvoltarea comunității noastre locale.
            </p>
            
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#/proiecte" class="btn-accent px-8 py-4 rounded-md font-bold text-center shadow-lg transition-transform text-sm tracking-wide uppercase">
                Vezi Proiectele Noastre
              </a>
              <a href="#/contact" class="px-8 py-4 rounded-md font-bold text-center border-2 border-white text-white hover:bg-white hover:text-rotary-dark transition-all duration-300 text-sm tracking-wide uppercase">
                Alătură-te ca Voluntar
              </a>
            </div>
          </div>
        </div>
        
        <!-- Wave Divider -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[40px] text-slate-50 fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,94.43,26.83,185.06,47.5,263.76,64.24,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <!-- Welcome / Brief Story Section -->
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Graphic/Intro Info -->
            <div class="relative">
              <div class="absolute -top-4 -left-4 w-72 h-72 bg-rotary-gold/10 rounded-3xl -z-10"></div>
              <div class="absolute -bottom-4 -right-4 w-72 h-72 bg-rotary-blue/10 rounded-3xl -z-10"></div>
              <img src="/assets/story-bg.jpg" alt="Rotary Club Moșnița Nouă în acțiune" class="rounded-2xl shadow-xl w-full object-cover aspect-video" />
            </div>

            <!-- Content -->
            <div class="space-y-6">
              <div class="flex items-center space-x-2">
                <span class="h-1 w-8 bg-rotary-blue rounded-full"></span>
                <span class="text-rotary-blue font-bold text-xs uppercase tracking-wider">Cine Suntem</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Forța solidarității într-o comunitate dinamică
              </h2>
              <p class="text-slate-600 leading-relaxed text-base">
                Clubul Rotary Moșnița Nouă a luat ființă în anul <strong>2025</strong> din dorința de a aduce împreună profesioniști valoroși și lideri locali care doresc să își folosească experiența, timpul și resursele în beneficiul comunității. Într-o comunitate de peste 20.000 de locuitori, fiecare cetățean contează!
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="border-l-4 border-rotary-gold pl-4 py-1">
                  <span class="font-serif text-2xl font-bold text-slate-800">4</span>
                  <span class="block text-xs text-slate-500 font-semibold">Piloni de acțiune</span>
                </div>
                <div class="border-l-4 border-rotary-blue pl-4 py-1">
                  <span class="font-serif text-2xl font-bold text-slate-800">100%</span>
                  <span class="block text-xs text-slate-500 font-semibold">Dedicat Moșniței</span>
                </div>
              </div>
              <div>
                <a href="#/despre-noi" class="inline-flex items-center space-x-2 text-rotary-blue font-bold hover:text-rotary-gold transition-colors text-sm">
                  <span>Află mai multe despre misiunea noastră</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Recent Projects Section -->
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <span class="h-1 w-8 bg-rotary-blue rounded-full"></span>
                <span class="text-rotary-blue font-bold text-xs uppercase tracking-wider">Implicare Activă</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Proiecte Recente
              </h2>
            </div>
            <a href="#/proiecte" class="mt-4 md:mt-0 text-rotary-blue font-bold hover:text-rotary-gold transition-colors inline-flex items-center space-x-1 text-sm">
              <span>Vezi toate proiectele</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${recentProjects.map(proj => `
              <div class="bg-slate-50 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col group">
                <div class="relative h-48 overflow-hidden">
                  <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span class="absolute top-4 right-4 text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                    proj.status === 'active' 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-slate-700 text-white'
                  }">
                    ${proj.status === 'active' ? 'În Derulare' : 'Finalizat'}
                  </span>
                </div>
                <div class="p-6 flex-grow flex flex-col justify-between">
                  <div class="space-y-3">
                    <span class="text-xs text-slate-400 font-semibold block">${proj.date}</span>
                    <h3 class="font-serif font-bold text-slate-900 text-lg group-hover:text-rotary-blue transition-colors leading-tight">
                      ${proj.title}
                    </h3>
                    <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                      ${proj.description}
                    </p>
                  </div>
                  <div class="border-t border-slate-200 mt-6 pt-4 text-xs text-slate-500">
                    <span class="font-bold text-slate-700">Beneficiari:</span> ${proj.beneficiaries}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- CTA (Donation & Volunteering Banner) -->
      <section class="py-20 bg-gradient-to-r from-rotary-blue to-rotary-blue/90 text-white relative overflow-hidden">
        <div class="absolute -right-16 -bottom-16 w-64 h-64 border-4 border-white/5 rounded-full pointer-events-none"></div>
        <div class="absolute -left-16 -top-16 w-64 h-64 border-4 border-white/5 rounded-full pointer-events-none"></div>
        
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Vrei să contribui la dezvoltarea comunității din Moșnița Nouă?
          </h2>
          <p class="text-slate-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Fiecare gest contează. Fie că dorești să îți dedici timpul ca voluntar, fie că susții financiar proiectele noastre, sprijinul tău aduce o schimbare reală în viața concetățenilor noștri.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <button class="open-donate-modal-btn w-full sm:w-auto btn-accent px-8 py-4 rounded-md font-bold text-sm tracking-wide uppercase cursor-pointer flex items-center justify-center space-x-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Susține prin Donație</span>
            </button>
            <button id="home-volunteer-btn" class="w-full sm:w-auto px-8 py-4 rounded-md font-bold border-2 border-white text-white hover:bg-white hover:text-rotary-blue transition-colors text-sm tracking-wide uppercase cursor-pointer">
              Devino Voluntar
            </button>
          </div>
        </div>
      </section>
    `;
  },

  mount() {
    // Buton Voluntar (Redirecționează spre pagina de contact)
    const volunteerBtn = document.getElementById('home-volunteer-btn');
    if (volunteerBtn) {
      volunteerBtn.onclick = () => {
        window.location.hash = '#/contact?subject=Vol voluntariat';
      };
    }
  }
};
