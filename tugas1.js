// tugas1.js
function buatTeh(jenisGula) {
    console.log("⏳ Sedang merebus air ... (Tunggu 2 detik)");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (jenisGula === "Gula Batu") {
                resolve("✅ Teh Gula Batu Siap diminum!");
            } else {
                reject("❌ Maaf, stok gula habis.");
            }
        }, 2000);
    });
}

// Test kasus 1: Berhasil
console.log("=== Test Kasus 1: Gula Batu ===");
buatTeh("Gula Batu")
    .then(hasil => console.log(hasil))
    .catch(error => console.log(error));

// Test kasus 2: Gagal (tunggu 2.5 detik agar tidak campur)
setTimeout(() => {
    console.log("\n=== Test Kasus 2: Gula Lain ===");
    buatTeh("Gula Pasir")
        .then(hasil => console.log(hasil))
        .catch(error => console.log(error));
}, 2500);