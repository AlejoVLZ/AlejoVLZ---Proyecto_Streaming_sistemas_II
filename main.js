var user,pass
    user = "Alejandro";
    pass = 123;


function login(){
    var us,pas;

    us = document.getElementById("userbox").value
    pas = document.getElementById("passbox").value

    if(us == user && pas == pass ){

        window.location = ""

    }

}