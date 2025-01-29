//when the button is clicked the gameFunc will begin
function gameFunc(){

    document.getElementById("gameStart").style.display = 'none'; //makes the button disappear when clicked
    document.getElementById("btnContainer").style.display = "block"; //make trash bins / items appear 
    document.getElementById("scoreContainer").style.display = "block";  //makes score appear after clicking start

    //display image to guess
    document.getElementById('imgPlace').src = `./img/guessImg/${window.GLOBALITEMnum}`
}

//an array of images to guess where it belongs, returns a radnom img from array.
function NUMBERCOMP(){
    let items = new Array(
        'IMG1.PNG',
        'IMG2.PNG',
        'IMG3.PNG',
        'IMG4.PNG',
        'IMG5.PNG',
        'IMG6.PNG',
        'IMG7.PNG',
    );

    randomNum = Math.floor(Math.random() * items.length); //generates a random #
    randImg = items[randomNum]; //chooses a random img from folder

    return randImg; //returning an img from array
}

//global variable saving random item image
window.GLOBALITEMnum = NUMBERCOMP();

function checkA(userC){
    document.getElementById("wrongA").style.visibility = 'hidden'; //hiding "wrong answer" message after choosing the wrong option
    let c = userC;

    //condition statements that are true, goes to increment point
    switch(c + window.GLOBALITEMnum){
        case 'gIMG6.PNG':
            win();
            break;
        case 'hIMG7.PNG':
            win();
            break;
        case 'paIMG4.PNG':
            win();
            break;
        case 'mIMG2.PNG':
            win();
            break;
        case 'oIMG5.PNG':
            win();
            break;
        case 'plaIMG1.PNG':
            win();
            break;
        case 'wIMG3.PNG':
            win();
            break;
        default:
            wrong();
    }

    gameOver(); //checking if game is over
    window.GLOBALITEMnum = NUMBERCOMP();    //generates a new random img
    document.getElementById('imgPlace').src = `./img/guessImg/${window.GLOBALITEMnum}` //displays new random img
}

//user's starting score
let userScore = 0; 

//incrementing user's score by 1, if correct
function win(){
    ++userScore;
    document.getElementById("userScoreBox").innerHTML = userScore;
}

//displaying message to user if the option they chose is wrong
function wrong(){
    document.getElementById("wrongA").style.visibility = 'visible';
    document.getElementById("wrongA").innerHTML = "Wrong Answer, Try Again";
}

//checking if user has reached 5 points to stop game and reload window.
function gameOver(){
    if(userScore === 5){
        document.getElementById("endGame").innerHTML = "Game Over";
        setTimeout(function(){
            window.location.reload();
        }, 1500);
    }
}