// array hewan
const hewan = ["Kambing", "Kelinci"];

// array nomor
const nomor = [1, 4];

// function untuk menggabungkan 2 array
const bergabung = (array1, array2) => array1.concat(array2);

// cetak arrayGabungan
const arrayGabungan = bergabung(hewan, nomor);
console.log(arrayGabungan);
