

var pw=document.getElementById("pw").value;
var pw2 =document.getElementById("pw2").value;

function check(){
    if(pw===0){
        document.getElementById("p").innerHTML = "Nuk mund te jete e zbrazet";
        
    }if(pw===pw2){
        document.getElementById("p").innerHTML = "Passwordet duhet te jene te njejta";
    }
}
