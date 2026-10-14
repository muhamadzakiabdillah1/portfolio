export type Lang = 'id' | 'en';

export const translations: Record<string, { id: string; en: string }> = {
  // Nav
  'nav.about': { id: 'About', en: 'About' },
  'nav.projects': { id: 'Projects', en: 'Projects' },
  'nav.contact': { id: 'Contact', en: 'Contact' },

  // Hero
  'hero.kicker': { id: 'UI/UX & Graphic Designer', en: 'UI/UX & Graphic Designer' },
  'hero.h1a': { id: 'Desain yang punya tujuan,', en: 'Design with purpose,' },
  'hero.h1b': { id: 'ide yang diwujudkan.', en: 'ideas brought to life.' },
  'hero.sub1': { id: 'Saya', en: "I'm" },
  'hero.sub2': {
    id: ', mahasiswa Sistem Informasi di Telkom University yang tertarik pada desain grafis dan UI/UX.',
    en: ', an Information Systems student at Telkom University passionate about graphic design and UI/UX.',
  },
  'hero.cta1': { id: 'Lihat Karya', en: 'View Work' },
  'hero.cta2': { id: 'Hubungi Saya', en: 'Contact Me' },
  'hero.badge': { id: 'Terbuka untuk kolaborasi', en: 'Open for collaboration' },

  // About
  'about.kicker': { id: '01 — Tentang Saya', en: '01 — About Me' },
  'about.h2a': { id: 'Desain yang bercerita,', en: 'Design that tells stories,' },
  'about.h2b': { id: 'bukan sekadar tampil.', en: 'not just looks.' },
  'about.bio': {
    id: 'Saya mulai mengembangkan pengalaman kreatif melalui kegiatan organisasi, mulai dari membuat poster dan konten media sosial hingga mendokumentasikan acara dan mengedit video. Saya menikmati proses mengembangkan ide, bertukar sudut pandang dengan tim, dan mengubahnya menjadi karya visual. Saat ini, saya juga sedang mempelajari UI/UX menggunakan Figma melalui studi kasus dan eksplorasi desain mandiri.',
    en: "My creative journey grew through organizational activities — from posters and social media content to event documentation and video editing. I enjoy developing ideas, exchanging perspectives with the team, and turning them into visual works. Currently, I'm also learning UI/UX with Figma through case studies and self-driven design exploration.",
  },
  'about.cta': { id: 'Mari berkolaborasi!', en: "Let's collaborate!" },
  'about.skills': { id: 'Keahlian', en: 'Skills' },
  'about.tools': { id: 'Tools', en: 'Tools' },
  'about.stat1': { id: 'Study case', en: 'Case studies' },
  'about.stat2': { id: 'Keahlian', en: 'Skills' },
  'about.stat3': { id: 'Terbuka kolaborasi', en: 'Open for collaboration' },

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
  'services.note': {
    id: 'Saya masih belajar, jadi terbuka untuk proyek kecil.',
    en: "I'm still learning, so I'm open to small projects.",
  },

  // Projects
  'projects.kicker': { id: '03 — Projects', en: '03 — Projects' },
  'projects.h2': { id: 'Karya yang bicara lewat hasil.', en: 'Work that speaks through results.' },
  'projects.filter.all': { id: 'Semua', en: 'All' },
  'projects.detail': { id: 'Lihat detail', en: 'View details' },
  'projects.studycase': { id: 'Study case', en: 'Case study' },

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
  'contact.err.nama': { id: 'Nama wajib diisi', en: 'Name is required' },
  'contact.err.email': { id: 'Masukkan email yang valid', en: 'Enter a valid email address' },
  'contact.err.pesan': { id: 'Pesan wajib diisi', en: 'Message is required' },
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
