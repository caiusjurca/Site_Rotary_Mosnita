import { members } from '../data.js';

export const AboutView = {
  render() {
    // Toți cei 6 membri ai Consiliului Director (2026-2027)
    const leaders = members;

    return `
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('/assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div class="inline-flex items-center space-x-2 bg-rotary-gold/20 text-rotary-gold border border-rotary-gold/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span>FONDAT ÎN ANUL 2025</span>
          </div>
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Despre Noi</h1>
          <p class="text-slate-300 text-base max-w-2xl mx-auto font-light leading-relaxed">
            Misiunea, viziunea, direcțiile de acțiune și echipa dedicată din spatele Clubului Rotary Moșnița Nouă.
          </p>
        </div>
      </section>

      <!-- Viziunea și Misiunea Noastră (Inspirat din documentul oficial al clubului) -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Stânga: Istoric & Viziune (7/12) -->
            <div class="lg:col-span-7 space-y-6">
              <div class="space-y-3">
                <div class="flex items-center space-x-2">
                  <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
                  <span class="text-rotary-blue font-bold text-xs uppercase tracking-wider">Fundația Viitorului</span>
                </div>
                <h2 class="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Într-o comunitate de peste 20.000 de locuitori, <span class="text-rotary-blue">fiecare cetățean contează!</span>
                </h2>
              </div>

              <div class="w-16 h-1 bg-rotary-gold rounded-full"></div>

              <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                Fondat în anul <strong>2025</strong> de un grup de profesioniști și lideri cu viziune din comuna Moșnița Nouă, clubul nostru s-a născut din convingerea că fiecare lider și fiecare profesionist are datoria morală de a contribui la structura care ne susține pe toți.
              </p>

              <div class="bg-slate-50 border-l-4 border-rotary-blue p-5 rounded-r-xl space-y-2">
                <h3 class="font-serif text-base font-bold text-rotary-blue">Viziunea Rotary Club Moșnița Nouă</h3>
                <p class="text-slate-700 text-sm leading-relaxed italic">
                  „De aceea, viziunea noastră nu este doar un vis, ci o hartă. Ne propunem ca Moșnița Nouă să devină un etalon de dezvoltare echilibrată, recunoscut pentru calitatea vieții și forța civică. Viziunea noastră este să construim o comunitate auto-susținută, unde Rotarienii acționează ca un pilon de sprijin stabil, aducând laolaltă expertiza profesională și resursele necesare pentru a ridica standardul de viață al fiecărui locuitor. Credem într-o comunitate unde liderii lucrează proactiv, nu reactiv.”
                </p>
              </div>

              <div class="bg-amber-500/5 border-l-4 border-rotary-gold p-5 rounded-r-xl space-y-2">
                <h3 class="font-serif text-base font-bold text-slate-800">Misiunea Noastră: Sprijin, Integritate și Impact Durabil</h3>
                <p class="text-slate-700 text-sm leading-relaxed">
                  Pentru a transforma această viziune în realitate, misiunea noastră se bazează pe principiile fundamentale ale Rotary International, fiind ancorată ferm în nevoile specifice ale comunei noastre: <em>suntem dedicați să oferim sprijin constant și soluții de impact, mobilizând liderii locali pentru a crea schimbări pozitive și sustenabile, respectând motto-ul: <strong>„A servi mai presus de sine”</strong></em>.
                </p>
              </div>
            </div>

            <!-- Dreapta: Imagine & Citat Card (5/12) -->
            <div class="lg:col-span-5 space-y-6">
              <div class="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img src="/assets/story-bg.jpg" alt="Echipa Rotary Moșnița Nouă" class="w-full h-72 object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-3xs font-bold uppercase tracking-wider text-rotary-gold block mb-1">Comunitate & Acțiune</span>
                  <p class="text-sm font-semibold">„Moșnița Nouă merită un sprijin puternic, iar noi suntem acel sprijin.”</p>
                </div>
              </div>

              <!-- Caseta Notă distinctivă -->
              <div class="bg-rotary-dark text-white p-6 rounded-2xl shadow-sm space-y-4">
                <h4 class="font-serif font-bold text-rotary-gold text-base">Rotary nu este doar despre a dona bani!</h4>
                <p class="text-slate-300 text-xs leading-relaxed">
                  Rotary este în primul rând despre a dona <strong>timp, expertiză profesională și angajament personal</strong>. Suntem o mână de sprijin directă oferită comunității noastre, lucrând strâns alături de administrație, școli și cetățeni.
                </p>
                <div class="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button class="open-donate-modal-btn btn-accent px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>Susține prin Donație</span>
                  </button>
                  <a href="#/contact?subject=volunteering" class="px-4 py-2.5 rounded-xl text-xs font-bold border border-white/30 text-white hover:bg-white/10 flex items-center justify-center transition-colors text-center">
                    Devino Voluntar
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- Cele 4 Direcții de Acțiune Clare (Din Documentul Oficial) -->
      <section class="py-16 bg-slate-50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div class="flex justify-center items-center space-x-2">
              <span class="h-1 w-8 bg-rotary-blue rounded-full"></span>
              <span class="text-rotary-blue font-bold text-xs uppercase tracking-wider">Angajament Comunitar</span>
              <span class="h-1 w-8 bg-rotary-blue rounded-full"></span>
            </div>
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Cele 4 Direcții de Acțiune Clare
            </h2>
            <p class="text-slate-600 text-sm">
              Angajamentul nostru pentru viitorul comunei Moșnița Nouă se traduce în 4 piloni strategici bine ancorați în realitatea locală:
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Pilonul 1 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-rotary-blue text-white flex items-center justify-center font-bold text-base shadow-sm">
                  1
                </div>
                <h3 class="font-serif text-lg font-bold text-slate-800">Sprijin pentru Educație și Dezvoltarea Liderilor</h3>
              </div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Vrem să ne asigurăm că viitorul este construit pe competență și încurajăm excelența în mediul școlar.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Finanțăm burse de merit locale pentru elevi merituoși;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Dotăm școlile cu tehnologia necesară procesului modern de învățare;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Susținem programe active de reducere a violenței, prevenire a abandonului școlar și prevenirea consumului de droguri;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Susținem programe de mentorat care conectează elevii și tinerii profesioniști cu liderii de afaceri din comunitate.</span>
                </li>
              </ul>
            </div>

            <!-- Pilonul 2 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-rotary-blue text-white flex items-center justify-center font-bold text-base shadow-sm">
                  2
                </div>
                <h3 class="font-serif text-lg font-bold text-slate-800">Sănătate și Accesibilitate Comunitară</h3>
              </div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Dorim să acordăm sprijin material și logistic unităților medicale locale, îmbunătățind dotările esențiale pentru ca toți cei peste 20.000 de locuitori să aibă acces la servicii de bază de calitate.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Sprijin direct și logistic pentru cabinetele și dispensarele locale;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Campanii ample de informare și prevenție în domeniul educației sanitare și igienei;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Informare cu privire la prevenția bolilor (ex: HPV) și efectele pozitive ale stilului de viață sănătos.</span>
                </li>
              </ul>
            </div>

            <!-- Pilonul 3 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-rotary-blue text-white flex items-center justify-center font-bold text-base shadow-sm">
                  3
                </div>
                <h3 class="font-serif text-lg font-bold text-slate-800">Implicare Civică și Etică</h3>
              </div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Etica nu este doar un accesoriu al implicării civice, ci fundamentul acesteia. Acțiunile civice sunt ghidate de principii etice solide pentru a fi legitime, eficiente și benefice pe termen lung.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span><strong>Transparență și responsabilitate</strong> în gestionarea resurselor;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span><strong>Echitate și incluziune</strong> pentru toți membrii societății;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span><strong>Integritate și onestitate</strong> în fiecare parteneriat și inițiativă.</span>
                </li>
              </ul>
            </div>

            <!-- Pilonul 4 -->
            <div class="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-rotary-blue text-white flex items-center justify-center font-bold text-base shadow-sm">
                  4
                </div>
                <h3 class="font-serif text-lg font-bold text-slate-800">Dezvoltare Economică prin Colaborare</h3>
              </div>
              <p class="text-slate-600 text-xs leading-relaxed">
                Suntem un punct de legătură între micile afaceri locale și rețelele naționale și internaționale Rotary.
              </p>
              <ul class="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Sprijinirea economiei locale nu doar prin donații, ci prin parteneriate strategice;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Generarea de oportunități reale de creștere și stabilitate comunitară;</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">✓</span>
                  <span>Promovarea antreprenoriatului responsabil și a proiectelor eco-sustenabile.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <!-- Testul Celor 4 Întrebări (The Four-Way Test) -->
      <section class="py-16 bg-white relative overflow-hidden">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 class="font-serif text-2xl sm:text-3xl font-bold text-rotary-blue">Ghidul Nostru Etic: Testul Celor Patru Întrebări</h2>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Formulat în 1932 de Herbert J. Taylor, Testul Celor Patru Întrebări este utilizat de rotarienii din întreaga lume ca busolă morală în afaceri, relațiile umane și deciziile civice.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div class="bg-slate-50 p-6 rounded-2xl shadow-2xs border border-slate-100 flex flex-col items-center text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-sm">1</div>
              <h3 class="font-serif font-bold text-slate-900 text-sm">Este adevărul?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Ne asumăm transparența totală, corectitudinea informațiilor și respectul deplin față de realitate în fiecare acțiune.
              </p>
            </div>

            <div class="bg-slate-50 p-6 rounded-2xl shadow-2xs border border-slate-100 flex flex-col items-center text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-sm">2</div>
              <h3 class="font-serif font-bold text-slate-900 text-sm">Este loial tuturor?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Asigurăm o relație echitabilă și loială cu toți partenerii, administrația, donatorii și membrii comunității.
              </p>
            </div>

            <div class="bg-slate-50 p-6 rounded-2xl shadow-2xs border border-slate-100 flex flex-col items-center text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-sm">3</div>
              <h3 class="font-serif font-bold text-slate-900 text-sm">Va întări prietenia?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Promovăm armonia socială, spiritul de camaraderie și crearea unor punți solide de colaborare durabilă.
              </p>
            </div>

            <div class="bg-slate-50 p-6 rounded-2xl shadow-2xs border border-slate-100 flex flex-col items-center text-center space-y-3">
              <div class="w-12 h-12 rounded-full bg-rotary-blue text-white flex items-center justify-center text-lg font-bold font-serif shadow-sm">4</div>
              <h3 class="font-serif font-bold text-slate-900 text-sm">Va fi benefic tuturor?</h3>
              <p class="text-slate-500 text-xs leading-relaxed">
                Ne asigurăm că impactul inițiativelor noastre este pozitiv, incluziv și generează plusvaloare comunitară.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Organigrama de Conducere - Consiliul Director (2026-2027) -->
      <section class="py-16 bg-slate-50 border-t border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div class="flex justify-center items-center space-x-2">
              <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
              <span class="text-rotary-blue font-bold text-xs uppercase tracking-wider">Structura de Conducere</span>
              <span class="h-1 w-10 bg-rotary-blue rounded-full"></span>
            </div>
            <h2 class="font-serif text-3xl font-bold text-rotary-blue">Consiliul Director (2026-2027)</h2>
            <p class="text-slate-600 text-xs sm:text-sm">
              Liderii care coordonează activitatea strategică și proiectele Clubului Rotary Moșnița Nouă pentru anul rotarian curent.
            </p>
          </div>

          <!-- Grid Leadership (6 Membri) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${leaders.map(leader => `
              <div class="bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs hover:shadow-md transition-all group flex flex-col items-center space-y-4">
                
                <!-- Avatar Circular cu gradient, inițiale și bordură decorativă -->
                <div class="relative w-24 h-24 rounded-full bg-gradient-to-tr from-rotary-blue to-rotary-azure flex items-center justify-center text-white text-2xl font-bold shadow-md border-4 border-white group-hover:scale-105 transition-transform duration-300">
                  <span>${leader.name.split(' ').map(n => n[0]).join('')}</span>
                  <div class="absolute inset-0 rounded-full border border-white/20 border-dashed animate-spin-slow"></div>
                </div>

                <div class="space-y-1">
                  <h3 class="font-serif font-bold text-slate-800 text-lg group-hover:text-rotary-blue transition-colors leading-tight">
                    ${leader.name}
                  </h3>
                  <p class="text-rotary-gold text-xs font-bold uppercase tracking-wider">${leader.role}</p>
                </div>

                <div class="w-full border-t border-slate-100 pt-3 text-xs text-slate-500 space-y-1">
                  <div>
                    <span class="font-semibold text-slate-700">Profesie:</span> ${leader.profession}
                  </div>
                  <div>
                    <span class="font-semibold text-slate-700">Membru din:</span> ${leader.joinedDate}
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
    // No dynamic listeners needed for about view
  }
};
