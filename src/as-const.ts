export {};

let name = "Hogehoge" as const;

name = "Hogehoge"; //プリミティブ型(string,number,boolean)は設定した値での書き込みしか出来ない

let nickname = "Foo" as const;
nickname = "Foo";
let profile= {
  name: "Hoge",
  height: 175,
} as const; //constアサーションでオブジェクトのプロパティすべてreadonlyにしてくれる

// profile.name = "Hoge";
// profile.height = 180;
