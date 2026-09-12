# ⚡ Math Quest: Dimensions (SMA Edition)

Aplikasi game matematika interaktif berbasis web untuk siswa SMA (Kelas 10, 11, dan 12). Game ini dirancang dengan tema *Cyber/Modern Dark Mode* untuk menguji kecepatan dan ketepatan siswa dalam menyelesaikan soal-soal matematika tingkat lanjut.

---

## 🚀 Fitur Utama

- **Pilihan Tingkat Kelas:**
  - **Kelas 10:** Eksponen, Logaritma, dan Trigonometri Dasar.
  - **Kelas 11:** Polinomial, Matriks, dan Fungsi Invers.
  - **Kelas 12:** Limit Fungsi, Turunan (Diferensial), dan Integral.
- **Mekanik Gameplay:** 
  - *Time Attack Mode* (30 detik).
  - Sistem *Streak Multiplier* untuk jawaban benar beruntun.
- **Leaderboard Real-time:** Papan peringkat terintegrasi langsung dengan database **Supabase**.
- **Desain Responsif:** Tampilan modern berbasis CSS Glassmorphism yang nyaman di desktop maupun smartphone.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend / Database:** [Supabase](https://supabase.com/) (PostgreSQL & Realtime Client)
- **Version Control & CI/CD:** GitLab / GitHub
- **Deployment:** Vercel / Netlify / GitHub Pages / GitLab Pages

---

## 📂 Struktur Proyek

```text
math-quest/
│
├── index.html        # Tampilan utama & struktur HTML
├── style.css         # Styling CSS (Glassmorphism & Neon Dark Mode)
├── app.js            # Logika game, timer, bank soal, dan kalkulasi skor
├── supabaseClient.js # Konfigurasi koneksi ke Supabase Client
└── README.md         # Dokumentasi proyek