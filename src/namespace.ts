export {};

namespace Japanese {
  //namespace:名前空間 classの名前の競合を解決する
  export namespace Tokyo {
    //exportをつけることで、外の空間からアクセスできるようにする
    export class Person {
      //export することで、外の空間からアクセスできるようになる
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      //export することで、外の空間からアクセスできるようになる
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("Hoge");
const meOsaka = new Japanese.Osaka.Person("Foo");
console.log(me.name);
console.log(meOsaka);

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);
