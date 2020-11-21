 var readlineSync = require("readline-sync");
 var score = 0;
var userName = readlineSync.question("what is your name? ");
console.log("welcome " + userName + " to Do You Nivet?");
function play(question,answer) {
  var userName = readlineSync.question(question);
  if(userName=== answer){
    console.log("right");
    score = score + 1;
   }else{
    console.log("wrong");
  }
    console.log("current score",score);
    console.log("-----------");
  
}

var questions = [{
question:"where do i live ", 
answer: "ahmedabad"
}, {
question:"fav super hero ",
answer: "goku"
}]
for(var i=0; i<questions.length; i++){
  var currentQuestions = questions[i];
  play(currentQuestions.question,currentQuestions.answer)
}