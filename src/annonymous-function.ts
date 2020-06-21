export {};

let BMI: (height: number, weight: number) => number = function (
  //変数BMIへのアノテーション
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(BMI(1.75, 72));
