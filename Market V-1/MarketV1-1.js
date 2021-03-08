let apel = 10000;
let anggur = 15000;
let jeruk  = 20000;

    let qtyAnggur = prompt("Masukkan Qty untuk Anggur : ")
    let qtyJeruk = prompt("Masukkan Qty untuk Jeruk : ")
    let qtyApel = prompt("Masukkan Qty untuk Apel : ")
    
    
    let total = qtyApel * apel + qtyAnggur * anggur + qtyJeruk * jeruk;

    alert(`Anda membeli apel ${qtyApel} buah, anggur ${qtyAnggur} buah dan jeruk ${qtyJeruk} buah dengan total Harga Rp.${total}`);
