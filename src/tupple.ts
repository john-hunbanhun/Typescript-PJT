export {};

let profile: [string, number] = ["Ando", 25]; //tuple type は型の順序性を見ている
let profile2: (string | number)[] = ["Ando", 25]; //union + array は型の順序性は見ていない
// profile = [26, "Ando"];
