/*function comment(){
    var x = document.getElementById("C").value;
    //print(x);
    document.getElementById("tx").innerHTML = "Введите правильный логин и пароль!";
}*/

function comment(){
    var x = document.getElementById("C").value;
    if(x == "exit") {
        document.location.href='Authorization.html';
    }
    else{
        document.getElementById("tx").innerHTML = x;
    }
}