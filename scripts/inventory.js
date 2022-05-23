var getobj=JSON.parse(localStorage.getItem("products"))
console.log(getobj);
display(getobj)
let delarr=[]

function display(data){
    console.log(data);
data.forEach(function(el){
    let diva=document.createElement("div")
let desc=document.createElement("p")
desc.innerText=el.desc;
let imge=document.createElement("img");
imge.setAttribute("src",el.image)
let price=document.createElement("p")
price.innerText=el.price;
let typ=document.createElement("p")
typ.innerText=el.type;
 let button=document.createElement("button")
 button.innerText="Remove";
 button.setAttribute("id","remove_product")
diva.append(desc,imge,price,typ,button)
document.querySelector("#all_products").append(diva);

button.addEventListener("click",function(el){
    deletefunc(el)
})
    
})
  
}

 function deletefunc(){
 delarr.push(el)
 localStorage.setItem("idle",JSON.stringify(delarr))
 }







