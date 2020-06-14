export {};

type Pitcher1 = {
  Speed: number;
};

type Batter1 = {
  Avg: number;
};

const DaimajinSasaki: Pitcher1 = {
  Speed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  Avg: 0.367,
};

// type TwoWayPlayer = {
//   Speed: number;
//   Avg: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1; //intersection型

const OtaniShohei: TwoWayPlayer = {
  Speed: 165,
  Avg: 0.286,
};
