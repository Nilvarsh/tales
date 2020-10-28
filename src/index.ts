// import {} from "../node_modules/chart.js";
import { Calculator } from "./Calc";
import { DomEditor } from "./DomEditor";

class Character {
  title: string;
  name: string;
  nameEn: string;

  constructor(title: string, name: string, nameEn: string) {
    this.title = title;
    this.name = name;
    this.nameEn = nameEn;
  }

  nameSay() {
    console.log(`${this.name}です`);
  }

  titleSay() {
    console.log(`${this.title}出身です`);
  }
}

enum EventNames {
  Click = "click",
  MouseOver = "mouseover"
}

// 計算インスタンス
const calc = new Calculator();
// Domエディターインスタンス生成
const domEditor = new DomEditor();

// キャラクターインスタンス生成
const kures = new Character("ファンタジア", "クレス", "kures");
const stan = new Character("デスティニー", "スタン", "stan");
const rid = new Character("エターニア", "リッド", "rid");
let characters = [rid, stan, kures];

// イベントリスナーセット
const stop_button: HTMLElement | null = document.getElementById("stop-button");
if (stop_button !== null) {
  stop_button.addEventListener(EventNames.Click, () => {
    let random_num: number = calc.getRandomInt(characters.length);
    characters[random_num].titleSay();
    characters[random_num].nameSay();

    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      image.style.display = "none";
    });
    images[random_num].style.display = "block";
    domEditor.changeTextById("title-name", characters[random_num].title);
    domEditor.changeTextById("character-name", characters[random_num].name);
  });
}
