# Design Document — Website Portofolio Personal

| Dokumen | Versi | Tanggal | Referensi |
|---|---|---|---|
| Design Specification | v1.0 | 2026-08-24 | `prd.md` v1.0 |

**Gaya:** Minimalis modern — bersih, banyak whitespace, hierarki tipografi kuat.
**Dasar keputusan:** Persona rekruter (scan cepat 30–90 dtk) & calon klien (percaya → hubungi).

---

## 1. Prinsip Desain

1. **Karya adalah bintangnya** — UI senyap & netral, warna & layout tidak bersaing dengan karya.
2. **Whitespace = kemewahan** — padding longgar, maksimal 1 fokus visual per layar.
3. **3-detik rule** — Hero harus menjawab: siapa, apa, apa yang harus dilakukan selanjutnya.
4. **Satu aksi utama per section** — setiap section punya 1 CTA yang jelas.

## 2. Design Tokens

### Palet Warna (light mode)
| Token | Hex | Fungsi |
|---|---|---|
| `bg` | `#FAFAF8` | Latar utama (putih hangat, tidak steril) |
| `surface` | `#FFFFFF` | Kartu & panel |
| `ink` | `#1A1A1A` | Teks utama |
| `ink-muted` | `#6B6B6B` | Teks sekunder |
| `accent` | `#2E5BFF` | CTA, link, highlight (biru percaya-diri) |
| `accent-soft` | `#EAF0FF` | Background badge/chip |
| `line` | `#E8E8E4` | Border & divider |

### Dark mode
`bg #121212` · `surface #1C1C1E` · `ink #F5F5F5` · `ink-muted #A0A0A0` · `accent #6C8CFF` · `line #2C2C2E`

**Aturan:** aksen maksimal 10% dari layar. Karya ditampilkan apa adanya di atas `surface`.

### Tipografi
| Peran | Font | Weight |
|---|---|---|
| Display/H1 | **Satoshi** | Bold 700 |
| Heading H2–H3 | Satoshi | Semibold 600 |
| Body | **General Sans** | Regular 400 |
| Caption/label | General Sans | Medium 500, uppercase, letter-spacing 0.08em |

> Keduanya gratis dari Fontshare (ITF) dan satu keluarga rasa — grotesk netral tapi berkarakter, jauh dari kesan "template default". Alternatif body lain bila General Sans kurang cocok: DM Sans atau Figtree (Google Fonts).

Skala: `12 · 14 · 16 · 20 · 28 · 40 · 56 · 44* · 68*` — H1 mobile = 40, desktop = 56; *Display editorial (Hero H1): mobile = 44, desktop = 68. Direvisi v1.1 (disetujui user).

### Spacing & Radius
- Spacing scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`
- Radius: kartu `16px`, tombol `999px` (pill), input `12px`
- Container: max-width `1120px`, gutter mobile `20px`, desktop `32px`
- Shadow: `0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)` (halus, bukan dramatis)

## 3. Layout per Section

### 3.1 Hero
```
[ Nav: logo-nama · About · Projects · Contact · EN/ID · 🌙 ]
        label kecil: "UI/UX & GRAPHIC DESIGNER"
   H1: "Merancang pengalaman       [ foto/avatar bulat ]
        yang bercerita."
   subtext 1 kalimat + 2 CTA: [ Lihat Karya ] [ Hubungi Saya → ]
