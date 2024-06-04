var mail = document.querySelector(".mailInput");
var passInputs = document.querySelector(".passInput");
var btn = document.querySelector(".btn a");
btn.addEventListener("click",function(){
    if(validMail() == true && validPassLogin() == true)
        {
            if(window.localStorage.EmailPerson && window.localStorage.PassPerson)
                {
                    if(mail.value === window.localStorage.EmailPerson && passInputs.value === window.localStorage.PassPerson)
                        {
                            document.querySelector(".massagErroeLogin").classList.replace("d-block","d-none");
                            window.location = "../dark/dark.html"
                        }
                }
                clearDataLogin();
        }
        
            else if(window.localStorage.EmailPerson && window.localStorage.PassPerson)
                {
                    if(mail.value != window.localStorage.EmailPerson && passInputs.value != window.localStorage.PassPerson)
                        {
                            document.querySelector(".massagErroeLogin").classList.replace("d-none","d-block")
                        }
                }
                if(validMail() == false && validPassLogin() == false)
                    {
                        document.querySelector(".massagErroeLogin").classList.replace("d-none","d-block")
                    }
});

function clearDataLogin()
{
    mail.value = "";
    passInputs.value = ""
}
document.querySelector(".massagErroeLogin span").addEventListener("click",function(){
    document.querySelector(".massagErroeLogin").classList.replace("d-block","d-none")
})
mail.addEventListener("input",function(){
    validMail();
})
function validMail(){
    var mailRegax = /[a-z0-9](@gmail.com|@yahoo.com|@outlook.com)$/;
    if(mailRegax.test(mail.value) == true)
        {
            mail.classList.add("is-valid");
            mail.classList.remove("is-invalid");
            return true;
        }
        else
        {
            mail.classList.add("is-invalid");
            mail.classList.remove("is-valid");
            return false;
        }
}
passInputs.addEventListener("input",function(){
    validPassLogin();
})
function validPassLogin()
{
    var PassRegax = /^([0-9]{6}|[a-z]{6}|[A-Z]{6}|[A-Z][a-z]{5}|[a-z][A-Z]{5}|[a-z0-9]{6})$/;
    if(PassRegax.test(passInputs.value) == true)
        {
            passInputs.classList.add("is-valid");
            passInputs.classList.remove("is-invalid");
            return true;
        }
        else
        {
            passInputs.classList.add("is-invalid");
            passInputs.classList.remove("is-valid");
            return false;
        }
}


document.querySelector(".created a").addEventListener("click",function(){
    window.location = "../index.html"
})
document.querySelector(".forgetPass a").addEventListener("click",function(){
    window.location = "../forgetEmail/forget.html"
});

