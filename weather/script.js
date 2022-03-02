var info = document.querySelector(".footer")
var temp1 = document.querySelectorAll("#tempvalue")
var temp2 = document.querySelectorAll("#tempvalue1")
var  city = document.querySelector

function accept(element){
    info.remove(info) ;
}

function city(){
    alert('Loading Weather Report for' ;
}

function change(x){
    if (x == 2){
    for(var i=0; i<temp1.length; i++){
    temp1[i].innerHTML = (Math.round((Number(temp1[i].innerHTML) - 32) * 5/9));
    temp2[i].innerHTML = (Math.round((Number(temp2[i].innerHTML) - 32) * 5/9));
    }
    }   
    else if(x == 1){
            for(var i=0; i<temp1.length; i++){
                temp1[i].innerHTML = (Math.round((Number(temp1[i].innerHTML) * 9/5) +32));
                temp2[i].innerHTML = (Math.round((Number(temp2[i].innerHTML) * 9/5) +32));
            }
    }
}

