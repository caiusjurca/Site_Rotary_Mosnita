import { boardMembers, members } from '../data.js';

export const AboutView = {
  render() {
    // Toți cei 6 membri ai Consiliului Director (2026-2027)
    const leaders = boardMembers;
    // Toți cei 21 de membri ai clubului
    const allMembers = members;

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
                <div class="pt-2">
                  <a href="#/contact?subject=volunteering" class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors">
                    <span>Implică-te ca Voluntar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
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

          <!-- Secțiune Elegantă: Tabloul Membrilor Clubului -->
          <div class="mt-20 pt-16 border-t border-slate-200">
            
            <div class="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div class="flex justify-center items-center space-x-2">
                <span class="h-1 w-8 bg-rotary-gold rounded-full"></span>
                <span class="text-rotary-gold font-bold text-xs uppercase tracking-wider">Comunitatea Noastră</span>
                <span class="h-1 w-8 bg-rotary-gold rounded-full"></span>
              </div>
              <h3 class="font-serif text-2xl sm:text-3xl font-bold text-slate-800">
                Membrii Clubului Rotary Moșnița Nouă
              </h3>
              <p class="text-slate-600 text-xs sm:text-sm">
                21 de membri dedicați, uniți de valorile rotariene și dorința de a genera un impact durabil în comunitate.
              </p>
            </div>

            <!-- Bara de Filtrare și Căutare Rapidă -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              
              <!-- Butoane Filtre Rapide -->
              <div class="flex items-center space-x-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                <button 
                  type="button" 
                  data-filter="all" 
                  class="member-filter-btn active px-4 py-2 rounded-xl text-xs font-bold transition-all bg-rotary-blue text-white shadow-xs cursor-pointer"
                >
                  Toți Membrii (21)
                </button>
                <button 
                  type="button" 
                  data-filter="board" 
                  class="member-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Consiliul Director (6)
                </button>
                <button 
                  type="button" 
                  data-filter="general" 
                  class="member-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Membri (15)
                </button>
              </div>

              <!-- Căutare după Nume -->
              <div class="relative w-full sm:w-64">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  id="search-members-input" 
                  placeholder="Caută membru după nume..." 
                  class="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rotary-blue/20 focus:border-rotary-blue"
                />
              </div>

            </div>

            <!-- Grid-ul Elegant cu Membrii Clubului -->
            <div id="members-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              ${allMembers.map(member => {
                const initials = member.name
                  .split(/[\s-]+/)
                  .filter(Boolean)
                  .map(part => part[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 3);
                
                const isBoard = member.isBoard;
                
                return `
                  <div 
                    class="member-card bg-white rounded-xl border border-slate-200/80 p-4 shadow-xs hover:shadow-md hover:border-rotary-blue/30 transition-all duration-200 flex items-center space-x-3.5 group"
                    data-type="${isBoard ? 'board' : 'general'}"
                    data-name="${member.name.toLowerCase()}"
                  >
                    <!-- Avatar Monogramă -->
                    <div class="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs tracking-wider shadow-xs transition-transform group-hover:scale-105 ${
                      isBoard 
                        ? 'bg-gradient-to-tr from-rotary-blue to-rotary-dark text-rotary-gold border-2 border-rotary-gold/30' 
                        : 'bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-rotary-blue group-hover:text-white group-hover:border-rotary-blue'
                    }">
                      ${initials}
                    </div>

                    <!-- Detalii Membru -->
                    <div class="min-w-0 flex-1">
                      <h4 class="font-serif font-bold text-slate-800 text-sm group-hover:text-rotary-blue transition-colors truncate">
                        ${member.name}
                      </h4>
                      
                      <div class="mt-1 flex items-center">
                        ${isBoard ? `
                          <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-3xs font-bold bg-amber-500/10 text-amber-900 border border-amber-500/20">
                            <span class="text-rotary-gold">⭐</span>
                            <span class="truncate">${member.role.split('(')[0].trim()}</span>
                          </span>
                        ` : `
                          <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-3xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
                            <span>Membru</span>
                          </span>
                        `}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Mesaj Căutare Fără Rezultate -->
            <div id="no-members-found" class="hidden text-center py-12 bg-white rounded-2xl border border-slate-200/80 mt-4">
              <svg class="h-8 w-8 text-slate-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-slate-500 text-xs font-semibold">Niciun membru nu corespunde termenului căutat.</p>
            </div>

          </div>

        </div>
      </section>
    `;
  },

  mount() {
    const filterBtns = document.querySelectorAll('.member-filter-btn');
    const searchInput = document.getElementById('search-members-input');
    const memberCards = document.querySelectorAll('.member-card');
    const noResults = document.getElementById('no-members-found');

    let currentFilter = 'all';
    let searchQuery = '';

    function updateList() {
      let visibleCount = 0;
      memberCards.forEach(card => {
        const type = card.getAttribute('data-type');
        const name = card.getAttribute('data-name') || '';

        const matchesFilter = (currentFilter === 'all') ||
                              (currentFilter === 'board' && type === 'board') ||
                              (currentFilter === 'general' && type === 'general');

        const matchesSearch = !searchQuery || name.includes(searchQuery);

        if (matchesFilter && matchesSearch) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (noResults) {
        if (visibleCount === 0) {
          noResults.classList.remove('hidden');
        } else {
          noResults.classList.add('hidden');
        }
      }
    }

    if (filterBtns) {
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => {
            b.classList.remove('active', 'bg-rotary-blue', 'text-white', 'shadow-xs');
            b.classList.add('text-slate-600', 'hover:bg-slate-100');
          });
          btn.classList.add('active', 'bg-rotary-blue', 'text-white', 'shadow-xs');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');

          currentFilter = btn.getAttribute('data-filter') || 'all';
          updateList();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = (e.target.value || '').toLowerCase().trim();
        updateList();
      });
    }
  }
};
