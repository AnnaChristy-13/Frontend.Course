// Создайте базовый класс Transport, представляющий транспортное средство. У транспортного средства должны быть следующие свойства:
// make (марка)
// model (модель)
// year (год выпуска)
// Добавьте в класс Transport метод displayMainInfo(), который выводит всю информацию о транспортном средстве в консоль.
// Создайте два подкласса, расширяющих класс Transport:
// Car - представляет автомобиль. Дополнительные свойства:
// numDoors (количество дверей)
// isConvertible (является ли кабриолетом)
// Motorcycle - представляет мотоцикл. Дополнительные свойства:
// numWheels (количество колес)
// hasSideCar (имеет ли боковую коляску)
// Создайте по два экземпляра для классов Car и Motorcycle
// Для демонстрации результатов вызовите метод displayMainInfo() для каждого экземпляра (4 вызова).

class Transport {
    constructor (brand,model,year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayMainInfo(){
        console.log(`Main info: brand ${this.brand}, model ${this.model}, year ${this.year}`);
    }
}

class Car extends Transport {
    constructor (brand,model,year,numDoors,isConvertible) {
        super (brand,model,year);
        this.numDoors = numDoors;
        this.isConvertible = isConvertible;
}

displayMainInfo(){
super.displayMainInfo();
    console.log(`Number of doors ${this.numDoors} , it is covertible ${this.isConvertible}`);
}   
}

class Motorcycle extends Transport {
    constructor (brand,model,year,numWheels,hasSideCar) {
        super (brand,model,year);
        this.numWheels = numWheels;
        this.hasSideCar = hasSideCar;
    }
    displayMainInfo(){
        super.displayMainInfo();
        console.log(`Number of wheels ${this.numWheels}, it has a side car ${this.hasSideCar}`);
    }
 }

 const car1 = new Car ('Mercedes','B200',2016,5,'no');

 const car2 = new Car ('BMW','X6',2019,5,'no');

 const motorcycle1 = new Motorcycle ('Harley-Davidson','Sportster',2023,2,'no');

 const motorcycle2 = new Motorcycle ('Yamaha', 'Nmax',2013,'no');

 car1.displayMainInfo();
 car2.displayMainInfo();
 
 motorcycle1.displayMainInfo();
 motorcycle2.displayMainInfo();