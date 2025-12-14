const getDataMahasiswa = async (id) => {
    try {
        console.log("Proses Ambil data dari Server");
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
            throw new Error("Mahasiswa tidak ditemukan di database kampus!");
        }

        const dataAPI = await response.json();
        const { name, email, phone } = dataAPI;

        console.log("Data berhasil didapatkan!");

        return {
            id: id,
            namaLengkap: name,
            kontak: phone,
        };


    } catch (error) {
        console.log("Terjadi Error:", error.message);
    } finally {
        console.log("Request Selesai");
    }

};

const main = async () => {
    const sukses = await getDataMahasiswa(1);
    console.log("Hasil Fetch Data Mahasiswa", sukses);

    const gagal = await getDataMahasiswa(999);
    console.log("Error:", gagal)
};

main();