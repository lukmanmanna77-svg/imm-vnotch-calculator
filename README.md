# 💧 IMM Water Monitoring System

Aplikasi PWA untuk **perhitungan debit air menggunakan metode V-Notch** dan **monitoring pH air** secara praktis, akurat, serta dapat digunakan secara offline.

> **Air Terukur, Lingkungan Terjaga**

## 🚀 Buka Aplikasi

👉 **[BUKA IMM V-NOTCH CALCULATOR](https://lukmanmanna77-svg.github.io/imm-vnotch-calculator/)**

Aplikasi dapat dibuka melalui HP maupun komputer dan dapat dipasang sebagai aplikasi PWA.

## 📊 Fitur

- Perhitungan debit V-Notch otomatis
- Pilihan sudut V-Notch
- Perhitungan multi-pintu 1–3 pintu
- Input dan monitoring **pH air**
- Histori data pengukuran
- Grafik debit
- Grafik pH
- Rekap debit minimum, rata-rata, dan maksimum
- Rekap nilai pH
- Filter data berdasarkan lokasi dan tanggal
- Rekap data operator
- Export PDF
- Export Excel/CSV
- Pilihan logo IMM / Banpu Heart
- Dapat digunakan **offline**
- PWA — dapat dipasang sebagai aplikasi di HP
- Penyimpanan data lokal pada perangkat

## 🧮 Perhitungan V-Notch

Rumus yang digunakan:

`Q = Cd × (8/15) × √(2g) × tan(θ/2) × H^(5/2)`

Keterangan:

| Parameter | Keterangan |
|---|---|
| Q | Debit air (m³/s) |
| Cd | Koefisien debit |
| θ | Sudut V-Notch |
| g | Percepatan gravitasi (m/s²) |
| H | Tinggi muka air (m) |

Untuk beberapa pintu, debit total dihitung dari debit per pintu dikalikan jumlah pintu.

## 🧪 Monitoring pH

Nilai pH dicatat bersama data pengukuran debit sehingga histori dapat digunakan untuk melihat hubungan antara waktu, lokasi, debit, operator, dan kondisi pH.

**Catatan:** modul TSS belum termasuk dalam versi ini dan direncanakan sebagai pengembangan/project berikutnya.

## 📱 Cara Menggunakan di HP

1. Buka aplikasi melalui link di atas.
2. Pilih **Hitung Debit**.
3. Isi tanggal, jam, lokasi, dan nama operator.
4. Masukkan parameter V-Notch.
5. Masukkan nilai **pH air**.
6. Tekan **Hitung Debit**.
7. Periksa hasil debit dan pH.
8. Tekan **Simpan** untuk memasukkan data ke histori.
9. Gunakan menu **Grafik** untuk melihat tren.
10. Gunakan **Export** untuk membuat CSV/PDF.

### Memasang sebagai aplikasi

Pada browser HP, pilih **Tambahkan ke layar utama / Install App** jika opsi tersebut tersedia.

Setelah terpasang, aplikasi dapat dibuka melalui ikon di layar utama dan tetap dapat digunakan saat tidak ada internet.

## 💾 Mode Offline

Aplikasi menggunakan teknologi PWA dan penyimpanan lokal browser sehingga fungsi utama tetap dapat digunakan tanpa koneksi internet.

Data yang dibuat saat offline tersimpan pada perangkat tersebut.

## ☁️ Roadmap Online + Offline

Pengembangan berikutnya diarahkan menjadi sistem monitoring terintegrasi:

```text
                 IMM WATER MONITORING
                         │
              ┌──────────┴──────────┐
              │                     │
           OFFLINE                ONLINE
              │                     │
        Data di HP            Database Online
              │                     │
