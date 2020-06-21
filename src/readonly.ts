export {};

class VisaCard {
  constructor(public readonly owner: string) {}
  //easy initialize. publicは省略可。だが省略しない方が自明でpublicなんだなと分かるので良いとされる.
}
const card = new VisaCard("Ando");
// card.owner = "hogehoge";
// console.log(card.owner);

