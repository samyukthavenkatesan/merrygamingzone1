<script>
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("but");

function register(){
x.style.left="-400px";
y.style.left="50px";
z.style.left="110px";
}

function login(){
x.style.left="50px";
y.style.left="450px";
z.style.left="0px";
}

function regvalidate(){
rname=document.getElementById("rusername").value;
rpass=document.getElementById("rpassword").value;
alert(rname);
alert(rpass);
}

function loginvalidate(){
lname=document.getElementById("lusername").value;
lpass=document.getElementById("lpassword").value;
if(lname==rname) && (lpass=rpass){
alert("login success");
window.location="home.html";
return false;}
else
{
alert("login failed");
}
}



</script>