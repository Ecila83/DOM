

document.addEventListener("keyup", formul);
function formul() {
    let firstName = document.getElementById("firstname").value;
    document.getElementById("display-firstname").innerHTML = firstName;

    let age = document.getElementById("age").value;
    if (age < 18){
        document.getElementById("a-hard-truth").innerHTML = age;
        document.getElementById("a-hard-truth").style.visibility = "hidden";
    } else {
        document.getElementById("a-hard-truth").innerHTML = age;
        document.getElementById("a-hard-truth").style.visibility = "visible";
    }

    let pwd = document.getElementById("pwd").value;
    let pwdConfirm = document.getElementById("pwd-confirm").value;
    if (pwd.length < 6 || pwd !=  pwdConfirm){

        document.getElementById("pwd").style.borderColor = "red";
        document.getElementById("pwd-confirm").style.borderColor = "red";

    }else{
  
        document.getElementById("pwd").style.borderColor = "";
        document.getElementById("pwd-confirm").style.borderColor = "";
    }

    

}
function dark(){
    if(darkModeToggle.value === "dark"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

let darkModeToggle = document.getElementById("toggle-darkmode");
darkModeToggle.addEventListener('click', dark);


    