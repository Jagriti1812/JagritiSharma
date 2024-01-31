
var wordsArray = ['Physicst','Dedicated', 'Focused','Experienced'];
    var spanElement = document.getElementById('textToModify');
    var cursorElement = document.getElementById('cursor');
var cursorPosition = 0;
function updateText() {
  var nextWord = wordsArray[cursorPosition];
  spanElement.textContent = nextWord;
  cursorPosition = (cursorPosition + 1) % wordsArray.length;
}
var intervalId = setInterval(updateText, 1000);    
var currentIndex = 0;
var contentContainers = [
    {
        content: "One of the highlights of my internship was the chance to interact with students from various age groups. I was involved in delivering lessons, facilitating discussions, and adapting teaching methodologies to cater to different learning styles. This experience enhanced my communication skills and deepened my appreciation for the unique strengths and challenges of each student.",
        image: "/images/img.jpg"
    },
    {
        content: "",
        image: "/images/cnt-img.jpg"
    }
];

function showContent() {
    document.getElementById("content-container").innerHTML = contentContainers[currentIndex].content;
    document.getElementById("image-container").src = contentContainers[currentIndex].image;
}

function plusSlides(n) {
    currentIndex = (currentIndex + n + contentContainers.length) % contentContainers.length;
    showContent();
}

showContent();

setInterval(function () {
    clearInterval(intervalId);
}, 1000);




function addFeedback() {
    var nameRoleInput = document.getElementById("name-role");
    var feedbackTextInput = document.getElementById("feedback-text");

    var nameRole = nameRoleInput.value.trim();
    var feedbackText = feedbackTextInput.value.trim();

    if (nameRole !== "" && feedbackText !== "") {
        var feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("added-feedback");

        var nameRoleParagraph = document.createElement("p");
        nameRoleParagraph.textContent = nameRole;
        feedbackDiv.appendChild(nameRoleParagraph);

        var feedbackParagraph = document.createElement("p");
        feedbackParagraph.textContent = feedbackText;
        feedbackDiv.appendChild(feedbackParagraph);

        var feedbackContainer = document.getElementById("feedback-container");
        feedbackContainer.appendChild(feedbackDiv);

        nameRoleInput.value = "";
        feedbackTextInput.value = "";

        setTimeout(function () {
            feedbackDiv.style.opacity = "1";
            feedbackDiv.style.transform = "translateY(0)";
        }, 100);

        feedbackContainer.scrollTop = feedbackContainer.scrollHeight;
    }
}
