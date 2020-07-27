// const dd = Symbol('dd')
// const ff = Symbol('ff')
// const obj = {
//   c: Symbol(),
//   [dd]: '22',
//   [ff]: '11'
// }

// function test(p: symbol):string {
//   if(p === obj.c) {
//     console.log('ok')
//   }
//   return 'end'
// }

// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Reflect.ownKeys(obj))
// test(obj.c)

// const obj = {
//   [Symbol.hasInstance] (other) {
//     console.log(other)
//     return true
//   }
// }

// console.log({} instanceof <any>obj) 

// class MyArray extends Array {
//   // static get [Symbol.species]() {
//   //   return this
//   // }
// }

// const arr = new MyArray(1,2,3,4)
// const b = arr.map(item => item * 2)
// console.log(b instanceof Array)
export {}