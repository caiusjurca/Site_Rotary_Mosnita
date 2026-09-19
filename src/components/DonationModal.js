export const DonationModal = {
  render() {
    return `
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
            <button id="donation-modal-close" class="absolute top-4 right-4 text-white hover:text-rotary-gold transition-colors text-2xl font-bold focus:outline-none cursor-pointer">&times;</button>
          </div>

          <div class="p-6 space-y-4 flex-grow overflow-y-auto">
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
    const donationModal = document.getElementById('donation-modal');
    if (!donationModal) return;

    // Mutăm modalul direct pe body pentru independență totală de poziționare față de containere
    if (donationModal.parentElement !== document.body) {
      document.body.appendChild(donationModal);
    }

    const donationOverlay = document.getElementById('donation-modal-overlay');
    const closeBtn = document.getElementById('donation-modal-close');
    const okBtn = document.getElementById('donation-modal-ok');
    const copyBtn = document.getElementById('copy-iban-btn');

    const showModal = () => {
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

    if (donationOverlay) donationOverlay.onclick = hideModal;
    if (closeBtn) closeBtn.onclick = hideModal;
    if (okBtn) okBtn.onclick = hideModal;

    // Conectare la TOATE butoanele cu clasa .open-donate-modal-btn
    const donateButtons = document.querySelectorAll('.open-donate-modal-btn');
    donateButtons.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        showModal();
      };
    });

    // Copiere IBAN
    if (copyBtn) {
      copyBtn.onclick = () => {
        const ibanEl = document.getElementById('iban-field');
        if (ibanEl) {
          navigator.clipboard.writeText(ibanEl.innerText).then(() => {
            copyBtn.innerText = 'Copiat!';
            copyBtn.classList.remove('text-rotary-blue');
            copyBtn.classList.add('text-emerald-600', 'font-bold');
            setTimeout(() => {
              copyBtn.innerText = 'Copiază';
              copyBtn.classList.remove('text-emerald-600', 'font-bold');
              copyBtn.classList.add('text-rotary-blue');
            }, 2000);
          });
        }
      };
    }

    // Închidere la tasta Escape
    const onKeyDown = (e) => {
      if (e.key === 'Escape') hideModal();
    };
    window.addEventListener('keydown', onKeyDown);
  },

  open() {
    const donationModal = document.getElementById('donation-modal');
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
  }
};
