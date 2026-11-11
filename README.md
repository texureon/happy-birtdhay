# Selamat Ulang Tahun

React + TypeScript (TSX) dengan Vite. Font: Manrope (sama dengan Bleatz Web).

## Menjalankan

    npm install
    npm run dev

## Halaman

- `/` beranda: pesan pembuka dan carousel kartu
- `/friend`, `/love`: dapat dibuka langsung
- `/journey`: terkunci sampai `/friend` dan `/love` selesai dibaca
  (tombol "Selesai membaca" di akhir halaman). Progres disimpan di localStorage.

Aturan kunci ada di `src/data/home.ts` (`requires`). Isi halaman ada di `src/data/pages.ts`.
`vercel.json` mengarahkan semua path ke `index.html` agar `/friend` dst. bisa dibuka langsung.

## Struktur

    src/
      assets/images/  Avatar dan gambar kartu
      components/     Intro, Carousel, Card, Link
      data/           home.ts (nama, pesan pembuka, kartu), pages.ts (isi halaman)
      lib/            router.ts, progress.ts
      pages/          Home, Reading
      style/          tokens, base, home, intro, carousel, reading
      types/          Tipe TypeScript
      App.tsx
      main.tsx
