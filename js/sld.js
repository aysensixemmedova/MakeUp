var sliderWidth = document.querySelector(".slider").clientWidth
var sliderLength = document.querySelectorAll(".slider li").length
var sliderUl = document.querySelector(".slider ul")

var nextIco = document.querySelector(".next")
var prevIco = document.querySelector(".prev")

var cloneFirstSlider=document.querySelector(".slider li").cloneNode(true)
var cloneLastSlider=document.querySelectorAll(".slider li")[sliderLength-1].cloneNode(true)

document.querySelector(".slider ul").appendChild(cloneFirstSlider)
document.querySelector(".slider ul").prepend(cloneLastSlider)

sliderLength = document.querySelectorAll(".slider li").length
var mySlideWidth=sliderWidth*sliderLength;

var c=1;
 
sliderUl.style.left=-(c*sliderWidth)+"px"
// var myInt= setInterval( myNextSlider(), 2000);
 sliderUl.style.width = mySlideWidth + "px"

 prevIco.onclick=function(){
  sliderUl.style.transition="2s ease"
  // clearInterval(myInt)
   myPrevSlider()
 }
 document.addEventListener("transitionend",function(){
if(c==sliderLength-1){
  sliderUl.style.transition="none"
}
 })
nextIco.onclick=function(){
  sliderUl.style.transition="2s ease"
  // clearInterval(myInt)
  myNextSlider();

}
function myPrevSlider(){
  c--;
  if(c==-1){
    c=sliderLength-1;
  }
  sliderUl.style.left=-(c*sliderWidth)+"px"

}

function myNextSlider(){
  c++;
  if(c==sliderLength){
    c=0;
  }
  sliderUl.style.left=-(c*sliderWidth)+"px"

}
$(".sldd").textillate(); 




