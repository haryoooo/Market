// 4. Market V 1.4


do {

    var fruit = [["Apel","1000","100"],
                ["Anggur","2000","100"],
                ["Jeruk","5000","100"]
                ]

    var buyFruit = [];

    var programCondition = false;


    var user = prompt(` 1. Menampilkan Daftar Buah \n 2. Menambah Buah \n 3. Menghapus Buah \n 4. Membeli Buah \n 5. Exit`);


        function tampilNilai() {  
            
            var space = ""
                            
            for (var i=0; i < fruit.length; i++) {

                space += `Nama Buah : ${fruit[i][0]} \n`
                space += `Harga : ${fruit[i][1]} \n`
                space += `Stock : ${fruit[i][2]} \n \n`
            }   
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

                var tambahHargaBuah = parseInt(prompt("Berapa Harganya ? "));

                var tambahStokBuah = parseInt(prompt("Masukkan Jumlah Stoknya "));

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
        
                            var qtyBuah = parseInt(prompt("Berapa Jumlah Qty yang akan dibeli ? "));
        
                            var condition = confirm("Apakah ada lagi yang ingin anda beli ? ")
        
                            buyFruit.push([beliBuah,qtyBuah])
                        }
        
                    while(condition === true)

                        var cart = "" 
        
                        for (var i=0; i < buyFruit.length; i++) { 
        
                            cart += `Buah : ${buyFruit[i][0]}  Qty : ${buyFruit[i][1]}  \n`

                        }
        
                    alert(`Isi keranjang belanja anda adalah : \n========================\n${cart}`)

                    // Total Biaya Keseluruhan 

                    var priceFruit = []

                    for(var i=0; i < buyFruit.length; i++){

                        for(var j=0; j < fruit.length; j++) {

                            if(fruit[j][0] === buyFruit[i][0]) {

                                priceFruit.push(parseInt(`${fruit[j][1] * buyFruit[i][1]}`))  
                                
                            }    
                        }
                    }

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
