function exe(){
    var x = document.getElementById("L").value;
    var z = document.getElementById("P").value;
    if(x == "satret" && z == "190303") {
        document.getElementById("tx").innerHTML = x;
        document.location.href='website.html';
        document.getElementById("txV").innerHTML = z;
        document.location.href='website.html';
    }
    else{
        //document.location.href = 'Authorization.html';
        document.getElementById("tx").innerHTML = "Введите правильный логин и пароль!";
    }
}