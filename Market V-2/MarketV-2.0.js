let product = [{ 
                id:1579029272725, 
                category:'Fast Food', 
                Nama:'Noodle',
                price:'20000', 
                stock:'10'
              },

               { id:1579029272738, 
                 category: 'Electronic', 
                 Nama:'Earpods',
                 price:'500000', 
                 stock:'5'},
                 
               { id:1579029272729, 
                 category: 'Cloth', 
                 Nama:'Hoodie',
                 price:'50000', 
                 stock:'7'}
              ] 


let category = ["All","Fast Food","Electronic","Cloth","Fruit"]


function showData() {
  
    let textInput = product.map(value => {
        
      return (`<tr>
                      <td>${value.id}</td>
                      <td>${value.category}</td>
                      <td>${value.Nama}</td>
                      <td>${value.price}</td>
                      <td>${value.stock}</td>
              </tr>`)      
          })

    let listCategory = category.map(el=>{
            return `<option value=${el}>${el}</option>`
          })


      document.getElementById("categoryList").innerHTML = listCategory.join("")

      document.getElementById("writeFill").innerHTML = textInput.join("")
  
}

function inputData() {

  let Nama = document.getElementById("namaBaru").value;
  let price = document.getElementById("hargaBaru").value;
  let category = document.getElementById("categoryList").value;
  let stock = document.getElementById("stockBaru").value;


    product.push({
        id:new Date().getTime(), category, Nama, price, stock
    })


  document.getElementById("namaBaru").value = ""
  document.getElementById("hargaBaru").value = ""
  document.getElementById("categoryList").value = ""
  document.getElementById("stockBaru").value = ""


  showData();

}

let inputBtn = document.getElementById("inputButton");

inputBtn.addEventListener("click", inputData)


function showFilterData(filterResult) {

      filterResult.map(value=>{

          return (`<tr>
                    <td>${value.id}</td>
                    <td>${value.category}</td>
                    <td>${value.Nama}</td>
                    <td>${value.price}</td>
                    <td>${value.stock}</td>
                  </tr>`)  
      })

      document.getElementById("writeFill").innerHTML = filterResult.value;

}


function filterCategory() {

  let selectCategory = document.getElementById("categoryFilter").value;  

        if(selectCategory == "All") {
           filterResult == product
        }

        else {

          filterResult == product.map(value=>{

            return value.category == selectCategory;

          })
        }
   
   showFilterData(filterResult);

  }

  function filterName(){

      let filterName = document.getElementById("name").value;
      let filterLowCase = filterName.toLowerCase(); 

      let filterResult = product.map(value => {

        let valueNameLow = value.toLowerCase() 

        if(filterLowCase == value){
              return valueNameLow.includes(filterLowCase)
          }
                    
      })

      showFilterData(filterResult);

    }

  function filterHarga() {

      let price = document.getElementById("")
      let minPrice = document.getElementById("HargaMin").value;
      let maxPrice = document.getElementById("HargaMax").value;
      let filterResult;


      if(minPrice == "" || maxPrice == ""){

        filterResult = product.map(value => {

          return value.price >= minPrice && value.price <= maxPrice; 

        })
      }

        else{

          return filterResult == product;

        }

  showFilterData(filterResult);

      }

    // let resetBtn = document.getElementById("resetButton");

    // resetBtn.addEventListener("onkeyup",showFilterData)


  showData();
