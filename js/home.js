console.log(window.localStorage.NamePerson);
var nameUser = window.localStorage.NamePerson;
document.querySelector("h5.name").innerHTML = nameUser;
document.querySelector("h1").innerHTML = `Welcome ${nameUser}`;
document.querySelector(".log").addEventListener("click",function(){
    window.location = "../index.html";
})