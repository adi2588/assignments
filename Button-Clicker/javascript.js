function change(x){   
    document.getElementsByClassName('btn')[0].innerText = 'logout';
    document.getElementsByClassName('btn')[0].style.backgroundColor = 'green';
    }

function remove(){
document.getElementsByClassName('buttn')[0].style.display = 'none';
}

function likes(element) {
    alert(" The ninja was liked");
    document.getElementsByClassName(element)[0].innerHTML++ ;
}
