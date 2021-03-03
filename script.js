'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];

 
class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p>
    <button class = "buy-btn">Купить</button></div>`;
  }
}


const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let makeGETRequest = (url, callback) => {
  let xhr = new XMLHttpRequest();

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if(xhr.status !== 200) {
        console.log('Error');
      } else {
        callback(xhr.responseText);
      }
    }
  }

  xhr.send();
}


class GoodsList {
  #goods;
  #allProducts;

  constructor(container) {
    console.log('constructor');
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];
  }

  getProducts(){
    return fetch(`${API_URL}/catalogData.json`)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    let listHtml = '';
    this.#goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  totalPrice(){
    let result=this.#goods.reduce((prev, current) => {
      return prev + current.price;
    }, 0);
    return result;
  }
}

const list = new GoodsList();

list.getProducts()
  .then(list.render);


//Создадим класс для корзины товаров
class Cart{
  #goods;
  constructor(){
    this.#goods = [];
  }
  addCartItem (item){

  }
  deleteCartItem(item){

  }
}

//Создадим класс для элемента корзины товаров
class CartItem{
  constructor(){
    
  }
}








  
  
  
  