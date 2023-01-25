const btn1 = document.querySelector(".btn1");

const btn2 = document.querySelector(".btn2");

const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", function(){

    var audioMain = new Audio("epic.mp3");
    audioMain.play();

});

btn2.addEventListener("click", function(){

    var audiosec = new Audio("epic.mp3");
    audiosec.play();

});

btn3.addEventListener("click", function(){

    var audiothird = new Audio("epic.mp3");
    audiothird.play();

});
