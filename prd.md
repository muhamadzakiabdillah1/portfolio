# PRD — Website Portofolio Personal

| Dokumen | Versi | Tanggal | Status |
|---|---|---|---|
| Product Requirements Document | v1.0 | 2026-08-24 | Draft |

**Pemilik:** Mahasiswa UI/UX & Graphic Design
**Metodologi:** UX Research (persona-driven) — skill `ux-researcher-designer`

---

## 1. Latar Belakang & Masalah

Saya adalah mahasiswa dengan keahlian UI/UX design dan desain grafis (poster, visual identity) yang memiliki 6+ project layak pamerkan. Saat ini:

- **Tidak ada "rumah digital"** — semua karya tersebar di chat/Drive/media sosial, sulit dibagikan ke rekruter atau klien.
- **Kredibilitas rendah di mata klien freelance** — calon klien butuh bukti karya yang profesional sebelum bayar.
- **Personal branding belum terbentuk** — tidak ada satu tautan yang merangkum siapa saya, apa keahlian saya, dan hasil karya saya.

## 2. Tujuan Produk (Goals)

| # | Tujuan | Metrik Sukses |
|---|--------|---------------|
| G1 | Membangun personal branding sebagai UI/UX & Graphic Designer mahasiswa | Website live & dibagikan di bio sosial media dalam 4 minggu |
| G2 | Menjadi etalase karya (6+ project) yang meyakinkan | Rata-rata visitor melihat ≥ 3 project per kunjungan |
| G3 | Membuka jalur penghasilan freelance | Ada ≥ 1 inquiry freelance per bulan melalui form contact |
| G4 | Mudah ditemukan rekruter (jangka panjang, saat lulus) | Muncul di pencarian Google nama sendiri |

### Non-Goals (yang TIDAK jadi fokus)
- Blog/artikel (bisa jadi fase 2)
- E-commerce / pembayaran online
- Multi-halaman kompleks — fokus pada pengalaman yang ramping dan fokus

## 3. Persona (hasil sintesis riset)

### Persona 1 — "Rina si Rekruter" (primer untuk tujuan karir)
- **Profil:** HR/Talent Acquisition usia 28–40, menilai 20–50 portofolio per minggu.
- **Perilaku:** Rata-rata hanya melihat portofolio **30–90 detik**. Langsung cari: siapa kamu, apa bisa, tunjukkan karyanya, cara menghubungi.
- **Kebutuhan:** Identitas jelas di 5 detik pertama, karya yang bisa di-scan cepat, kontak mudah ditemukan.
- **Frustrasi:** Portofolio lambat load, karya tidak ada konteksnya, harus klik banyak untuk info dasar.

### Persona 2 — "Budi si Calon Klien" (primer untuk tujuan freelance)
- **Profil:** Pemilik UMKM/organisasi kampus usia 25–45, butuh desain poster/branding/UI.
- **Perilaku:** Datang dari Instagram/WhatsApp, menilai dari kesan profesional & harga.
- **Kebutuhan:** Melihat hasil karya serupa dengan kebutuhannya, tahu proses kerja, cara menghubungi cepat (WhatsApp-friendly).
- **Frustrasi:** Tidak ada info layanan/harga, kontak sulit, tampilan tidak profesional.

### Persona 3 — "Sasa sesama Kreatif" (sekunder)
- **Profil:** Mahasiswa/desainer lain, datang untuk inspirasi & kolaborasi.
- **Kebutuhan:** Melihat proses di balik karya (case study), connect di sosial media.

## 4. User Journey Utama

### Journey A — Rekruter (30–90 detik)
```
Landing di Hero → paham "siapa & apa" (0-5 dtk)
  → scroll ke Featured Projects → lihat 2-3 thumbnail kuat (5-40 dtk)
  → buka 1 project detail → lihat proses & hasil (40-70 dtk)
  → klik Contact/CV → simpan atau hubungi (70-90 dtk)
```

