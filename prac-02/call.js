// 共享传递， 传递的是地址的index

// var obj = {
//     value: 1
// };

// function foo(o) {
//     o.value = 2;
//     console.log(o); // 此时传入的obj是一份copy, 其value指向了heap里的地址
// }
// foo(obj)
// vonsole.log(obj.value) // 原obj其value指向依然是1
// // 参数如果是基本类型，按值传递
// // 参数如果是引用类型，共享传递 

// var obj = {
//     value: 1
//     };
//     function foo(o) {
//         o = 2;
//         console.log(o); //2
//     }
//     foo(obj);
//     console.log(obj.value) // 1 此时如果是o.value会undefined


Function.prototype.call2 = function(context) {
    var context = context || window;
    context.fn= this // this指向了调用此函数的函数，将其与context进行绑定

    let arg = [...arguments].slice(1)
    let result = context.fn(...arg)
    delete context.fn;

    return result;
}

var value = 2; // 全局的2，这样传入null的时候，window就会抓这个2

let foo = {
    value: 1
}

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

bar.call2(foo, "kevin", 12) // 此时bar.call2(foo) 等价于将 bar 的 this 绑定为 foo 后调用
// bar.call2(null);
console.log(bar.call2(foo, 'kevin', 18));

// 小总结，call函数的主要功能就是把函数指向外部调用的函数。
// 需要fn做绑定
// [...arguments]slice(1),接受多个参数
// var context = context || window, 接受如果是null就去全局window找
// let result = context.fn（...arg) 实现了返回