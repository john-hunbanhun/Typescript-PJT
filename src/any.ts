import axios from "axios";

export {};

interface Article {
  id: number;
  title: string;
  description: string;
}

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then((res) => {
  let data: Article[] = res.data;
//   data = [
//     {
//       id: 1,
//       title: "title",
//       description: "hogehoge",
//     },
//   ];
  console.log(data);
});
