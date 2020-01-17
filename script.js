var questions = [
    {
      title: "This is a multiple choice quiz that is going to test you on your coding abilities",
      choices: ["Start Quiz!"],
      answer: "Start Quiz!"
    },
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store _______.",
      choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
      answer: "all of the above"
    },
    {
      title: "String values must be enclosed within _______ when being assigned to variables",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "quotes"
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "for loops", "console log", "terminal"],
      answer: "console log"
    },
    {
      title: "Congratulations you finished the quiz your score was " + counter ,
      choices: ["Start Again?"],
      answer: "Start Again?"
    },
  ];



var main = document.querySelector("main");

var currentQuestion = 0;

var timer = document.querySelector("#timer");
var counter = 75;



var nextQuestion = function() {
    main.innerHTML = "";

    questions.forEach(function(quiz, indexQuiz) {
        var div = document.createElement("div");

        if (currentQuestion != indexQuiz) {
            div.setAttribute("class", "hide");
        };

        var hOne = document.createElement("h1");
        hOne.textContent = quiz.title;

        var ul = document.createElement("ul");

        quiz.choices.forEach(function(multipleChoice) {
            var li = document.createElement("li");
            li.textContent = multipleChoice;

            ul.append(li);
        });
        div.append(hOne);

        div.append(ul);

        main.append(div);
        
    });
}

nextQuestion();



main.addEventListener("click", function () {

    var targetedClick = event.target;

    if(targetedClick.matches("li")) {

      if (targetedClick.textContent === questions[currentQuestion].answer) {

        console.log("correct!");
      }
      
      else {
        counter -= 15;
        console.log("incorrect");
      };
        console.log(targetedClick.textContent);
        currentQuestion++;
        console.log("Answer for question # " + currentQuestion + " is " + questions[currentQuestion].answer);
        nextQuestion();
        
        
    }
    if (targetedClick.textContent === "Start Quiz!") {
        console.log("the quiz has started");
        startTimer();
    };

    });
function startTimer() {
    setInterval(timeIt, 1000);

}
function timeIt() {
    counter--;
    timer.textContent = counter;

    }










