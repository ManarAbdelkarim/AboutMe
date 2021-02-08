'use strict'

let Time = 10;
let Score = 0;
let userName;

window.onload = (function() {

       

function beforeStart(){
                debugger;
        let Begun = confirm("by clicking OK the game will start");
        if (Begun == true) {
                alert("be quick ! you have 10 second only");
                hidInfo();
            sleep(1000);
            let isReady = confirm("Click ok if you are ready and cancel if you need 10 seconds more ");
    
            while (!isReady) {
                sleep(10000);
                Time +=10;
                isReady = confirm("Click ok if you are ready and cancel if you need 10 seconds more ");
            }

            hidInfo();
        }
        
        userName = ("what is your name?");
        debugger;
        
        alert("alright "+ userName +",now you can write yes,y,no,n");
        

}
beforeStart();

function Game(){
   
  
    let myName = prompt("Is my name Manal?");
    switch (myName.toUpperCase()) {

        case 'YES':
        case 'Y':
            alert("that's wrong. My name is Manar");
            // console.log("that's wrong. My name is Manar");
            break;
        case 'NO':
        case 'N':
            alert("you are right :D");
            // console.log("you are right :D");
            Score++;
        default:
            break;
    }
    let University;
    University = prompt("Did I study At Princess Sumaya University");
    switch (University.toUpperCase()) {

            case 'NO':
            case 'N':
            alert("you are right :D");
           // console.log("you are right :D");
            Score++;
            break;
            case 'YES':
            case 'Y':

            alert("that's wrong. I study At Princess Noura University");
         // console.log("that's wrong. I study At Princess Noura University");
            default:
            break;

}

    let Born = prompt("Did I born in Kuwait?");
    switch (Born.toUpperCase()) {

        case 'YES':
        case 'Y':
            alert("you are right :D just kidding , thats wrong,I born in Saudi Arabia ");
           // console.log("you are right :D just kidding , thats wrong,I born in Saudi Arabia ");

            break;
        case 'NO':
        case 'N':
            alert("you are right :D");
            // console.log("you are right :D");

            Score++;
        default:
            break;

    }

    let myFood;
    myFood = prompt("is Mansaf the most hated dish for me ");
    switch (myFood.toUpperCase()) {

        case 'YES':
        case 'Y':
            alert("that's wrong. Actually, it's my second favorite");
            // console.log("that's wrong. Actually, it's my second favorite");

            break;
        case 'NO':
        case 'N':
            alert("you are right :D");
            // console.log("you are right :D");

            Score++;
        default:
            break;

    }

    let myShow = prompt("is One Peace is the worst anime for me ?");
    switch (myShow.toUpperCase()) {

        case 'YES':
        case 'Y':
            alert(" of course that's right , it is the worst show in history!");
           // console.log("of course that's right , it is the worst show in history!");

            Score++;
            break;
        case 'NO':
        case 'N':
            alert("that's wrong. Actually, it's my second favorite");
            // console.log("that's wrong. Actually, it's my second favorite");

        default:
            break;
    }
    Result(Score) ;
}

Game();
function Result(num){
    debugger;
    hidInfo();
if (num<3) {
    alert("it's ok "+userName+ " you can try again by reloading the page .. your score is" + num + " out of 5 and you spent" + Time + " seconds  in reading");
    document.getElementById("placeHolder").innerHTML = "it's ok you can try again by reloading the page .. your score is" + num + " out of 5 and you spent" + Time + " seconds in in reading";
} else if ( num>3 && num<5 ) {
    alert("you did well "+userName+ " you got" + num + " out of 5 and you spent" + Time + " seconds in in reading") ;
    document.getElementById("placeHolder").innerHTML = "you did well you got" + num + " out of 5 and you spent" + Time + " seconds  in reading"
}

else {
    alert("you nailed it "+userName+ " :D you got " + num + "out of 5 and you spent" + Time + " seconds in in reading");
    document.getElementById("placeHolder").innerHTML ="you nailed it :D you got " + num + "out of 5 and you spent" + Time + " seconds  in reading"
}



}

function sleep(milliseconds) {

  
    const date = Date.now();
    let currentDate = null;
    do {
       currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function hidInfo(){
        debugger;
        if ( document.getElementById("Game").style.display == "block") {

            document.getElementById("Game").style.display = "none";
        }
        else{

                document.getElementById("Game").style.display = "block";
        }
        
}

});


