// const arr: [string, number] = ['', 2]

enum Roles {
  SUPER ,
  ADMIN,
  USER = 7
}

const s: Roles = Roles.SUPER

const arr: any[] = [2, 'f']

const a: any[] = arr
a[0] = 44

let x: [string, number] = ['hello', 2]
x = ['fff', 9] // Error
console.log(a, arr, s, x)
export {}