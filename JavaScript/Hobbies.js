const select_hobbies = []
var image1 = document.getElementById('image1');

image1.addEventListener('click', function(image1){
    image1.target.classList.toggle('myClickState');
    if (image1.target.classList.value == 'image myClickState') {
        select_hobbies.push("movies");
    } else {
        var index = select_hobbies.indexOf("movies");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 

var image2 = document.getElementById('image2');

image2.addEventListener('click', function(image2){
    image2.target.classList.toggle('myClickState');
    if (image2.target.classList.value == 'image myClickState') {
        select_hobbies.push("chess");
    } else {
        var index = select_hobbies.indexOf("chess");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 

var image3 = document.getElementById('image3');

image3.addEventListener('click', function(image3){
    image3.target.classList.toggle('myClickState');
    if (image3.target.classList.value == 'image myClickState') {
        select_hobbies.push("fishing");
    } else {
        var index = select_hobbies.indexOf("fishing");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 


var image4 = document.getElementById('image4');

image4.addEventListener('click', function(image4){
    image4.target.classList.toggle('myClickState');
    if (image4.target.classList.value == 'image myClickState') {
        select_hobbies.push("camping");
    } else {
        var index = select_hobbies.indexOf("camping");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 


var image5 = document.getElementById('image5');

image5.addEventListener('click', function(image5){
    image5.target.classList.toggle('myClickState');
    if (image5.target.classList.value == 'image myClickState') {
        select_hobbies.push("gardening");
    } else {
        var index = select_hobbies.indexOf("gardening");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 


var image6 = document.getElementById('image6');

image6.addEventListener('click', function(image6){
    image6.target.classList.toggle('myClickState');
    if (image6.target.classList.value == 'image myClickState') {
        select_hobbies.push("reading");
    } else {
        var index = select_hobbies.indexOf("reading");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 


var image7 = document.getElementById('image7');

image7.addEventListener('click', function(image7){
    image7.target.classList.toggle('myClickState');
    if (image7.target.classList.value == 'image myClickState') {
        select_hobbies.push("music");
    } else {
        var index = select_hobbies.indexOf("music");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 


var image8 = document.getElementById('image8');

image8.addEventListener('click', function(image8){
    image8.target.classList.toggle('myClickState');
    if (image8.target.classList.value == 'image myClickState') {
        select_hobbies.push("travelling");
    } else {
        var index = select_hobbies.indexOf("travelling");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
}) 


var image9 = document.getElementById('image9');

image9.addEventListener('click', function(image9){
    image9.target.classList.toggle('myClickState');
    if (image9.target.classList.value == 'image myClickState') {
        select_hobbies.push("cooking");
    } else {
        var index = select_hobbies.indexOf("cooking");
        if (index > -1) {
            select_hobbies.splice(index, 1);
        }
    }
})

function GetSelectedItems() {
    console.log(select_hobbies);
    sessionStorage.setItem('count', select_hobbies.length);
    
    var count = select_hobbies.length;
    for (let i=1; i <= count; i++) {
        sessionStorage.setItem('hobby'+i, select_hobbies[i-1]);
    }
}

function search(){
    let search_text=document.getElementById("search_box").value.toUpperCase();
    let search_list=document.getElementById("trial-search")
    let group=search_list.getElementsByClassName("trial")
    let hobby_name=search_list.getElementsByTagName("h6")

    console.log(hobby_name)


    for(let i=0;i<hobby_name.length;i++){
        let match=group[i].getElementsByTagName('h6')[0]
        if(match){
            let textValue=match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(search_text)>-1){
                group[i].style.display=""
            }
            else{
                group[i].style.display="none"
            }
        }
    }
}