export {};

let BMI: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  } else {
    console.log("ドンマイ");
  }
  return bmi;
};

BMI(1.74, 72, true);

// BMI(身長,体重,console.logで出力するかどうか?)
// BMI(1.74,72,true);
// BMI(1.74,72,false);
//// BMI(1.74,72);
