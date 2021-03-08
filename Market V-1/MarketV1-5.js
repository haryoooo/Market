
// Market V.1.5


do {

    var fruit = [["Apel","1000","2"],
                ["Anggur","2000","10"],
                ["Jeruk","5000","10"]
                ]

    var buyFruit = [];

    var programCondition = true;

    var space = ""

    var user = prompt(` 1. Menampilkan Daftar Buah \n 2. Menambah Buah \n 3. Menghapus Buah \n 4. Membeli Buah \n 5. Exit`);

        function tampilNilai() {  
                            
            fruit.forEach((Element) =>

                space +=`Nama Buah : ${Element[0]}\nHarga : ${Element[1]}\nStock : ${Element[2]} \n \n`

            )

            alert(space);  
        }


        // Menampilkan daftar Buah

            if (user === "1") {

            tampilNilai();

            programCondition = true;
        
            }

        // Menambah Buah

            else if(user === "2") {


                var tambahBuah = prompt("Buah Apakah yang ingin anda tambahkan ke list ? ");

                var tambahHargaBuah = prompt("Berapa Harganya ? ");

                var tambahStokBuah = prompt("Masukkan Jumlah Stoknya ");

                fruit.push([tambahBuah,tambahHargaBuah,tambahStokBuah]);
            
                tampilNilai();  
                
                programCondition = true;
                
            } 
                    

        // Menghapus buah

                else if(user === "3") {

                    var hapusBuah = prompt("Buah Apakah yang ingin anda Hapus ? ");

                    buyFruit.splice(0,[hapusBuah])

                    tampilNilai()

                    programCondition = true;
        
                }

        // Membeli Buah

                else if(user === "4") {

                    do {
        
                        var beliBuah = prompt("Buah Apakah yang ingin anda beli ? ");

                        do {

                        var i = 0; 
        
                        var qtyBuah = prompt("Berapa Jumlah Qty yang akan dibeli ? ");

                            if (qtyBuah >= fruit[i][2]){
                                alert("Stock Tidak Mencukupi! Silahkan input ulang")
                            }

                            i++;
                        }

                        while(qtyBuah > fruit[i][2])
        
                        var condition = confirm("Apakah ada lagi yang ingin anda beli ? ")
        
                        buyFruit.push([beliBuah,qtyBuah])
        
                        }
        
                    while(condition === true)
        
                        var cart = "";    
        
                        buyFruit.forEach((value) => 
        
                            cart += `Nama : ${value[0]} Stock : ${value[1]} \n`
        
                        )
        
                    alert(cart)

            // Total Biaya Keseluruhan

                var priceFruit = []

                    fruit.forEach(function(element) { 

                        buyFruit.forEach(function(value) {

                            if(element[0] === value[0]) {

                                priceFruit.push(parseInt(`${element[1] * value[1]}`))  
                                
                            }    
                        })
                    })

                    var totalPrice = priceFruit.reduce(function(a,b){
                        return a + b; 
                        },0);

                    alert(`Total Belanja anda adalah : Rp.${totalPrice}`)

                programCondition = true;

                }

        // Bye

                else if(user === "5") {

                    alert("Terima Kasih :)")

                    programCondition = false;

                }
    }

while(programCondition);