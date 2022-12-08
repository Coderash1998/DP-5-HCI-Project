window.addEventListener('load', function() {
    console.log('DOM Content loaded!')
    let firstName = sessionStorage.getItem('name');
    let lastName = sessionStorage.getItem('surname')
    let age=sessionStorage.getItem('age')
    let city=sessionStorage.getItem('city')
    let state=sessionStorage.getItem('state')
    if (firstName) {
        document.getElementById('floatingInput1').value = firstName;
    }
    if (lastName) {
        document.getElementById('floatingInput2').value = lastName;
    }
    if(age){
        document.getElementById('floatingInput3').value=age
    }
    if(city){
        document.getElementById('floatingInput4').value=city
    }
    if(state){
        document.getElementById('floatingInput5').value=state
    }
})

// function SaveName() {

//     var firstName = document.getElementById("floatingInput1").value;
//     var lastName = document.getElementById("floatingInput2").value;

//     sessionStorage.setItem('name', firstName)
//     sessionStorage.setItem('surname', lastName)

// }
function saveInfo(){
    var firstName = document.getElementById("floatingInput1").value;
    var lastName = document.getElementById("floatingInput2").value;
    var age=document.getElementById("floatingInput3").value;
    var city=document.getElementById("floatingInput4").value;
    var state=document.getElementById("floatingInput5").value;
    
    sessionStorage.setItem('name', firstName)
    sessionStorage.setItem('surname', lastName)
    sessionStorage.setItem('age',age)
    sessionStorage.setItem('city',city)
    sessionStorage.setItem('state',state)

    var form=document.getElementById('info_form')
    form.reset()
}

let popup=this.document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}
function logout(){
    window.location.href='LogIn.html'
    var form=document.getElementById('info_form')
    form.reset()
}

function update(){
    var age=document.getElementById("floatingInput3").value;
    var city=document.getElementById("floatingInput4").value;
    var state=document.getElementById("floatingInput5").value;

    sessionStorage.setItem('age',age)
    sessionStorage.setItem('city',city)
    sessionStorage.setItem('state',state)

}