// 1. Arrow Function
const greetings = (nama) => console.log(`Halo ${nama}, Selamat Siang.`);

// Panggil fungsi (Contoh)
greetings("Budi");

// 2. Spread Operator 
const dataNilai = {
    matkul: "Alogritma dan Pemrograman 1",
    nilai: 90,
    status: "Lulus",
};

// Data Tambahan - KESALAHAN PADA BAGIAN INI DIPERBAIKI
// Dalam objek literal, properti dipisahkan dengan titik dua (:)
const dataTambahan = { semester: 2, aktif: true }; // Perubahan: aktif = true diubah menjadi aktif: true

// Menggabungkan dataNilai dengan dataTambahan 
const dataMahasiswa = { ...dataNilai, ...dataTambahan };
console.log("Data Mahasiswa", dataMahasiswa);