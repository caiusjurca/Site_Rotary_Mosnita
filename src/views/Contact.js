export const ContactView = {
  render() {
    return `
      <!-- Header Secțiune -->
      <section class="bg-rotary-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" style="background-image: url('/assets/hero-bg.jpg');"></div>
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
                </div>

              </div>

              <!-- Caseta Hartă Interactivă -->
              <div class="bg-white p-3 rounded-2xl border border-slate-100 shadow-xs">
                <!-- Map Container -->
                <div id="map" class="h-64 rounded-xl shadow-inner w-full z-10"></div>
                <div class="p-3 text-center text-3xs text-slate-400">
                  Coordonate sediu: Moșnița Veche, Strada Bisericii, nr. 45. Faceți zoom și trageți harta pentru navigare.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    `;
  },

  mount() {
    // Parcurgere parametri de query din hash URL
    const hash = window.location.hash || '';
    const queryParts = hash.split('?');
    if (queryParts.length > 1) {
      const params = new URLSearchParams(queryParts[1]);
      const subjectParam = params.get('subject');
      if (subjectParam && subjectParam.includes('vol')) {
        const selectBox = document.getElementById('subject');
        if (selectBox) selectBox.value = 'volunteering';
      }
    }

    // Inițializare Hartă OpenStreetMap cu Leaflet.js
    try {
      const mapElement = document.getElementById('map');
      if (mapElement) {
        // Coordonate pentru Moșnița Veche, Strada Bisericii
        const lat = 45.7285;
        const lng = 21.3175;
        
        const map = L.map('map', {
          center: [lat, lng],
          zoom: 14,
          scrollWheelZoom: false // previne scroll-ul accidental la navigarea pe pagina
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Marker personalizat cu popup stilizat
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(`
          <div class="text-xs leading-normal">
            <b class="text-rotary-blue font-serif">Clubul Rotary Moșnița Nouă</b><br>
            Moșnița Veche, Strada Bisericii, nr. 45<br>
            <span class="text-slate-500 font-semibold">Sediu Oficial</span>
          </div>
        `).openPopup();
      }
    } catch (err) {
      console.warn("Eroare la incarcarea hartii Leaflet:", err);
    }

    // Logica Formularului de Contact (Validări și Trimitere Mock)
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnSpinner = document.getElementById('btn-spinner');

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        
        // Dezactivează butonul și arată spinner
        submitBtn.disabled = true;
        btnText.innerText = 'Se trimite...';
        btnSpinner.classList.remove('hidden');
        feedback.className = 'hidden';

        const nameVal = document.getElementById('name').value.trim();
        const emailVal = document.getElementById('email').value.trim();
        const messageVal = document.getElementById('message').value.trim();

        // Validări suplimentare simple
        if (!nameVal || !emailVal || !messageVal) {
          showFeedback('Vă rugăm să completați toate câmpurile obligatorii.', 'bg-red-50 text-red-700 border border-red-200');
          resetButton();
          return;
        }

        // Simulăm un request de rețea de 1.5 secunde
        setTimeout(() => {
          showFeedback(`Vă mulțumim, ${nameVal}! Mesajul dumneavoastră a fost înregistrat cu succes. Vă vom răspunde pe adresa ${emailVal}.`, 'bg-emerald-50 text-emerald-700 border border-emerald-200');
          form.reset();
          resetButton();
        }, 1500);
      };
    }

    function showFeedback(msg, classes) {
      if (feedback) {
        feedback.innerText = msg;
        feedback.className = `p-4 text-xs font-semibold rounded-lg ${classes}`;
      }
    }

    function resetButton() {
      if (submitBtn) {
        submitBtn.disabled = false;
        btnText.innerText = 'Trimite Mesajul';
        btnSpinner.classList.add('hidden');
      }
    }
  }
};
