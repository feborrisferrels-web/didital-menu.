window.addEventListener("scroll",function(){

const header=document.querySelector(".header-container");

if(window.scrollY>100){

header.style.display="none";

}else{

header.style.display="flex";

}

});