import { members } from '../data.js';

export const AboutView = {
  render() {
    // Luăm primii 6 membri care au roluri din conducere
    const leaders = members.filter(m => m.role.toLowerCase().includes('președinte') || 
                                         m.role.toLowerCase().includes('secretar') || 
                                         m.role.toLowerCase().includes('trezorier') || 
                                         m.role.toLowerCase().includes('consiliul'));

    return `
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('/assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Cine Suntem</h1>
          <p class="text-slate-300 text-base max-w-xl mx-auto font-light">
            Descoperă istoricul, valorile fundamentale și echipa din spatele acțiunilor noastre din Moșnița Nouă.
          </p>
        </div>
      </section>

      <!-- Istoric și Misiune -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Text Istoric -->
            <div class="space-y-6">
              <h2 class="font-serif text-2xl sm:text-3xl font-bold text-rotary-blue">Misiunea și Istoricul Nostru</h2>
              <div class="w-16 h-1 bg-rotary-gold rounded-full"></div>
              <p class="text-slate-600 leading-relaxed">
                Fondat în anul 2024 de un grup de profesioniști inimoși din comuna Moșnița Nouă, clubul nostru s-a născut din dorința de a cataliza resursele locale în proiecte cu impact pe termen lung. Moșnița Nouă este o comunitate într-o creștere demografică accelerată, fapt ce aduce oportunități, dar și provocări semnificative de integrare, infrastructură socială și educație.
              </p>
              <p class="text-slate-600 leading-relaxed">
                Ca parte din familia globală a Rotary International, ne ghidăm activitățile după principii etice înalte și crezul fundamental al prieteniei și colaborării. Împreună cu partenerii noștri comerciali, administrația locală și alți voluntari, muncim zilnic pentru a oferi soluții punctuale și durabile.
              </p>
              <p class="text-slate-600 leading-relaxed font-semibold text-rotary-blue">
                Ne propunem să fim un reper de integritate și o forță pozitivă în Timiș, dovedind că faptele mici pot aduce schimbări uriașe.
              </p>
            </div>

            <!-- Rotary Core Pillars Graphic -->
            <div class="bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm space-y-6">
              <h3 class="font-serif text-xl font-bold text-slate-800">Direcțiile de Intervenție Rotary</h3>
              <p class="text-xs text-slate-500">Misiunea noastră globală se axează pe 7 domenii prioritare de sprijin:</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Promovarea Păcii</h4>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Combaterea Bolilor</h4>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Apă și Igienă</h4>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">4</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Sănătatea Mamei & Copilului</h4>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">5</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Sprijinirea Educației</h4>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">6</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Dezvoltare Locală</h4>
                  </div>
                </div>
                <div class="flex items-start space-x-3 sm:col-span-2">
                  <div class="w-8 h-8 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0 font-bold text-sm">7</div>
                  <div>
                    <h4 class="font-bold text-sm text-slate-800">Protejarea Mediului Înconjurător</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Testul Celor 4 Întrebări (The Four-Way Test) -->
      <section class="py-16 bg-slate-50 relative overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-rotary-blue">Ghidul Nostru Etic: Testul Celor Patru Întrebări</h2>
            <p class="text-slate-600 text-sm">
              Formulat în 1932 de Herbert J. Taylor, Testul Celor Patru Întrebări este utilizat de rotarienii din întreaga lume ca ghid pentru relațiile umane, profesionale și deciziile comunitare.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-md">1</div>
              <h3 class="font-serif font-bold text-slate-900">Este adevărul?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Ne asumăm transparența totală, corectitudinea informațiilor și respectul deplin față de realitate în fiecare acțiune pe care o desfășurăm.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-md">2</div>
              <h3 class="font-serif font-bold text-slate-900">Este loial tuturor?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Asigurăm o relație echitabilă și loială cu toți partenerii noștri, cu autoritățile, cu donatorii și cu membrii comunității vizate de proiecte.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-md">3</div>
              <h3 class="font-serif font-bold text-slate-900">Va întări prietenia?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Promovăm armonia socială, spiritul de camaraderie în rândul comunității și crearea unor punți solide de comunicare interpersonală.
              </p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-md">4</div>
              <h3 class="font-serif font-bold text-slate-900">Va fi benefic tuturor?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Ne asigurăm că impactul acțiunilor noastre este pozitiv, incluziv și aduce plusvaloare tuturor celor implicați direct și indirect.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Organigrama de Conducere (Leadership) -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div class="flex justify-center items-center space-x-2">
              <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
              <span class="text-rotary-blue font-bold text-sm uppercase tracking-wider">Echipa Noastră</span>
              <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
            </div>
            <h2 class="font-serif text-3xl font-bold text-rotary-blue">Consiliul Director (2026-2027)</h2>
            <p class="text-slate-600 text-sm">
              Membrii clubului care coordonează activitatea administrativă și strategică a asociației pentru anul rotarian curent.
            </p>
          </div>

          <!-- Grid Leadership -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${leaders.map(leader => `
              <div class="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center shadow-2xs hover:shadow-md transition-all group flex flex-col items-center space-y-4">
                
                <!-- Avatar Circular Premium cu gradient si initiale -->
                <div class="relative w-24 h-24 rounded-full bg-gradient-to-tr from-rotary-blue to-rotary-azure flex items-center justify-center text-white text-2xl font-bold shadow-md border-4 border-white group-hover:scale-105 transition-transform duration-300">
                  <span>${leader.name.split(' ').pop().charAt(0)}${leader.name.split(' ').filter((_, i, a) => i === a.length - 2 || i === a.length - 1).filter(n => !n.includes('.')).pop()?.charAt(0) || ''}</span>
                  <!-- Decorative wheel outline on avatar -->
                  <div class="absolute inset-0 rounded-full border border-white/20 border-dashed animate-spin-slow"></div>
                </div>

                <div class="space-y-1">
                  <h3 class="font-serif font-bold text-slate-800 text-lg group-hover:text-rotary-blue transition-colors leading-tight">
                    ${leader.name}
                  </h3>
                  <p class="text-rotary-gold text-xs font-bold uppercase tracking-wider">${leader.role}</p>
                </div>

                <div class="w-full border-t border-slate-200 pt-3 text-xs text-slate-500 space-y-1">
                  <div>
                    <span class="font-semibold text-slate-600">Profesie:</span> ${leader.profession}
                  </div>
                  <div>
                    <span class="font-semibold text-slate-600">Membru din:</span> ${leader.joinedDate}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;
  },

  mount() {
    // No interactive listeners needed for about view yet
  }
};