```
- Tinggi ~90vh, konten rata kiri, avatar kanan (desktop) / di atas (mobile)
- Latar polos `bg`, tanpa ilustrasi ramai — kesan pertama bersih

### 3.2 About
- Dua kolom: kiri paragraf 2–3 kalimat, kanan skill chips (Figma, Illustrator, Photoshop, Prototyping, dst)
- Tambah 1 baris "stats": `6+ project · 5 keahlian · terbuka freelance` (direvisi v1.1: disamakan dengan jumlah skill chips agar tidak membingungkan)

### 3.3 Services
- 3 kartu sejajar (mobile: stack): ikon garis sederhana + judul + 1 kalimat
- UI/UX Design · Poster & Graphic Design · Branding Visual

### 3.4 Projects (inti halaman)
- Filter pill: `Semua | UI/UX | Graphic | Poster`
- Grid 2 kolom (desktop) / 1 kolom (mobile), rasio thumbnail 4:3
- Kartu: thumbnail → judul → kategori chip → 1 kalimat deskripsi
- Hover: thumbnail scale 1.03 + shadow naik (desktop only)
- **Case study page** (`/project/<slug>`): hero gambar → konteks masalah → proses (3–5 gambar) → hasil → tools → tombol "Project berikutnya"

### 3.5 Process
- 4 langkah horizontal (mobile: vertikal), angka besar tipis: `01 Discover · 02 Design · 03 Revise · 04 Deliver`
- 1 kalimat penjelas per langkah — meyakinkan klien cara kerja profesional

### 3.6 Contact
- Heading: *"Punya project atau posisi yang cocok? Mari ngobrol."*
- Kiri: form (nama, email, pesan) · Kanan: tombol WhatsApp hijau + email + ikon sosmed
- Footer: nama + tahun + "Dibuat dengan ☕ di Indonesia"

## 4. Interaksi & Motion

| Elemen | Animasi | Durasi |
|---|---|---|
| Section muncul | Fade + translateY 16px (reveal on scroll) | 400ms ease-out |
| Tombol | Hover: background gelap 8% + scale 1.02 | 150ms |
| Kartu project | Hover: scale thumbnail 1.03 | 200ms ease-out |
| Filter project | Cross-fade grid | 250ms |
| Halaman case study | Slide-in halus | 300ms |

**Aturan:** semua animasi hormati `prefers-reduced-motion`. Tidak ada animasi > 500ms.

## 5. Responsif

| Breakpoint | Layout |
|---|---|
| ≥ 1024px | Grid 2 kolom, nav lengkap, hero 2 kolom |
| 640–1023px | Grid 2 kolom sempit, hero tetap 2 kolom |
| < 640px | Semua stack 1 kolom, CTA full-width, nav jadi hamburger + bottom sticky CTA "Hubungi" |

## 6. Aksesibilitas

- Kontras teks ≥ 4.5:1 (ink di bg = 16:1 ✓, ink-muted = 5.1:1 ✓)
- Fokus keyboard terlihat: outline `2px accent` offset 2px
- Alt text deskriptif untuk semua gambar karya
- Target sentuh ≥ 44×44px
- Struktur heading semantik: satu H1 per halaman

## 7. Teknologi (rekomendasi)

| Opsi | Kapan dipilih |
|---|---|
| **Astro + Tailwind** (rekomendasi utama) | Statis, super cepat, mudah tambah project (1 file markdown = 1 case study) |
| Next.js | Kalau nanti butuh blog/fitur dinamis |
| HTML + Tailwind murni | Kalau mau sering-sederhana tanpa framework |

Konten project disimpan sebagai data (`.md`/`.json`) terpisah dari tampilan — sesuai PRD §7 (perawatan mudah).

## 8. Validasi Desain (usability checklist)

Sebelum rilis, uji 3 tugas dengan 3 orang (teman/rekan):
1. *"Cari tahu siapa pemilik situs dan keahliannya"* — target: jawab benar < 10 dtk
2. *"Temukan 1 project UI/UX dan buka detailnya"* — target: selesai < 30 dtk tanpa bingung
3. *"Cara menghubungi untuk tawaran freelance"* — target: menemukan WhatsApp/form < 15 dtk

Metrik teknis: Lighthouse ≥ 90 (Performance, Accessibility, SEO).

## 9. Deliverables Desain

- [ ] Wireframe low-fi 7 section (Figma)
- [ ] Hi-fi light + dark mode (Figma)
- [ ] Prototype klik untuk usability test §8
- [ ] Asset: favicon, Open Graph image (1200×630), placeholder thumbnail
