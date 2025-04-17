function objectFactory() {
    var obj = new Object();
    Constructor = Array.prototype.shift.call(arguments)
    obj.__proto__ = Counstructor.prototype
    let ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}