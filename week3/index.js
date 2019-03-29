var Human = /** @class */ (function () {
    function Human(name) {
        this.blood = 100;
        console.log(name + "\u95EA\u4EAE\u767B\u573A");
        this.name = name;
    }
    Human.prototype.equipWeapon = function (weapon) {
        console.log(this.name + "\u88C5\u5907\u4E86" + weapon.name);
        this.weapon = weapon;
    };
    Human.prototype.addBullet = function (bulletNumber) {
        console.log(this.name + "\u8865\u5145\u4E86" + bulletNumber + "\u53D1\u5B50\u5F39");
        this.weapon.addBullet(bulletNumber);
    };
    Human.prototype.toggleBullet = function (newBullet) {
        console.log(this.name + "\u5207\u6362\u4E86" + newBullet.name + "\u5B50\u5F39");
        this.weapon.toggleBullet(newBullet);
    };
    Human.prototype.shut = function (target) {
        console.log(this.name + "\u624B\u91CC\u62FF\u7740" + this.weapon.name + ",\u5411" + target.name + "\u5F00\u4E86\u4E00\u67AA\uFF0C" + target.name + "\u76EE\u524D\u5269\u4F59\u8840\u91CF\uFF1A" + target.blood);
        this.weapon.shut(target);
    };
    Human.prototype.printState = function () {
        console.log(this.name + "\u624B\u91CC\u62FF\u7740" + this.weapon.name + ",\u76EE\u524D\u5269\u4F59\u8840\u91CF\uFF1A" + this.blood);
    };
    return Human;
}());
var Gun = /** @class */ (function () {
    function Gun(name) {
        this.name = name;
    }
    Gun.prototype.shut = function (target) {
        target.blood -= this.bullet.damage;
    };
    Gun.prototype.addBullet = function (bulletNumber) {
        this.bulletNumber += bulletNumber;
    };
    Gun.prototype.toggleBullet = function (newBullet) {
        this.bullet = newBullet;
    };
    return Gun;
}());
var Bullet = /** @class */ (function () {
    function Bullet(name, damage) {
        if (damage === void 0) { damage = 1; }
        this.damage = 1;
        this.name = name;
        this.damage = damage;
    }
    return Bullet;
}());
var zhao = new Human('赵匡胤');
var li = new Human('李白');
var ak47 = new Gun('ak47');
var normalBullet = new Bullet('普通', 2);
zhao.equipWeapon(ak47);
zhao.toggleBullet(normalBullet);
zhao.addBullet(20);
zhao.printState();
li.equipWeapon(ak47);
li.toggleBullet(normalBullet);
li.addBullet(20);
li.printState();
zhao.shut(li);
zhao.shut(li);
zhao.shut(li);
li.shut(zhao);
