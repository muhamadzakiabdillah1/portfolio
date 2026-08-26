export type Lang = 'id' | 'en';

export const translations: Record<string, { id: string; en: string }> = {
  // Nav
  'nav.about': { id: 'About', en: 'About' },
  'nav.projects': { id: 'Projects', en: 'Projects' },
  'nav.contact': { id: 'Contact', en: 'Contact' },

  // Hero
  'hero.kicker': { id: 'UI/UX & Graphic Designer', en: 'UI/UX & Graphic Designer' },
  'hero.h1a': { id: 'UI yang enak dipakai,', en: "UI that's a joy to use," },
  'hero.h1b': { id: 'enak dilihat.', en: 'a joy to see.' },
  'hero.sub1': { id: 'Saya', en: "I'm" },
  'hero.sub2': {
    id: ' — mahasiswa & desainer UI/UX dan grafis. Saat ini menerima proyek freelance.',
    en: ' — a student & UI/UX and graphic designer. Currently open for freelance projects.',
  },
  'hero.cta1': { id: 'Lihat Karya', en: 'View Work' },
  'hero.cta2': { id: 'Hubungi Saya', en: 'Contact Me' },
  'hero.badge': { id: 'Open for freelance', en: 'Open for freelance' },

  // About
  'about.kicker': { id: '01 — Tentang Saya', en: '01 — About Me' },
  'about.h2a': { id: 'Desain yang bercerita,', en: 'Design that tells stories,' },
  'about.h2b': { id: 'bukan sekadar tampil.', en: 'not just looks.' },
  'about.bio': {
    id: 'Halo, saya Muhamad Zaki Abdillah. Mahasiswa & desainer UI/UX yang aktif mengubah ide kompleks menjadi antarmuka intuitif dan visual yang bermakna.',
    en: "Hi, I'm Muhamad Zaki Abdillah. A student & UI/UX designer who turns complex ideas into intuitive interfaces and meaningful visuals.",
  },
  'about.cta': { id: 'Mari berkolaborasi!', en: "Let's collaborate!" },
  'about.skills': { id: 'Keahlian', en: 'Skills' },
  'about.tools': { id: 'Tools', en: 'Tools' },
  'about.stat1': { id: 'Project selesai', en: 'Projects completed' },
  'about.stat2': { id: 'Keahlian', en: 'Skills' },
  'about.stat3': { id: 'Terbuka freelance', en: 'Open for freelance' },

  // Services
  'services.kicker': { id: '02 — Layanan', en: '02 — Services' },
  'services.h2': { id: 'Apa yang bisa saya bantu?', en: 'What can I help you with?' },
  'services.1d': {
    id: 'Merancang antarmuka aplikasi & website yang intuitif, dari riset hingga prototyping.',
    en: 'Intuitive app & web interface design, from research to prototyping.',
  },
  'services.2d': {
    id: 'Poster promosi dan materi visual yang mencuri perhatian.',
    en: 'Promotional posters and visual materials that grab attention.',
  },
  'services.3d': {
    id: 'Konten sosmed yang konsisten dan on-brand, dari feed hingga story.',
    en: 'Consistent, on-brand social media content, from feed posts to stories.',
  },

  // Projects
  'projects.kicker': { id: '03 — Projects', en: '03 — Projects' },
  'projects.h2': { id: 'Karya yang bicara lewat hasil.', en: 'Work that speaks through results.' },
  'projects.filter.all': { id: 'Semua', en: 'All' },
  'projects.detail': { id: 'Lihat detail', en: 'View details' },

  // Process
  'process.kicker': { id: '04 — Process', en: '04 — Process' },
  'process.h2': { id: 'Dari ide jadi karya, dalam 4 langkah.', en: 'From idea to work, in 4 steps.' },
  'process.1d': {
    id: 'Ngobrol santai untuk paham kebutuhan, target audiens, dan gaya yang kamu mau.',
    en: 'A casual chat to understand your needs, audience, and style.',
  },
  'process.2d': {
    id: 'Menyusun konsep dan desain awal, dikirim tepat waktu untuk kamu review.',
    en: 'Concept and initial design delivered on time for your review.',
  },
  'process.3d': {
    id: 'Bebas beri masukan — kita poles bersama sampai hasilnya terasa pas.',
    en: 'Feedback is welcome — we polish it together until it feels right.',
  },
  'process.4d': {
    id: 'File final rapi dan siap pakai, lengkap dengan panduan singkat.',
    en: 'Clean, ready-to-use final files, complete with a quick guide.',
  },

  // Contact
  'contact.kicker': { id: '05 — Contact', en: '05 — Contact' },
  'contact.h2a': { id: 'Punya project atau posisi yang cocok?', en: 'Have a project or a role that fits?' },
  'contact.h2b': { id: 'Mari ngobrol.', en: "Let's talk." },
  'contact.label.nama': { id: 'Nama', en: 'Name' },
  'contact.label.email': { id: 'Email', en: 'Email' },
  'contact.label.pesan': { id: 'Pesan', en: 'Message' },
  'contact.ph.nama': { id: 'Nama kamu', en: 'Your name' },
  'contact.ph.pesan': { id: 'Ceritakan project atau kebutuhanmu...', en: 'Tell me about your project or needs...' },
  'contact.submit': { id: 'Kirim Pesan', en: 'Send Message' },
  'contact.mailtoNote': {
    id: 'Tombol ini akan membuka aplikasi email kamu dengan pesan yang sudah terisi otomatis.',
    en: 'This button opens your email app with a pre-filled message.',
  },
  'contact.side': {
    id: 'Lebih suka kontak langsung? Reach me here:',
    en: 'Prefer direct contact? Reach me here:',
  },
  'contact.waNote': {
    id: 'WhatsApp, Behance, dan LinkedIn menyusul — akunnya sedang disiapkan.',
    en: 'WhatsApp, Behance, and LinkedIn coming soon — accounts in progress.',
  },

  // Case study chrome
  'cs.back': { id: 'Semua project', en: 'All projects' },
  'cs.challenge': { id: 'Tantangan', en: 'Challenge' },
  'cs.solution': { id: 'Solusi & Hasil', en: 'Solution & Results' },
  'cs.notes': { id: 'Catatan Desainer', en: "Designer's Notes" },
  'cs.process': { id: 'Proses', en: 'Process' },
  'cs.next': { id: 'Project berikutnya', en: 'Next project' },

  // Footer
  'footer.credit': {
    id: 'Dirancang & dibangun sendiri, dengan kopi.',
    en: 'Designed & built by yours truly, with coffee.',
  },
  'footer.top': { id: 'Ke atas', en: 'Top' },
};
