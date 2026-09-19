// Serviciu de autentificare mock pentru membrii clubului
const MOCK_USER = {
  email: "rotaryclubmosnitanoua@gmail.com",
  password: "Rotary2026!",
  name: "Miclea Răzvan",
  role: "Președinte"
};

export const authService = {
  login(email, password) {
    return new Promise((resolve, reject) => {
      // Simulăm o întârziere mică de rețea pentru realism și UX premium (show spinner)
      setTimeout(() => {
        const inputEmail = email.toLowerCase().trim();
        if ((inputEmail === MOCK_USER.email.toLowerCase() || inputEmail === "membru@rotarymosnita.ro") && password === MOCK_USER.password) {
          const userSession = {
            email: MOCK_USER.email,
            name: MOCK_USER.name,
            role: MOCK_USER.role,
            token: "rotary-session-token-abc123xyz",
            loginTime: new Date().getTime()
          };
          localStorage.setItem("rotary_session", JSON.stringify(userSession));
          
          // Trimiterea unui eveniment custom pentru a notifica meniul că s-a schimbat starea de autentificare
          window.dispatchEvent(new Event("authChange"));
          
          resolve(userSession);
        } else {
          reject(new Error("E-mail sau parolă incorectă. Vă rugăm să încercați din nou."));
        }
      }, 800);
    });
  },

  logout() {
    localStorage.removeItem("rotary_session");
    window.dispatchEvent(new Event("authChange"));
  },

  isAuthenticated() {
    const sessionStr = localStorage.getItem("rotary_session");
    if (!sessionStr) return false;
    
    try {
      const session = JSON.parse(sessionStr);
      // Validare simplă - expirare după 24 ore
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;
      if (now - session.loginTime > oneDay) {
        this.logout();
        return false;
      }
      return true;
    } catch (e) {
      this.logout();
      return false;
    }
  },

  getCurrentUser() {
    const sessionStr = localStorage.getItem("rotary_session");
    if (!sessionStr) return null;
    try {
      return JSON.parse(sessionStr);
    } catch (e) {
      return null;
    }
  }
};
