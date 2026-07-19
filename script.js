const menuBtn=document.getElementById("menuBtn");

const menu=document.getElementById("menuPanel");

menuBtn.onclick=function(){

menu.classList.toggle("show");

}

// Hide menu after clicking a link

document.querySelectorAll("#menuPanel a").forEach(link=>{

link.onclick=function(){

menu.classList.remove("show");

}

})

// Hide menu when clicking outside

document.addEventListener("click",function(e){

if(!menu.contains(e.target) && e.target!==menuBtn){

menu.classList.remove("show");

}

})