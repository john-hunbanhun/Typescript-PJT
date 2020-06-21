export {};

class Person {
  constructor(public name: string, protected age: number) {} //コンストラクタの初期化のくそ簡単なやり方。 
}                                                               //アクセス修飾子をコンストラクタ関数の引数に書いてあげるだけ

const me = new Person("Ando", 25);
console.log(me);
