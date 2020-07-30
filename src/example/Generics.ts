/**
 * @description 泛型
 */

//  基本使用
function echo<T>(arg: T): T {
  return arg
}

// 泛型变量
function Gvar<T>(arg: Array<T>): T[] {
  console.log(arg)
  return arg
}

// 泛型类型
function Gtype<T>(arg: T): T {
  return arg
}

interface Type {
  <T>(arg: T): T
}

let dd: Type = Gtype

// 类型约束
interface HaveLength {
  length: number
}

function echoHaveLength<T extends HaveLength>(arg: T): T {
  // console.log(arg.length)
  return arg
}

console.log(echoHaveLength({ a: 2, length: 3 }))

export {}
