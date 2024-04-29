// Создать персонажей для игры с помощью прототипного наследования и this
// Создайте объект character, представляющий следующие характеристики и действие для всех персонажей:
// свойства name (имя), health (здоровье), level (уровень)
// метод introduce для character, который выводит в консоль информацию о персонаже, например: "Hello, my name is [name], I am at level [level],
//  and I have [health] health." - на квадратные скобки не обращайте внимание, они для схемы, чтобы указать на переменные значения
// Создайте объект warrior, который будет наследовать свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), weapon (оружие)
// метод attack, который выводит сообщение в консоль о нападении и название оружия (внутри использовать значение из weapon)
// Создайте объект wizard, наследующий свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), spell (заклинание)
// метод castSpell, который выводит сообщение в консоль о том, как персонаж произносит заклинание (внутри использовать значение из spell).
// Результат должен состоять из следующих действий:
// вызова метода introduce для каждого из объектов
// вызова метода attack для объекта warrior
// вызова метода castSpell для объекта wizard

function Character (name,health,level) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.introduce = function () {
        return `Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`
    }
};

const warrior = new Character ('Hammer Shock', '45 HP', 20) 
    warrior.weapon="🔨 Hammer, 🔥 Fire",
    warrior.attack = function () {
       return `Alert!!! attack with  ${this.weapon}!!!`;
};


const wizard = new Character ('Professor Albus Dumbledore','40 HP',17)
    wizard.spell = "Poison Spray",
    wizard.castSpell = function () {
       return `🧙🏼‍♂️ ${this.name} casts the ${this.spell} spell.`;
};


console.log(warrior.introduce());

console.log('=========================');

console.log(wizard.introduce());

console.log('=========================');

console.log(warrior.attack());

console.log('=========================');

console.log(wizard.castSpell());




