export {};

type User = {
  name: string;
  age: number;
};

function select<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { name: "hogehoge", age: 25 };
console.log(select<User, "name" | "age">(user, "age"));
type UserProps = keyof User;
