export {};

let BMI: (height: number, weight: number) => number = (
  //変数BMIに関する型アノテーション BMIの型は関数ですよ～って意味
  height: number,
  weight: number
): number => weight / (height * height); //アロー関数の型アノテーション

console.log(BMI(1.74, 73));
