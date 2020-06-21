export {};

class Person {
  name: string;
  age: number; //プロパティとしてのnameとageの型の宣言はクラスの中のトップレベルでしてあげる
  constructor(name: string, age: number) {
    //constructorは言語仕様上、戻り値の型は書いてはいけない！※引数には型付けてあげてね。
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name:${this.name} , age:${this.age}`;
  }
}
let taro = new Person("taro", 23);
console.log(taro);
console.log(taro.profile());
