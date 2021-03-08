// Market v.1.2


let apel = 10000;
let anggur = 15000;
let jeruk  = 20000;

let stockApel = 5;
let stockAnggur = 5;
let stockJeruk = 7;

let qtyAnggur = prompt("Masukkan Qty untuk Anggur : ")
let qtyJeruk = prompt("Masukkan Qty untuk Jeruk : ")
let qtyApel = prompt("Masukkan Qty untuk Apel : ")
let total = qtyApel * apel + qtyAnggur * anggur + qtyJeruk * jeruk;

        if (qtyApel > stockApel) {
            alert(`Jumlah Stock tidak cukup, jadi Qty apel yang dimasukan adalah ${stockApel}`)
        }
        
        if (qtyAnggur > stockAnggur) {
            alert(`Jumlah Stock tidak cukup, jadi Qty anggur yang dimasukan adalah ${stockAnggur}`)
        }

        if (qtyJeruk > stockJeruk) {
            alert(`Jumlah Stock tidak cukup, jadi Qty jeruk yang dimasukan adalah ${stockJeruk}`)
        }

        alert(`Total Belanja anda adalah Rp.${total}`)

let qtyAmount = prompt("Masukkan uang anda : ")


        if (qtyAmount < total) {
            alert(`${qtyAmount} tidak cukup untuk membayar`)
        }

        if(qtyAmount > total) {
            alert(`Terimakasih, uang kembalian anda adalah Rp.${qtyAmount-total}`)
        }

        if(qtyAmount == total) {
            alert("Terimakasih, Selamat datang kembali !!!")
        }
