var inputEls = document.querySelectorAll('.form-control')
var submit = document.querySelector(".form-submit")
var passvalue;


var validateEmail = function(email,errNote){
    if(email.value === ''){
        errNote.innerHTML = 'vui lòng nhập thông tin'
        errNote.previousElementSibling.style.borderColor = 'red'
    }else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        errNote.innerHTML = ''
        errNote.previousElementSibling.style.borderColor = '#b3b3b3'
    }else{
        errNote.innerHTML ='Vui lòng nhập đúng định dạng email'
        errNote.previousElementSibling.style.borderColor = 'red'
        }
    }
}
var validatePass = function(pass,errNote){
    if(pass.value === ''){
        errNote.innerHTML = 'vui lòng nhập thông tin'
        errNote.previousElementSibling.style.borderColor = 'red'

    }else{
        if(pass.value.length >= 6 && pass.value.length <= 10){
            errNote.innerHTML = ''
        // this.style.borderColor = "#b3b3b3"
        errNote.previousElementSibling.style.borderColor = '#b3b3b3'


        }else{
            errNote.innerHTML = " Mật khẩu bao gồm 6 - 10 ký tự"
            errNote.previousElementSibling.style.borderColor = 'red'

        }
        passvalue =  pass.value
    }
}
var ValidateName = function(name,errNote){
    if(name.value === ''){
        errNote.innerHTML = 'vui lòng nhập thông tin'
        errNote.previousElementSibling.style.borderColor = 'red'

    }else{
        errNote.innerHTML = ''
        errNote.previousElementSibling.style.borderColor = '#b3b3b3'
        // this.style.borderColor = "#1ac7b6"

    }
}
var ValidateRe_upPass = function(pass,errNote){
    if(pass.value != passvalue){
        errNote.innerHTML = 'mật khẩu không khớp'
        errNote.previousElementSibling.style.borderColor = 'red'

    }else{
        errNote.innerHTML = ''
        errNote.previousElementSibling.style.borderColor = '#b3b3b3'

    }
}







inputEls.forEach(function(inputEl) {
    inputEl.addEventListener("click",function() {
        inputEl.style.borderColor = "#1ac7b6"
    })
    inputEls[0].addEventListener("input",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        ValidateName(this,messageErr)
        // validatePass(this,messageErr)
    })

    inputEls[1].addEventListener("input",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        validateEmail(this,messageErr)
        // validatePass(this,messageErr)
    })
    inputEls[2].addEventListener("input",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        validatePass(this,messageErr)
    })
    inputEls[3].addEventListener("input",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        ValidateRe_upPass(this,messageErr)
    })

    inputEl.addEventListener("click",function() {
        // inputEl.style.borderColor = "#1ac7b6"
    })
    inputEls[0].addEventListener("blur",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        // inputEl.style.borderColor = "#1ac7b6"
        ValidateName(this,messageErr)
        // validatePass(this,messageErr)
    })

    inputEls[1].addEventListener("blur",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        // inputEl.style.borderColor = "#1ac7b6"
        validateEmail(this,messageErr)
        // validatePass(this,messageErr)
    })
    inputEls[2].addEventListener("blur",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        // inputEl.style.borderColor = "#1ac7b6"
        validatePass(this,messageErr)
    })
    inputEls[3].addEventListener("blur",function() {
        var messageErr = this.parentElement.querySelector('.form-message')
        // inputEl.style.borderColor = "#1ac7b6"
        ValidateRe_upPass(this,messageErr)
    })

})





// submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     var form_groups = this.parentElement.querySelectorAll('.form-group');
    
// })
var handleChange = function (event) {
    event.returnValue = "Write something clever here..";
}
var login =document.querySelector('#form-1')
login.addEventListener('input',function(e) {
    if(e.target.type === "checkbox" || e.target.type ==="radio") {
        if(e.target.defaultChecked !== e.target.checked){
            window.addEventListener('beforeunload',handleChange) 
        }else{
            window.removeEventListener("beforeunload",handleChange)           
        }
    }else {
        if(e.target.defaultValue !== e.target.value){
            window.addEventListener('beforeunload',handleChange) 
        }else{
            window.removeEventListener("beforeunload",handleChange)           
        }
    }
})
login.addEventListener('submit',function(e) {
    e.preventDefault()
    window.removeEventListener("beforeunload",handleChange)           
    this.submit()
})