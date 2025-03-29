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
console.log(Person2 === Person2.prototype.constructor); // true 
// 每个原型都有一个constructor指向指向关联的构造函数，但是实例没有指向构造函数的的
// 因为构造函数可能构建多个实例

// 所以我们可以得知


