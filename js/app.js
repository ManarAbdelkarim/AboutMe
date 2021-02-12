'use strict';
let Score = 0;
let userName;
let attempt = 4;
let Level =1;
let correct = true;
const replay = ['you are right :D' , 'that is wrong'] ;
const questions = ['Is my name Manal?','Did I study At Princess Sumaya University','Did I born in Kuwait?'
  ,'is Mansaf the most hated dish for me','is One Peace is the worst anime for me ?'];
const answers = ['no','no','no','no','yes'];
const secQuestions = ['what is my age?','whats is my favorite number','in which month I enrolled to this level?',
  'what is my birthday?','what is my birth month?',
  'I am running out of question :P what is my shoes size?','how many fingers in my hand :P'];
const secAnswers = [25,9,2,25,9,37,5];
const secReplay = ['the number is higher' , 'the number is lower'] ;
let randoms =[];

function generateRandoms(){
  for (let index = 0; index < 6; index++) {

    let count =0;
    let tryOut =  Math.floor(Math.random() * 10);
    for (let y = 0; y <= index; y++) {
      if (randoms[y]=== tryOut) {
        count = -1;
        break;
      }
    }
    if (count === -1) {
      index -=1;
    }
    else{
      randoms[index] = tryOut;
    }
  }
}
generateRandoms();

function play(){

  userName = prompt('what is your name?');
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    if (userAnswer.toLowerCase() === answers[i] || userAnswer.toLowerCase() === answers[i][0]) {
      alert(replay[0]);
      Score++;
    }
    else{
      alert(replay[1]);
    }

  }

  showResult(Score) ;
  Score =0;
  Level =2;

  alert('Here is level 2 of the game .. are you ready ?');
  for (let index = 0; index < secQuestions.length; index++) {
    attempt=4;
    let correct = true;
    let guess = prompt(secQuestions[index] +' you have ' + attempt + ' attempts');

    while(attempt-1 !== 0) {
      if (isNaN(guess)) {
        guess = prompt(secQuestions[index] +' you have ' + attempt + ' attempts');
        continue;
      }
      if (guess === secAnswers[index])
      {

        alert(replay[0]);
        attempt = 0;
        Score++;
        correct = true;
        break;
      }
      else if(secAnswers[index]>guess){
        alert(secReplay[0]);
        attempt-=1;
        guess = prompt(secQuestions[index] +' you have ' + attempt + ' attempts');
        correct = false;
        continue;
      }
      else
      {
        alert(secReplay[1]);
        attempt-=1;
        guess = prompt(secQuestions[index] +' you have ' + attempt + ' attempts');
        correct = false;
        continue;
      }


    }
    if (!correct) {
      alert('the correct answer was ' + secAnswers[index]);
    }
  }

  alert('are you lucky? try to guess a random number from 0-10 and you will get 2 points (: !! (you have 6 attempts)');

  attempt = 6;
  while(attempt){
    let guess = prompt('guess the number , you have  ' + attempt + ' attempt');
    for (let index = 0; index < randoms.length; index++) {

      if (guess === randoms[index])
      {

        alert('good job ! it\'s '+ randoms[index] +' you gained 2 points :D');
        correct=true;
        Score+=2;
        break;
      }

      else{
        correct = false;
      }
    }

    if (!correct) {
      alert('try again ');
      attempt -= 1;
    }
    else{
      break;
    }
  }
  if (!attempt) {
    alert('you finished all the attempts .. did you open an umbrella indoor?');
  }


  showResult(Score) ;
}
function showResult(num){

  if (num<3) {
    if (Level===1) {
      alert('it\'s ok '+userName+ ' you can try again by reloading the page .. your score is' + num + ' out of 5');

    }
    else {
      alert('it\'s ok '+userName+ ' you can try again by reloading the page .. your score is' + num + ' out of 7');
      document.getElementById('placeHolder').innerHTML = 'Hello '+ userName+ ' it\'s ok you can try again by reloading the page .. your score is' + num + ' out of 7 ';

    }
  } else if ( num>3 && num<5 ) {
    if (Level ===1) {
      alert('you did well '+userName+ ' you got' + num + ' out of 5') ;
    }
    else {
      alert('you did well '+userName+ ' you got' + num + ' out of 7') ;
      document.getElementById('placeHolder').innerHTML = 'Hello '+ userName+ ' you did well you got' + num + ' out of 7 ';
    }
  }

  else {


    if (Level === 2) {
      alert('you nailed it '+userName+ ' :D you got ' + num + 'out of 7');
      document.getElementById('placeHolder').innerHTML ='Hello '+ userName+ ' you nailed it :D you got ' + num + ' out of 7';
    }
    else{
      alert('you nailed it '+userName+ ' :D you got ' + num + 'out of 5');
    }
  }



}

function hidInfo(){

  if ( document.getElementById('span').style.display == 'block') {

    document.getElementById('span').style.display = 'none';
  }
  else{

    document.getElementById('span').style.display = 'block';
  }

}

function needMoreTime() {

  document.getElementById('moreTime').style.display = 'none';
  hidInfo();
  document.getElementById('warning').style.display = 'none';
}


setTimeout(function(){

  document.getElementById('start').removeAttribute('disabled');
  document.getElementById('span').style.display = 'none';
  document.getElementById('moreTime').style.display = 'inline';

}, 10000);

