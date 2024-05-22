var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.querySelector(".add")

addpopup.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

//selectting inputbox value
var inputtitle=document.getElementById("popup-title")
var inputauthor=document.getElementById("popup-author")
var inputtext=document.getElementById("textarea")
var addbutton=document.getElementById("add-button")
var cancelbutton=document.getElementById("cancel-button")


//selecting books-container
var bookscontaniner=document.querySelector(".books-container")
//selecting main container
var container=document.querySelector('.container')
//selecting delete button



addbutton.addEventListener("click",function(){
    var newdiv=document.createElement('div')
    newdiv.setAttribute("class","books-container")
    var newh2=document.createElement('h2')
    var newh4=document.createElement('h4')
    var p=document.createElement('p')
    var deletebutton=document.createElement('button')

    newh2.setAttribute('class','title');
    deletebutton.setAttribute('class','delete-button');
    deletebutton.setAttribute('onclick','del(event)')

    newh2.textContent=inputtitle.value;
    newh4.textContent=inputauthor.value;
    p.textContent=inputtext.value;
    deletebutton.textContent='Delete'

    newdiv.appendChild(newh2)
    newdiv.appendChild(newh4,);
    newdiv.appendChild(p)
    newdiv.appendChild(deletebutton)
    container.appendChild(newdiv);

    console.log(container)

    inputtitle.value = '';
    inputauthor.value = '';
    inputtext.value = '';
    popupbox.style.display = "none";
    popupoverlay.style.display = "none";

})

cancelbutton.addEventListener('click',function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"  
})

addbutton.addEventListener('click',function(event){
    event.preventDefault()
})

function del(event){
    event.target.parentElement.remove()
}