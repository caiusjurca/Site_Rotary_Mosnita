export const Footer = {
  render() {
    return `
      <footer class="bg-rotary-dark text-slate-300 pt-10 pb-6 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            
            <!-- Column 1: Brand Info -->
            <div class="space-y-3">
              <a href="#/" class="inline-block group">
                <div class="bg-gradient-to-br from-white via-slate-50 to-amber-50/50 p-3 rounded-xl inline-flex items-center shadow-md border border-rotary-gold/40 group-hover:border-rotary-gold transition-all duration-300">
                  <img src="/assets/logo-rotary-official.png" alt="Rotary Club Moșnița Nouă" class="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
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
    `;
  },

  mount() {
    // Listeners are handled globally by DonationModal
  }
};
