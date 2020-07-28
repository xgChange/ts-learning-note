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

interface AddFunc { // 调用签名
  (num1: number, num2: number): number
}

const addfunc: AddFunc = (n1, n2) => n1+n2
console.log(addfunc(2,43))