let slides= document.querySelectorAll(".food_img");
let index=0 ;
function showSlide(n){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}
if(document.getElementById("next")){
document.getElementById("next").onclick =function(){
  index++;
  if (index >= slides.length) { // loop back to first
    index = 0;
  }
  showSlide(index);
}
}
if(document.getElementById("prev")){
document.getElementById("prev").onclick =function(){
  index--;
  if (index < 0) { // loop to last
    index = slides.length - 1;
  }
  showSlide(index);
}
setInterval(function() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}, 5500); // change every 4 seconds
}

if(document.getElementById("menuBtn")){
document.getElementById("menuBtn").onclick = function(e){
e.preventDefault();
document.getElementById("fullMenu").classList.add("show");
document.getElementById("fullMenu").scrollIntoView({behavior:"smooth"});
}
}
window.addEventListener("load", () => {
    if (window.location.hash === "#fullMenu") {
        fullMenu.classList.add("show");
    }
})


function formulshow() {
  document.getElementById("formreserv").classList.add('show');
  document.getElementById("reservtitle").scrollIntoView({behavior: "smooth",
    block: "start"
})};

document.getElementById("xclose").onclick = function() {
  document.getElementById("formreserv").classList.remove('show');
}