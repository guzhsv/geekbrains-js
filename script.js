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

class GoodsList {
  #goods;
  
  constructor() {
    this.#goods = [];
  }

  //Для получения данных с сервера
  fetchGoods() { 
    this.#goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
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
list.fetchGoods();
list.render();

/* 
1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. 
2. Продумайте, какие методы понадобятся для работы с этими сущностями.
Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
*/

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








  
  
  
  