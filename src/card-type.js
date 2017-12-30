/**
 * Cards
 */

class CardType {
  constructor(id, show) {
    this.id = id;
    this.show = show;
  }
  toString() {
    return this.show;
  }
}

export const W_1 = new CardType(1, '一万');
export const W_2 = new CardType(2, '二万');
export const W_3 = new CardType(3, '三万');
export const W_4 = new CardType(4, '四万');
export const W_5 = new CardType(5, '五万');
export const W_6 = new CardType(6, '六万');
export const W_7 = new CardType(7, '七万');
export const W_8 = new CardType(8, '八万');
export const W_9 = new CardType(9, '九万');

export const S_1 = new CardType(10, '一条');
export const S_2 = new CardType(11, '二条');
export const S_3 = new CardType(12, '三条');
export const S_4 = new CardType(13, '四条');
export const S_5 = new CardType(14, '五条');
export const S_6 = new CardType(15, '六条');
export const S_7 = new CardType(16, '七条');
export const S_8 = new CardType(17, '八条');
export const S_9 = new CardType(18, '九条');

export const T_1 = new CardType(19, '一筒');
export const T_2 = new CardType(20, '二筒');
export const T_3 = new CardType(21, '三筒');
export const T_4 = new CardType(22, '四筒');
export const T_5 = new CardType(23, '五筒');
export const T_6 = new CardType(24, '六筒');
export const T_7 = new CardType(25, '七筒');
export const T_8 = new CardType(26, '八筒');
export const T_9 = new CardType(27, '九筒');

export const F_1 = new CardType(28, '东风');
export const F_2 = new CardType(29, '南风');
export const F_3 = new CardType(30, '西风');
export const F_4 = new CardType(31, '北风');

export const J_1 = new CardType(32, '红中');
export const J_2 = new CardType(33, '发财');
export const J_3 = new CardType(34, '白板');
