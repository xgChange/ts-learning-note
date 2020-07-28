// interface testName {
//   readonly firstName: string,
//   lastNameObj?: {
//     name: string
//   },
//   [propName: string]: any // 索引签名
// }

// const p: testName = {
//   firstName: 'ff'
// }
// // p.firstName = '111'

// function test(p: testName): string {
//   return p.firstName + p.c
// }

// console.log(test({firstName: 'xx', lastNameObj: {name: '111'}, c: 222}))

// 接口

// interface labelledVal {
//   label: string
//   size: number
// }

// function printLabel(labelledObj: labelledVal) {
//   const {size} = labelledObj
//   console.log(size)
// }

// const myObj = { size: 10, label: 'Size 10 Object', c: '2' }
// console.log(printLabel(myObj))

// 可选接口

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig) {
//   const newSquare = {color: 'white', area: 100}
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// console.log(createSquare({color: 'black'}))

// readonly 只读

// const a: number[] = [1, 2, 3, 4]
// const ro: ReadonlyArray<number> = a
// a[1] = 33
// console.log(a, ro)

// 定义 函数接口

interface AddFunc {
  // 调用签名
  (num1: number, num2: number): number
}

const addfunc: AddFunc = (n1, n2) => n1 + n2
console.log(addfunc(2, 43))

// 索引签名
interface indexSigned {
  [index: number]: string
}
const arr: indexSigned = { 1: '1' }
console.log(arr)

// 类的接口实现
interface ClockInterface {
  currentTime: string
  setTime(d: string): void
}

class Clock implements ClockInterface {
  currentTime: string = '11'
  setTime(d: string) {
    this.currentTime = d
  }
  // constructor(d: number, h: number) {
  //   this.currentTime = `${d}: ${h}`
  // }
}

// const c = new Clock()
// console.log(c)

// 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  const counter = <Counter>function (start: number) {
    console.log(start)
  }
  counter.interval = 123
  counter.reset = function () {
    console.log('调用reset')
  }
  return counter
}

const c = getCounter()
c(10)
c.reset()
c.interval = 5.0
console.dir(c)

// 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class ddd extends Control implements SelectableControl {
  constructor() {
    super()
    // this.state = 222
  }
  select(): void {
    console.log('fff')
  }
}

console.log(new ddd())
