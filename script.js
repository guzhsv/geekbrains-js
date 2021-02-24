'use strict';
/*Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
*/

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];

  const renderGoodsItem = (title = "", price = 0) => 
     `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  
  const renderGoodsList = list => 
    list.reduce((previous, current) =>
      previous + renderGoodsItem(current.title, current.price), '');
  
  document.querySelector('.goods-list').innerHTML = renderGoodsList(goods);
  
  
  
  