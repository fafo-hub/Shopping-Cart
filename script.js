//Method One


// //Show Cart
// (function () {
//   const openCart = document.getElementById('cart-icon');
//     const cartDOM = document.querySelector('.product-center');
//     const smh = document.querySelector('.cart-overlay')
//     const mainCart = document.querySelector('.cart')
    
//     openCart.addEventListener("click", function(){
//       smh.style.visibility='visible'
//       mainCart.style.transform = 'translateX(0%)';
      
//     })

// //Close Cart    
// })();
// function closeCart() {
// const smh = document.querySelector('.cart-overlay')
// const mainCart = document.querySelector('.cart')
// mainCart.style.transform = 'translateX(101%)';
// smh.style.visibility='hidden'
// }


// let allItem = []
// let priceArray = []
// function showCart() {
//   const bagBtn = document.querySelectorAll(".bag-btn");
//   console.log(bagBtn);
//   bagBtn.forEach(function(btn) {
//       btn.addEventListener("click", function(event) {
//          console.log(event.target)
//           if (event.target.classList.contains("bag-btn")){
//               let itemImage = event.target.previousElementSibling.src;
//               let itemImagePos = itemImage.indexOf("img") + 3;
//               let itemImgSlice = itemImage.slice(itemImagePos);
//               const item = {};
//               item.img = `img-cart${itemImgSlice}`;
//               let name = event.target.parentElement.parentElement.children[1].textContent;
//               let price = event.target.parentElement.parentElement.children[2].textContent;
//               item.name = name;
//               item.price = price;
//   const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item')
//         cartItem.innerHTML = `
//           <img src="${item.img}">
//           <div>
//             <h4>${item.name}</h4>
//             <h5>${item.price}</h5>
//             <span class="remove-item">remove</span>
//           </div>
//           <div>
//             <i class="fas fa-chevron-up"></i>
//               <p class="item-amount">1</p>
//             <i class="fas fa-chevron-down"></i>
//           </div>
// `;
//  const cartContent = document.querySelector('.cart');
//   const cartFooter = document.querySelector(".cart-footer");
//   cartContent.insertBefore(cartItem, cartFooter);
//   alert ('item added to cart')
//   console.log(cartItem);
//   allItem.push(cartItem.textContent)
// let cartPrice = cartItem.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML.slice(2)
// priceArray.push(parseInt(cartPrice))
// let arraySum = priceArray.reduce(function(a , b) {
//   return a + b
// },0)
// console.log(arraySum);
// document.getElementsByClassName('cart-total')[0].innerHTML = arraySum
// document.getElementsByClassName('item-number')[0].innerHTML = allItem.length
// //let remove = cartItem.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling

//           }
          
//         })
//         function removeFromCart() {
//           console.log(allItem);
//           console.log('seen');
//             for(var i = 0; i < allItem.length; i++) {
//             var button = allItem[i]
//            // console.log(button);
//             //button.remove()
//           }
//           //showCart()
//         }     
        
//    })
   
       
// };
// showCart()


//removeFromCart()



//Method Two


(function () {
  const openCart = document.getElementById('cart-icon');
    const cartDOM = document.querySelector('.product-center');
    const smh = document.querySelector('.cart-overlay')
    const mainCart = document.querySelector('.cart')
    
    openCart.addEventListener("click", function(){
      smh.style.visibility='visible'
      mainCart.style.transform = 'translateX(0%)';
      
    })
})();
function closeCart() {
const smh = document.querySelector('.cart-overlay')
const mainCart = document.querySelector('.cart')
mainCart.style.transform = 'translateX(101%)';
smh.style.visibility='hidden'
}


(function () {
const bagBtn = document.querySelectorAll(".bag-btn");

bagBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        // console.log(event.target)
        if (event.target.classList.contains("bag-btn")){
            // console.log(event.target.previousElementSibling.src)
            let itemImage = event.target.previousElementSibling.src;
            let itemImagePos = itemImage.indexOf("img") + 3;
            let itemImgSlice = itemImage.slice(itemImagePos);

            const item = {};
            item.img = `img-cart${itemImgSlice}`;

            let name = event.target.parentElement.parentElement.children[1].textContent;
            let price = event.target.parentElement.parentElement.children[2].textContent;

            item.name = name;
            item.price = price;
            // console.log(name)
            // console.log(price);
            // console.log(item);
const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item')

      cartItem.innerHTML = `
        <img src="${item.img}">
        <div>
          <h4>${item.name}</h4>
          <h5>${item.price}</h5>
          <span class="remove-item">remove</span>
        </div>
        <div>
          <i class="fas fa-chevron-up"></i>
            <p class="item-amount">1</p>
          <i class="fas fa-chevron-down"></i>
        </div>
`;
function removeAnItem(){
let removeItem = cartItem.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling
removeItem.addEventListener('click', function(){
//console.log(cartItem);
let itemRemove = cartItem
itemRemove.remove()
//console.log('clicked');
//console.log(cartItem);
let actualPrice = cartItem.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent.replace('$', ''); 
//console.log(actualPrice)
let totalCost = document.getElementsByClassName('cart-total')[0].textContent
//console.log(totalCost);
totalCost = totalCost - actualPrice
//console.log(theTotal)
theTotal.textContent = totalCost
//console.log(theTotal);
//document.getElementsByClassName.textContent = totalCost
//console.log(totalCost) 
//console.log(itemLength);
let newItemLength =  document.getElementsByClassName('item-number')[0].textContent
//console.log(newItemLength);
newItemLength = newItemLength - 1;
//console.log(newItemLength);
itemLength.textContent = newItemLength;
})

}



const cartContent = document.querySelector('.cart');
const cartFooter = document.querySelector(".cart-footer");

cartContent.insertBefore(cartItem, cartFooter);
alert ('item added to cart')

        }
        removeAnItem();
        
    })
    
})

})();

// .............Add total Price

let totalPrice = 0;
let totalItem = [];
function showPrice(main) {
const show = main.getAttribute("data-main-price");
totalPrice = totalPrice + parseFloat(show);
console.log(show);
theTotal.textContent = totalPrice;
totalItem.push({
  name: main.getAttribute('data-main-name'),
  price: main.getAttribute('data-main-price')  
}) 

itemLength.textContent = totalItem.length;
console.log(totalItem);
};

//........End of Add Total price


let theTotal = document.getElementsByClassName('cart-total')[0]
let itemLength = document.getElementsByClassName('item-number')[0]
let Cleared = document.getElementsByClassName('clear-cart')[0]

