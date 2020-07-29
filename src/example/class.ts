// 类的修饰符
// class Person {
//   protected name: string = '222'
//   constructor(name: string) { this.name = name }
// }

// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`
//   }
// }

// const howard = new Employee('Howard', 'Sales')
// console.log(howard.getElevatorPitch(), howard)
// console.log(howard.name) // 错误

// 参数属性, 构造函数中的修饰符可以 声明并初始化一个私有成员
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   // name: string
//   constructor(private name: string) {
//     // this.name = name
//     console.log(this.name)
//   }
// }
// new Octopus('ff')

// 静态属性
// class Grid {
//   static origin = {x: 5, y: 5};
//   calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//     const xDist = (point.x - Grid.origin.x)
//     const yDist = (point.y - Grid.origin.y)
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
//   }
//   constructor (public scale: number) { }
// }

// const grid1 = new Grid(1.0)  // 1x scale
// const grid2 = new Grid(5.0)  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}))
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))

// 抽象类

// abstract class Department {

//   constructor(public name: string) {
//   }

//   printName(): void {
//     console.log('Department name: ' + this.name)
//   }

//   abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//   constructor() {
//     super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
//   }

//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.')
//   }

//   generateReports(): void {
//     console.log('Generating accounting reports...')
//   }
// }

// let department // 允许创建一个对抽象类型的引用
// // department = new Department() // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
// department.printName()
// department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在

class Greeter {
  static standardGreeting = 'Hello, there';
  greeting: string = ''
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    }
    else {
      return Greeter.standardGreeting
    }
  }
}

let greeter1: Greeter
greeter1 = new Greeter()
console.log(greeter1.greet(), greeter1)

const greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there!'
console.dir(greeterMaker)

const greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet(), greeter2)

export {}