### Journey B — Calon Klien
```
Datang dari sosmed → Hero + social proof (0-10 dtk)
  → lihat kategori layanan & karya relevan (10-40 dtk)
  → cek proses kerja & testimonial (40-60 dtk)
  → klik WhatsApp/Contact form → kirim inquiry (60-90 dtk)
```

## 5. Struktur Halaman (rekomendasi skill)

**Single-page scroll dengan section anchor + halaman detail project.**

```
/                    → Single page: Hero, About, Services, Projects, Process, Contact
/project/<slug>      → Detail case study per project (dibuka dari grid)
```

Alasan: persona rekruter butuh kecepatan (single page = semua tersedia tanpa navigasi), klien butuh kedalaman (case study terpisah).

### Rincian Section
1. **Hero** — nama, tagline ("UI/UX & Graphic Designer"), CTA ganda: *Lihat Karya* + *Hubungi Saya*. Bahasa aktif EN/ID toggle.
2. **About** — 2–3 kalimat + foto/avatar + skill chips (Figma, Illustrator, dll).
3. **Services** — 3 kartu: UI/UX Design, Poster & Graphic Design, (opsional) Branding.
4. **Projects** — grid 6+ karya, filter kategori (UI/UX | Graphic | Poster). Setiap kartu → halaman case study.
5. **Process** — 4 langkah kerja (Discover → Design → Revise → Deliver) untuk meyakinkan klien.
6. **Testimonial/Social proof** (opsional fase 1.5).
7. **Contact** — form sederhana + tombol WhatsApp + email + link sosmed.

## 6. Persyaratan Fungsional

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| F1 | Language toggle EN ⇄ ID (default: ID) | Must |
| F2 | Grid project dengan filter kategori | Must |
| F3 | Halaman case study per project (min. 6) | Must |
| F4 | Contact form (email) + tombol WhatsApp langsung | Must |
| F5 | Responsive penuh (mobile ≥ 375px, desktop ≥ 1440px) | Must |
| F6 | Dark/light mode | Should |
| F7 | Download CV (PDF) | Should |
| F8 | Animasi scroll halus (reveal on scroll) | Could |
| F9 | Testimonial slider | Could |
| F10 | Blog/catatan desain | Won't (fase 2) |

## 7. Persyaratan Non-Fungsional

- **Performa:** LCP < 2.5 detik, gambar ter-optimasi (WebP, lazy load) — persona rekruter tidak sabar.
- **Aksesibilitas:** Kontras WCAG AA, navigasi keyboard, alt text semua gambar karya.
- **SEO:** Meta tag per halaman, Open Graph (agar link cantik saat dibagikan di WA/IG), sitemap.
- **Perawatan:** Konten project mudah ditambah (data terpisah dari tampilan).
- **Hosting:** Static hosting gratis (Vercel/Netlify/GitHub Pages).

## 8. Konten yang Perlu Disiapkan Pengguna

- [ ] Nama & tagline (ID + EN)
- [ ] Foto/avatar profesional
- [ ] 6+ project: thumbnail, deskripsi 1 kalimat, gambar proses & hasil, tool yang dipakai
- [ ] Daftar skill & tools
- [ ] Link sosmed (IG, Behance/Dribbble, LinkedIn)
- [ ] Email aktif & nomor WhatsApp
- [ ] CV PDF (opsional)

## 9. Ukuran Sukses (setelah 3 bulan live)

1. ≥ 100 kunjungan unik/bulan
2. ≥ 1 inquiry freelance/bulan
3. Bounce rate < 60%
4. Waktu rata-rata di halaman > 1 menit

## 10. Roadmap

| Fase | Isi | Estimasi |
|------|-----|----------|
| v1.0 | Single page + 6 case studies + contact + EN/ID | 3–4 minggu |
| v1.1 | Dark mode, testimonial, CV download | +1 minggu |
| v2.0 | Blog, analytics lanjutan | Sesuai kebutuhan |
