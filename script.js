// const cart = {
//     id: 's1', 's1': {
//         "price": 60,
//         "count": 1,
//         "name": 'Кетчуп'
//     },
//     id: 's2', 's2': {
//         "price": 60,
//         "count": 1,
//         "name": 'Сырный',
//     },
//     id: 's3', 's3': {
//         "price": 60,
//         "count": 1,
//         "name": 'Блю-чиз',
//     },
//     id: 's4', 's4': {
//         "price": 60,
//         "count": 1,
//         "name": 'Барбекю',
//     }
// }
//добавляем прослушку на всём окне
window.addEventListener("click", function (event) {
  // console.log(event.target);
  let counter = event.target.closest(".counter");
  let count = counter.querySelector("[data-counter]");

  if (event.target.dataset.action === "plus") {
    if (parseInt(count.innerText) < 10) {
      let plus = (count.innerText = ++count.innerText);
      if(parseInt(count.innerText) === 1)
        {
            
            document.getElementById("sale").innerHTML = '1 / 1 за 0₽';
        }
    } 
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(count.innerText) > 0) {
      let minus = (count.innerText = --count.innerText);
    } else if (
      event.target.closest(".counter") &&
      parseInt(count.innerText) === 1
    ) {
      console.log("In cart!!");
      calcCartPrice();
    }
  }
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".counter")
  ) {
    calcCartPrice();
  }
});

function calcCartPrice() {
  const cartItems = document.querySelectorAll(".card__item");
  const cartCounter = document.querySelector('.counter');
  const priceElement = cartCounter.querySelector('.price');
  const totalPriceEl = document.querySelector('#sum');

  let totalPrice = 0;
  let sum;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price");
    let currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice ;
    
    document.getElementById("sum").innerHTML = totalPrice;
  });

 
}
