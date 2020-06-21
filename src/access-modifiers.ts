export {};

class Person {
  public name: string;
  protected age: number; //プロパティとしてのnameとageの型の宣言はクラスの中のトップレベルでしてあげる
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    //constructorは言語仕様上、戻り値の型は書いてはいけない！※引数には型付けてあげてね。
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name:${this.name} , age:${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); //親クラスのコンストラクタ内の初期化が行われる
  }
  profile(): string {
    return `name:${this.name} , age:${this.age}, nationality:${this.nationality}`;
  }
}

let taro = new Person("taro", 23, "Japan");
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
let hanako = new Android("hanako", 45, "USA");
console.log(hanako.profile());
