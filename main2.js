function iconEye(){
    var x= document.getElementById("password");
    var y=document.getElementById("enable");
    var z = document.getElementById("disable");

    if (x.type === 'password'){
        x.type = "text";
        y.style.display ="block";
        z.style.display ="none";
    }
    else {
        x.type = "password";
        y.style.display ="none";
        z.style.display ="block";
    }
}

function showMessage() {
    document.getElementById('popup1').style.display='block';
}
function Clear() {
    loginform.getElementById("username").value = '';
    loginform.getElementById("password").value = '';
}
function showMessage1() {
    document.getElementById('popup').style.display='block';
}


function validation(){
    var user = "user";
    var pass= "user";
    var admin = "admin";
    var apass = "admin"
    var userName = document.getElementById("username").value
    var userPass = document.getElementById("password").value

    if((user == userName) && (pass == userPass)){
        showMessage(popup1);
        Clear();
    }
    else if((admin == userName) && (apass == userPass)) {
        showMessage1(popup);
        Clear();
    }
    else {
        alert('Credentials are incorrect');
    }
}