import { publicDocuments } from '../data.js';

export const DocumentsView = {
  render() {
    return `
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('./assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div class="inline-flex items-center space-x-2 bg-rotary-gold/20 text-rotary-gold border border-rotary-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span>TRANSPARENȚĂ & IMPLICARE</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Documente Publice</h1>
          <p class="text-slate-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
            Formularele și contractele oficiale pentru susținerea proiectelor noastre comunitare: contract de sponsorizare, contract de donație pentru ECO HUB și cererea de redirecționare a 3,5% din impozitul pe venit.
          </p>
        </div>
      </section>

      <!-- Lista Documente -->
      <section class="py-16 bg-slate-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="bg-white rounded-2xl shadow-xs border border-slate-100 p-6 md:p-8 space-y-6">
            <div class="border-b border-slate-100 pb-5">
              <h2 class="font-serif text-xl font-bold text-slate-800">Formulare de Sponsorizare, Donații și Redirecționare 3,5%</h2>
              <p class="text-xs text-slate-500 mt-1">Descarcă sau consultă direct documentele oficiale de mai jos pentru a susține inițiativele Clubului Rotary Moșnița Nouă.</p>
            </div>

            <!-- List of files -->
            <div class="space-y-4">
              ${publicDocuments.map(doc => `
                <div class="doc-card border border-slate-200/80 hover:border-rotary-blue bg-slate-50/60 hover:bg-white p-5 rounded-2xl transition-all duration-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-5">
                  
                  <!-- Doc Metadata -->
                  <div class="flex items-start space-x-4">
                    <!-- PDF Icon SVG -->
                    <div class="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 border border-red-100 shadow-2xs">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div class="space-y-1 min-w-0">
                      <h3 class="font-serif font-bold text-slate-800 text-sm sm:text-base leading-snug">${doc.title}</h3>
                      <p class="text-slate-600 text-xs leading-relaxed">${doc.description}</p>
                    </div>
                  </div>

                  <!-- Action Buttons: Vizualizează & Descarcă -->
                  <div class="flex items-center space-x-2 flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <a 
                      href="${doc.fileUrl}" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="flex-1 md:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors inline-flex items-center justify-center space-x-1.5 shadow-2xs"
                      title="Deschide documentul în fereastră nouă"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Vizualizează</span>
                    </a>

                    <a 
                      href="${doc.fileUrl}" 
                      download="${doc.fileUrl.split('/').pop()}"
                      class="flex-1 md:flex-initial btn-primary px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer"
                      title="Descarcă direct pe dispozitiv"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Descarcă</span>
                    </a>
                  </div>

                </div>
              `).join('')}
            </div>

            <!-- Info Callout -->
            <div class="bg-blue-50/80 border-l-4 border-rotary-blue p-5 rounded-r-2xl space-y-2 text-xs text-slate-700 leading-relaxed shadow-2xs">
              <div class="font-bold text-rotary-blue flex items-center space-x-2">
                <svg class="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm font-bold">Cum procedați după completarea documentelor?</span>
              </div>
              <p>
                Documentele completate și semnate pot fi transmise în format electronic scanat direct pe adresa noastră de e-mail <a href="mailto:rotaryclubmosnitanoua@gmail.com" class="font-bold text-rotary-blue hover:underline">rotaryclubmosnitanoua@gmail.com</a> sau predate direct unui reprezentant al clubului. Pentru asistență în completare, detalii fiscale despre sponsorizări sau informații suplimentare, vă rugăm să ne contactați prin <a href="#/contact" class="font-bold text-rotary-blue hover:underline">pagina de Contact</a>.
              </p>
            </div>

          </div>

        </div>
      </section>
    `;
  },

  mount() {
    // PDF files are available in /docs/ and can be viewed or downloaded directly
  }
};
