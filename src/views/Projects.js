import { projects } from '../data.js';

export const ProjectsView = {
  render() {
    return `
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('/assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Proiectele Noastre</h1>
          <p class="text-slate-300 text-base max-w-xl mx-auto font-light">
            De la educație și cultură, până la sănătate și protecția mediului. Vezi cum acționăm în sprijinul comunei Moșnița Nouă.
          </p>
        </div>
      </section>

      <!-- Filtrare și Galerie Proiecte -->
      <section class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Butoane Filtrare -->
          <div class="flex flex-wrap justify-center items-center gap-3 mb-12">
            <button data-filter="all" class="filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-rotary-blue text-white">
              Toate Proiectele
            </button>
            <button data-filter="active" class="filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-white text-slate-700 hover:bg-slate-100">
              În Derulare
            </button>
            <button data-filter="finalizat" class="filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-white text-slate-700 hover:bg-slate-100">
              Finalizate
            </button>
          </div>

          <!-- Grid Proiecte -->
          <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${projects.map(proj => `
              <div data-status="${proj.status}" class="project-card bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-100 flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                
                <!-- Imagine Proiect -->
                <div class="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  <span class="absolute top-4 left-4 text-2xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                    proj.status === 'active' 
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                      : 'bg-slate-200 text-slate-700 border border-slate-300'
                  }">
                    ${proj.status === 'active' ? 'În Derulare' : 'Finalizat'}
                  </span>
                </div>

                <!-- Detalii Proiect -->
                <div class="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-slate-400">${proj.date}</span>
                      <span class="text-xs font-bold text-rotary-blue bg-rotary-blue/5 px-2.5 py-0.5 rounded-md">${proj.budget}</span>
                    </div>
                    <h3 class="font-serif font-bold text-slate-900 text-xl leading-tight group-hover:text-rotary-blue transition-colors">
                      ${proj.title}
                    </h3>
                    <p class="text-slate-600 text-xs leading-relaxed">
                      ${proj.description}
                    </p>
                  </div>

                  <!-- Date Impact -->
                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-2xs">
                    <div>
                      <span class="font-bold text-slate-700">Beneficiari:</span> 
                      <span class="text-slate-600">${proj.beneficiaries}</span>
                    </div>
                    <div>
                      <span class="font-bold text-slate-700">Impact măsurat:</span> 
                      <span class="text-slate-600 italic">"${proj.impact}"</span>
                    </div>
                  </div>

                  <div class="pt-2 flex justify-end">
                    <button class="project-details-btn text-xs font-bold text-rotary-blue hover:text-rotary-gold transition-colors flex items-center space-x-1 cursor-pointer" data-id="${proj.id}">
                      <span>Citește detalii</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- Project Details Modal (Interactive Feature) -->
      <div id="project-modal" class="fixed inset-0 z-50 overflow-y-auto hidden flex items-center justify-center p-4">
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="project-modal-overlay"></div>
        
        <div class="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden relative z-10 border border-slate-100 transform scale-95 transition-transform duration-300">
          <div class="relative h-64 sm:h-80">
            <img id="modal-project-img" src="" alt="Imagine Proiect" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            <button id="project-modal-close" class="absolute top-4 right-4 text-white hover:text-rotary-gold bg-black/40 hover:bg-black/60 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold focus:outline-none transition-colors">&times;</button>
            
            <div class="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span id="modal-project-status" class="text-3xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"></span>
              <h3 id="modal-project-title" class="font-serif text-xl sm:text-2xl font-bold leading-tight"></h3>
            </div>
          </div>
          
          <div class="p-6 sm:p-8 space-y-6">
            <div class="grid grid-cols-3 gap-4 border-b border-slate-100 pb-5 text-center">
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase block">Perioadă</span>
                <span id="modal-project-date" class="text-xs font-semibold text-slate-800"></span>
              </div>
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase block">Buget Proiect</span>
                <span id="modal-project-budget" class="text-xs font-bold text-rotary-blue"></span>
              </div>
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase block">Beneficiari</span>
                <span id="modal-project-beneficiaries" class="text-xs font-semibold text-slate-800"></span>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Descriere Proiect</h4>
                <p id="modal-project-desc" class="text-slate-600 text-xs leading-relaxed"></p>
              </div>
              
              <div class="bg-rotary-blue/5 border border-rotary-blue/10 rounded-xl p-4">
                <h4 class="text-xs font-bold text-rotary-blue uppercase tracking-wider mb-1">Impact Comunitar Măsurat</h4>
                <p id="modal-project-impact" class="text-slate-700 text-xs italic leading-relaxed"></p>
              </div>
            </div>
          </div>
          <div class="p-6 border-t border-slate-100 flex justify-end">
            <button id="project-modal-ok" class="btn-primary px-6 py-2.5 rounded-md font-bold text-xs">Închide</button>
          </div>
        </div>
      </div>
    `;
  },

  mount() {
    // Logica de Filtrare
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
      btn.onclick = () => {
        // Schimbă clasele active ale butoanelor
        filterButtons.forEach(b => {
          b.className = 'filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-white text-slate-700 hover:bg-slate-100';
        });
        btn.className = 'filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-rotary-blue text-white';

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardStatus = card.getAttribute('data-status');
          if (filterValue === 'all' || cardStatus === filterValue) {
            card.classList.remove('hidden');
            // Efect mic fade-in
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transition = 'opacity 0.3s ease-in-out';
            }, 50);
          } else {
            card.classList.add('hidden');
          }
        });
      };
    });

    // Logica Modalului Detalii Proiect
    const modal = document.getElementById('project-modal');
    const modalOverlay = document.getElementById('project-modal-overlay');
    const closeBtn = document.getElementById('project-modal-close');
    const okBtn = document.getElementById('project-modal-ok');
    const detailButtons = document.querySelectorAll('.project-details-btn');

    const showModal = (projId) => {
      const proj = projects.find(p => p.id === projId);
      if (!proj) return;

      document.getElementById('modal-project-img').src = proj.image;
      document.getElementById('modal-project-img').alt = proj.title;
      document.getElementById('modal-project-title').innerText = proj.title;
      document.getElementById('modal-project-date').innerText = proj.date;
      document.getElementById('modal-project-budget').innerText = proj.budget;
      document.getElementById('modal-project-beneficiaries').innerText = proj.beneficiaries;
      document.getElementById('modal-project-desc').innerText = proj.description;
      document.getElementById('modal-project-impact').innerText = proj.impact;

      const statusBadge = document.getElementById('modal-project-status');
      statusBadge.innerText = proj.status === 'active' ? 'În Derulare' : 'Finalizat';
      statusBadge.className = `text-3xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
        proj.status === 'active' 
          ? 'bg-emerald-500/90 text-white' 
          : 'bg-slate-500/90 text-white'
      }`;

      modal.classList.remove('hidden');
      modal.querySelector('.transform').classList.remove('scale-95');
      modal.querySelector('.transform').classList.add('scale-100');
    };

    const hideModal = () => {
      modal.querySelector('.transform').classList.remove('scale-100');
      modal.querySelector('.transform').classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 100);
    };

    detailButtons.forEach(btn => {
      btn.onclick = () => showModal(btn.getAttribute('data-id'));
    });

    if (modalOverlay) modalOverlay.onclick = hideModal;
    if (closeBtn) closeBtn.onclick = hideModal;
    if (okBtn) okBtn.onclick = hideModal;
  }
};
