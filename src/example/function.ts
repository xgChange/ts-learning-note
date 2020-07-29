/**
 * @description ts函数学习
 */

// 函数定义类型
const a1 = function (x: number, y: number): number {
  return x + y
}

// 完整函数类型
// const a2: (n1: string, n2: string) => number = function(n1: number, n2: number): number {xxx}
const a2 = (...args: any[]): void => {
  // return x+ y
  console.log(args)
}

a2(undefined, 1)
// console.log(a1, a2)

// 关于this
const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52)
      const pickedSuit = Math.floor(pickedCard / 13)

      return {suit: this.suits[pickedSuit], card: pickedCard % 13}
    }
  }
}

const cardPicker = deck.createCardPicker()
const pickedCard = cardPicker()

console.log(pickedCard)

interface SeFunc {
  (n1: number, n2: number): number
}

let ccc: SeFunc = (n1: number, n2: number): number => {
  return n1 + n2
}

console.log(ccc(1, 2)) 