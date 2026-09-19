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
                <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
                <span class="text-rotary-blue font-bold text-sm uppercase tracking-wider">Cine Suntem</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-rotary-blue leading-tight">
                Uniți pentru a susține comunitatea din Moșnița Nouă
              </h2>
              <p class="text-slate-600 leading-relaxed text-md">
                Clubul Rotary Moșnița Nouă a luat ființă în anul <strong>2025</strong> din dorința de a aduce împreună profesioniști valoroși și lideri locali care doresc să își folosească experiența, timpul și resursele în beneficiul comunității. Într-o comunitate de peste 20.000 de locuitori, fiecare cetățean contează!
              </p>
              <p class="text-slate-600 leading-relaxed text-md">
                Credem cu tărie că o comunitate puternică se clădește prin implicare constantă. De aceea, ne concentrăm acțiunile pe educația copiilor, sprijinirea sistemului sanitar local, implicare civică ghidată etic și parteneriate durabile de dezvoltare economică.
              </p>
              
              <!-- Four-Way Test (Mini Callout) -->
              <div class="bg-white border-l-4 border-rotary-gold p-5 rounded-r-xl shadow-sm space-y-2">
                <h4 class="font-serif font-bold text-rotary-blue">Cele Patru Întrebări (The Four-Way Test)</h4>
                <p class="text-slate-500 text-xs italic">Dintre lucrurile pe care le gândim, le spunem sau le facem:</p>
                <div class="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mt-2">
                  <div class="flex items-center space-x-1.5">
                    <span class="text-rotary-gold">✔</span> <span>Este adevărul?</span>
                  </div>
                  <div class="flex items-center space-x-1.5">
                    <span class="text-rotary-gold">✔</span> <span>Este loial tuturor?</span>
                  </div>
                  <div class="flex items-center space-x-1.5">
                    <span class="text-rotary-gold">✔</span> <span>Va întări prietenia?</span>
                  </div>
                  <div class="flex items-center space-x-1.5">
                    <span class="text-rotary-gold">✔</span> <span>Va fi benefic?</span>
                  </div>
                </div>
              </div>

              <div>
                <a href="#/despre-noi" class="inline-flex items-center space-x-1.5 text-rotary-blue hover:text-rotary-gold font-bold transition-colors">
                  <span>Citește mai multe despre istoria noastră</span>
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
            <div class="space-y-4 max-w-xl">
              <div class="flex items-center space-x-2">
                <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
                <span class="text-rotary-blue font-bold text-sm uppercase tracking-wider">Proiecte Recente</span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl font-bold text-rotary-blue">
                Impactul nostru în acțiuni concrete
              </h2>
            </div>
            <div class="mt-4 md:mt-0">
              <a href="#/proiecte" class="btn-primary px-6 py-3 rounded-md font-bold text-sm inline-block shadow-md">
                Vezi toate proiectele
              </a>
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${recentProjects.map(proj => `
              <div class="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group hover:shadow-md transition-shadow">
                <div class="relative h-48 overflow-hidden">
                  <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span class="absolute top-4 right-4 text-2xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                    proj.status === 'active' 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                      : 'bg-slate-200 text-slate-700 border border-slate-300'
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
                  <div class="border-t border-slate-200 mt-6 pt-4 flex justify-between items-center text-xs text-slate-500">
                    <div>
                      <span class="font-bold text-slate-700">Buget:</span> ${proj.budget}
                    </div>
                    <div>
                      <span class="font-bold text-slate-700">Beneficiari:</span> ${proj.beneficiaries}
                    </div>
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
            <button id="home-volunteer-btn" class="w-full sm:w-auto btn-accent px-8 py-4 rounded-md font-bold text-sm tracking-wide uppercase cursor-pointer">
              Devino Voluntar
            </button>
            <button id="home-donate-btn" class="w-full sm:w-auto px-8 py-4 rounded-md font-bold border-2 border-white text-white hover:bg-white hover:text-rotary-blue transition-colors text-sm tracking-wide uppercase cursor-pointer">
              Susține prin Donație
            </button>
          </div>
        </div>
      </section>

      <!-- Donation Modal (Interactive Viewport-Centered Feature) -->
      <div id="donation-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4">
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="donation-modal-overlay"></div>
        
        <div class="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden relative z-10 border border-slate-100 transform scale-95 transition-transform duration-200 m-auto">
          <div class="bg-rotary-blue p-6 text-white relative">
            <h3 class="font-serif text-xl font-bold">Susține Clubul Rotary</h3>
            <p class="text-xs text-blue-200 mt-1">Donațiile susțin 100% proiectele locale</p>
            <button id="donation-modal-close" class="absolute top-4 right-4 text-white hover:text-rotary-gold transition-colors text-2xl font-bold focus:outline-none cursor-pointer">&times;</button>
          </div>
          <div class="p-6 space-y-4">
            <p class="text-sm text-slate-600">
              Orice contribuție financiară este direcționată în mod transparent către proiectele noastre active în educație, ecologizare sau sprijin medical.
            </p>
            <div class="bg-slate-50 p-4 rounded-xl space-y-2.5 border border-slate-200 text-sm">
              <div>
                <span class="text-xs font-bold text-slate-500 block">Beneficiar:</span>
                <span class="font-semibold text-slate-800">ASOCIAȚIA ROTARY CLUB MOȘNIȚA NOUĂ</span>
              </div>
              <div>
                <span class="text-xs font-bold text-slate-500 block">Cod Fiscal (CIF):</span>
                <span class="font-semibold text-slate-800 font-mono">53083341</span>
              </div>
              <div>
                <span class="text-xs font-bold text-slate-500 block">Cont Bancar (IBAN):</span>
                <div class="flex items-center justify-between mt-0.5">
                  <span id="iban-field" class="font-bold text-rotary-blue font-mono select-all text-xs sm:text-sm">RO23BTRLRONCRT0DB9999001</span>
                  <button id="copy-iban-btn" class="text-xs text-rotary-blue hover:text-rotary-azure font-semibold underline ml-2 cursor-pointer">Copiază</button>
                </div>
              </div>
              <div>
                <span class="text-xs font-bold text-slate-500 block">Banca:</span>
                <span class="font-semibold text-slate-800">Banca Transilvania</span>
              </div>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
              <strong>Notă:</strong> Menționați la detalii plată: <em>„Sponsorizare / Donație susținere proiecte comunitare”</em>.
            </div>
          </div>
          <div class="p-6 border-t border-slate-100 flex justify-end">
            <button id="donation-modal-ok" class="btn-primary px-5 py-2.5 rounded-md font-bold text-xs cursor-pointer">Am Înțeles</button>
          </div>
        </div>
      </div>
    `;
  },

  mount() {
    // Logica Modalului de Donatie
    const donationModal = document.getElementById('donation-modal');
    const donationOverlay = document.getElementById('donation-modal-overlay');
    const closeBtn = document.getElementById('donation-modal-close');
    const okBtn = document.getElementById('donation-modal-ok');
    const copyBtn = document.getElementById('copy-iban-btn');
    const openBtn = document.getElementById('home-donate-btn');

    // Dacă este în interiorul conținutului paginii, îl mutăm ca descendent direct al lui body
    // pentru a garanta poziționarea fixă 100% centrată în viewport, indiferent unde s-a dat scroll
    if (donationModal && donationModal.parentElement !== document.body) {
      document.body.appendChild(donationModal);
    }

    const showModal = () => {
      if (!donationModal) return;
      donationModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const card = donationModal.querySelector('.transform');
        if (card) {
          card.classList.remove('scale-95');
          card.classList.add('scale-100');
        }
      });
    };

    const hideModal = () => {
      if (!donationModal) return;
      const card = donationModal.querySelector('.transform');
      if (card) {
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
      }
      setTimeout(() => {
        donationModal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 150);
    };

    if (openBtn) openBtn.onclick = showModal;
    if (donationOverlay) donationOverlay.onclick = hideModal;
    if (closeBtn) closeBtn.onclick = hideModal;
    if (okBtn) okBtn.onclick = hideModal;

    if (copyBtn) {
      copyBtn.onclick = () => {
        const iban = document.getElementById('iban-field').innerText;
        navigator.clipboard.writeText(iban).then(() => {
          copyBtn.innerText = 'Copiat!';
          copyBtn.classList.remove('text-slate-500');
          copyBtn.classList.add('text-emerald-600', 'font-bold');
          setTimeout(() => {
            copyBtn.innerText = 'Copiază';
            copyBtn.classList.remove('text-emerald-600', 'font-bold');
            copyBtn.classList.add('text-slate-500');
          }, 2000);
        });
      };
    }

    // Buton Voluntar (Redirecționează spre pagina de contact)
    const volunteerBtn = document.getElementById('home-volunteer-btn');
    if (volunteerBtn) {
      volunteerBtn.onclick = () => {
        window.location.hash = '#/contact?subject=Vol voluntariat';
      };
    }
  }
};
