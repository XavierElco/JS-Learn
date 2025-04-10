// call 将调用他的函数的this绑定到传入的对象上，并且可以传入参数
// call的实现

// 首先我们有一个对象
const foo = {
    name: "lichengming",
    goal:"我要手撕call方法！"
}

const bar = function(age, height) {
    console.log(this.name);
    console.log(this.goal)
    console.log(age)
    console.log(height)
}

Function.prototype.myCall = function(context) {
    // 边界检查，没值就指向window
    if (typeof context == 'undefined' || context === null) {
        context = window;
    }

    // 把调用的函数临时挂载在context身上
    let fnSymbol = Symbol() //Symbol ES6新标准，更干净高效
    context[fnSymbol] = this;
    // arguments的第一位我们不要
    let args = [...arguments].slice(1)
    // 存起来return出去
    result = context[fnSymbol](...args)

    delete context[fnSymbol]
    return result

}

console.log(bar.myCall(foo))
console.log(bar.myCall(foo, 22))
console.log(bar.myCall(foo, 22, 175))
console.log(null)