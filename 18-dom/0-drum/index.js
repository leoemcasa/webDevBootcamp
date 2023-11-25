
function audio(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(e.innerHTML);
            break;
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

document.querySelectorAll(".drum").forEach((e) => {
    e.addEventListener("click", () => {
        //var buttonInnerHTML = e.innerHTML;
       audio(e.innerHTML);
       buttonAnimation(e.innerHTML);

    })
});

document.addEventListener("keydown", function(e) {
    audio(e.key);
    buttonAnimation(e.key);
})

// function HouseKeeper(experience, name, repertoir) {
//     this.experience = experience;
//     this.name = name;
//     this.repertoir = repertoir;
//     this.clean = function () {
//        alert("clening in progress");
//     }
// }
/*
function anotherAddEventlistener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        duration: 2
    }
    if (eventThatHappened == typeOfEvent) {
        callback(eventThatHappened);
    }
}
*/