var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// task 1
var list = [1, 2, 3, 4, 5];
list.pop();
list.push(4);
list[2] = 5;
var element = list[2];
console.log('task 1 output: ', element, list);
// task 2
var myTuple = [2, 'haha'];
myTuple.pop();
myTuple[1] = 'heihei';
console.log('task 2 output: ', myTuple);
// task 3
console.log('---------------task 3-----------------');
var Animal = /** @class */ (function () {
    function Animal() {
        this.species = 'animal';
        console.log("\u521B\u9020\u4E86\u4E00\u53EA" + this.species);
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(nickName) {
        var _this = _super.call(this) || this;
        _this.name = 'dog';
        _this.nickName = nickName;
        console.log("\u521B\u9020\u4E86\u4E00\u53EA" + _this.name + "\uFF0C\u5B83\u7684\u540D\u5B57\u53EB\u505A " + _this.nickName);
        return _this;
    }
    Dog.prototype.jump = function () {
        console.log(this.nickName + "\u8DF3\u4E86\u8D77\u6765");
    };
    Dog.prototype.run = function (current) {
        console.log(this.nickName + " \u8DD1\u4E86 " + current + " \u7C73");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(nickName) {
        var _this = _super.call(this) || this;
        _this.name = 'cat';
        _this.nickName = nickName;
        console.log("\u521B\u9020\u4E86\u4E00\u53EA" + _this.name + "\uFF0C\u5B83\u7684\u540D\u5B57\u53EB\u505A " + _this.nickName);
        return _this;
    }
    Cat.prototype.jump = function () {
        console.log(this.nickName + "\u8DF3\u4E86\u8D77\u6765");
    };
    Cat.prototype.run = function (current) {
        console.log(this.nickName + " \u8DD1\u4E86 " + current + " \u7C73");
    };
    return Cat;
}(Animal));
var haha = new Dog('haha');
var jack = new Cat('jack');
haha.jump();
haha.run(5);
jack.jump();
jack.run(2);
