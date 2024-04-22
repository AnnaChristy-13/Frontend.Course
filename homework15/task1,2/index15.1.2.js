// Есть массив чисел - нужно выбрать все числа больше 5 (использовать функцию высшего порядка).

const arr1 = [1,5,4,45,2,87,3];
const res1 =arr1.filter(item => item>5);

console.log(res1);


// Есть массив продуктов: каждый продукт - это объект с полями: имя, цена, производитель значения можно задать на свое усмотрение
//  написать функцию фильтрации продуктов цена выше 100.

const fitnessShop = [
    {name:'Fitness rope', price:80.0},
    {name:'Pilates roller', price:58.0},
    {name:'Ball chair', price:100.0},
    {name:'Trampoline', price:500.0},
    {name:'Mat storage', price:98.0},
    {name:'Yoga Mat', price:169.0},
    {name:'Yoga Wheel', price:68.0},
    {name:'Bangles', price:49.0},
   ]

   const shopItem = fitnessShop.filter (fitnessShop => fitnessShop.price>=100);
   console.log(shopItem);