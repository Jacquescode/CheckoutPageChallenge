const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const amount1 = document.querySelector(".amount-1");
const amount2 = document.querySelector(".amount-2");

let count1 = 1;
let count2 = 1;

btn1.addEventListener("click", function() {
  if (count1 > 0) {
    count1--;
    amount1.textContent = count1;
    getTotal()
  }
});

btn2.addEventListener("click", function() {
  count1++;
  amount1.textContent = count1;
  getTotal()
});

btn3.addEventListener("click", function() {
  if (count2 > 0) {
    count2--;
    amount2.textContent = count2;
    getTotal()
  }
});

btn4.addEventListener("click", function() {
  count2++;
  amount2.textContent = count2;
  getTotal();
});

const total = document.querySelector(".total");
const shipping = document.querySelector(".shipping");
let price1 = 54.99;
let price2 = 74.99;

function getTotal() {
  let shippingPrice = 19;
  let totalPrice = 0;
  let totalCart = count1*price1 + count2*price2;

  if (totalCart === 0) {
    shippingPrice = 0;
    shipping.textContent = "$0";
  } else if (totalCart > 0 && totalCart < 200) {
    shippingPrice = 19;
    totalPrice = totalCart + shippingPrice;
    shipping.textContent = `$${shippingPrice}`;
  } else {
    totalPrice = totalCart;
    shipping.textContent = "Free Shipping!";
  }
  total.textContent = `$${Math.round(totalPrice * 100) / 100}`;
};