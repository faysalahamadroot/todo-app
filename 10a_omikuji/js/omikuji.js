"use strict";

let n = "";
let nBefore = "";
let soundEndflag = "0";
let music; // Declare music outside for soundControl to access globally

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
const omikujiText = document.getElementById("omikujiText");

btn1.addEventListener("click", function () {
  // サウンドの終了処理
  if (soundEndflag === "1") {
    soundControl("end", "");
  }

  let resultText = ["大吉!!!!!", "吉!!!!", "中吉!!!", "小吉!!", "末吉!", "凶"];
  let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "#1e90ff"];
  let resultFontSize = ["90px", "80px", "70px", "60px", "50px", "40px"];
  let resultMaxSpeed = [10, 10, 8, 5, 5, 5];
  let resultMaxSize = [30, 30, 20, 15, 20, 20];
  let resultImage = [
    "img/star.png",
    "img/sakura_hanabira.png",
    "img/sakura_hanabira.png",
    "img/sakura_hanabira.png",
    "img/leaf.png",
    "img/snowflakes.png"
  ];
  let resultSound = [
    "sound/omikuji_sound1.mp3",
    "sound/omikuji_sound2.mp3",
    "sound/omikuji_sound2.mp3",
    "sound/omikuji_sound3.mp3",
    "sound/omikuji_sound2.mp3",
    "sound/omikuji_sound4.mp3"
  ];

  n = Math.floor(Math.random() * resultText.length);
  omikujiText.textContent = resultText[n];
  omikujiText.style.color = resultColor[n];
  omikujiText.style.fontSize = resultFontSize[n];

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
}, false);

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
