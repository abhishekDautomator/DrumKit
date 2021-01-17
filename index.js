

var drumElements=document.querySelectorAll(".drum");

for(var i=0;i<drumElements.length;i++){
  drumElements[i].addEventListener("click",function(){
  rollDrum(this.innerHTML);
});
}

document.addEventListener('keypress',function(event){
  rollDrum(event.key);
}
);

function rollDrum(key){
  switch(key){
    case "w":
      (new Audio("sounds/snare.mp3")).play();
      break;
    case "a":
      (new Audio("sounds/tom3.mp3")).play();
      break;
    case "s":
      (new Audio("sounds/tom1.mp3")).play();
      break;
    case "d":
      (new Audio("sounds/kick.mp3")).play();
      break;
    case "j":
      (new Audio("sounds/tom2.mp3")).play();
      break;
    case "k":
      (new Audio("sounds/tom4.mp3")).play();
      break;
    case "l":
      (new Audio("sounds/crash.mp3")).play();
      break;
    default: console.log("Key to press "+key);
  }
}
