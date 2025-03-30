var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

// var bindFoo = bar.bind(foo); // 将bar和bind结合成函数传递给bindFoo

// bindFoo();



Function.prototype.bind2 = function (context) {
    var original = this; // 存储this，this指向主动调用的函数
    var args = Array.prototype.slice.call(arguments, 1); // 接受第一次穿参

    const fBound =  function() {
        const isNewCall = this instanceof fBound;
        const actualContext = isNewCall ? this : context

        var bindArgs = Array.prototype.slice.call(arguments) //接收第二次函数的传参
        return original.apply(actualContext, args.concat(bindArgs)) // 用指向的func去apply，这样就和context绑定了
    }

    var fNOP = function() {}

    if (original.prototype) {
        fNOP.prototype = original.prototype
    }
    fBound.prototype = new fNOP() // 通过指向空函数的实例，打断了对于原型修改的向上传递

    return fBound
}

var bindFoo = bar.bind2(foo, "武大郎");
bindFoo("12345");