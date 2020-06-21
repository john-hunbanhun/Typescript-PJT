export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {} //TypeScriptは仕様上、単一継承しか出来ない

interface Kenja {
  ionazun(): void;
} //interfaceは、抽象クラスのような機能も役割持つ

interface Sennshi {
  attack(): void;
}

class Jiro implements Kenja, Sennshi {
  ionazun(): void {
    console.log("ionazun");
  }
  attack(): void {
    console.log("attack");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.attack();