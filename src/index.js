import * as CardType from './card-type';
import {
  random
} from 'lodash';

/**
 * Direction
 */
export const WEST = Symbol('WEST');
export const EAST = Symbol('EAST');
export const SOUTH = Symbol('SOUTH');
export const NORTH = Symbol('NORTH');


class Card {
  constructor(card) {
    this.card = card;
  }
  toString() {
    return this.card.toString();
  }
  static of(card) {
    return new Card(card);
  }
}

function sortCardsById(cards) {
  return cards.sort((a, b) => a.card.id - b.card.id);
}

class User {
  constructor(id) {
    this.id = id;
    this.cards = [];
  }

  getCard(card) {
    this.cards.push(card);
  }

  start(cards) {
    sortCardsById(this.cards);
  }

  /**
   * go
   *
   * @param {Number} index
   */
  go(index) {
    // play card
    console.log(`You choosed ${this.cards[index]}`);
    const len = this.cards.length;
    const newCards = [];
    for(let i = 0; i < len; i++)
      if(i !== index)
        newCards.push(this.cards[i]);
    this.cards = newCards;

    // get next card
    this.getCard(cards.shift());
  }

  toString() {
    return `\
User ${this.id}:
Cards: ${this.cards.map(String).join(' ')}
`;
  }
  static of() {
    return new User();
  }
}

function makeNewCards() {
  const cts = Object.values(CardType);
  const len = cts.length;
  const cards = []; // {}
  for(let i = 0; i < 4; i++) {
    for(var j = 0; j < len; j++) {
      // const idx = i * len + j;
      // cards[idx] = new Card(cts[j]);
      cards.push(new Card(cts[j]));
    }
  }

  for(let i = 0; i < 10; i++) {
    cards.sort(c => random(-1, 1));
  }

  return cards;
}



const cards = makeNewCards();
const A = new User('A');
const B = new User('B');
const C = new User('C');
const D = new User('D');
const users = [A, B, C, D];
let userIndex = 0;

for(let i = 0, j = 0; i < 52; i++) {
  users[j].getCard(cards.pop());
  j = (1 + j) % 4;
}

function log() {
  console.log('---------------DEBUG BEGIN------------------');
  users
    .forEach(user => {
      user.start();
      console.log(user.toString());
    });
  console.log('Remaining Cards:');
  console.log(cards.map(String).join(' '));
  console.log('');
  console.log('Remaining Cards Number:' + cards.length);
  console.log('');
  console.log('Next Card: ' + cards[0].toString());
  console.log('');
  console.log('Next User: ' + users[userIndex].id);
  console.log('');
  console.log(`Next Card Index -> ${users[userIndex]}
Index:  1    2    3    4    5    6    7    8    9   10   11   12   13 `);
  console.log('----------------DEBUG END-------------------');
  console.log('Please choose next index: ');
}

function loop() {
  log();
}

function turn(num, max) {
  return (num + 1) % max;
}



function main() {
  process.stdin.resume();
  loop();
  process.stdin.on("data", function (data) {
    const input = parseInt(data.toString().trim());
    if (isNaN(input) || input > 13 || input < 1) {
      console.log('Input Error, please retry: ');
      return;
    }
    users[userIndex].go(input - 1);
    userIndex = turn(userIndex, users.length);
    loop();
  });
}

main();
