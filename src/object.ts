export {};

let profile1: object = { name: "Ando" };
profile1 = { birthYear: 1994 }; //objectで型アノテーションは制約が甘い ※想定外のデータが混入が起こってしまう

let profile2: { name: string } = { name: "Ando" }; //{}で指定する型はプロパティに型アノテーションができる
profile2 = { name: "Nimo" };
