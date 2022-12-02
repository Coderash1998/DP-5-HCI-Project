var sendMessageButton = document.getElementById("messageButton")
sendMessageButton.addEventListener("click", textValidation);

function textValidation() {
    console.log("Hello")
    let checkText = document.getElementById('message').value;
    if ((checkText==='')){
        $('#viewGroup').modal('show');
        $('#failureMessage').modal('show')
    }
    else{
        $('#viewGroup').modal('hide');
        $('#successMessage').modal('show')
        document.getElementById('message').value=""
    }
}
function getId(id){
    let nameId="name"+id.replace("button","")
    console.log(nameId)
    let imageId = "image"+id.replace("button","")
    let getName = document.getElementById(nameId).textContent;
    let getImage = document.getElementById(imageId)
    var modalImg = document.getElementById("modalImage")
    modalImg.src=getImage.src
    document.getElementById('modalTitle').innerHTML=getName;
}
function sortName(){
    // var ul=document.getElementById("groups-list")
    // Array.from(ul.getElementsByClassName("main-item")).sort((a,b)=>a.textContent.localeCompare(b.textContent))
    // .forEach(li=>ul.appendChild(li))

    // var ul2=document.getElementById("groups-list2")
    // Array.from(ul2.getElementsByTagName("LI")).sort((a,b)=>a.textContent.localeCompare(b.textContent))
    // .forEach(li=>ul2.appendChild(li))

    let a=document.getElementById("A")
    let b=document.getElementById("B")
    let c=document.getElementById("C")
    let d=document.getElementById("D")
    let e=document.getElementById("E")
    let f=document.getElementById("F")

    let arr=[d,b,f,c,a,e]
    var ul=document.getElementById("groups-list")
    arr.forEach(item=>ul.appendChild(item))
}

function sortTime(){
    let a=document.getElementById("A")
    let b=document.getElementById("B")
    let c=document.getElementById("C")
    let d=document.getElementById("D")
    let e=document.getElementById("E")
    let f=document.getElementById("F")

    let arr=[d,c,f,a,b,e];
    var ul=document.getElementById("groups-list")
    arr.forEach(item=>ul.appendChild(item))
}

function sortMembers(){
    let a=document.getElementById("A")
    let b=document.getElementById("B")
    let c=document.getElementById("C")
    let d=document.getElementById("D")
    let e=document.getElementById("E")
    let f=document.getElementById("F")

    let arr=[d,f,a,c,e,b];
    var ul=document.getElementById("groups-list")
    arr.forEach(item=>ul.appendChild(item))
}

function defaultSet(){
    let a=document.getElementById("A")
    let b=document.getElementById("B")
    let c=document.getElementById("C")
    let d=document.getElementById("D")
    let e=document.getElementById("E")
    let f=document.getElementById("F")

    let arr=[a,b,c,d,e,f];
    var ul=document.getElementById("groups-list")
    arr.forEach(item=>ul.appendChild(item))
}

function selectOptions(){
    let item=document.getElementById("groups-order-by").value;
    console.log(item);
    if(item==="alphabetical")
        sortName();
    else if(item==="active")
        sortTime();
    else if(item==="popular")
        sortMembers();
    else defaultSet()
}

// document.getElementById("search_btn").addEventListener("click",()=>{
//     let search_text=document.getElementById("search_box").value.toUpperCase();
//     let group_list=document.getElementById("groups-list")
//     let group=group_list.getElementsByClassName("main-item")
//     let group_name=group_list.getElementsByTagName("h5")

     
//     for(let i=0;i<group_name.length;i++){
//      let match=group[i].getElementsByTagName('h5')[0]
//      if(match){
//          let textValue=match.textContent || match.innerHTML
//          if(textValue.toUpperCase().indexOf(search_text)>-1){
//              group[i].style.display=""
//          }
//          else{
//              group[i].style.display="none"
//          }
//      }
//     }
//  })

 function search(){
    let search_text=document.getElementById("search_box").value.toUpperCase();
    let group_list=document.getElementById("groups-list")
    let group=group_list.getElementsByClassName("main-item")
    let group_name=group_list.getElementsByTagName("h5")

     
    for(let i=0;i<group_name.length;i++){
     let match=group[i].getElementsByTagName('h5')[0]
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