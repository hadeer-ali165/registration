var pass1 = document.querySelector("#password1");
console.log(pass1);
var pass2 = document.querySelector("#password2");
console.log(pass2);
var btnPass = document.querySelector(".btnPass a");
btnPass.addEventListener("click",function(){
    if(validPassword() == true && validPassword2() == true)
        {
            if(pass1.value === pass2.value)
                {
                    window.localStorage.PassPerson = pass1.value;
                    window.location = "../sign/sign.html";
                    pass1.value = "";
                    pass2.value = "";
                }
                else
                {
                    document.querySelector(".massageErroePass").classList.replace("d-none",'d-block')
                }
        }
        else
        {
            console.log("no")
        }
})
pass1.addEventListener("input",function(){
    validPassword();
})
function validPassword(){
    let validPass = /^([0-9]{6}|[a-z]{6}|[A-Z]{6}|[A-Z][a-z]{5}|[a-z][A-Z]{5}|[a-z0-9]{6})$/
    if(validPass.test(pass1.value) == true)
        {
            pass1.classList.add("is-valid");
            pass1.classList.remove("is-invalid");
            return true;
        }
        pass1.classList.add("is-invalid");
        pass1.classList.remove("is-valid");
        return false;
}
pass2.addEventListener("input",function(){
    validPassword2();
})
function validPassword2(){
    let validPass = /^([0-9]{6}|[a-z]{6}|[A-Z]{6}|[A-Z][a-z]{5}|[a-z][A-Z]{5}|[a-z0-9]{6})$/
    if(validPass.test(pass2.value) == true)
        {
            pass2.classList.add("is-valid");
            pass2.classList.remove("is-invalid");
            return true;
        }
        pass2.classList.add("is-invalid");
        pass2.classList.remove("is-valid");
        return false;
}