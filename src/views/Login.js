import { authService } from '../auth.js';

export const LoginView = {
  render() {
    return `
      <section class="flex-grow flex items-center justify-center py-20 px-4 bg-slate-50 relative overflow-hidden">
        
        <!-- Decorative Background Gradients -->
        <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-rotary-blue/5 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-rotary-gold/5 blur-3xl pointer-events-none"></div>

        <div class="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-300">
          
          <!-- Blue Top Header -->
          <div class="bg-rotary-dark p-8 text-center text-white relative">
            
            <!-- Rotary SVG wheel in login header -->
            <div class="mx-auto w-14 h-14 flex items-center justify-center text-rotary-gold mb-4">
              <svg viewBox="0 0 100 100" class="w-full h-full" fill="currentColor">
                <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="4" fill="none" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width="4" fill="none" />
                ${Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 360) / 24;
                  return `<rect x="47.5" y="2" width="5" height="8" rx="1" transform="rotate(${angle} 50 50)" />`;
                }).join('')}
                ${Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 360) / 6;
                  return `<rect x="48.5" y="20" width="3" height="30" transform="rotate(${angle} 50 50)" />`;
                }).join('')}
                <circle cx="50" cy="50" r="12" fill="currentColor" />
                <circle cx="50" cy="50" r="6" fill="#1A2B49" />
                <rect x="48.5" y="44" width="3" height="6" fill="#1A2B49" />
              </svg>
            </div>
            
            <h1 class="font-serif text-2xl font-bold">Portal Membri</h1>
            <p class="text-xs text-slate-300 mt-1">Conectează-te pentru a accesa zona privată a clubului</p>
          </div>

          <!-- Form Body -->
          <div class="p-8 space-y-6">
            
            <!-- Credentials Test Helper Callout -->
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-2xs text-slate-600 space-y-1">
              <div class="font-bold text-rotary-blue uppercase">Credențiale Demonstrație:</div>
              <div><span class="font-bold text-slate-700">E-mail:</span> <code class="bg-blue-100/80 px-1 py-0.5 rounded font-mono select-all">membru@rotarymosnita.ro</code></div>
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
    `;
  },

  mount() {
    const form = document.getElementById('login-form');
    const errorBanner = document.getElementById('login-error');
    const submitBtn = document.getElementById('login-submit-btn');
    const btnText = document.getElementById('login-btn-text');
    const btnSpinner = document.getElementById('login-btn-spinner');

    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        
        // Starea de trimitere
        submitBtn.disabled = true;
        btnText.innerText = 'Se verifică...';
        btnSpinner.classList.remove('hidden');
        errorBanner.classList.add('hidden');

        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;

        authService.login(email, pass)
          .then(() => {
            // Autentificare reușită, redirecționăm la dashboard
            window.location.hash = '#/dashboard';
          })
          .catch((err) => {
            // Autentificare eșuată, arătăm eroarea
            errorBanner.innerText = err.message;
            errorBanner.classList.remove('hidden');
            
            // Resetăm butoanele
            submitBtn.disabled = false;
            btnText.innerText = 'Autentificare';
            btnSpinner.classList.add('hidden');
          });
      };
    }
  }
};
