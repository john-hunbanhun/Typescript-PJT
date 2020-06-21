export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = "Yuma";
  static lastName: string = "Ando";

  static work() {
    //"Hey, guys! This is Yuma. Are you interested in TS? Let's dive into TS!";
    return `Hey, guys! This is ${this.firstName}. Are you interested in TS? Let's dive into TS!`;
  }
}

//let me = new Me();
//console.log(me.isProgramer);

console.log(Me.isProgramer);
console.log(Me.work());
