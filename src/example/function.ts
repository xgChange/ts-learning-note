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

interface Card {
  suit: string,
  card: number
}
interface Deck {
  suits: string[],
  cards: number[],
  createCardPicker(this: Deck): () => Card
}

const deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
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

// interface SeFunc {
//   (n1: number, n2: number): number
// }

// let ccc: SeFunc = (n1: number, n2: number): number => {
//   return n1 + n2
// }

// console.log(ccc(1, 2)) 

let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number; }[]): number
function pickCard(x: number): {suit: string, card: number }
function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  }
  // Otherwise just let them pick the card
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [{ suit: 'diamonds', card: 2 }, { suit: 'spades', card: 10 }, { suit: 'hearts', card: 4 }]
let pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: 'tom'
}

const cat: Cat = {
  name: 'cat',
  run: () => {}
}

let tom: Animal = cat

enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S'}
console.log(Days)
