var t1=0;
var t2=0;
var t3=0;
var t4=0;
function fClick(){
    var word = /^[A-Za-z]+$/;
    if(document.getElementById("name").value==""){
        document.getElementById("error-name").style.display = "block";
        document.getElementById("error-name").innerHTML="Please enter first name";
        t1=1;
    }else if(word.test(document.getElementById("name").value) == false) {
        document.getElementById("error-name").style.display = "block";
        document.getElementById("error-name").innerHTML="Please enter first name";
        t1=1;
        return false;
     }else{
        document.getElementById("error-name").style.display = "none";
        t1=0;
    }

    if(document.getElementById("sname").value==""){
        document.getElementById("error-sname").style.display = "block";
        document.getElementById("error-sname").innerHTML = "Please enter last name";
        t2=1;
    }else if(word.test(document.getElementById("sname").value) == false) {
        document.getElementById("error-sname").style.display = "block";
        document.getElementById("error-same").innerHTML="Please enter last name";
        t2=1;
        return false;
     }else{
        document.getElementById("error-sname").style.display = "none";
        t2=0;
    }

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(document.getElementById("email").value==""){
        document.getElementById("error-mail").style.display = "block";
        document.getElementById("error-mail").innerHTML="Please enter email address";
        t3=1;
    }else if(reg.test(document.getElementById("email").value) == false) {
        document.getElementById("error-mail").style.display = "block";
        document.getElementById("error-mail").innerHTML="Please enter valid email address";
        t3=1;
        return false;
     }else{
        document.getElementById("error-mail").style.display = "none";
        t3=0;
    }

    if(document.getElementById("message").value.length<1){
        document.getElementById("error-message").style.display = "block";
        document.getElementById("error-message").innerHTML = "Please enter your message";
        t4=1;
    }else{
        document.getElementById("error-message").style.display = "none";
        t4=0;
    }
    
    if(t1==0 && t2==0 && t3==0 && t4==0){
       document.getElementById("myNav").style.display = "block";
       document.body.style.overflow = "hidden";      
        document.getElementById("name").value="";
        document.getElementById("sname").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value=""; 
        document.getElementsByClassName("label-register")[0].style.top="44px";
        document.getElementsByClassName("label-register")[1].style.top="44px";
        document.getElementsByClassName("label-register")[2].style.top="44px";
        document.getElementsByClassName("label-register")[3].style.top="44px";
    }
}


$("#register-form").submit(function(e) {
    e.preventDefault();
});


  
function closeNav() {
    document.getElementById("myNav").style.display = "none";
    document.body.style.overflow = "auto";     
}

function inputClick1(){
    document.getElementsByClassName("label-register")[0].style.top="15px";
}
function inputClick2(){
    document.getElementsByClassName("label-register")[1].style.top="15px";
}
function inputClick3(){
    document.getElementsByClassName("label-register")[2].style.top="15px";
}
function inputClick4(){
    document.getElementsByClassName("label-register")[3].style.top="15px";
}

function inputPressKey1(){
    document.getElementsByClassName("label-register")[0].style.top="15px";
}

function inputPressKey2(){
    document.getElementsByClassName("label-register")[1].style.top="15px";
}

function inputPressKey3(){
    document.getElementsByClassName("label-register")[2].style.top="15px";
}

function inputPressKey4(){
    document.getElementsByClassName("label-register")[3].style.top="15px";
}

if ($(window).width() < 600) {
    document.getElementsByClassName('one-blok')[0].setAttribute("data-aos", "fade-up");
    document.getElementsByClassName('one-blok')[1].setAttribute("data-aos", "fade-up");
}