// tugas2.js
async function getTodo() {
    console.log("Mencoba mengambil data ...\n");

    try {
        // Mengambil data dari API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error('Gagal mengambil data');
        }

        const data = await response.json();

        // Menampilkan output sesuai format
        console.log(`✅ Judul Todo: ${data.title}`);
        console.log("--- Proses Selesai ---");

    } catch (error) {
        console.log("Terjadi error:", error.message);
        console.log("- [x] Proses Selesai");
    }
}

// Test dengan URL yang salah (uncomment untuk test error)
async function getTodoError() {
    console.log("\n=== Test dengan URL salah ===");
    console.log("Mencoba mengambil data ...\n");

    try {
        // URL dengan typo untuk test error
        const response = await fetch('https://jsonplaceholder.typicode.com/todoss/1');

        if (!response.ok) {
            throw new Error('Gagal mengambil data');
        }

        const data = await response.json();
        console.log(`- [ ] Judul Todo: ${data.title}`);

    } catch (error) {
        console.log(`- [ ] Judul Todo: Error - ${error.message}`);
    }
    console.log("- [x] Proses Selesai");
}

// Jalankan fungsi
getTodo();

// Untuk test error, uncomment baris berikut:
// setTimeout(() => getTodoError(), 1000);