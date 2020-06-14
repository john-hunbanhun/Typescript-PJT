export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3]; //非推奨の書き方
let strings2: Array<string> = ["Tokyo", "Osaka", "Kyoto"];

let strings: string[] = ["TypeScript", "JavaScript", "CoffeeScript"];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 40],
];

let hairetsu: (number | boolean | string)[] = [1, false, "Japan"]; //union + Array

let hairetsu2:[number,boolean,string] = [1, false, "Japan"]; //tupple
