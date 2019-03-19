// task 1
var tempEnum;
(function (tempEnum) {
    tempEnum[tempEnum["a"] = 0] = "a";
    tempEnum[tempEnum["b"] = 1] = "b";
    tempEnum[tempEnum["c"] = 2] = "c";
    tempEnum[tempEnum["d"] = 3] = "d";
})(tempEnum || (tempEnum = {}));
var tempAny = 'haha';
function tempFunction() {
    console.log('no return');
}
var tempNull = null;
var tempUndefined = undefined;
function tempNever() {
    var a = 1;
    while (true) {
        a++;
    }
}
var tempObject = {
    test: 1
};
// task2
// var tempVariable = 1
// let tempVariable = 2
// const tempVariable = 3
var answer = "typescript\u4E2D\uFF0C\u4E0D\u80FD\u91CD\u590D\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0Cvar\u662F\u6700\u539F\u59CB\u7684\u58F0\u660E\u53D8\u91CF\u7684\u65B9\u5F0F\uFF1Blet\u5B9A\u4E49\u53D8\u91CF\u65F6\u4F1A\u751F\u6210\u4E00\u4E2A\u5757\u7EA7\u4F5C\u7528\u57DF\uFF1B\n              const\u4E00\u822C\u5B9A\u4E49\u5E38\u91CF\uFF0C\u4E14\u5B9A\u4E49\u53D8\u91CF\u540E\u4E0D\u80FD\u4FEE\u6539\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002\u4F46\u8FD9\u53EA\u9650\u4E8E\u76F4\u63A5\u5F15\u7528\u7C7B\u578B\uFF0C\u56E0\u4E3A\u95F4\u63A5\u5F15\u7528\u7C7B\u578B\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u53D8\u91CF\u5B9E\u9645\u4FDD\u5B58\u7684\n              \u53EA\u662F\u5806\u4E2D\u7684\u5730\u5740\uFF0C\u6240\u4EE5\u5B9A\u4E49\u6570\u7EC4\u548C\u5BF9\u8C61\u7C7B\u578B\u7684\u53D8\u91CF\u65F6\uFF0C\u4FEE\u6539\u91CC\u9762\u7684\u5143\u7D20\u4E0D\u4F1A\u62A5\u9519";
function animal(_a) {
    var name = _a.name, height = _a.height;
    var newDog = {
        name: "haha",
        weight: 20
    };
    newDog.weight = height ? height * 2 : newDog.weight;
    newDog.name = name ? name : newDog.name;
    return newDog;
}
var mySquare = animal({ name: "xixi" });
var father = {};
var girl = {};
father.height = '170cm';
girl.height = father.height;
girl.interest = '热爱工作';
girl.habit = '喜欢吃';
// task 5
var Student = /** @class */ (function () {
    function Student(name, id) {
        this.work = 'study';
        this.job = 'student';
        this.name = name;
        this.id = id;
    }
    return Student;
}());
var zhang = new Student('zhang', 222);
console.log(zhang.id);
