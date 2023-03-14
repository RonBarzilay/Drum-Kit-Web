var numberOfDrums = document.querySelectorAll(".set button").length;

for (var i = 0; i < numberOfDrums; i++) {
  document
    .querySelectorAll(".set button")
    [i].addEventListener("click", function () {
      var drumType = this.innerHTML;
      var audio = new Audio();
      //   audio.play();
      makeSound(drumType);
      buttonAnimation(drumType);
    });
}

// Detecting keydown for the entire document
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;

    default:
      console.log(drumType);
  }
  audio.play();
}

function buttonAnimation(key) {
  document.querySelector("." + key + "." + "drum").classList.add("pressed");

  setTimeout(function () {
    document
      .querySelector("." + key + "." + "drum")
      .classList.remove("pressed");
  }, 100);
}
