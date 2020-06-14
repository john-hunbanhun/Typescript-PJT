export {};

type Mojiretsu = string; //type-aliasする場合は、先頭必ず大文字

let name: Mojiretsu = "hoge";
console.log({ name });

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;
const example1 = {
  name: "hoge",
  age: 25,
  Year: 1994,
};

const example2: Profile2 = {
  name: "foo",
  age: 22,
  Year: 1998,
};


