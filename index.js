

document.querySelectorAll("button")[0].addEventListener("click", function() {
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
});

document.querySelectorAll("button")[1].addEventListener("click", function() {
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
});
document.querySelectorAll("button")[2].addEventListener("click", function() {
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
});

document.querySelectorAll("button")[3].addEventListener("click", function() {
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
});

document.querySelectorAll("button")[4].addEventListener("click", function() {
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
});

document.querySelectorAll("button")[5].addEventListener("click", function() {
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
});
window.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "a":
            playSound("./sounds/crash.mp3");
            break;
        case "s":
            playSound("./sounds/snare.mp3");
            break;
        case "d":
            playSound("./sounds/tom-1.mp3");
            break;
        case "f":
            playSound("./sounds/tom-2.mp3");
            break;
        case "g":
            playSound("./sounds/tom-3.mp3");
            break;
        case "h":
            playSound("./sounds/tom-4.mp3");
            break;
    }
});

// Função para reproduzir som
function playSound(soundFilePath) {
    var audio = new Audio(soundFilePath);
    audio.play();
}
