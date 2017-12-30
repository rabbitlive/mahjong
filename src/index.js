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
   * @param {Array<Card>} cards
   */
  go(cards) {

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
const current = 0;
const A = new User('A');
const B = new User('B');
const C = new User('C');
const D = new User('D');
const users = [A, B, C, D];

for(let i = 0, j = 0; i < 52; i++) {
  users[j].getCard(cards.pop());
  j = (1 + j) % 4;
}

function log() {
  users
    .forEach(user => {
      user.start();
      console.log(user.toString());
    });

  console.log('Cards:');
  console.log(cards.map(String).join(' '));
  console.log("");
  console.log('Next: ' + cards[0].toString());
  console.log("");
  console.log('Next User: ' + users[current].id);
}

function loop() {
  log();
  process.stdout.write("Please enter user cards index: ");
}


function main() {

  process.stdin.resume();
  loop();
  process.stdin.once("data", function (data) {
    loop(data.toString().trim());
  });
}

main();
