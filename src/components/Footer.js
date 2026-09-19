export const Footer = {
  render() {
    return `
      <footer class="bg-rotary-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            <!-- Column 1: Brand Info -->
            <div class="space-y-4">
              <a href="#/" class="inline-block group">
                <div class="bg-white/95 px-3.5 py-2 rounded-xl inline-flex items-center shadow-sm group-hover:bg-white transition-colors">
                  <img src="/assets/logo-rotary-official.png" alt="Rotary Club Moșnița Nouă" class="h-10 md:h-12 w-auto object-contain" />
                </div>
              </a>
              <p class="text-sm text-slate-400 mt-4 leading-relaxed">
                Organizație de lideri de afaceri și profesioniști reuniți pentru a oferi servicii umanitare, a încuraja standarde etice înalte și a promova pacea și buna înțelegere în comunitatea locală.
              </p>
            </div>

            <!-- Column 2: Quick Links -->
            <div>
              <h3 class="font-serif text-white font-bold text-lg mb-4">Navigare</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#/" class="hover:text-rotary-gold transition-colors block">Acasă</a></li>
                <li><a href="#/despre-noi" class="hover:text-rotary-gold transition-colors block">Despre Clubul Nostru</a></li>
                <li><a href="#/proiecte" class="hover:text-rotary-gold transition-colors block">Proiecte Comunitare</a></li>
                <li><a href="#/documente-publice" class="hover:text-rotary-gold transition-colors block">Documente Publice</a></li>
                <li><a href="#/contact" class="hover:text-rotary-gold transition-colors block">Contact</a></li>
              </ul>
            </div>

            <!-- Column 3: Rotary Values -->
            <div>
              <h3 class="font-serif text-white font-bold text-lg mb-4">Valorile Noastre</h3>
              <ul class="space-y-2 text-sm text-slate-400">
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">1.</span>
                  <span>Promovarea Păcii</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">2.</span>
                  <span>Combaterea Bolilor</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">3.</span>
                  <span>Sprijinirea Educației</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">4.</span>
                  <span>Dezvoltarea Economiilor Locale</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-rotary-gold font-bold">5.</span>
                  <span>Protejarea Mediului Înconjurător</span>
                </li>
              </ul>
            </div>

            <!-- Column 4: Contact Info -->
            <div>
              <h3 class="font-serif text-white font-bold text-lg mb-4">Contact Club</h3>
              <ul class="space-y-3 text-sm">
                <li class="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rotary-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Moșnița Veche, Strada Bisericii, nr. 45, 307287, Jud. Timiș</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rotary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:rotaryclubmosnitanoua@gmail.com" class="hover:text-rotary-gold transition-colors">rotaryclubmosnitanoua@gmail.com</a>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rotary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+40746080065" class="hover:text-rotary-gold transition-colors">+40 746 080 065</a>
                </li>
              </ul>
            </div>

          </div>

          <!-- Divider -->
          <div class="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p class="mb-4 md:mb-0">
              &copy; 2026 Clubul Rotary Moșnița Nouă. Toate drepturile rezervate.
            </p>
            <p class="flex items-center space-x-2">
              <span>Creat conform manualului de identitate vizuală al</span>
              <a href="https://brandcenter.rotary.org" target="_blank" rel="noopener noreferrer" class="text-rotary-gold hover:underline">Rotary International</a>
            </p>
          </div>

        </div>
      </footer>
    `;
  },

  mount() {
    // No dynamic listeners needed for footer yet
  }
};
