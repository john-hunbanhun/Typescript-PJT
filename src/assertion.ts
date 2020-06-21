export {};

let name: any = "Hoge";

let length = (<string>name).length;
let length2 = (name as string).length;
let length3 = name.length as number;
// length = "foo";
