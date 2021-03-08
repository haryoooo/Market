// Market V 1.3

let apel = 10000;
let anggur = 15000;
let jeruk  = 20000;

let stockApel = 100;
let stockAnggur = 100;
let stockJeruk = 100;


        do {

            var qtyApel = window.prompt(`Stok Apel saat ini ada ${stockApel} buah \n Masukkan Qty untuk Apel :`)

            if (qtyApel > stockApel) {
                alert("Jumlah Qty yang anda butuhkan lebih dari stok !!!")
            }
        }

        while (qtyApel > stockApel) 


        do {

            var qtyAnggur = prompt(`Stok Apel saat ini ada ${stockAnggur} buah \n Masukkan Qty untuk Anggur :`)

            if (qtyAnggur > stockAnggur) {
                alert("Jumlah Qty yang anda butuhkan lebih dari stok !!!")
            }
        }

        while (qtyAnggur > stockAnggur) 


        do {

            var qtyJeruk = window.prompt(`Stok Jeruk saat ini ada ${stockJeruk} buah \n Masukkan Qty untuk Jeruk :`)

            if (qtyJeruk > stockJeruk) {
                alert("Jumlah Qty yang anda butuhkan lebih dari stok !!!")
            }
        }

        while (qtyJeruk > stockJeruk) 

        
    var total = qtyApel * apel + qtyAnggur * anggur + qtyJeruk * jeruk;

    alert(`Total Belanja anda adalah Rp.${total}`)


        do {

            var qtyAmount = prompt("Masukkan uang anda : ")
            
    
            if(qtyAmount < total) {
                alert("Uang anda Kurang !!!")
            }

            if(qtyAmount > total) {
                alert(`Terimakasih, uang kembalian anda adalah Rp.${qtyAmount-total}`)
            }
                
            if(qtyAmount == total) {
                alert("Terimakasih, Selamat datang kembali !!!")
            }
    
        }

        while (qtyAmount < total) 