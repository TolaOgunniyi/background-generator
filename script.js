function runFunction(){
  
   body.style.background =
   "linear-gradient(to right, "
   + color1.value + "," + color2.value + ")";
   css.textContent = body.style.background + ";";
}

var css = document.querySelector('h3');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');


// function colorInput(firstColor,secondColor){
// const firstColor = document.querySelector('.firstColor1');
// const secondColor = document.querySelector('secondColor2');


// }
function randomNumberGenerator(){
   const randomNumber = document.querySelector(".randomNumber");
   randomNumber.addEventListener("click", () =>{
     console.log(Math.floor(Math.random() * 100));
   })
}

randomNumberGenerator()


function setGradient(){
    
   body.style.background =
   "linear-gradient(to right, "
   + color1.value + "," + color2.value + ")";
   css.textContent = body.style.background + ";";

}


color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);