// File: script.js

// Data awal
let dataNilai = [
    { nama: "Aulia", nilai: 85 },
    { nama: "Budi", nilai: 90 },
    { nama: "Citra", nilai: 78 },
    { nama: "Dewi", nilai: 95 },
    { nama: "Eka", nilai: 88 },
];

// Fungsi untuk menampilkan data dalam tabel
function tampilkanData(data) {
    let tabel = document.getElementById("tabel-nilai").getElementsByTagName("tbody")[0];
    tabel.innerHTML = "";
    data.forEach((item, index) => {
        let row = tabel.insertRow();
        row.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.nilai}</td>
        `;
    });
}

// Fungsi untuk menghitung rata-rata nilai
function hitungRataRata() {
    let total = dataNilai.reduce((sum, item) => sum + item.nilai, 0);
    return (total / dataNilai.length).toFixed(2);
}

// Fungsi untuk mencari nilai tertinggi
function cariNilaiTertinggi() {
    return dataNilai.reduce((max, item) => (item.nilai > max.nilai ? item : max));
}

// Fungsi untuk mencari nilai terendah
function cariNilaiTerendah() {
    return dataNilai.reduce((min, item) => (item.nilai < min.nilai ? item : min));
}

// Fungsi untuk mencari data berdasarkan nama
function cariData() {
    let keyword = document.getElementById("cari-nama").value.toLowerCase();
    let hasil = dataNilai.filter(item => item.nama.toLowerCase().includes(keyword));
    tampilkanData(hasil);
}

// Fungsi untuk mengurutkan data berdasarkan nilai
function urutkanData(order) {
    let sortedData = [...dataNilai];
    sortedData.sort((a, b) => order === "asc" ? a.nilai - b.nilai : b.nilai - a.nilai);
    tampilkanData(sortedData);
}

// Event Listener untuk tombol
function setupEventListeners() {
    document.getElementById("btn-cari").addEventListener("click", cariData);
    document.getElementById("btn-asc").addEventListener("click", () => urutkanData("asc"));
    document.getElementById("btn-desc").addEventListener("click", () => urutkanData("desc"));
    document.getElementById("btn-statistik").addEventListener("click", tampilkanStatistik);
}

// Fungsi untuk menampilkan statistik nilai
function tampilkanStatistik() {
    let rataRata = hitungRataRata();
    let tertinggi = cariNilaiTertinggi();
    let terendah = cariNilaiTerendah();

    alert(`Statistik Nilai:\n` +
          `Rata-rata: ${rataRata}\n` +
          `Nilai Tertinggi: ${tertinggi.nama} (${tertinggi.nilai})\n` +
          `Nilai Terendah: ${terendah.nama} (${terendah.nilai})`);
}

// Inisialisasi data dan event listeners
window.onload = function () {
    tampilkanData(dataNilai);
    setupEventListeners();
};
