interface GunInterface {
  name: string
  bullet: BulletInterface
  bulletNumber: number
  addBullet(bulletNumber: number)
  toggleBullet(newBullet: BulletInterface)
  shut(target: HumanInterface)
}

interface HumanInterface {
  name: string
  blood: number
}

interface BulletInterface {
  name: string
  damage: number
}

class Human {
  name: string
  blood: number = 100
  weapon: GunInterface

  constructor(name: string) {
    console.log(`${name}闪亮登场`)
    this.name = name
  }

  equipWeapon(weapon: GunInterface) {
    console.log(`${this.name}装备了${weapon.name}`)
    this.weapon = weapon
  }

  addBullet(bulletNumber: number) {
    console.log(`${this.name}补充了${bulletNumber}发子弹`)
    this.weapon.addBullet(bulletNumber)
  }

  toggleBullet(newBullet: BulletInterface) {
    console.log(`${this.name}切换了${newBullet.name}子弹`)
    this.weapon.toggleBullet(newBullet)
  }

  shut(target: HumanInterface) {
    console.log(`${this.name}手里拿着${this.weapon.name},向${target.name}开了一枪，${target.name}目前剩余血量：${target.blood}`)
    this.weapon.shut(target)
  }

  printState() {
    console.log(`${this.name}手里拿着${this.weapon.name},目前剩余血量：${this.blood}`)
  }
}

class Gun {
  name: string;
  bullet: BulletInterface;
  bulletNumber: number;

  constructor(name: string) {
    this.name = name
  }

  shut(target: HumanInterface) {
    target.blood -= this.bullet.damage
  }

  addBullet(bulletNumber: number) {
    this.bulletNumber += bulletNumber
  }

  toggleBullet(newBullet: BulletInterface) {
    this.bullet = newBullet
  }
}

class Bullet {
  name: string
  damage: number = 1

  constructor(name: string, damage: number = 1) {
    this.name = name
    this.damage = damage
  }
}

let zhao = new Human('赵匡胤')
let li = new Human('李白')

let ak47 = new Gun('ak47')
let normalBullet = new Bullet('普通', 2)
zhao.equipWeapon(ak47)
zhao.toggleBullet(normalBullet)
zhao.addBullet(20)
zhao.printState()

li.equipWeapon(ak47)
li.toggleBullet(normalBullet)
li.addBullet(20)
li.printState()

zhao.shut(li)
zhao.shut(li)
zhao.shut(li)
li.shut(zhao)
