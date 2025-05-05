export const formatTanggalIndonesia = (tanggalStr) => {
    const bulanIndo = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const [hari, bulan, tahun] = tanggalStr.split("/");

    const namaBulan = bulanIndo[parseInt(bulan, 10) - 1];

    return `${hari} ${namaBulan} ${tahun}`;
};
