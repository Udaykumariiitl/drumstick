var numberOfButtons = 
    document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
  .addEventListener("click", function() {
  
    var buttonStyle = this.innerHTML;
 
    sound(buttonStyle);
    animation(buttonStyle);
  });
}
  addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});
  
let currentlyPlaying = []

function sound(key) {
  switch (key) {
    case "U":  
      var sound1 = new Audio("Ma Ma Mahesha.mp3");
      sound1.play();
      currentlyPlaying.push(sound1);
      break;
  
    case "D":
      var sound2 = new Audio("Mehabooba.mp3");
      sound2.play();
      currentlyPlaying.push(sound2);
      break;
  
    case "A":
      var sound3 = new Audio('Bullet.mp3');
      sound3.play();
      currentlyPlaying.push(sound3);
      break;
  
    case "Y":
      var sound4 = new Audio('Beast Mode.mp3');
      sound4.play();
      currentlyPlaying.push(sound4);
      break;
    
  
    case "stop button":
      if(currentlyPlaying  === sound1){
        currentlyPlaying.pop(sound1);
      }
    else if(currentlyPlaying === sound2){
      currentlyPlaying.pop(sound2);
    }
      else if(currentlyPlaying === sound3){
        currentlyPlaying.pop(sound3);
      }
      else if(currentlyPlaying === sound4){
        currentlyPlaying.pop(sound4);
      }
     
      break;
    default: console.log(key);
  }
}
  
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");
  
  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 1);
}
