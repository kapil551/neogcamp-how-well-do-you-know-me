// https://www.npmjs.com/package/readline-sync
const readlineSync = require('readline-sync');
//https://www.npmjs.com/package/chalk
const chalk = require('chalk');

// storing the data of the high scores
let highScores = [
  {
    name: "Varshit",
    score: 5
  },
  {
    name: "Aabhas",
    score: 4
  },
  {
    name: "Choyonika",
    score: 4
  },
  {
    name: "Jay",
    score: 3
  }
]

// strore the questions and their answers in the form of an array of objects
let questionsAsked = [
  {
    question: "Who is my favorite footballer?",
    answer: "Cristiano Ronaldo"
  },
  {
    question: "Where was I born?",
    answer: "Mathura"
  },
  {
    question: "My favorite superhero would be?",
    answer: "Iron Man"
  },
  {
    question: "What is my favorite color?",
    answer: "Blue"
  },
  {
    question: "My dream place to visit is?",
    answer: "Madeira Island"
  },
  {
    question: "My favorite character in Naruto manga series is?",
    answer: "Itachi Uchiha"
  }
]

// current score
let score = 0;

// play game ==> check the answer for each asked question with the correct answer.
function answerThis(question, answer) {

  // ask the question and store it's answer
  let userAnswer = readlineSync.question(question + " ");
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay, It's Right! 🤩");
    score = score + 1;
  } 
  else {
    console.log("Oops, It's Wrong! 😔");
  }


  console.log("current score: ", score);
  console.log("-----------------");
}

// welcome user message
function welcomeUser() {
  
  // wait for user input
  const userName = readlineSync.question("Please Enter Your Name? ");
  console.log(`Hi`, chalk.yellowBright.bold(`${userName},`), `Let's see how well you know me!`); 
  console.log("-----------------");
  console.log( chalk.red(`Note: Each question has one point`));
  console.log("-----------------");
  console.log(`Let's start the quiz!!\n`);

}

// ask questions to the user one by one
function playGame() {

  // iterate over each question
  for(let i = 0; i<questionsAsked.length; i++)
  {
    let currentQues = questionsAsked[i];
    answerThis(currentQues.question, currentQues.answer);
  }
}

// show the final score of the user
function showScores() {
  console.log("YAY! You Scored: ", score);
  console.log("-----------------");

  console.log("Do check out the highest scores!");
  console.log("----------------");

  // show the highScores
  console.log("Current Leader Board:");
  highScores.map(eachScore => {

    console.log(eachScore.name, " : ", eachScore.score);
  })


}

function hasBeatenHighestScore() {

  console.log("----------------");
  let maxScore = 0;
  highScores.map(eachScore => {

    if(eachScore.score > maxScore) {
      maxScore = eachScore.score;
    }
  });

  // console.log("maxScore: ", maxScore);
  
  if(maxScore - score <= 0) {
    console.log("My friend you got the maximum score, you know me so well! 😎");
    console.log("I will update your name in the leader board!");
  } 

  else {
    console.log("My friend you could not beat the maximum score, try again later");
  }

}

function thankYou() {
  console.log("----------------");
  console.log(chalk.blueBright.bold("THANK YOU FOR TAKING THIS QUIZ!"));
  console.log("----------------");
}

welcomeUser(); // welcome the user
playGame(); // start playing the quiz
showScores(); // show the final score to the user

hasBeatenHighestScore(); // check if the user has beaten or equalled the highest score

thankYou();
