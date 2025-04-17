const foo = {
    name: "lichengming",
    goal:"我要手撕call方法！"
}

const bar = function(age, height) {
    console.log(this.name);
    console.log(this.goal);
    console.log(age);
    console.log(height);
}


Function.prototype.myApply = function(context, args=[]) {
    if (typeof context === 'undefined' || context ===  null) {
        context = window;
    }

    let fnSymbol = Symbol()
    context[fnSymbol] = this;
    result = context[fnSymbol](...args)
    delete context[fnSymbol]
    return result;

}

console.log(bar.myApply(foo))
console.log(bar.myApply(foo, [22]))
console.log(bar.myApply(foo, [22, 175]))
console.log(null)