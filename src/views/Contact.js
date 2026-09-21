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
        btnText.innerText = 'Se procesează...';
        btnSpinner.classList.remove('hidden');
        feedback.className = 'hidden';

        const nameVal = document.getElementById('name').value.trim();
        const emailVal = document.getElementById('email').value.trim();
        const phoneVal = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
        const subjectSelect = document.getElementById('subject');
        const subjectKey = subjectSelect ? subjectSelect.value : 'general';
        const messageVal = document.getElementById('message').value.trim();

        // Validări câmpuri obligatorii
        if (!nameVal || !emailVal || !messageVal) {
          showFeedback('Vă rugăm să completați toate câmpurile obligatorii (Nume, E-mail, Mesaj).', 'bg-red-50 text-red-700 border border-red-200');
          resetButton();
          return;
        }

        const subjectMap = {
          general: 'Informații Generale',
          volunteering: 'Voluntariat / Implicare',
          donations: 'Donații / Sponsorizări',
          proposals: 'Propunere Proiect / Parteneriat'
        };
        const subjectName = subjectMap[subjectKey] || 'Mesaj de Contact';

        const emailSubject = `[Contact Rotary Moșnița] ${subjectName} - ${nameVal}`;
        const emailBody = `Nume complet: ${nameVal}\nAdresă e-mail: ${emailVal}\nTelefon: ${phoneVal || 'Nespecificat'}\nSubiect solicitare: ${subjectName}\n\n--------------------------------------------------\nMesaj:\n${messageVal}\n--------------------------------------------------`;

        const mailtoUrl = `mailto:rotaryclubmosnitanoua@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rotaryclubmosnitanoua@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Declanșăm deschiderea clientului de e-mail local (aplicație mobilă sau desktop)
        window.location.href = mailtoUrl;

        // Afișăm feedback detaliat și link-uri utile în caz că browserul nu deschide automat clientul
        setTimeout(() => {
          showFeedback(`
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
                <a href="${mailtoUrl}" class="px-3.5 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors inline-flex items-center space-x-1.5 shadow-xs">
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span>Reîncearcă deschiderea aplicației de e-mail</span>
                </a>
                <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors inline-flex items-center space-x-1.5 shadow-xs">
                  <svg class="h-3.5 w-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                  <span>Deschide direct în Gmail Web</span>
                </a>
              </div>
            </div>
          `, 'bg-emerald-50 text-emerald-950 border border-emerald-200');
          resetButton();
        }, 500);
      };
    }

    function showFeedback(htmlContent, classes) {
      if (feedback) {
        feedback.innerHTML = htmlContent;
        feedback.className = `p-4 text-xs font-semibold rounded-xl ${classes}`;
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
