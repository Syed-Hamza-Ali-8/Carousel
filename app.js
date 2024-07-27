let cricketersCarosule = [
    "BA56.jpg",
    "SS49.jpg",
    "KW22.jpg",
    "JB63.jpg",
];

const cricketers = ["BABAR AZAM", "STEVE SMITH", "KANE WILLIAMSON", "JOS BUTTLER"]

let currentIndex = 0;

let image = document.getElementById("slider-image");

let cricketersName = document.getElementById("BA")

let next = document.getElementById("next");
let prev = document.getElementById("prev");

function update() {
    image.src = cricketersCarosule[currentIndex];
    cricketersName.innerText = cricketers[currentIndex]
}

next.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= cricketersCarosule.length) {
        currentIndex = cricketersCarosule.length - 1
    }

    update()

});

prev.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;

    }

    update()

});

update()