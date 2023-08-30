body = document.querySelectorAll(`#form`)
span = document.querySelectorAll(`#form p span`).innerText


function submitClick()
{
    var headers = document.querySelectorAll(`p`)
    var fname = document.querySelector(`#first-name`).value
    let namepattern = /^[a-z\-]+$/i
    let fnameResult = namepattern.test(fname)
    console.log(fnameResult)
    if (fnameResult == false)
    {
        var fnSpan = document.querySelector(`#fn-error`)
        fnSpan.innerHTML = "*"
        fnSpan.classList.add("red")
        headers[0].classList.add("red")
        
        console.log(`FALSE FN`)
    }
    else
    {
        var fnSpan = document.querySelector(`#fn-error`)
        fnSpan.innerHTML = " "
        fnSpan.classList.remove("red")
        headers[0].classList.remove("red")
        console.log(`TRUE FN`)
    }
    
    var lname = document.querySelector(`#last-name`).value
    let lnameResult = namepattern.test(lname)
    if (lnameResult == false)
    {
        var lnSpan = document.querySelector(`#ln-error`)
        lnSpan.innerHTML = "*"
        //lnSpan.classList.toggle("red")
        headers[1].classList.add("red")
        //body[1].classList.toggle(`red`)
        console.log(`FALSE LN`)
        
    }
    else
    {
        var lnSpan = document.querySelector(`#ln-error`)
        lnSpan.innerHTML = " "
        //lnSpan.classList.toggle("red")
        headers[1].classList.remove("red")
        console.log(`TRUE LN`)
    }

    var email = document.querySelector(`#email`).value
    let emailPattern = /[A_Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    let emailResult = emailPattern.test(email)
    console.log(emailResult)
    if (emailResult == false)
    {
        var emailSpan = document.querySelector(`#email-error`)
        emailSpan.innerHTML = "*"
        emailSpan.classList.add("red")
        headers[2].classList.add("red")
        
        
        console.log(`FALSE EMAIL`)
    }
    else
    {
        var emailSpan = document.querySelector(`#email-error`)
        emailSpan.innerHTML = " "
        emailSpan.classList.remove("red")
        headers[2].classList.remove("red")
        console.log(`TRUE EMAIL`)
    }

    var emailConfirm = document.querySelector(`#emailConfirm`).value
    if (emailConfirm == email)
    {
        emailConfirmResult = true
        var emailCSpan = document.querySelector(`#emailComfirm-error`)
        emailCSpan.innerHTML = "  "
        emailCSpan.classList.remove("red")
        headers[3].classList.remove("red")
        console.log(`TRUE CONFIRMED EMAIL`)
    }
    else
    {
        emailConfirmResult = false
        var emailCSpan = document.querySelector(`#emailComfirm-error`)
        emailCSpan.innerHTML = "*Email needs to match"
        emailCSpan.classList.add("red")
        headers[3].classList.add("red")
        console.log(`FALSE CONFIRMED EMAIL`)
    }
    var phone = document.querySelector(`#phone`).value
    var phoneSpan = document.querySelector(`#phone-error`)
    let phonePattern = /[0-9]{10}$/
    let phoneResult = phonePattern.test(phone)
    if (phoneResult == false)
    {
        phoneSpan.innerHTML = "*"
        headers[4].classList.add("red")
    }
    else
    {
        phoneSpan.innerHTML = " "
        headers[4].classList.remove("red")
    }


    if (fnameResult == true && lnameResult == true && emailResult == true && emailConfirmResult == true && phoneResult == true)
    {
        var form = document.getElementById(`form`).style.display = "none"
        var confirmdiv = document.getElementById("confirmation").style.display = "block"
        
        let phonef3 = phone.substring(0, 3)
        let phonem3 = phone.substring(3, 6)
        let phonel4 = phone.substring(6,10)

        var finalphone = phonef3 + `-` + phonem3 +  `-` + phonel4
        
        var person = {
            firstname:fname,
            lastname:lname,
            finalemail:email,
            validphone:finalphone
        }
        



        message = person.firstname + " ",
        message += person.lastname,
        message += `<br>`,
        message += person.finalemail,
        message += `<br>`,


        message += person.validphone

        var confirmp = document.getElementById(`info`).innerHTML = message
        
    }
    else
    {

    }
    

    var phone = document.querySelector(`#submit`)
}