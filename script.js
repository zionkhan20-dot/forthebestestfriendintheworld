/* ---------- ELEMENTS ---------- */

const continueButton = document.getElementById("continueButton");
const birthdaySong = document.getElementById("birthdaySong");
const welcomeScreen = document.getElementById("welcomeScreen");
const memoryScreen = document.getElementById("memoryScreen");
const nextMemoryButton = document.getElementById("nextMemoryButton");
const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const polaroid = document.getElementById("polaroid");
const riddleScreen = document.getElementById("riddleScreen");
const riddleAnswer = document.getElementById("riddleAnswer");
const riddleSubmit = document.getElementById("riddleSubmit");
const riddleError = document.getElementById("riddleError");
const birthdayMessage = document.getElementById("birthdayMessage");


/* ---------- WELCOME SCREEN ---------- */

continueButton.addEventListener("click", function() {

    if (birthdaySong) {
        birthdaySong.play();
    }

    welcomeScreen.style.display = "none";
    memoryScreen.style.display = "flex";

});


/* ---------- MEMORIES ---------- */

const memories = [
    {
        image: "images/photo1.jpg",
        caption: "Our last hangout!!!"
    },
    {
        image: "images/photo2.jpg",
        caption: "PROMM FLICKK!!!"
    },
    {
        image: "images/photo3.jpg",
        caption: "Spontaneous rituals flick!!"
    },
    {
        image: "images/photo4.jpg",
        caption: "Grads😓😓"
    },
    {
        image: "images/photo5.jpg",
        caption: "Underground car show ommggg"
    },
    {
        image: "images/photo6.jpg",
        caption: "Random meetup 😝"
    },
    {
        image: "images/photo7.jpg",
        caption: "MARIO AND LUIGIII"
    },
    {
        image: "images/photo8.jpg",
        caption: "Us ATTEMPTING to do revision"
    },
    {
        image: "images/photo9.jpg",
        caption: "UZIII AND CARTIII!!!!"
    },
    {
        image: "images/photo10.jpg",
        caption: "First sound off togetherrr!!"
    },
    {
        image: "images/photo11.jpg",
        caption: "Car ride home after schoolll"
    },
    {
        image: "images/photo12.jpg",
        caption: "Mid classs flick (idek if we had a free or not)"
    },
    {
        image: "images/photo13.jpg",
        caption: "FIRST FIELD TRIP WHERE WE WERE ACTUALLY TOGETHERR"
    },
    {
        image: "images/photo14.jpg",
        caption: "GEO PRESENTATIONNN"
    },
    {
        image: "images/photo15.jpg",
        caption: "IT SBA STRESSS BHAIII"
    }
];


let currentMemory = 0;


/* ---------- NEXT MEMORY ---------- */

function nextMemory() {

    if (currentMemory < memories.length - 1) {

        polaroid.classList.remove("slide-in");
        polaroid.classList.add("slide-out");


        setTimeout(function() {

            currentMemory++;

            memoryImage.src = memories[currentMemory].image;
            memoryCaption.textContent = memories[currentMemory].caption;


            polaroid.classList.remove("slide-out");
            polaroid.classList.add("slide-in");


            if (currentMemory === memories.length - 1) {

                nextMemoryButton.textContent = "RIDDLE TIMEEE";

            }

        }, 450);

    }

}


nextMemoryButton.addEventListener("click", function() {

    if (currentMemory === memories.length - 1) {

        memoryScreen.style.display = "none";
        riddleScreen.style.display = "flex";

    } else {

        nextMemory();

    }

});


/* ---------- RIDDLE ---------- */

riddleSubmit.addEventListener("click", function() {

    const answer = riddleAnswer.value.toLowerCase().trim();


    /* ---------- CORRECT ANSWER ---------- */

    if (
        answer.includes("fall") ||
        answer.includes("fell") ||
        answer.includes("spilled")
    ) {

        riddleError.textContent = "";


        const riddleCard = document.querySelector(".riddle-card");

        riddleCard.classList.add("fade-out");


        setTimeout(function() {

            riddleCard.style.display = "none";

            birthdayMessage.classList.add("show");

        }, 700);


    } else {

        /* ---------- WRONG ANSWER ---------- */

        riddleError.textContent = "Nuh uhhh try againn";

    }

});