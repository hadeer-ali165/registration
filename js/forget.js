var recetEmail = document.querySelector("#recetMail");
console.log(recetEmail);
var btnAncor = document.querySelector(".containBtn a");
console.log(btnAncor);
btnAncor.addEventListener("click",function(){
    if(window.localStorage.EmailPerson)
        {
            if(recetEmail.value === window.localStorage.EmailPerson)
                {
                    recetEmail.classList.remove("is-invalid")
                    recetEmail.classList.add("is-valid")
                    window.location = "../password/pass.html";
                    recetEmail.value = "";
                }
                else if(recetEmail.value != window.localStorage.EmailPerson || recetEmail.value == "")
                {
                    document.querySelector(".massageErroeReset").classList.replace("d-none",'d-block')
                    recetEmail.classList.add("is-invalid")
                }
        }
        else
        {
            document.querySelector(".massageErroeReset").classList.replace("d-none",'d-block')
        }
});
