export {};

function BMI(height: number, weight: number): number {  //引数と戻り値の型アノテーション
  return weight / (height * height);
}

console.log(BMI(1.75, 73));
