export {};

function double(value: number): number; //シグネチャ 。あらかじめ宣言しておく必要がある、これから使ってくよーってね
function double(value: string): string; //型制約の機能を担保している
function double(value: any): any {
  //実体には型制約はしない。シグネチャで型制約を行う。なのでany型にしている
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double("hoge "));
