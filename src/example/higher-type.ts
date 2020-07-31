/**
 * @description 高级类型
 */

// 交叉类型
function A<T,U>(n1: T, n2: U): T&U {
  let result = {} as T&U
  for(let id in n1) {
    result[id] = n1[id] as any
  }
  for(let id in n2) {
    if(!((<any>result).hasOwnProperty(id))) {
      result[id] = n2[id] as any
    }
  }
  
  return result
}

class B {
  constructor(public name: string) {
    this.name = name
  }
}

interface IC {
  toDo(): void
}

class C implements IC {
  toSay() {
    console.log('我去说')
  }
  toDo() {
    console.log('我去做')
  }
}

// let result = A(new B('jjjddd'), new C())
// console.log(result)

// 联合类型 ，只能访问他们公用的属性或者方法
// interface Bird {
//   fly(): void
//   layEggs(): void
// }

// interface Fish {
//   swim(): void
//   layEggs(): void
// }

// function Pet(): Bird | Fish {
//   let result = {} as Bird | Fish
//   return result
// }

// Pet().layEggs()


function padLeft(value: string, padding: string | number | undefined) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'undefined') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

let fn = 'aa'

// console.log(padLeft('11', undefined)) 

export {}