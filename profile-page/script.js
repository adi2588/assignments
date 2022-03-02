console.log("page loaded...");
var list4 = document.querySelector("#id1")
var list5= document.querySelector("#id2")

function change(element){
    newname.innerHTML = "Aditya Gupta";

}
function remove(element){
    document.getElementById(element).remove() ;
}


function accept1(element){
    document.getElementById(element).remove() ;
    alert("The request has been added");
    document.getElementById("list3").appendChild(list4);
    
}

function accept2(element){
    document.getElementById(element).remove() ;
    alert("The request has been added");
    document.getElementById("list3").appendChild(list5);
    
}
