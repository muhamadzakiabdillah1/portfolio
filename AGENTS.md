# AGENTS.md — Aturan Proyek Website Portofolio

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Sumber Kebenaran (Single Source of Truth)
1. **`prd.md`** — tujuan, persona, struktur halaman, requirement. JANGAN mengubah scope tanpa persetujuan user.
2. **`design.md`** — design tokens (warna, font, spacing), layout, animasi. IKUTI persis; jangan mengganti font/warna/gaya sendiri.
3. **`content.md`** — semua konten nyata (nama, tagline, daftar project, link sosmed). Jika data yang dibutuhkan TIDAK ada di sini, BERHENTI dan tanya user. DILARANG mengarang nama, project, pengalaman, atau testimoni.

## Hierarki Skill (WAJIB dipatuhi saat memakai skills)
- `prd.md` (hasil `ux-researcher-designer`) = struktur & flow user — SUDAH FINAL, jangan riset ulang.
- `design.md` = keputusan visual FINAL (warna, font, layout, animasi).
- `21st-ui-build`, `ui-ux-pro-max` & `frontend-design` = HANYA untuk pola implementasi: komponen, UX guidelines, aksesibilitas, micro-interaction, responsive behavior. SELALU gunakan ketiganya saat membangun UI.
- Jika saran/dataset skill BERTENTANGAN dengan `design.md` atau `prd.md`, maka `design.md`/`prd.md` yang MENANG. Jangan mengganti token/gaya mengikuti skill.
- `code-reviewer` = untuk QA kode setelah section selesai.

## Aturan Wajib
- Gunakan stack: **Astro + Tailwind CSS** (kecuali user meminta lain).
- Tipografi: **Satoshi** (heading) + **General Sans** (body) dari Fontshare. DILARANG memakai Inter, Roboto, Arial, atau system font.
- Warna HANYA dari design tokens di `design.md` §2. Jangan menciptakan warna baru.
- Bahasa UI: default Indonesia, dengan toggle EN (semua string konten dua bahasa dari `content.md`).
- Setiap halaman case study dibuat dari 1 file markdown per project di `src/content/projects/`.
- Aksesibilitas: kontras WCAG AA, alt text, `prefers-reduced-motion` — lihat `design.md` §6.

## Aturan Perilaku Agent
- Kerjakan bertahap per section (Hero → About → dst). Selesaikan satu section, tunjukkan hasilnya, lanjut setelah dikonfirmasi.
- Jika ada ambiguitas antara `prd.md`/`design.md` dan keinginan user, tanya dulu sebelum coding.
- Jangan menambah fitur yang tidak ada di PRD (no blog, no e-commerce, no analytics) kecuali diminta.
- Jangan mengubah file `prd.md`, `design.md`, `content.md`, atau file ini tanpa instruksi eksplisit.
- Setelah selesai coding, jalankan build (`npm run build`) dan perbaiki error sebelum melapor selesai.

## Checklist Konten (isi di `content.md`)
- [x] Nama & tagline (ID + EN)
- [ ] Foto/avatar (placeholder dulu)
- [x] 6+ project (judul, kategori, deskripsi, tools, gambar)
- [x] Skill & tools
- [x] Link: email, Instagram
- [ ] Link: WhatsApp, Behance/Dribbble, LinkedIn (menyusul)
