

let {log}=console;

let cart__counter=document.querySelector(".cart__counter");
let cart__items=document.querySelector(".cart__items");
let addToCart=document.querySelectorAll(".btn_add_to_cart");
let total_counter=document.querySelector("#total_counter");
let totalCost=document.querySelector(".total-cost");


let cartItems=[]
let cartDomItems=document.querySelectorAll(".cart__item");
cart__counter.addEventListener("click",()=>{
  cart__items.classList.toggle("active");
})

addToCart.forEach(btn =>{
    btn.addEventListener("click",()=>{
        let parentElement=btn.parentElement;
        let product={
            id:parentElement.querySelector("#product_id").value,
            name:parentElement.querySelector(".product__name").innerText,
            img:parentElement.querySelector("#image").getAttribute('src'),
            price:parentElement.querySelector(".product__price").innerText.replace("$", ""),
            quantity:1
        }
        

        checkIfInCart(product);
        let cartDomItems=document.querySelectorAll(".cart__item");
        cartDomItems.forEach(invitualItem =>{
           if(invitualItem.querySelector("#product__id").value==product.id){
               increaseItem(invitualItem,product);
               decreaseItem(invitualItem,product);
               removeItem(invitualItem,product)
           }
       })
    
       
       
      


        cartItems.push(product)
        calculteTotal();
    })
})

function checkIfInCart(product){
    let isIncart = cartItems.filter(item => item.id === product.id).length > 0;
    if(!isIncart){
        addProductIntoDom(product);
    }else{
        alert("product has already in the cart")
        calculteTotal();
        return;
    }
}

function calculteTotal(){
  
    let total = 0;
    cartItems.forEach( item => {
        total += item.quantity * item.price;
    });
    
    totalCost.innerText=total;
    total_counter.innerText=`${cart__items.childElementCount-1}`

}

function addProductIntoDom(product){
    cart__items.insertAdjacentHTML('afterbegin',`
    <div class="cart__item">
    <input type="hidden" name="" id="product__id" value="${product.id}">
    <img src="${product.img}" alt="" id="product__image">
    <h4 class="product__name">${product.name}</h4>
    <a  class="btn__small" action="decrease">&minus;</a>
    <h4 class="product__quantity">${product.quantity}</h4>
    <a class="btn__small" action="increase">&plus;</a>
    <span class="product__price">${product.price}</span>
    <a class="btn__small btn__remove" action="remove">&times;</a>
 </div>
    `)
}


function increaseItem(invitualItem,product){
     invitualItem.querySelector("[action='increase']").addEventListener("click",()=>{
      cartItems.forEach(cartItem =>{
          if(cartItem.id==product.id){
              invitualItem.querySelector(".product__quantity").innerText=++cartItem.quantity;
              calculteTotal();
          }

      })
     
     })
}
function decreaseItem(invitualItem,product){
    invitualItem.querySelector("[action='decrease']").addEventListener("click",()=>{
     cartItems.forEach(cartItem =>{
         if(cartItem.id==product.id){
             if(cartItem.quantity >1){
                invitualItem.querySelector(".product__quantity").innerText=--cartItem.quantity;
                calculteTotal();
             }else{
                cartItems = cartItems.filter(newElements => newElements.id !== product.id);
                invitualItem.remove();

                calculteTotal();
             }

           
         }

     })
    
    })
}

function removeItem(invitualItem,product){
     invitualItem.querySelector("[action='remove']").addEventListener("click",()=>{
         cartItems.forEach(cartItem =>{
            if (cartItem.id === product.id) {
                cartItems = cartItems.filter(newElements => newElements.id !== product.id);
                invitualItem.remove();
                calculteTotal();
            }
         })
     })
}

































































































































