"use strict";
window.addEventListener("DOMContentLoaded",
function() {
    
    // ヘッダーのテキストエフェクト
$("header").textillate({
    loop: false, // ループのオンオフ
    minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
    initialDelay: 2000, // 遅延時間
    autoStart: true, // アニメーションを自動的にスタート
    in: { // フェードインのエフェクトの詳細設定
        effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
        delayScale: 1.5, // 遅延時間の指数
        delay: 50, // 文字ごとの遅延時間
        sync: false, // trueはアニメーションをすべての文字に同時に適用
      　  shuffle: true // trueは文字を順番にではなく、ランダムに
        }
    });
    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
    ScrollReveal().reveal("#btn1", { duration: 9000 });
    });

    setTimeout(
        function(){
    
            let popMessage = "いらいっしゃい！おみくじ引いてって";
                window.alert("Hello this is Faysal");

            },
            "5000"

        );
    }, 
    false
);


//おみくじボタン
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function() {
        btn1.style.transition = "1s";
        let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶"];
        let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
        let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
        let resultMaxSpeed = [10,10,8,5,5,5];
        let resultMaxSize = [30,30,20,15,20,20];
        let resultImage = [
            "img/star.png",
            "img/sakura_hanabira.png",
            "img/sakura_hanabira.png",
            "img/sakura_hanabira.png",
            "img/leaf.png",
            "img/snowflakes.png"
        ];

        let n = Math.floor(Math.random() * resultText.length);
        btn1.textContent = resultText[n];
        btn1.style.color = resultColor[n];
        btn1.style.fontSize = resultFontSize[n];

        $(document).snowfall("clear");
        $(document).snowfall({
            maxSpeed: resultMaxSpeed[n],
            minSpeed: 1,
            maxSize: resultMaxSize[n],
            minSize: 1,
            image: resultImage[n]
        });
    }, false
);
