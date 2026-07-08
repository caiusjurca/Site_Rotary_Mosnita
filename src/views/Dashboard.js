import { announcements, privateDocuments, members } from '../data.js';
import { authService } from '../auth.js';

export const DashboardView = {
  render() {
    const currentUser = authService.getCurrentUser();
    
    // Calculăm niște statistici rapide interne
    const totalMembers = members.length;
    const activeProjects = 2; // Din datele noastre
    const pendingMeetings = announcements.filter(a => a.type === 'sedinta').length;

    return `
      <!-- Header Dashboard -->
      <section class="bg-rotary-dark text-white py-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-10" style="background-image: url('/assets/hero-bg.jpg');"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div class="space-y-2">
            <span class="inline-flex items-center space-x-1 bg-amber-500/20 text-rotary-gold border border-amber-500/30 px-3 py-1 rounded-full text-3xs font-bold uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-rotary-gold animate-pulse mr-1"></span>
              Zonă Securizată Membri
            </span>
            <h1 class="font-serif text-3xl font-bold">Panou de Control Intern</h1>
            <p class="text-xs text-slate-300">Bun venit, <span class="font-bold text-white">${currentUser?.name || 'Membru'}</span> (Funcție: ${currentUser?.role || 'Membru'})</p>
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
                    <span class="text-lg font-bold text-rotary-blue block">${totalMembers} activi</span>
                  </div>
                  <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span class="text-2xs text-slate-400 block">Proiecte Active</span>
                    <span class="text-lg font-bold text-rotary-blue block">${activeProjects} proiecte</span>
                  </div>
                  <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span class="text-2xs text-slate-400 block">Ședințe Planificate</span>
                    <span class="text-lg font-bold text-rotary-blue block">${pendingMeetings} ședințe</span>
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
                    ${announcements.map(ann => `
                      <div class="p-5 rounded-xl border border-slate-100 relative ${
                        ann.type === 'important' 
                          ? 'bg-amber-500/5 border-l-4 border-l-amber-500' 
                          : ann.type === 'sedinta' 
                            ? 'bg-blue-500/5 border-l-4 border-l-rotary-blue' 
                            : 'bg-slate-50 border-l-4 border-l-slate-400'
                      }">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h3 class="font-serif font-bold text-slate-900 text-sm md:text-base leading-snug">${ann.title}</h3>
                          <span class="text-3xs font-semibold px-2 py-0.5 rounded-full ${
                            ann.type === 'important'
                              ? 'bg-amber-100 text-amber-800'
                              : ann.type === 'sedinta'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-slate-200 text-slate-700'
                          }">
                            ${ann.type === 'important' ? 'Important' : ann.type === 'sedinta' ? 'Ședință' : 'Eveniment'}
                          </span>
                        </div>
                        <p class="text-slate-600 text-xs leading-relaxed mb-4">${ann.content}</p>
                        
                        <div class="flex flex-wrap gap-4 text-3xs text-slate-400 font-semibold border-t border-slate-100/80 pt-3">
                          <div class="flex items-center space-x-1">
                            <span>📅 Data:</span>
                            <span class="text-slate-600">${ann.date}</span>
                          </div>
                          <div class="flex items-center space-x-1">
                            <span>📍 Locație:</span>
                            <span class="text-slate-600">${ann.location}</span>
                          </div>
                        </div>
                      </div>
                    `).join('')}
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
                    ${privateDocuments.map(doc => `
                      <div class="border border-slate-100 hover:border-rotary-blue bg-slate-50 hover:bg-slate-50/50 p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-150">
                        <div class="flex items-start space-x-4">
                          <div class="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div class="space-y-1">
                            <h3 class="font-serif font-bold text-slate-800 text-sm md:text-base leading-snug">${doc.title}</h3>
                            <p class="text-slate-500 text-xs">${doc.description}</p>
                            <div class="flex items-center space-x-3 pt-1 text-3xs text-slate-400 font-semibold">
                              <span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Membru Only</span>
                              <span>Mărime: ${doc.size}</span>
                              <span>Adăugat: ${doc.date}</span>
                            </div>
                          </div>
                        </div>
                        <div class="flex-shrink-0 text-right">
                          <button class="download-private-btn w-full sm:w-auto btn-primary px-5 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer" data-url="${doc.fileUrl}" data-title="${doc.title}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Descarcă</span>
                          </button>
                        </div>
                      </div>
                    `).join('')}
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
                        ${members.map(memb => `
                          <tr class="member-row border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                            <td class="p-4">
                              <div class="font-bold text-slate-800 member-name">${memb.name}</div>
                              <div class="text-3xs text-slate-400 font-semibold uppercase tracking-wide member-profession">${memb.profession}</div>
                            </td>
                            <td class="p-4">
                              <span class="px-2.5 py-1 rounded-md bg-rotary-blue/5 text-rotary-blue font-semibold border border-rotary-blue/10">
                                ${memb.role}
                              </span>
                            </td>
                            <td class="p-4 space-y-1">
                              <div class="flex items-center space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:${memb.email}" class="text-rotary-blue hover:underline">${memb.email}</a>
                              </div>
                              <div class="flex items-center space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:${memb.phone.replace(/\s+/g, '')}" class="text-slate-600 hover:text-rotary-blue">${memb.phone}</a>
                              </div>
                            </td>
                            <td class="p-4 text-slate-500 font-medium">${memb.joinedDate}</td>
                            <td class="p-4">
                              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-3xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                                <span class="w-1 h-1 rounded-full bg-emerald-600 mr-1.5"></span>
                                ${memb.status.split(' ')[0]}
                              </span>
                            </td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                  
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    `;
  },

  mount() {
    // Logica Schimbării Taburilor
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
      btn.onclick = () => {
        const selectedTab = btn.getAttribute('data-tab');

        // Modifică aspectul butoanelor de tab
        tabButtons.forEach(b => {
          b.className = 'tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-slate-600 border-transparent hover:bg-slate-50';
        });
        btn.className = 'tab-btn flex-1 lg:flex-initial text-left px-5 py-4 text-xs font-bold transition-all duration-150 border-b-2 lg:border-b-0 lg:border-l-4 cursor-pointer text-rotary-blue border-rotary-blue bg-rotary-blue/5';

        // Ascunde toate conținuturile și afișează-l pe cel selectat
        tabContents.forEach(content => {
          if (content.id === `tab-content-${selectedTab}`) {
            content.classList.remove('hidden');
            // Mini fade-in
            content.style.opacity = '0';
            setTimeout(() => {
              content.style.opacity = '1';
              content.style.transition = 'opacity 0.2s ease-in-out';
            }, 50);
          } else {
            content.classList.add('hidden');
          }
        });
      };
    });

    // Logica Căutării în Directorul de Membri
    const searchInput = document.getElementById('member-search');
    const memberRows = document.querySelectorAll('.member-row');

    if (searchInput) {
      searchInput.oninput = () => {
        const query = searchInput.value.toLowerCase().trim();

        memberRows.forEach(row => {
          const name = row.querySelector('.member-name').innerText.toLowerCase();
          const profession = row.querySelector('.member-profession').innerText.toLowerCase();
          
          if (name.includes(query) || profession.includes(query)) {
            row.classList.remove('hidden');
          } else {
            row.classList.add('hidden');
          }
        });
      };
    }

    // Logica Descărcării de Documente Private (cu fallback PDF generator)
    const downloadBtns = document.querySelectorAll('.download-private-btn');
    downloadBtns.forEach(btn => {
      btn.onclick = () => {
        const fileUrl = btn.getAttribute('data-url');
        const fileTitle = btn.getAttribute('data-title');
        
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop();
        document.body.appendChild(link);
        
        fetch(fileUrl)
          .then(res => {
            if (!res.ok) throw new Error('File not found');
            return res.blob();
          })
          .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            link.href = blobUrl;
            link.click();
            URL.revokeObjectURL(blobUrl);
          })
          .catch(() => {
            // Fallback - generăm dinamic un document PDF securizat simulat
            const content = `
%PDF-1.4
1 0 obj
<< /Title (${fileTitle}) /Creator (Rotary Club Mosnita Noua - Intern) >>
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
(Document intern: ${fileTitle}) Tj
0 -20 Td
(Data generarii: ${new Date().toLocaleDateString('ro-RO')}) Tj
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
            `;
            const blob = new Blob([content], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            link.href = blobUrl;
            link.click();
            URL.revokeObjectURL(blobUrl);
          })
          .finally(() => {
            document.body.removeChild(link);
          });
      };
    });
  }
};
