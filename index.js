let cards = [
  "6a.gif",
  "6g.gif",
  "6j.gif",
  "6k.gif",
  "7a.gif",
  "7g.gif",
  "7j.gif",
  "7k.gif",
  "8a.gif",
  "8g.gif",
  "8j.gif",
  "8k.gif",
  "9a.gif",
  "9g.gif",
  "9j.gif",
  "9k.gif",
  "10a.gif",
  "10g.gif",
  "10j.gif",
  "10k.gif",
  "va.gif",
  "vg.gif",
  "vj.gif",
  "vk.gif",
  "da.gif",
  "dg.gif",
  "dj.gif",
  "dk.gif",
  "ka.gif",
  "kg.gif",
  "kj.gif",
  "kk.gif",
  "ta.gif",
  "tg.gif",
  "tj.gif",
  "tk.gif",
];

let pointGame = 0;
let pointChemi = 0;

let game_card1 = Math.floor(Math.random() * cards.length);
document.images[0].src = "deck/" + cards[game_card1];
pointGame = pointGame + point(game_card1);
let game_card2 = Math.floor(Math.random() * cards.length);
document.images[1].src = "deck/" + cards[game_card2];
pointGame = pointGame + point(game_card2);
let game_card3 = Math.floor(Math.random() * cards.length);
document.images[2].src = "deck/" + cards[game_card3];
pointGame = pointGame + point(game_card3);
document.getElementById("game").innerHTML =
  point(game_card1) +
  "+" +
  point(game_card2) +
  "+" +
  point(game_card3) +
  " = " +
  pointGame;

let str_chemi = "";
function cardChemi(J) {
  me_karti = Math.floor(Math.random() * cards.length);
  document.images[J].src = "deck/" + cards[me_karti];
  pointChemi = pointChemi + point(me_karti);
  if (J < 5) {
    str_chemi = str_chemi + point(me_karti) + " + ";
  } else {
    str_chemi = str_chemi + point(me_karti) + " = " + pointChemi;
    if (pointChemi > pointGame) {
      document.getElementById("result").innerHTML = "თქვენ მოიგეთ!";
      document.getElementById("btnGame").style.display = "block";
    } else {
      document.getElementById("result").innerHTML = "თქვენ წააგეთ :(";
      document.getElementById("btnGame").style.display = "block";
    }
  }
  document.getElementById("chemi").innerHTML = str_chemi;
}

function point(I) {
  if (cards[I].substring(0, 1) == "6") {
    p = 6; //point
  }
  if (cards[I].substring(0, 1) == "7") {
    p = 7;
  }
  if (cards[I].substring(0, 1) == "8") {
    p = 8;
  }
  if (cards[I].substring(0, 1) == "9") {
    p = 9;
  }
  if (cards[I].substring(0, 1) == "1") {
    p = 10;
  }
  if (cards[I].substring(0, 1) == "v") {
    p = 2;
  }
  if (cards[I].substring(0, 1) == "d") {
    p = 3;
  }
  if (cards[I].substring(0, 1) == "k") {
    p = 4;
  }
  if (cards[I].substring(0, 1) == "t") {
    p = 11;
  }
  return p;
}
