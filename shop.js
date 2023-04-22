let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let profit=document.getElementById('profit');

let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let sub=document.getElementById('sub');

//1-get total
function gettotal(){
    //You must make sure that the price is not empty
    if(price.value !=``){
        let result= +price.value+ +taxes.value+ +ads.value+ +profit.value;
        total.innerHTML=result;
        //write in total button and change color
        total.style.backgroundColor="green";
    }
    else{
        //if empty 
        total.innerHTML=``;
    
    total.style.backgroundColor="firebrick"
    }
}
//create product
        //array
        let datapro;
        //if localstorage not empty
        if(localStorage.goter !=null)
        {
            datapro=JSON.parse(localStorage.goter)
        }
        else{
            //empty array
            datapro=[];
        }
         //function 
        sub.onclick=function(){
          //object 
            let newpro={
                title:title.value,
                price:price.value,
                taxes:taxes.value,
                ads:ads.value,
                profit:profit.value,
                total:total.innerHTML,
                count:count.value,
                category:category.value,
              }
  //console.log(newpro)   //add object in array
  datapro.push(newpro)
  //save date in localstorage
  //use json to convert to string   
  localStorage.setItem(`goter`,JSON.stringify(datapro))
  //console.log(datapro)
  
  cleardata()
  showdata()
     }
     //3-clear input
     function cleardata(){ 
        title.value=``;
        price.value=``;
        ads.value=``;
        taxes.value=``;
        profit.value=``;
        total.innerHTML=``;
        total.style.backgroundColor="firebrick";
        count.value=``;
        category.value=``;


     }

     //4-show data
     function showdata(){
        let table='';
        for(let i=0;i<datapro.length;i++){
            table +=`
            <tr>
                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].profit}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].category}</td>
                    <td><button>update</button></td>
                    <td><button onclick="Delet(${i})">Delete</button></td>
                </tr>
            `
           // console.log(table)
        }
        document.getElementById("tbody").innerHTML=table
        let btndel=document.getElementById("btndel");
        if(datapro.length>0){
            btndel .innerHTML=`<button onclick="del()">Delete All</button>`}
            else{
                btndel.innerHTML='';}

     }
     showdata()

     //5-delete 
     function Delet(i){//console.log(i)
        datapro.splice(i,1)
        localStorage.goter=JSON.stringify(datapro)
        showdata()
     }
     //6-deletall
    
    function del(){
        datapro.splice(0)
        showdata()

    }


