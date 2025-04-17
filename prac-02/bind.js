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



Function.prototype.myBind = function(context) {
    if (typeof context === "undefined" || context === null) {
        context = window;
    }
    let args = Array.prototype.slice.call(arguments, 1);
    let original = this;

    const fBound = function() {
        const isNewCall = this instanceof fBound;
        const actualContext = isNewCall ? this : context;

        let bindArg = Array.prototype.slice.call(arguments);
        return original.apply(actualContext, args.concat(bindArg))
    }

    var fNop = function() {}
    if (original.prototype) {
        fNop.prototype = original.prototype;
    }
    fBound.prototype = new fNop();

    return fBound
}

var bindFoo = bar.myBind(foo, "武大郎");
bindFoo("12345");

let name = new bindFoo("武大郎");