//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",myfunction)
var arr=JSON.parse(localStorage.getItem("products"))||[]

function Myobject(a,b,c,d){
this.type=a
this.desc=b
this.price=c
this.image=d
}
function myfunction(){
event.preventDefault()

let g=products.type.value;
 let h=products.desc.value;
 let i=products.price.value;
let j=products.image.value

var obj=new Myobject(g,h,i,j)
arr.push(obj)

localStorage.setItem("products",JSON.stringify(arr))


}