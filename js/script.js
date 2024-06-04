var username = document.querySelector("#input-Name");
var email = document.querySelector("#input-email");
var pass = document.querySelector("#input-pass");
var btnCreate = document.querySelector(".btnCreate button");
var massageName = document.querySelector(".massageName");
var massageEmail = document.querySelector(".massageEmail");
var massagePass = document.querySelector(".massagePass")
var inputs = document.querySelectorAll("input")
var arr = [];

//function valid Username
username.addEventListener("input",function(){
    validName();
});
function validName(){
    let nameValid = /[A-Za-z]$/
    if(nameValid.test(username.value) == true)
        {
            username.classList.add("is-valid");
            username.classList.remove("is-invalid");
            massageName.style.display = "none";
            return true;
        }
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
        massageName.style.display = "block";
        massageName.style.padding = "15px";
        massageName.style.overFlow = "auto";
        massageName.style.height = "25px";
        return false;
}
//function valid email
email.addEventListener("input",function(){
    validEmail();
    validation();
})
function validEmail(){
    let emailValid = /[a-z0-9](@gmail.com|@yahoo.com|@outlook.com)$/
    if(emailValid.test(email.value) == true)
        {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            massageEmail.style.display = "none";
            return true
        }
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        massageEmail.style.display = "block";
        massageEmail.style.padding = "15px";
        massageEmail.style.overFlow = "auto";
        massageEmail.style.height = "25px";
        return false;
}
function validation(){
    if(email.value === window.localStorage.EmailPerson)
        {
            document.querySelector(".massageErrorEmail").style.display = "block";
            document.querySelector(".massageErrorEmail").style.padding = "15px";
            document.querySelector(".massageErrorEmail").style.height = "25px";
            return false;
        }
        else
        {
            document.querySelector(".massageErrorEmail").style.display = "none";
            return true
        }
}


//function valid password
pass.addEventListener("input",function(){
    validPassword();
})
function validPassword(){
    let validPass = /^([0-9]{6}|[a-z]{6}|[A-Z]{6}|[A-Z][a-z]{5}|[a-z][A-Z]{5}|[a-z0-9]{6})$/
    if(validPass.test(pass.value) == true)
        {
            pass.classList.add("is-valid");
            pass.classList.remove("is-invalid");
            massagePass.style.display = "none";
            return true;
        }
        pass.classList.add("is-invalid");
        pass.classList.remove("is-valid");
        massagePass.style.display = "block";
        massagePass.style.padding = "15px";
        massagePass.style.overFlow = "auto";
        massagePass.style.height = "25px";
        return false;
}
function openPage(){
    parent.open("../sign.html");
}
btnCreate.addEventListener("click",function(){
    if(validName() === true && validEmail() === true && validPassword() === true && validation() === true)
        {
            var objData = {
                nameUser : username.value,
                emailUser : email.value,
                passwordUser : pass.value,
            }
            arr.push(objData);
            window.localStorage.setItem("NamePerson" , username.value);
            window.localStorage.setItem("EmailPerson" , email.value);
            window.localStorage.setItem("PassPerson" , pass.value);
            deleteFromInput();
            validOrNotValid();
            document.querySelector(".success").classList.add("successEdit");
            document.querySelector(".warning").classList.remove("warningEdit");
            document.querySelector(".create").href = "../sign/sign.html"
            // console.log(arr)
        }
        else if(validName() === false && validEmail() === false && validPassword() === false && validation() === false)
            {
                username.classList.add("is-invalid");
                email.classList.add("is-invalid");
                pass.classList.add("is-invalid");
                if(username.value != "" || email.value != "" || pass.value != "")
                    {
                        document.querySelector(".warning").classList.remove("warningEdit");
                    }
                else
                {
                    document.querySelector(".warning").classList.add("warningEdit");
                    document.querySelector(".success").classList.remove("successEdit");
                }
            }
})
document.querySelector(".warning").addEventListener("click",function(){
    document.querySelector(".warning").classList.remove("warningEdit");
})
//function deleteDataForInput
function deleteFromInput(){
    username.value = "";
    email.value = "";
    pass.value = "";
}


//function focus and blur input
//console.log(inputs);
for(let i =0; i< inputs.length; i++)
    {
        inputs[i].addEventListener("focus" , function(){
            inputs[i].nextElementSibling.style.top = "-25px";
            inputs[i].nextElementSibling.style.color = "#fff";
        });
        inputs[i].addEventListener("blur" , function(){
            if(inputs[i].value != "")
                {
                    inputs[i].nextElementSibling.style.top = "-25px";
                    inputs[i].nextElementSibling.style.color = "#fff";
                }
                else
                {
                    inputs[i].nextElementSibling.style.top = "10px";
                    inputs[i].nextElementSibling.style.color = "#92989be7";
                }
        });
    }

function validOrNotValid(){
    username.classList.remove("is-invalid");
    username.classList.remove("is-valid");
    email.classList.remove("is-invalid");
    email.classList.remove("is-valid");
    massageEmail.style.display = "none";
    massageName.style.display = "none";
    massagePass.style.display = "none";
    pass.classList.remove("is-valid");
    pass.classList.remove("is-invalid");
    username.nextElementSibling.style.top = "10px";
    username.nextElementSibling.style.color = "#92989be7";
    email.nextElementSibling.style.top = "10px";
    email.nextElementSibling.style.color = "#92989be7";
    pass.nextElementSibling.style.top = "10px";
    pass.nextElementSibling.style.color = "#92989be7";
}

document.querySelector(".btnSign").addEventListener("click",function(){
    window.location = "../sign/sign.html"
})