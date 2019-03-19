// task 1

enum tempEnum {
	a,
	b,
	c,
	d
}

let tempAny: any = 'haha'

function tempFunction(): void {
	console.log('no return')
}

let tempNull: null = null
let tempUndefined: undefined = undefined
function tempNever(): never {
	let a: number = 1
	while (true) {
		a++
	}
}
let tempObject: object = {
	test: 1
}

// task2

// var tempVariable = 1
// let tempVariable = 2
// const tempVariable = 3

let answer = `typescript中，不能重复定义一个变量，var是最原始的声明变量的方式；let定义变量时会生成一个块级作用域；
              const一般定义常量，且定义变量后不能修改，否则会报错。但这只限于直接引用类型，因为间接引用类型声明的变量，变量实际保存的
              只是堆中的地址，所以定义数组和对象类型的变量时，修改里面的元素不会报错`

// task3
interface temp {
	name: string;
  weight?: number;
  [propName: string]: any;
}

function animal({name, height}: temp) {
  let newDog: any = {
    name: "haha",
    weight: 20
  };
  newDog.weight = height? height*2 : newDog.weight
  newDog.name = name ? name : newDog.name
	return newDog
}

var mySquare = animal({ name: "xixi" });
