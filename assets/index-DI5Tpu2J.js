(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const g={email:"rotaryclubmosnitanoua@gmail.com",password:"Rotary2026!",name:"Miclea Răzvan",role:"Președinte"},b={login(e,a){return new Promise((o,s)=>{setTimeout(()=>{const t=e.toLowerCase().trim();if((t===g.email.toLowerCase()||t==="membru@rotarymosnita.ro")&&a===g.password){const i={email:g.email,name:g.name,role:g.role,token:"rotary-session-token-abc123xyz",loginTime:new Date().getTime()};localStorage.setItem("rotary_session",JSON.stringify(i)),window.dispatchEvent(new Event("authChange")),o(i)}else s(new Error("E-mail sau parolă incorectă. Vă rugăm să încercați din nou."))},800)})},logout(){localStorage.removeItem("rotary_session"),window.dispatchEvent(new Event("authChange"))},isAuthenticated(){const e=localStorage.getItem("rotary_session");if(!e)return!1;try{const a=JSON.parse(e),o=new Date().getTime(),s=24*60*60*1e3;return o-a.loginTime>s?(this.logout(),!1):!0}catch{return this.logout(),!1}},getCurrentUser(){const e=localStorage.getItem("rotary_session");if(!e)return null;try{return JSON.parse(e)}catch{return null}}},C=[{id:"proiect-1",title:"Dinți frumoși, copii sănătoși",status:"finalizat",date:"Octombrie 2025",description:"Program de educație pentru sănătate orală și prevenție dedicat copiilor din comună. Proiectul a oferit cunoștințe valoroase și a sporit încrederea micuților, contribuind direct la o comunitate mai sănătoasă și mai informată. Activitatea s-a desfășurat ca oră de clasă interactivă la Școala Gimnazială Moșnița Nouă.",image:"./assets/proiect-dinti-sanatosi.jpg",beneficiaries:"Elevii Școlii Gimnaziale Moșnița Nouă",impact:"Formarea unor obiceiuri corecte de igienă dentară și distribuirea de kituri de îngrijire orală."},{id:"proiect-2",title:"Drogurile distrug: fii informat!",status:"finalizat",date:"Noiembrie 2025",description:"Clubul Rotary Moșnița Nouă, în parteneriat cu Școala Gimnazială Moșnița Nouă, IPJ Timiș – Biroul de Analiză și Prevenire a Criminalității și Biroul de Siguranță Școlară, a organizat o activitate esențială de prevenire a consumului de alcool și droguri în rândul elevilor. Copiii au testat ochelari speciali ce simulează efectele consumului, înțelegând practic cum sunt afectate echilibrul, coordonarea și capacitatea de reacție.",image:"./assets/proiect-antidrog.jpg",beneficiaries:"Elevi din clasele gimnaziale",impact:"Conștientizarea profundă a riscurilor asociate consumului de substanțe prin experimentare practică controlată."},{id:"proiect-3",title:"Biblioteca Comunitară",status:"active",date:"Ianuarie 2026 - Prezent",description:"Proiect aflat în derulare ce presupune amplasarea de biblioteci stradale din lemn (căsuțe pentru cărți) în principalele zone de așteptare publice și stații de transport de pe raza comunei Moșnița Nouă. Scopul este de a oferi cetățenilor acces liber la volume diverse bazat pe principiul 'ia o carte, lasă o carte'.",image:"./assets/proiect-biblioteca-comunitara.jpg",beneficiaries:"Toți locuitorii comunei Moșnița Nouă",impact:"Promovarea lecturii în mediul urban/rural local și încurajarea schimbului cultural gratuit."},{id:"proiect-4",title:"Educație sexuală și HPV pentru tineri",status:"finalizat",date:"Martie 2026",description:"Proiect de educație sanitară desfășurat alături de cadre medicale, unde am discutat deschis cu elevii de clasa a VIII-a despre adolescență, igienă corporală, emoții, respect reciproc, consimțământ, limite sănătoase și prevenția infecțiilor cu HPV. Abordarea interactivă și adaptată vârstei a confirmat nevoia acută de informare corectă.",image:"./assets/proiect-educatie-hpv.jpg",beneficiaries:"Elevii claselor a VIII-a din comună",impact:"Prevenție medicală timpurie, clarificarea miturilor din mediul online și promovarea deciziilor responsabile."},{id:"proiect-5",title:"Siguranță pe 2 roți: Responsabilitate și prevenție",status:"finalizat",date:"04 Iunie 2026",description:"Clubul Rotary Moșnița Nouă, în parteneriat cu Inspectoratul de Poliție Județean Timiș - Serviciul Rutier, a adus în mijlocul a peste 100 de elevi proiectul de suflet dedicat conștientizării regulilor de circulație și siguranței în trafic. Activitatea a inclus lecții interactive de siguranță rutieră pentru bicicliști și utilizatorii de trotinete.",image:"./assets/proiect-siguranta-roti.jpg",beneficiaries:"Peste 100 de elevi de la Școala Gimnazială",impact:"Reducerea riscurilor de accidente în rândul tinerilor participanți la trafic pe două roți."},{id:"proiect-6",title:"ECO HUB: Inovație prin natură, viitor prin comunitate",status:"active",date:"Mai 2026 - Prezent",description:"Proiect pe termen lung în derulare, care vizează amenajarea unui nou parc public ecologic în satul Urseni, realizat în strânsă colaborare cu Primăria Moșnița Nouă. Va funcționa ca un hub verde pentru activități de educație de mediu, recreere și coeziune comunitară.",image:"./assets/proiect-parc.jpg",beneficiaries:"Locuitorii satului Urseni și ai comunei învecinate",impact:"Extinderea infrastructurii verzi, conservarea biodiversității locale și crearea unui spațiu comunitar activ."},{id:"proiect-7",title:"Balul Rotary Anual",status:"finalizat",date:"Martie 2026",description:"Primul Bal de Caritate organizat de Clubul Rotary Moșnița Nouă a fost un succes remarcabil, bucurându-se de prezența unor invitați de seamă și generoși, alături de prieteni rotarieni din alte cluburi. Evenimentul a avut ca scop strângerea de fonduri pentru proiectele noastre comunitare și alte inițiative civice esențiale.",image:"./assets/story-bg.jpg",beneficiaries:"Comunitatea din Moșnița Nouă și beneficiarii proiectelor noastre",impact:"Atragerea de fonduri esențiale pentru proiecte comunitare și consolidarea legăturilor de prietenie și colaborare între cluburi Rotary."}],E=[{id:"pub-1",title:"Contract de Sponsorizare",type:"PDF / Editabil",size:"3.9 MB",date:"An Rotarian 2026-2027",fileUrl:"./docs/Contract_de_sponsorizare.pdf",description:"Modelul oficial de contract de sponsorizare pentru societăți comerciale și persoane juridice care doresc să susțină proiectele noastre comunitare (educație, sănătate, prevenție și mediu)."},{id:"pub-2",title:"ECO HUB - Contract de Donație",type:"PDF / Editabil",size:"1.5 MB",date:"An Rotarian 2026-2027",fileUrl:"./docs/ECO_HUB_contract_de_donatie.pdf",description:"Contractul de donație dedicat proiectului emblematic ECO HUB din satul Urseni. Oferă cadru juridic transparent pentru contribuția la amenajarea noului parc public ecologic."},{id:"pub-3",title:"Cererea D230 (Redirecționare 3,5% Impozit)",type:"PDF / Formular ANAF",size:"140 KB",date:"An Fiscal Curent",fileUrl:"./docs/D230_v109_09012025.pdf",description:"Formularul 230 oficial pentru redirecționarea a 3,5% din impozitul pe venit către Asociația Rotary Club Moșnița Nouă. Procedură complet gratuită pentru salariați și pensionari."}],R=[{id:"priv-1",title:"Proces Verbal - Adunarea Generală din Iunie 2026",type:"PDF",size:"820 KB",date:"15 Iunie 2026",fileUrl:"./docs/proces_verbal_iunie_2026.pdf",description:"Procesul verbal complet în care s-au discutat alegerile noului comitet, bugetul pentru proiectul Parcul Prieteniei și primirea de noi membri."},{id:"priv-2",title:"Plan Strategic de Dezvoltare a Clubului (2026 - 2029)",type:"PDF",size:"2.1 MB",date:"Mai 2026",fileUrl:"./docs/plan_strategic_2026_2029.pdf",description:"Strategia internă pe 3 ani privind atragerea de fonduri, extinderea numărului de membri și axele prioritare de intervenție comunitară."},{id:"priv-3",title:"Raport Financiar Detaliat Q1 - An Rotarian 2026-2027",type:"PDF",size:"1.4 MB",date:"05 Iulie 2026",fileUrl:"./docs/raport_financiar_q1_2026_2027.pdf",description:"Execuția bugetară detaliată, soldul conturilor asociației, stadiul încasării cotizațiilor și detalii plăți furnizori pentru proiectele active."}],m=[{id:"membru-balta-relu",name:"Baltă Relu",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-barbu-carmen",name:"Barbu Carmen",role:"Trezorier",isBoard:!0,profession:"Contabil",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-boc-florin",name:"Boc Florin",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-butean-alexandra",name:"Butean Alexandra",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-cocosila-cristian",name:"Cocoșilă Cristian",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-doia-ioan",name:"Doia Ioan",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-farcas-paul",name:"Fărcaș Paul",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-herac-gheorghe",name:"Herac Gheorghe",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-izgirean-culcea-alina",name:"Izgirean-Culcea Alina",role:"Past-President (Fost Președinte)",isBoard:!0,profession:"Inginer",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-jianu-cristian",name:"Jianu Cristian",role:"Secretar",isBoard:!0,profession:"Inginer",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-jurca-ovidiu-caius",name:"Jurca Ovidiu Caius",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-maciuca-mihaela",name:"Măciucă Mihaela",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-miclea-razvan",name:"Miclea Răzvan",role:"Președinte (2026-2027)",isBoard:!0,profession:"Inginer",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-milin-iulia",name:"Milin Iulia",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-murasan-simona",name:"Murășan Simona",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-nemesan-dinu",name:"Nemeșan Dinu",role:"Cenzor",isBoard:!0,profession:"Economist",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-sinatovici-claudia",name:"Sinatovici Claudia",role:"Vicepreședinte",isBoard:!0,profession:"Jurnalist",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-suteu-debora",name:"Șuteu Debora",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-todie-nicoleta",name:"Todie Nicoleta",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-tulbure-radu",name:"Tulbure Radu",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"},{id:"membru-vilcea-marian",name:"Vîlcea Marian",role:"Membru",isBoard:!1,profession:"Membru Rotarian",email:"rotaryclubmosnitanoua@gmail.com",phone:"+40 746 080 065",status:"Activ (Cotizație la zi)",joinedDate:"2025"}];m.find(e=>e.name==="Miclea Răzvan"),m.find(e=>e.name==="Izgirean-Culcea Alina"),m.find(e=>e.name==="Sinatovici Claudia"),m.find(e=>e.name==="Jianu Cristian"),m.find(e=>e.name==="Barbu Carmen"),m.find(e=>e.name==="Nemeșan Dinu");const j=[{id:"ann-1",title:"Următoarea Ședință Săptămânală - Planificare Proiect Parc",date:"14 Iulie 2026, 19:30",location:"Sediul Clubului / Restaurant Flonta Moșnița",content:"Ordinea de zi va include stabilirea programului final pentru plantarea arbuștilor din Parcul Prieteniei și stabilirea listei de invitați pentru Gala de Toamnă. Prezența este puternic recomandată.",type:"sedinta"},{id:"ann-2",title:"Termen Limită Plată Cotizație Semestrul II",date:"Până la 31 Iulie 2026",location:"Online / Contul Bancar al Clubului",content:"Dragi colegi, vă reamintim că data limită pentru achitarea cotizației pentru al doilea semestru al anului rotarian în curs este 31 iulie. Vă rugăm să trimiteți confirmarea de plată către trezorier (Carmen Barbu).",type:"important"},{id:"ann-3",title:"Gala Anuală de Caritate Rotary Moșnița Nouă",date:"12 Octombrie 2026, 18:00",location:"Salonul de Evenimente Flonta",content:"Pregătirile pentru Gală au început. Scopul evenimentului din acest an va fi strângerea de fonduri pentru dublarea burselor de excelență pentru tinerii din comunitatea noastră. Biletele vor fi disponibile începând cu luna viitoare.",type:"eveniment"}],L={render(){return`
      <!-- Hero Section -->
      <section class="relative bg-rotary-dark text-white overflow-hidden min-h-[85vh] flex items-center">
        <!-- Background Decorative Elements -->
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" style="background-image: url('./assets/hero-bg.jpg');"></div>
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
              <img src="./assets/story-bg.jpg" alt="Rotary Club Moșnița Nouă în acțiune" class="rounded-2xl shadow-xl w-full object-cover aspect-video" />
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
            ${C.slice(0,3).map(a=>`
              <div class="bg-slate-50 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col group">
                <div class="relative h-48 overflow-hidden">
                  <img src="${a.image}" alt="${a.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span class="absolute top-4 right-4 text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${a.status==="active"?"bg-emerald-500 text-white":"bg-slate-700 text-white"}">
                    ${a.status==="active"?"În Derulare":"Finalizat"}
                  </span>
                </div>
                <div class="p-6 flex-grow flex flex-col justify-between">
                  <div class="space-y-3">
                    <span class="text-xs text-slate-400 font-semibold block">${a.date}</span>
                    <h3 class="font-serif font-bold text-slate-900 text-lg group-hover:text-rotary-blue transition-colors leading-tight">
                      ${a.title}
                    </h3>
                    <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                      ${a.description}
                    </p>
                  </div>
                  <div class="border-t border-slate-200 mt-6 pt-4 text-xs text-slate-500">
                    <span class="font-bold text-slate-700">Beneficiari:</span> ${a.beneficiaries}
                  </div>
                </div>
              </div>
            `).join("")}
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
    `},mount(){const e=document.getElementById("home-volunteer-btn");e&&(e.onclick=()=>{window.location.hash="#/contact?subject=Vol voluntariat"})}},A={render(){return`
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('./assets/hero-bg.jpg');"></div>
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
                <img src="./assets/story-bg.jpg" alt="Echipa Rotary Moșnița Nouă" class="w-full h-72 object-cover" />
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

      <!-- Tabloul Membrilor Clubului -->
      <section class="py-16 bg-slate-50 border-t border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div class="flex justify-center items-center space-x-2">
              <span class="h-1 w-8 bg-rotary-gold rounded-full"></span>
              <span class="text-rotary-gold font-bold text-xs uppercase tracking-wider">Comunitatea Noastră</span>
              <span class="h-1 w-8 bg-rotary-gold rounded-full"></span>
            </div>
            <h2 class="font-serif text-3xl font-bold text-slate-800">
              Membrii Clubului Rotary Moșnița Nouă
            </h2>
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
              ${m.map(a=>{const o=a.name.split(/[\s-]+/).filter(Boolean).map(t=>t[0]).join("").toUpperCase().slice(0,3),s=a.isBoard;return`
                  <div 
                    class="member-card bg-white rounded-xl border border-slate-200/80 p-4 shadow-xs hover:shadow-md hover:border-rotary-blue/30 transition-all duration-200 flex items-center space-x-3.5 group"
                    data-type="${s?"board":"general"}"
                    data-name="${a.name.toLowerCase()}"
                  >
                    <!-- Avatar Monogramă -->
                    <div class="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs tracking-wider shadow-xs transition-transform group-hover:scale-105 ${s?"bg-gradient-to-tr from-rotary-blue to-rotary-dark text-rotary-gold border-2 border-rotary-gold/30":"bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-rotary-blue group-hover:text-white group-hover:border-rotary-blue"}">
                      ${o}
                    </div>

                    <!-- Detalii Membru -->
                    <div class="min-w-0 flex-1">
                      <h4 class="font-serif font-bold text-slate-800 text-sm group-hover:text-rotary-blue transition-colors truncate">
                        ${a.name}
                      </h4>
                      
                      <div class="mt-1 flex items-center">
                        ${s?`
                          <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-3xs font-bold bg-amber-500/10 text-amber-900 border border-amber-500/20">
                            <span class="text-rotary-gold">⭐</span>
                            <span class="truncate">${a.role.split("(")[0].trim()}</span>
                          </span>
                        `:`
                          <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md text-3xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
                            <span>Membru</span>
                          </span>
                        `}
                      </div>
                    </div>
                  </div>
                `}).join("")}
            </div>

            <!-- Mesaj Căutare Fără Rezultate -->
            <div id="no-members-found" class="hidden text-center py-12 bg-white rounded-2xl border border-slate-200/80 mt-4">
              <svg class="h-8 w-8 text-slate-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-slate-500 text-xs font-semibold">Niciun membru nu corespunde termenului căutat.</p>
            </div>

        </div>
      </section>
    `},mount(){const e=document.querySelectorAll(".member-filter-btn"),a=document.getElementById("search-members-input"),o=document.querySelectorAll(".member-card"),s=document.getElementById("no-members-found");let t="all",i="";function r(){let l=0;o.forEach(n=>{const c=n.getAttribute("data-type"),d=n.getAttribute("data-name")||"",u=t==="all"||t==="board"&&c==="board"||t==="general"&&c==="general",p=!i||d.includes(i);u&&p?(n.classList.remove("hidden"),l++):n.classList.add("hidden")}),s&&(l===0?s.classList.remove("hidden"):s.classList.add("hidden"))}e&&e.forEach(l=>{l.addEventListener("click",()=>{e.forEach(n=>{n.classList.remove("active","bg-rotary-blue","text-white","shadow-xs"),n.classList.add("text-slate-600","hover:bg-slate-100")}),l.classList.add("active","bg-rotary-blue","text-white","shadow-xs"),l.classList.remove("text-slate-600","hover:bg-slate-100"),t=l.getAttribute("data-filter")||"all",r()})}),a&&a.addEventListener("input",l=>{i=(l.target.value||"").toLowerCase().trim(),r()})}},S={render(){return`
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('./assets/hero-bg.jpg');"></div>
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
            ${C.map(e=>`
              <div data-status="${e.status}" class="project-card bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-100 flex flex-col md:flex-row group hover:shadow-md transition-all duration-300">
                
                <!-- Imagine Proiect -->
                <div class="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden">
                  <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  <span class="absolute top-4 left-4 text-2xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${e.status==="active"?"bg-emerald-100 text-emerald-800 border border-emerald-200":"bg-slate-200 text-slate-700 border border-slate-300"}">
                    ${e.status==="active"?"În Derulare":"Finalizat"}
                  </span>
                </div>

                <!-- Detalii Proiect -->
                <div class="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-semibold text-slate-400">${e.date}</span>
                    </div>
                    <h3 class="font-serif font-bold text-slate-900 text-xl leading-tight group-hover:text-rotary-blue transition-colors">
                      ${e.title}
                    </h3>
                    <p class="text-slate-600 text-xs leading-relaxed">
                      ${e.description}
                    </p>
                  </div>

                  <!-- Date Impact -->
                  <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-2xs">
                    <div>
                      <span class="font-bold text-slate-700">Beneficiari:</span> 
                      <span class="text-slate-600">${e.beneficiaries}</span>
                    </div>
                    <div>
                      <span class="font-bold text-slate-700">Impact măsurat:</span> 
                      <span class="text-slate-600 italic">"${e.impact}"</span>
                    </div>
                  </div>

                  <div class="pt-2 flex items-center justify-end">
                    <button class="project-details-btn text-xs font-bold text-rotary-blue hover:text-rotary-gold transition-colors flex items-center space-x-1 cursor-pointer" data-id="${e.id}">
                      <span>Citește detalii</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            `).join("")}
          </div>

        </div>
      </section>

      <!-- Project Details Modal (Interactive Feature) -->
      <div id="project-modal" class="fixed inset-0 z-50 overflow-y-auto hidden flex items-center justify-center p-3 sm:p-4 md:p-6">
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="project-modal-overlay"></div>
        
        <div class="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden relative z-10 border border-slate-100 transform scale-95 transition-transform duration-300 max-h-[92vh] flex flex-col my-auto">
          <!-- Modal Header Image -->
          <div class="relative h-44 sm:h-56 md:h-64 flex-shrink-0 bg-slate-900">
            <img id="modal-project-img" src="" alt="Imagine Proiect" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
            <button id="project-modal-close" class="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-rotary-gold bg-black/50 hover:bg-black/80 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold focus:outline-none transition-colors cursor-pointer z-20" title="Închide">&times;</button>
            
            <div class="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-1 sm:space-y-1.5">
              <span id="modal-project-status" class="inline-block text-3xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"></span>
              <h3 id="modal-project-title" class="font-serif text-base sm:text-xl md:text-2xl font-bold leading-snug"></h3>
            </div>
          </div>
          
          <!-- Modal Scrollable Content -->
          <div class="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 flex-grow overflow-y-auto overscroll-contain">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-slate-100 pb-4">
              <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span class="text-3xs font-bold text-slate-400 uppercase block mb-0.5">Data Acțiunii</span>
                <span id="modal-project-date" class="text-xs font-semibold text-slate-800"></span>
              </div>
              <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <span class="text-3xs font-bold text-slate-400 uppercase block mb-0.5">Beneficiari</span>
                <span id="modal-project-beneficiaries" class="text-xs font-semibold text-slate-800"></span>
              </div>
            </div>

            <div class="space-y-4">
              <div>
                <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center space-x-1.5">
                  <svg class="h-4 w-4 text-rotary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Descriere Proiect</span>
                </h4>
                <p id="modal-project-desc" class="text-slate-600 text-xs sm:text-sm leading-relaxed"></p>
              </div>
              
              <div class="bg-rotary-blue/5 border border-rotary-blue/10 rounded-xl p-3.5 sm:p-4">
                <h4 class="text-xs font-bold text-rotary-blue uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                  <svg class="h-4 w-4 text-rotary-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Impact Comunitar Măsurat</span>
                </h4>
                <p id="modal-project-impact" class="text-slate-700 text-xs sm:text-sm italic leading-relaxed"></p>
              </div>
            </div>
          </div>

          <!-- Pinned Modal Footer -->
          <div class="p-4 sm:p-5 border-t border-slate-100 flex items-center justify-end bg-slate-50/80 flex-shrink-0">
            <button id="project-modal-ok" class="btn-primary px-6 py-2.5 rounded-lg font-bold text-xs cursor-pointer shadow-xs hover:shadow-md">Închide</button>
          </div>
        </div>
      </div>
    `},mount(){const e=document.querySelectorAll(".filter-btn"),a=document.querySelectorAll(".project-card");e.forEach(c=>{c.onclick=()=>{e.forEach(u=>{u.className="filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-white text-slate-700 hover:bg-slate-100"}),c.className="filter-btn px-6 py-2.5 rounded-full text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer bg-rotary-blue text-white";const d=c.getAttribute("data-filter");a.forEach(u=>{const p=u.getAttribute("data-status");d==="all"||p===d?(u.classList.remove("hidden"),u.style.opacity="0",setTimeout(()=>{u.style.opacity="1",u.style.transition="opacity 0.3s ease-in-out"},50)):u.classList.add("hidden")})}});const o=document.getElementById("project-modal"),s=document.getElementById("project-modal-overlay"),t=document.getElementById("project-modal-close"),i=document.getElementById("project-modal-ok"),r=document.querySelectorAll(".project-details-btn"),l=c=>{const d=C.find(f=>f.id===c);if(!d)return;document.getElementById("modal-project-img").src=d.image,document.getElementById("modal-project-img").alt=d.title,document.getElementById("modal-project-title").innerText=d.title,document.getElementById("modal-project-date").innerText=d.date,document.getElementById("modal-project-beneficiaries").innerText=d.beneficiaries,document.getElementById("modal-project-desc").innerText=d.description,document.getElementById("modal-project-impact").innerText=d.impact;const u=document.getElementById("modal-project-status");u.innerText=d.status==="active"?"În Derulare":"Finalizat",u.className=`text-3xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${d.status==="active"?"bg-emerald-500/90 text-white":"bg-slate-500/90 text-white"}`,o.classList.remove("hidden"),document.body.style.overflow="hidden",document.body.classList.add("overflow-hidden");const p=o.querySelector(".overflow-y-auto");p&&(p.scrollTop=0),o.querySelector(".transform").classList.remove("scale-95"),o.querySelector(".transform").classList.add("scale-100")},n=()=>{document.body.style.overflow="",document.body.classList.remove("overflow-hidden"),o.querySelector(".transform").classList.remove("scale-100"),o.querySelector(".transform").classList.add("scale-95"),setTimeout(()=>{o.classList.add("hidden")},100)};r.forEach(c=>{c.onclick=()=>l(c.getAttribute("data-id"))}),s&&(s.onclick=n),t&&(t.onclick=n),i&&(i.onclick=n),o.onclick=c=>{(c.target===o||c.target===s)&&n()},document.addEventListener("keydown",c=>{c.key==="Escape"&&!o.classList.contains("hidden")&&n()})}},T={render(){return`
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
              ${E.map(e=>`
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
                      <h3 class="font-serif font-bold text-slate-800 text-sm sm:text-base leading-snug">${e.title}</h3>
                      <p class="text-slate-600 text-xs leading-relaxed">${e.description}</p>
                    </div>
                  </div>

                  <!-- Action Buttons: Vizualizează & Descarcă -->
                  <div class="flex items-center space-x-2 flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <a 
                      href="${e.fileUrl}" 
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
                      href="${e.fileUrl}" 
                      download="${e.fileUrl.split("/").pop()}"
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
              `).join("")}
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
    `},mount(){}},P={render(){return`
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('./assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">Contactați-ne</h1>
          <p class="text-slate-300 text-base max-w-xl mx-auto font-light">
            Suntem aici pentru a răspunde întrebărilor tale. Trimite-ne un mesaj sau folosește detaliile noastre de contact.
          </p>
        </div>
      </section>

      <!-- Secțiune Formular și Hartă -->
      <section class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <!-- Coloana Formular (7/12) -->
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs lg:col-span-7 space-y-6">
              <div class="border-b border-slate-100 pb-5">
                <h2 class="font-serif text-xl font-bold text-slate-800">Trimite un Mesaj Direct</h2>
                <p class="text-xs text-slate-500 mt-1">Te vom contacta în maximum 48 de ore lucrătoare.</p>
              </div>

              <!-- Contact Form -->
              <form id="contact-form" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label for="name" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">Nume Complet</label>
                    <input type="text" id="name" required placeholder="Popescu Ionel" class="form-input text-sm" />
                  </div>
                  <div class="space-y-1">
                    <label for="email" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">Adresă E-mail</label>
                    <input type="email" id="email" required placeholder="ionel@example.com" class="form-input text-sm" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label for="phone" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">Număr Telefon (opțional)</label>
                    <input type="tel" id="phone" placeholder="+40 722 000 000" class="form-input text-sm" />
                  </div>
                  <div class="space-y-1">
                    <label for="subject" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">Subiect Mesaj</label>
                    <select id="subject" class="form-input text-sm">
                      <option value="general">Informații Generale</option>
                      <option value="volunteering">Voluntariat / Implicare</option>
                      <option value="donations">Donații / Sponsorizări</option>
                      <option value="proposals">Propunere Proiect / Parteneriat</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-1">
                  <label for="message" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">Mesaj</label>
                  <textarea id="message" required rows="5" placeholder="Scrie detalii despre solicitarea ta..." class="form-input text-sm"></textarea>
                </div>

                <!-- Feedback States (Error / Success alerts) -->
                <div id="form-feedback" class="hidden rounded-lg p-4 text-xs font-semibold"></div>

                <div class="pt-2">
                  <button type="submit" id="submit-btn" class="w-full btn-primary py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer">
                    <span id="btn-text">Trimite Mesajul</span>
                    <!-- Loading Spinner (Hidden by default) -->
                    <svg id="btn-spinner" class="animate-spin h-4 w-4 text-white hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </button>
                </div>
              </form>

            </div>

            <!-- Coloana Informații și Hartă (5/12) -->
            <div class="space-y-8 lg:col-span-5">
              
              <!-- Caseta Detalii de Legatura -->
              <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-6">
                <h3 class="font-serif text-lg font-bold text-slate-800">Date de Legătură</h3>
                
                <div class="space-y-4">
                  <div class="flex items-start space-x-3.5">
                    <div class="w-9 h-9 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-3xs font-bold text-slate-400 uppercase block leading-none">Sediu Asociație</span>
                      <span class="text-xs text-slate-700 font-semibold block mt-1">Moșnița Veche, Strada Bisericii, nr. 45, 307287, Timiș</span>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3.5">
                    <div class="w-9 h-9 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-3xs font-bold text-slate-400 uppercase block leading-none">Adresă E-mail</span>
                      <a href="mailto:rotaryclubmosnitanoua@gmail.com" class="text-xs text-rotary-blue font-bold hover:underline block mt-1">rotaryclubmosnitanoua@gmail.com</a>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3.5">
                    <div class="w-9 h-9 rounded-full bg-rotary-blue/10 flex items-center justify-center text-rotary-blue flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span class="text-3xs font-bold text-slate-400 uppercase block leading-none">Telefon</span>
                      <a href="tel:+40746080065" class="text-xs text-slate-700 font-semibold hover:text-rotary-blue block mt-1">+40 746 080 065</a>
                    </div>
                  </div>

                  <!-- Facebook Social Contact -->
                  <div class="flex items-start space-x-3.5">
                    <div class="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#1877F2] flex-shrink-0">
                      <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <span class="text-3xs font-bold text-slate-400 uppercase block leading-none">Pagină Facebook</span>
                      <a href="https://www.facebook.com/profile.php?id=61583636502555" target="_blank" rel="noopener noreferrer" class="text-xs text-rotary-blue font-bold hover:underline block mt-1 flex items-center space-x-1">
                        <span>Rotary Club Moșnița Nouă</span>
                        <svg class="w-3.5 h-3.5 ml-1 text-slate-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Caseta Hartă Google Maps cu Pin și Redirect -->
              <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="font-serif text-sm font-bold text-slate-800">Locație Sediu pe Hartă</h4>
                  <span class="text-3xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">Google Maps</span>
                </div>

                <!-- Google Maps Iframe Embed with accurate pin at Strada Bisericii 45, Moșnița Veche -->
                <div class="w-full h-64 rounded-xl overflow-hidden shadow-inner border border-slate-200">
                  <iframe 
                    title="Harta Sediu Rotary Club Moșnița Nouă"
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    loading="lazy" 
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Strada+Bisericii+45,+Mosnita+Veche,+Timis&t=&z=15&ie=UTF8&iwloc=&output=embed">
                  </iframe>
                </div>

                <div class="text-3xs text-slate-500 text-center">
                  Moșnița Veche, Strada Bisericii, nr. 45, jud. Timiș
                </div>

                <!-- Direct Google Maps Redirect Action Button -->
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Strada+Bisericii+45,+Mosnita+Veche,+Timis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-primary w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-xs cursor-pointer hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-rotary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Deschide în Google Maps / Navigare</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    `},mount(){const a=(window.location.hash||"").split("?");if(a.length>1){const d=new URLSearchParams(a[1]).get("subject");if(d&&d.includes("vol")){const u=document.getElementById("subject");u&&(u.value="volunteering")}}const o=document.getElementById("contact-form"),s=document.getElementById("form-feedback"),t=document.getElementById("submit-btn"),i=document.getElementById("btn-text"),r=document.getElementById("btn-spinner");o&&(o.onsubmit=c=>{c.preventDefault(),t.disabled=!0,i.innerText="Se procesează...",r.classList.remove("hidden"),s.className="hidden";const d=document.getElementById("name").value.trim(),u=document.getElementById("email").value.trim(),p=document.getElementById("phone")?document.getElementById("phone").value.trim():"",f=document.getElementById("subject"),y=f?f.value:"general",x=document.getElementById("message").value.trim();if(!d||!u||!x){l("Vă rugăm să completați toate câmpurile obligatorii (Nume, E-mail, Mesaj).","bg-red-50 text-red-700 border border-red-200"),n();return}const k={general:"Informații Generale",volunteering:"Voluntariat / Implicare",donations:"Donații / Sponsorizări",proposals:"Propunere Proiect / Parteneriat"}[y]||"Mesaj de Contact",v=`[Contact Rotary Moșnița] ${k} - ${d}`,M=`Nume complet: ${d}
Adresă e-mail: ${u}
Telefon: ${p||"Nespecificat"}
Subiect solicitare: ${k}

--------------------------------------------------
Mesaj:
${x}
--------------------------------------------------`,z=`mailto:rotaryclubmosnitanoua@gmail.com?subject=${encodeURIComponent(v)}&body=${encodeURIComponent(M)}`,I=`https://mail.google.com/mail/?view=cm&fs=1&to=rotaryclubmosnitanoua@gmail.com&su=${encodeURIComponent(v)}&body=${encodeURIComponent(M)}`;window.location.href=z,setTimeout(()=>{l(`
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-emerald-800 font-bold">
                <svg class="h-5 w-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Aplicația de e-mail a fost lansată cu datele precompletate!</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Verificați fereastra de e-mail deschisă și apăsați butonul <strong>„Send / Trimite”</strong> pentru a ne transmite mesajul. Dacă aplicația nu s-a deschis automat, alegeți o opțiune de mai jos:
              </p>
              <div class="flex flex-wrap gap-2 pt-1">
                <a href="${z}" class="px-3.5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors inline-flex items-center space-x-1.5 shadow-xs">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span>Reîncearcă deschiderea aplicației de e-mail</span>
                </a>
                <a href="${I}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors inline-flex items-center space-x-1.5 shadow-xs">
                  <svg class="h-3.5 w-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                  <span>Deschide direct în Gmail Web</span>
                </a>
              </div>
            </div>
          `,"bg-emerald-50 text-emerald-950 border border-emerald-200"),n()},500)});function l(c,d){s&&(s.innerHTML=c,s.className=`p-4 text-xs font-semibold rounded-xl ${d}`)}function n(){t&&(t.disabled=!1,i.innerText="Trimite Mesajul",r.classList.add("hidden"))}}},N={render(){return`
      <section class="flex-grow flex items-center justify-center py-20 px-4 bg-slate-50 relative overflow-hidden">
        
        <!-- Decorative Background Gradients -->
        <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-rotary-blue/5 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-rotary-gold/5 blur-3xl pointer-events-none"></div>

        <div class="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-300">
          
          <!-- Blue Top Header -->
          <div class="bg-rotary-dark p-8 text-center text-white relative">
            
            <!-- Official Rotary Logo in Login Header -->
            <div class="mx-auto mb-5 bg-white/95 p-3 rounded-2xl max-w-[280px] flex items-center justify-center shadow-md">
              <img src="./assets/logo-rotary-official.png" alt="Rotary Club Moșnița Nouă" class="h-12 w-auto object-contain" />
            </div>
            
            <h1 class="font-serif text-2xl font-bold">Portal Membri</h1>
            <p class="text-xs text-slate-300 mt-1">Conectează-te pentru a accesa zona privată a clubului</p>
          </div>

          <!-- Form Body -->
          <div class="p-8 space-y-6">
            
            <!-- Credentials Test Helper Callout -->
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-2xs text-slate-600 space-y-1">
              <div class="font-bold text-rotary-blue uppercase">Credențiale Demonstrație:</div>
              <div><span class="font-bold text-slate-700">E-mail:</span> <code class="bg-blue-100/80 px-1 py-0.5 rounded font-mono select-all">rotaryclubmosnitanoua@gmail.com</code></div>
              <div><span class="font-bold text-slate-700">Parolă:</span> <code class="bg-blue-100/80 px-1 py-0.5 rounded font-mono select-all">Rotary2026!</code></div>
            </div>

            <!-- Error Banner -->
            <div id="login-error" class="hidden bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-xs font-semibold"></div>

            <form id="login-form" class="space-y-5">
              
              <div class="space-y-1.5">
                <label for="login-email" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">E-mail membru</label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                  <input type="email" id="login-email" required placeholder="nume@rotarymosnita.ro" class="form-input pl-10 text-sm" />
                </div>
              </div>

              <div class="space-y-1.5">
                <div class="flex justify-between items-center">
                  <label for="login-password" class="text-2xs font-bold text-slate-500 uppercase tracking-wider">Parolă</label>
                  <a href="#/contact?subject=Recuperare parola" class="text-3xs text-rotary-blue hover:underline">Ai uitat parola?</a>
                </div>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input type="password" id="login-password" required placeholder="••••••••" class="form-input pl-10 text-sm" />
                </div>
              </div>

              <button type="submit" id="login-submit-btn" class="w-full btn-primary py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer">
                <span id="login-btn-text">Autentificare</span>
                <svg id="login-btn-spinner" class="animate-spin h-4 w-4 text-white hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>

            </form>
          </div>
          
        </div>
      </section>
    `},mount(){const e=document.getElementById("login-form"),a=document.getElementById("login-error"),o=document.getElementById("login-submit-btn"),s=document.getElementById("login-btn-text"),t=document.getElementById("login-btn-spinner");e&&(e.onsubmit=i=>{i.preventDefault(),o.disabled=!0,s.innerText="Se verifică...",t.classList.remove("hidden"),a.classList.add("hidden");const r=document.getElementById("login-email").value,l=document.getElementById("login-password").value;b.login(r,l).then(()=>{window.location.hash="#/dashboard"}).catch(n=>{a.innerText=n.message,a.classList.remove("hidden"),o.disabled=!1,s.innerText="Autentificare",t.classList.add("hidden")})})}},$={render(){const e=b.getCurrentUser(),a=m.length,o=2,s=j.filter(t=>t.type==="sedinta").length;return`
      <!-- Header Dashboard -->
      <section class="bg-rotary-dark text-white py-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10" style="background-image: url('./assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div class="space-y-2">
            <span class="inline-flex items-center space-x-1 bg-amber-500/20 text-rotary-gold border border-amber-500/30 px-3 py-1 rounded-full text-3xs font-bold uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-rotary-gold animate-pulse mr-1"></span>
              Zonă Securizată Membri
            </span>
            <h1 class="font-serif text-3xl font-bold">Panou de Control Intern</h1>
            <p class="text-xs text-slate-300">Bun venit, <span class="font-bold text-white">${(e==null?void 0:e.name)||"Membru"}</span> (Funcție: ${(e==null?void 0:e.role)||"Membru"})</p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-md border border-white/15 px-5 py-3.5 rounded-xl flex items-center space-x-4">
            <div class="text-right">
              <span class="text-3xs text-slate-400 block uppercase">Următoarea Ședință</span>
              <span class="text-xs font-bold text-rotary-gold block">Luni, 14 Iulie @ 19:30</span>
            </div>
            <span class="h-8 w-px bg-white/20"></span>
            <div class="w-8 h-8 rounded-full bg-rotary-gold/20 flex items-center justify-center text-rotary-gold text-xs font-bold">
              🗓
            </div>
          </div>
        </div>
      </section>

      <!-- Main Dashboard Grid -->
      <section class="py-12 bg-slate-100 flex-grow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Column: Sidebar & Quick Stats (3/12) -->
            <div class="lg:col-span-3 space-y-6">
              
              <!-- Quick Stats Widget -->
              <div class="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs space-y-4">
                <h3 class="font-serif text-sm font-bold text-slate-800">Statistici Club</h3>
                <div class="grid grid-cols-3 lg:grid-cols-1 gap-3">
                  <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span class="text-2xs text-slate-400 block">Total Membri</span>
                    <span class="text-lg font-bold text-rotary-blue block">${a} activi</span>
                  </div>
                  <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span class="text-2xs text-slate-400 block">Proiecte Active</span>
                    <span class="text-lg font-bold text-rotary-blue block">${o} proiecte</span>
                  </div>
                  <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span class="text-2xs text-slate-400 block">Ședințe Planificate</span>
                    <span class="text-lg font-bold text-rotary-blue block">${s} ședințe</span>
                  </div>
                </div>
              </div>

              <!-- Dashboard Navigation Tabs -->
              <div class="bg-white rounded-2xl border border-slate-200/60 shadow-xs overflow-hidden">
                <div class="p-4 border-b border-slate-100 bg-slate-50/50">
                  <h3 class="font-serif text-xs font-bold text-slate-700 uppercase tracking-wider">Secțiuni Panou</h3>
                </div>
                <nav class="flex flex-row lg:flex-col">
                  <button data-tab="announcements" class="tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-rotary-blue border-rotary-blue bg-rotary-blue/5">
                    📢 Noutăți & Ședințe
                  </button>
                  <button data-tab="documents" class="tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-slate-600 border-transparent hover:bg-slate-50">
                    🔒 Documente Interne
                  </button>
                  <button data-tab="directory" class="tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-slate-600 border-transparent hover:bg-slate-50">
                    👥 Director Membri
                  </button>
                </nav>
              </div>

            </div>

            <!-- Right Column: Main Tab Contents (9/12) -->
            <div class="lg:col-span-9 space-y-8">

              <!-- TAB 1: ANNOUNCEMENTS & MEETINGS -->
              <div id="tab-content-announcements" class="tab-content space-y-6">
                
                <div class="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs space-y-6">
                  <div class="border-b border-slate-100 pb-4">
                    <h2 class="font-serif text-lg font-bold text-slate-800">Anunțuri Recente și Ședințe</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Cele mai importante noutăți administrative destinate exclusiv membrilor.</p>
                  </div>

                  <div class="space-y-6">
                    ${j.map(t=>`
                      <div class="p-5 rounded-xl border border-slate-100 relative ${t.type==="important"?"bg-amber-500/5 border-l-4 border-l-amber-500":t.type==="sedinta"?"bg-blue-500/5 border-l-4 border-l-rotary-blue":"bg-slate-50 border-l-4 border-l-slate-400"}">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h3 class="font-serif font-bold text-slate-900 text-sm md:text-base leading-snug">${t.title}</h3>
                          <span class="text-3xs font-semibold px-2 py-0.5 rounded-full ${t.type==="important"?"bg-amber-100 text-amber-800":t.type==="sedinta"?"bg-blue-100 text-blue-800":"bg-slate-200 text-slate-700"}">
                            ${t.type==="important"?"Important":t.type==="sedinta"?"Ședință":"Eveniment"}
                          </span>
                        </div>
                        <p class="text-slate-600 text-xs leading-relaxed mb-4">${t.content}</p>
                        
                        <div class="flex flex-wrap gap-4 text-3xs text-slate-400 font-semibold border-t border-slate-100/80 pt-3">
                          <div class="flex items-center space-x-1">
                            <span>📅 Data:</span>
                            <span class="text-slate-600">${t.date}</span>
                          </div>
                          <div class="flex items-center space-x-1">
                            <span>📍 Locație:</span>
                            <span class="text-slate-600">${t.location}</span>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>

              </div>

              <!-- TAB 2: PRIVATE DOCUMENTS -->
              <div id="tab-content-documents" class="tab-content hidden space-y-6">
                
                <div class="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs space-y-6">
                  <div class="border-b border-slate-100 pb-4">
                    <h2 class="font-serif text-lg font-bold text-slate-800">Secțiunea Documente Confidențiale</h2>
                    <p class="text-xs text-slate-500 mt-0.5">Accesează procesele-verbale, planul strategic și rapoartele financiare interne.</p>
                  </div>

                  <div class="space-y-4">
                    ${R.map(t=>`
                      <div class="border border-slate-100 hover:border-rotary-blue bg-slate-50 hover:bg-slate-50/50 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-150">
                        <div class="flex items-start space-x-4">
                          <div class="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div class="space-y-1">
                            <h3 class="font-serif font-bold text-slate-800 text-sm md:text-base leading-snug">${t.title}</h3>
                            <p class="text-slate-500 text-xs">${t.description}</p>
                            <div class="flex items-center space-x-3 pt-1 text-3xs text-slate-400 font-semibold">
                              <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Membru Only</span>
                              <span>Mărime: ${t.size}</span>
                              <span>Adăugat: ${t.date}</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-shrink-0 text-right">
                          <button class="download-private-btn w-full sm:w-auto btn-primary px-5 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer" data-url="${t.fileUrl}" data-title="${t.title}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Descarcă</span>
                          </button>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>

              </div>

              <!-- TAB 3: MEMBER DIRECTORY -->
              <div id="tab-content-directory" class="tab-content hidden space-y-6">
                
                <div class="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-xs space-y-6">
                  <div class="border-b border-slate-100 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 class="font-serif text-lg font-bold text-slate-800">Directorul de Contacte Membri</h2>
                      <p class="text-xs text-slate-500 mt-0.5">Bază de date internă cu toți membrii activi ai clubului Rotary Moșnița Nouă.</p>
                    </div>
                    
                    <!-- Search Input -->
                    <div class="relative w-full md:w-64">
                      <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                      <input type="text" id="member-search" placeholder="Caută după nume sau profesie..." class="form-input pl-9 py-2 text-xs rounded-lg" />
                    </div>
                  </div>

                  <!-- Members Table (Responsive Card layout on Mobile, Table on Desktop) -->
                  <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                          <th class="p-4">Nume / Profesie</th>
                          <th class="p-4">Rol în Club</th>
                          <th class="p-4">Informații Contact</th>
                          <th class="p-4">Dată Aderare</th>
                          <th class="p-4">Statut</th>
                        </tr>
                      </thead>
                      <tbody id="members-table-body">
                        ${m.map(t=>`
                          <tr class="member-row border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                            <td class="p-4">
                              <div class="font-bold text-slate-800 member-name">${t.name}</div>
                              <div class="text-3xs text-slate-400 font-semibold uppercase tracking-wide member-profession">${t.profession}</div>
                            </td>
                            <td class="p-4">
                              <span class="px-2.5 py-1 rounded-md bg-rotary-blue/5 text-rotary-blue font-semibold border border-rotary-blue/10">
                                ${t.role}
                              </span>
                            </td>
                            <td class="p-4 space-y-1">
                              <div class="flex items-center space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:${t.email}" class="text-rotary-blue hover:underline">${t.email}</a>
                              </div>
                              <div class="flex items-center space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:${t.phone.replace(/\s+/g,"")}" class="text-slate-600 hover:text-rotary-blue">${t.phone}</a>
                              </div>
                            </td>
                            <td class="p-4 text-slate-500 font-medium">${t.joinedDate}</td>
                            <td class="p-4">
                              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-3xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                <span class="w-1 h-1 rounded-full bg-emerald-600 mr-1.5"></span>
                                ${t.status.split(" ")[0]}
                              </span>
                            </td>
                          </tr>
                        `).join("")}
                      </tbody>
                    </table>
                  </div>
                  
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    `},mount(){const e=document.querySelectorAll(".tab-btn"),a=document.querySelectorAll(".tab-content");e.forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-tab");e.forEach(l=>{l.className="tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-slate-600 border-transparent hover:bg-slate-50"}),i.className="tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-rotary-blue border-rotary-blue bg-rotary-blue/5",a.forEach(l=>{l.id===`tab-content-${r}`?(l.classList.remove("hidden"),l.style.opacity="0",setTimeout(()=>{l.style.opacity="1",l.style.transition="opacity 0.2s ease-in-out"},50)):l.classList.add("hidden")})}});const o=document.getElementById("member-search"),s=document.querySelectorAll(".member-row");o&&(o.oninput=()=>{const i=o.value.toLowerCase().trim();s.forEach(r=>{const l=r.querySelector(".member-name").innerText.toLowerCase(),n=r.querySelector(".member-profession").innerText.toLowerCase();l.includes(i)||n.includes(i)?r.classList.remove("hidden"):r.classList.add("hidden")})}),document.querySelectorAll(".download-private-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-url"),l=i.getAttribute("data-title"),n=document.createElement("a");n.href=r,n.download=r.split("/").pop(),document.body.appendChild(n),fetch(r).then(c=>{if(!c.ok)throw new Error("File not found");return c.blob()}).then(c=>{const d=URL.createObjectURL(c);n.href=d,n.click(),URL.revokeObjectURL(d)}).catch(()=>{const c=`
%PDF-1.4
1 0 obj
<< /Title (${l}) /Creator (Rotary Club Mosnita Noua - Intern) >>
endobj
2 0 obj
<< /Type /Catalog /Pages 3 0 R >>
endobj
3 0 obj
<< /Type /Pages /Kids [4 0 R] /Count 1 >>
endobj
4 0 obj
<< /Type /Page /Parent 3 0 R /MediaBox [0 0 595.28 841.89] /Contents 5 0 R /Resources << /Font << /F1 6 0 R >> >> >>
endobj
5 0 obj
<< /Length 200 >>
stream
BT
/F1 18 Tf
50 750 Td
(ROTARY CLUB MOSNITA NOUA - ZONA PRIVATA) Tj
/F1 12 Tf
0 -30 Td
(Document intern: ${l}) Tj
0 -20 Td
(Data generarii: ${new Date().toLocaleDateString("ro-RO")}) Tj
0 -20 Td
(Acest document are caracter CONFIDENTIAL si este destinat exclusiv) Tj
0 -15 Td
(membrilor activi ai Clubului Rotary Mosnita Noua.) Tj
0 -25 Td
(Orice distribuire neautorizata in afara organizatiei constituie o incalcare) Tj
0 -15 Td
(a regulamentului intern si a statutului asociației noastre.) Tj
ET
endstream
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000094 00000 n 
0000000143 00000 n 
0000000208 00000 n 
0000000355 00000 n 
0000000605 00000 n 
trailer
<< /Size 7 /Root 2 0 R /Info 1 0 R >>
startxref
676
%%EOF
            `,d=new Blob([c],{type:"application/pdf"}),u=URL.createObjectURL(d);n.href=u,n.click(),URL.revokeObjectURL(u)}).finally(()=>{document.body.removeChild(n)})}})}},w={render(){const e=b.isAuthenticated(),a=b.getCurrentUser();return`
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
              ${e?`
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
              `:`
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
            
            ${e?`
              <div class="px-3 py-2 text-xs font-semibold text-slate-400">Autentificat ca ${a==null?void 0:a.name}</div>
              <a href="#/dashboard" class="mobile-nav-link block px-3 py-2.5 rounded-md text-base font-bold text-rotary-blue bg-rotary-blue/5">
                Dashboard Membri
              </a>
              <button id="mobile-logout-btn" class="w-full text-left block px-3 py-2.5 rounded-md text-base font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                Deconectare
              </button>
            `:`
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
    `},mount(){let a=(window.location.hash||"#/").replace(/^#/,"");a.startsWith("/")||(a="/"+a),a=a.split("?")[0];const o=document.querySelectorAll(".nav-link"),s=document.querySelectorAll(".mobile-nav-link"),t=(p,f,y)=>{p.forEach(x=>{const h=x.getAttribute("href").replace(/^#/,"")||"/";h==="/"&&a==="/"||h!=="/"&&a.startsWith(h)?x.className=`${x.className.split(" ").filter(v=>!v.includes("text-")).join(" ")} ${f}`:x.className=`${x.className.split(" ").filter(v=>!v.includes("text-")).join(" ")} ${y}`})};t(o,"text-rotary-blue font-bold border-b-2 border-rotary-blue rounded-none","text-slate-600 hover:text-rotary-blue hover:bg-slate-50"),t(s,"text-rotary-blue font-bold bg-rotary-blue/5","text-slate-600 hover:text-rotary-blue hover:bg-slate-50");const i=document.getElementById("mobile-menu-toggle"),r=document.getElementById("mobile-menu"),l=document.getElementById("menu-icon-closed"),n=document.getElementById("menu-icon-opened");i&&r&&(i.onclick=()=>{r.classList.contains("hidden")?(r.classList.remove("hidden"),l.classList.add("hidden"),n.classList.remove("hidden")):(r.classList.add("hidden"),l.classList.remove("hidden"),n.classList.add("hidden"))}),s.forEach(p=>{p.onclick=()=>{r&&(r.classList.add("hidden"),l.classList.remove("hidden"),n.classList.add("hidden"))}});const c=p=>{p.preventDefault(),b.logout(),window.location.hash="#/"},d=document.getElementById("logout-btn");d&&(d.onclick=c);const u=document.getElementById("mobile-logout-btn");u&&(u.onclick=c),window.onscroll=()=>{const p=document.querySelector("header");p&&(document.body.scrollTop>20||document.documentElement.scrollTop>20?(p.classList.add("shadow-md"),p.classList.remove("shadow-xs")):(p.classList.add("shadow-xs"),p.classList.remove("shadow-md")))}}},V={render(){return`
      <footer class="bg-rotary-dark text-slate-300 pt-10 pb-6 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            
            <!-- Column 1: Brand Info -->
            <div class="space-y-3">
              <a href="#/" class="inline-block group">
                <div class="bg-gradient-to-br from-white via-slate-50 to-amber-50/50 p-3 rounded-xl inline-flex items-center shadow-md border border-rotary-gold/40 group-hover:border-rotary-gold transition-all duration-300">
                  <img src="./assets/logo-rotary-official.png" alt="Rotary Club Moșnița Nouă" class="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
              </a>
              <p class="text-xs text-slate-400 leading-relaxed">
                Fondat în 2025. Pilon stabil de sprijin civic dedicat dezvoltării comunității din Moșnița Nouă. <em>„A servi mai presus de sine”</em>.
              </p>
            </div>

            <!-- Column 2: Quick Links & Donează -->
            <div>
              <h3 class="font-serif text-white font-bold text-base mb-3">Navigare</h3>
              <ul class="space-y-1.5 text-xs text-slate-300">
                <li><a href="#/" class="hover:text-rotary-gold transition-colors block">Acasă</a></li>
                <li><a href="#/despre-noi" class="hover:text-rotary-gold transition-colors block">Despre Club</a></li>
                <li><a href="#/proiecte" class="hover:text-rotary-gold transition-colors block">Proiecte Comunitare</a></li>
                <li><a href="#/documente-publice" class="hover:text-rotary-gold transition-colors block">Documente Publice</a></li>
                <li><a href="#/contact" class="hover:text-rotary-gold transition-colors block">Contact</a></li>
              </ul>
            </div>

            <!-- Column 3: Viziune & Valori (Restrânsă & Simplificată) -->
            <div>
              <h3 class="font-serif text-white font-bold text-base mb-3">Viziune & Valori</h3>
              <ul class="space-y-2 text-xs text-slate-300">
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-rotary-gold flex-shrink-0"></span>
                  <span>Educație, burse și tineri</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-rotary-gold flex-shrink-0"></span>
                  <span>Sănătate și prevenție locală</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-rotary-gold flex-shrink-0"></span>
                  <span>Etică și transparență decizională</span>
                </li>
                <li class="flex items-center space-x-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-rotary-gold flex-shrink-0"></span>
                  <span>Parteneriate comunitare durabile</span>
                </li>
              </ul>
            </div>

            <!-- Column 4: Contact Club cu Facebook mutat aici -->
            <div>
              <h3 class="font-serif text-white font-bold text-base mb-3">Contact Club</h3>
              <ul class="space-y-2 text-xs">
                <li class="flex items-start space-x-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-rotary-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Moșnița Veche, Str. Bisericii nr. 45, Timiș</span>
                </li>
                <li class="flex items-center space-x-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-rotary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:rotaryclubmosnitanoua@gmail.com" class="hover:text-rotary-gold transition-colors">rotaryclubmosnitanoua@gmail.com</a>
                </li>
                <li class="flex items-center space-x-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-rotary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+40746080065" class="hover:text-rotary-gold transition-colors">+40 746 080 065</a>
                </li>
              </ul>

              <!-- Urmărește-ne cu Facebook mutat aici la Contact -->
              <div class="pt-2.5 mt-2.5 border-t border-slate-800 flex items-center space-x-2.5">
                <span class="text-3xs text-slate-400 font-bold uppercase tracking-wider">Urmărește-ne:</span>
                <a href="https://www.facebook.com/profile.php?id=61583636502555" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-[#1877F2] text-white text-xs font-semibold transition-colors border border-slate-700 hover:border-[#1877F2]" title="Rotary Club Moșnița Nouă pe Facebook">
                  <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          <!-- Divider -->
          <div class="border-t border-slate-800 pt-5 mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p class="mb-2 md:mb-0 text-2xs">
              &copy; 2026 Clubul Rotary Moșnița Nouă. Toate drepturile rezervate.
            </p>
            <p class="flex items-center space-x-2 text-2xs">
              <span>Creat conform manualului de identitate vizuală al</span>
              <a href="https://brandcenter.rotary.org" target="_blank" rel="noopener noreferrer" class="text-rotary-gold hover:underline">Rotary International</a>
            </p>
          </div>

        </div>
      </footer>
    `},mount(){}},B={render(){return`
      <!-- Universal Donation Modal -->
      <div id="donation-modal" class="fixed inset-0 z-[100] overflow-y-auto hidden flex items-center justify-center p-3 sm:p-4">
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="donation-modal-overlay"></div>
        
        <div class="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden relative z-10 border border-slate-100 transform scale-95 transition-transform duration-200 m-auto max-h-[92vh] flex flex-col">
          <div class="bg-rotary-blue p-6 text-white relative flex-shrink-0">
            <h3 class="font-serif text-xl font-bold flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rotary-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Susține Clubul Rotary</span>
            </h3>
            <p class="text-xs text-blue-200 mt-1">Donațiile susțin 100% proiectele comunitare locale</p>
            <button id="donation-modal-close" class="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-rotary-gold hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold focus:outline-none transition-colors cursor-pointer z-20" title="Închide">&times;</button>
          </div>

          <div class="p-5 sm:p-6 space-y-4 flex-grow overflow-y-auto">
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Orice contribuție financiară este direcționată în mod transparent către proiectele noastre active în educație, ecologizare sau sprijin medical.
            </p>

            <div class="bg-slate-50 p-4 rounded-xl space-y-2.5 border border-slate-200 text-xs sm:text-sm">
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Beneficiar</span>
                <span class="font-bold text-slate-800">ASOCIAȚIA ROTARY CLUB MOȘNIȚA NOUĂ</span>
              </div>
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Cod Fiscal (CIF)</span>
                <span class="font-bold text-slate-800 font-mono">53083341</span>
              </div>
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Cont Bancar (IBAN)</span>
                <div class="flex items-center justify-between mt-1 bg-white p-2.5 rounded-lg border border-slate-200">
                  <span id="iban-field" class="font-bold text-rotary-blue font-mono select-all text-xs sm:text-sm tracking-tight">RO23BTRLRONCRT0DB9999001</span>
                  <button id="copy-iban-btn" class="text-xs text-rotary-blue hover:text-rotary-azure font-bold underline ml-2 cursor-pointer whitespace-nowrap">Copiază</button>
                </div>
              </div>
              <div>
                <span class="text-3xs font-bold text-slate-400 uppercase tracking-wider block">Banca</span>
                <span class="font-semibold text-slate-800">Banca Transilvania</span>
              </div>
            </div>

            <div class="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 leading-relaxed">
              <strong>Notă:</strong> Menționați la detalii plată: <em>„Sponsorizare / Donație susținere proiecte comunitare”</em>.
            </div>
          </div>

          <div class="p-4 sm:p-5 border-t border-slate-100 flex justify-end bg-slate-50/50 flex-shrink-0">
            <button id="donation-modal-ok" class="btn-primary px-6 py-2.5 rounded-lg font-bold text-xs cursor-pointer shadow-xs hover:shadow-md">Am Înțeles</button>
          </div>
        </div>
      </div>
    `},open(){document.querySelectorAll("body > #donation-modal").forEach(a=>a.remove());const e=document.getElementById("donation-modal");e&&(e.classList.remove("hidden"),document.body.style.overflow="hidden",requestAnimationFrame(()=>{const a=e.querySelector(".transform");a&&(a.classList.remove("scale-95"),a.classList.add("scale-100"))}))},close(){const e=document.getElementById("donation-modal");if(document.body.style.overflow="",!e||e.classList.contains("hidden"))return;const a=e.querySelector(".transform");a&&(a.classList.remove("scale-100"),a.classList.add("scale-95")),setTimeout(()=>{e.classList.add("hidden")},120)},mount(){document.querySelectorAll("body > #donation-modal").forEach(i=>i.remove());const e=document.getElementById("donation-modal");if(!e)return;const a=document.getElementById("donation-modal-overlay"),o=document.getElementById("donation-modal-close"),s=document.getElementById("donation-modal-ok"),t=document.getElementById("copy-iban-btn");o&&(o.onclick=()=>this.close()),s&&(s.onclick=()=>this.close()),a&&(a.onclick=()=>this.close()),e.onclick=i=>{(i.target===e||i.target===a)&&this.close()},t&&(t.onclick=()=>{const i=document.getElementById("iban-field");i&&navigator.clipboard.writeText(i.innerText.trim()).then(()=>{t.innerText="Copiat!",t.classList.remove("text-rotary-blue"),t.classList.add("text-emerald-600","font-bold"),setTimeout(()=>{t.innerText="Copiază",t.classList.remove("text-emerald-600","font-bold"),t.classList.add("text-rotary-blue")},2e3)}).catch(()=>{t.innerText="Selectat"})}),window.__donationModalDelegated||(document.addEventListener("click",i=>{i.target.closest(".open-donate-modal-btn")&&(i.preventDefault(),this.open())}),window.__donationModalDelegated=!0),window.__donationModalEscBound||(window.addEventListener("keydown",i=>{i.key==="Escape"&&this.close()}),window.__donationModalEscBound=!0)}},D={"/":{view:L,title:"Acasă | Rotary Club Moșnița Nouă",desc:"Bun venit la Rotary Club Moșnița Nouă. Descoperă activitatea noastra, proiectele comunitare și cum te poți alătura ca voluntar."},"/despre-noi":{view:A,title:"Despre Noi | Rotary Club Moșnița Nouă",desc:"Află mai multe despre istoricul clubului nostru, valorile noastre călăuzitoare și conducerea actuală."},"/proiecte":{view:S,title:"Proiecte | Rotary Club Moșnița Nouă",desc:"Galeria proiectelor comunitare active și finalizate organizate de Rotary Club Moșnița Nouă."},"/documente-publice":{view:T,title:"Documente Publice | Rotary Club Moșnița Nouă",desc:"Descarcă formularele și contractele oficiale: Contract de sponsorizare, Contract de donație ECO HUB și Cererea D230."},"/contact":{view:P,title:"Contact | Rotary Club Moșnița Nouă",desc:"Ia legătura cu noi pentru propuneri de proiecte, parteneriate, voluntariat sau donații. Sediu Moșnița Nouă."},"/login":{view:N,title:"Autentificare Membrii | Rotary Club Moșnița Nouă",desc:"Zonă securizată pentru logarea membrilor activi ai clubului Rotary Moșnița Nouă.",guestOnly:!0},"/dashboard":{view:$,title:"Panou de Control Membrii | Rotary Club Moșnița Nouă",desc:"Panou intern de administrare și documente secrete pentru membrii asociației.",authRequired:!0}};class F{static init(){window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute()),window.addEventListener("authChange",()=>{const a=document.getElementById("navbar-container");a&&(a.innerHTML=w.render(),w.mount());const o=this.getRoute(),s=D[o];s&&s.authRequired&&!b.isAuthenticated()&&(window.location.hash="#/login")})}static getRoute(){let o=(window.location.hash||"#/").replace(/^#/,"");return o.startsWith("/")||(o="/"+o),o.split("?")[0]}static handleRoute(){document.body.style.overflow="",document.body.classList.remove("overflow-hidden");const a=document.getElementById("app");if(!a)return;const o=this.getRoute();let s=D[o];s||(s={view:{render:()=>`
            <div class="flex-grow flex flex-col items-center justify-center text-center p-8 py-20">
              <h1 class="text-6xl font-serif font-bold text-rotary-blue mb-4">404</h1>
              <p class="text-2xl font-bold mb-6 text-slate-700">Pagina nu a fost găsită</p>
              <p class="text-slate-500 mb-8 max-w-md">Pagina pe care o cauți nu există sau a fost mutată.</p>
              <a href="#/" class="btn-primary px-6 py-3 rounded-md font-bold shadow-md">Înapoi la Acasă</a>
            </div>
          `,mount:()=>{}},title:"Pagina Nu A Fost Găsită | Rotary Club Moșnița Nouă",desc:"Pagina solicitată nu a putut fi găsită pe site-ul Rotary Club Moșnița Nouă."});const t=b.isAuthenticated();if(s.authRequired&&!t){window.location.hash="#/login";return}if(s.guestOnly&&t){window.location.hash="#/dashboard";return}document.title=s.title;const i=document.querySelector('meta[name="description"]');i&&i.setAttribute("content",s.desc),a.innerHTML=`
      <div id="navbar-container" class="sticky top-0 z-50"></div>
      <main id="app-content" class="flex-grow opacity-0 fade-in"></main>
      <div id="footer-container"></div>
      <div id="donation-modal-container"></div>
    `,document.getElementById("navbar-container").innerHTML=w.render(),document.getElementById("footer-container").innerHTML=V.render(),document.getElementById("donation-modal-container").innerHTML=B.render();const r=document.getElementById("app-content");r.innerHTML=s.view.render(),window.scrollTo({top:0,behavior:"instant"}),w.mount(),s.view.mount(),B.mount()}}F.init();
