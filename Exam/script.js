var pic2 = document.querySelector(".stone")

function change(){
    if (pic2.src.match("images/stonepunk.png")){
    document.getElementsByClassName('stone')[0].src = "images/pixel-ninjas-2.png";
    }else{
        pic2.src = "images/stonepunk.png";
    }
}

///function revert(){
   /// document.getElementsByClassName('stone')[0].src = "images/stonepunk.png";
///}

function update(){
alert("The Game is supported on Linux")
}

var count = document.querySelector(".cart-count")
function buy(){
count.innerHTML++;
}