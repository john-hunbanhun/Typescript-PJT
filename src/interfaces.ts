export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {  //interfaceはオブジェクトの型を書き換えることができる
  name: string;
  age: number;
}

let object: ObjectType = {
  name: "hogehoge",
  age: 25,
};

let object2: ObjectInterface = {
  name: "hogehoge",
  age: 25,
};
