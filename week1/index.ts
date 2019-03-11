// task 1
const list: number[] = [1, 2, 3, 4, 5]
list.pop()
list.push(4)
list[2] = 5
const element: number = list[2]
console.log('task 1 output: ', element, list)

// task 2
let myTuple: [number, string] = [2, 'haha']
myTuple.pop()
myTuple[1] = 'heihei'
console.log('task 2 output: ', myTuple)

// task 3
console.log('---------------task 3-----------------')

class Animal {
  species: string = 'animal'

  constructor() {
    console.log(`创造了一只${this.species}`)
  }
}

class Dog extends Animal {
  name: string = 'dog'
  nickName: string

  constructor(nickName: string) {
    super()
    this.nickName = nickName
    console.log(`创造了一只${this.name}，它的名字叫做 ${this.nickName}`)
  }

  jump() {
    console.log(`${this.nickName}跳了起来`)
  }

  run(current: number) {
    console.log(`${this.nickName} 跑了 ${current} 米`)
  }
}

class Cat extends Animal {
  name: string = 'cat'
  nickName: string

  constructor(nickName: string) {
    super()
    this.nickName = nickName
    console.log(`创造了一只${this.name}，它的名字叫做 ${this.nickName}`)
  }

  jump() {
    console.log(`${this.nickName}跳了起来`)
  }

  run(current: number) {
    console.log(`${this.nickName} 跑了 ${current} 米`)
  }
}

let haha = new Dog('haha')
let jack = new Cat('jack')
haha.jump()
haha.run(5)
jack.jump()
jack.run(2)
