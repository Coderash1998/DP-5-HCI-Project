window.addEventListener('load', function() {
    console.log('DOM Content loaded!')
    let firstName = sessionStorage.getItem('name');
    let lastName = sessionStorage.getItem('surname')
    if (firstName) {
        document.getElementById('floatingInput1').value = firstName;
    }
    if (lastName) {
        document.getElementById('floatingInput2').value = lastName;
    }
})

function SaveName() {

    var firstName = document.getElementById("floatingInput1").value;
    var lastName = document.getElementById("floatingInput2").value;

    sessionStorage.setItem('name', firstName)
    sessionStorage.setItem('surname', lastName)

}