export const Footer = {
  render() {
    return `
      <footer class="bg-rotary-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            <!-- Column 1: Brand Info -->
            <div class="space-y-4">
              <a href="#/" class="flex items-center space-x-3 group">
                <svg viewBox="0 0 100 100" class="w-10 h-10 text-rotary-gold" fill="currentColor">
                  <defs>
                    <!-- Paths for text centering (Radius 34) -->
                    <!-- Top arc: left-to-right, curves up -->
                    <path id="rotary-footer-top" d="M 16,50 A 34,34 0 0,1 84,50" fill="none" />
                    <!-- Bottom arc: left-to-right, curves down -->
                    <path id="rotary-footer-bottom" d="M 16,50 A 34,34 0 0,0 84,50" fill="none" />
                  </defs>

                  <!-- Blue Ring Background (Radius 30 to 40) -->
                  <circle cx="50" cy="50" r="35" stroke="#17458F" stroke-width="10" fill="none" />

                  <!-- Outer Gold Rim (Radius 40) -->
                  <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="1.5" fill="none" />
                  <!-- Inner Gold Rim (Radius 30) -->
                  <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="1.5" fill="none" />

                  <!-- 24 Cogs (Radius 40 to 44) -->
                  ${Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    return `<rect x="48" y="2" width="4" height="6" rx="0.5" transform="rotate(${angle} 50 50)" />`;
                  }).join('')}

                  <!-- Inner wheel structure (6 Spokes) (Radius 12 to 30) -->
                  ${Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i * 360) / 6;
                    return `<rect x="48.5" y="12" width="3" height="18" transform="rotate(${angle} 50 50)" />`;
                  }).join('')}

                  <!-- Center hub and keyway (Radius 12) -->
                  <circle cx="50" cy="50" r="12" fill="currentColor" />
                  <circle cx="50" cy="50" r="6" fill="#1A2B49" />
                  <rect x="48.5" y="44" width="3" height="6" fill="#1A2B49" />

                  <!-- Top Inscribed Text "ROTARY" -->
                  <text font-family="var(--font-sans), 'Arial Black', sans-serif" font-weight="900" font-size="7.5" fill="currentColor" letter-spacing="1.2">
                    <textPath href="#rotary-footer-top" startOffset="50%" text-anchor="middle">ROTARY</textPath>
                  </text>

                  <!-- Bottom Inscribed Text "INTERNATIONAL" -->
                  <text font-family="var(--font-sans), 'Arial Black', sans-serif" font-weight="900" font-size="4.8" fill="currentColor" letter-spacing="0.4">
                    <textPath href="#rotary-footer-bottom" startOffset="50%" text-anchor="middle">INTERNATIONAL</textPath>
                  </text>
                </svg>
                <div class="flex flex-col">
                  <span class="font-serif text-md font-bold tracking-widest text-white leading-none">ROTARY</span>
                  <span class="font-sans text-2xs font-semibold tracking-wider text-slate-400 leading-none mt-1">CLUB MOȘNIȚA NOUĂ</span>
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
                  <span>Calea Moșniței, Nr. 12, Moșnița Nouă, Jud. Timiș</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rotary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@rotarymosnita.ro" class="hover:text-rotary-gold transition-colors">contact@rotarymosnita.ro</a>
                </li>
                <li class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rotary-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+40722123456" class="hover:text-rotary-gold transition-colors">+40 722 123 456</a>
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
