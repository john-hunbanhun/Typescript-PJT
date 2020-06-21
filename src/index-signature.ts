export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

// let profile: { name?: string } = {};
// let profile: { [index: string]: string | number } = {}; //indexSignature
let profile: Profile = {
  name: "Hoge",
  underTwenty: false,
};
let test: { [index in string | number]?: string | number } = {};

test.name = "nyahoko";
test[2] = 2;
console.log(test);
// How to write index signatures
// { [ index: typeForIndex ]:typeForValue }

profile.name = "Hoge";
profile.age = 25;
profile.nationality = "Japan";
profile.underTwenty = true;

const obj: { [key in "a" | "b"]?: number } = {
  //indexSignature
  a: 123,
};
obj.b = 2;
// obj.c = 3;
