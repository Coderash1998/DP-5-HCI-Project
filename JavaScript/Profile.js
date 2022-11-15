function SaveName() {

    var firstName = document.getElementById("floatingInput1").value;
    var lastName = document.getElementById("floatingInput2").value;

    sessionStorage.setItem('name', firstName)
    sessionStorage.setItem('surname', lastName)

}