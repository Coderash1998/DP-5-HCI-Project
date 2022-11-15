window.addEventListener('load', function() {
    console.log('DOM Content loaded!')
    let firstName = sessionStorage.getItem('name');
    let lastName = sessionStorage.getItem('surname')
    if (firstName || lastName) {
        document.getElementById('person_name').innerHTML = firstName + ' ' + lastName;
    }
})