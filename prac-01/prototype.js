function Person() {}

Person.prototype.name = "chengming" 
// 函数拥有prototype
var person1 = new Person(); // 构建函数 Person() 与它的示例person
var person2 = new Person();

console.log(person1.name) // chengming
console.log(person2.name) // chengming
// Person -> Person.prototype -> Object.prototype



function Person1() {}
var person3 = new Person1();
console.log(person3.__proto__===Person1.prototype);
// 构造函数通过prototype和示例原型链接，示例用__proto__和示例原型链接



function Person2() {}
var person4 = new Person2();
console.log(Person2 === Person2.prototype.constructor); // true 
// 每个原型都有一个constructor指向指向关联的构造函数，但是实例没有指向构造函数的的
// 因为构造函数可能构建多个实例

// 所以我们可以得知
console.log(person4.__proto__ === Person2.prototype);
console.log(Person2.prototype.constructor === Person2)
console.log(Object.getPrototypeOf(person4) === Person2.prototype);


function Car() {}
Car.prototype.name = 'chengming';
var car = new Car();

car.name = 'minghcheng';
console.log(car.name); // mingcheng
delete car.name;
console.log(car.name); // chengming

var obj = new Object();
obj.name = "lichengming";
console.log(obj.name)



// null 就是原型链的尽头
console.log(Object.prototype.__proto__ === null); // true