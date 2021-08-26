let {log}=console;





export function addProductToTheCart(product,cart__items){
    cart__items.insertAdjacentHTML('afterbegin',`<div class="cart__item">
    <input type="hidden" name="" id="product__id" value="${product.id}">
    <img src="${product.image}" alt="" id="product__image">
        <h4 class="product__name">${product.name}</h4>
        <a  class="btn__small" action="decrease">&minus;</a>
       <h4 class="product__quantity">${product.quantity}</h4>
    <a class="btn__small" action="increase">&plus;</a>
     <span class="product__price">${product.price}</span>
     <a class="btn__small btn__remove" action="remove">&times;</a>
    </div>`)
}