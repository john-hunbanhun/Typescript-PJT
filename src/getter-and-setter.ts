export {};

// *owner
//   *所有者
//   *初期化時に設定できる。
//   *途中で変更できない.
//   *参照できる.
// *secretNumber
//   *個人番号
//   *初期化時に設定できる。
//   *途中で変更可能.
//   *参照できない.

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    //getter : 参照する用に作られたメソッド getというキーワード
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    //setter : 外部から変更可能にするメソッド setというキーワード
    this._secretNumber = secretNumber;
  }
  debugPrint(): string {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard("Ando", 1234567890);
// card.owner = "hoge";
console.log(card.owner);
// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 1234567;
console.log(card.debugPrint());
console.log(card.secretNumber);
