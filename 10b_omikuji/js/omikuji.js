"use strict";

let n = "";
let nBefore = "";
let soundEndflag = "0";
let w_sound;
let music;

window.addEventListener("DOMContentLoaded", function () {
  // ヘッダーのテキストエフェクト
  $("header").textillate({
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 2000,
    autoStart: true,
    in: {
      effect: "fadeInLeftBig",
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: true // half-width space fixed here
    }
  });

  // おみくじボタンをボヤァと表示
  $(function () {
    ScrollReveal().reveal("#btn1", { duration: 9000 });
  });

  setTimeout(function () {
    let popMessage = "いらっしゃい！おみくじ引いてって";
    window.alert(popMessage);
  }, 5000);
}, false);

// おみくじボタンイベント
const btn1 = document.getElementById("btn1");
//const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

btn1.addEventListener("click", function () {
  // サウンドの終了処理
  if (soundEndflag === "1") {
    soundControl("end", "");
  }

  let resultText = [
    "img/daikichi.png",
    "img/chukichi.png",
    "img/syokichi.png",
    "img/suekichi.png",
    "img/daikyo.png"
  ];

  let resultMaxSpeed = [10, 10, 8, 5, 5];
  let resultMaxSize = [30, 30, 30, 40, 30];
  let resultImage = [
      "img/star.png",
      "img/sakura_hanabira.png",
      "img/water1.png",
      "img/redLeaves4.png",
      "img/snowflakes.png"
  ];
  let resultSound = [
      "sound/omikuji_sound1.mp3",
      "sound/omikuji_sound2.mp3",
      "sound/omikuji_sound3.mp3",
      "sound/omikuji_sound4.mp3",
      "sound/omikuji_sound5.mp3"
  ];

  //n = Math.floor(Math.random() * resultText.length);
  while (n == nBefore){
    n = Math.floor(Math.random()* resultText.length);
  }
  nBefore = n;
  
  omikujiText.src = resultText[n];
  omikujiText.classList.add("omikujiPaper");
  omikujiText.addEventListener(
    "animationend",
    function(){
    omikujiText.classList.remove("omikujiPaper");
    },
    false
  );
  // Sound start
  let w_sound = resultSound[n];
  soundControl("start", w_sound);
  soundEndflag = "1";

  // Snowfall effect
  $(document).snowfall("clear");
  $(document).snowfall({
    maxSpeed: resultMaxSpeed[n],
    minSpeed: 1,
    maxSize: resultMaxSize[n],
    minSize: 1,
    image: resultImage[n]
  });
}, 
false
);

// サウンドコントロール関数
function soundControl(status, w_sound) {
  if (status === "start") {
    music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();
  } else if (status === "end") {
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
  }
}
