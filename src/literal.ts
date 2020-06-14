export {};

type Week = "日" | "月" | "火" | "水" | "木" | "金" | "土";

let dayOfTheWeek: Week = "日"; //Literal型
dayOfTheWeek = "月";

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

let month: Month = 1;
month = 12;
// month = 13;
