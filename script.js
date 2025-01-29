//when the button is clicked the gameFunc will begin
function gameFunc(){

    document.getElementById("gameStart").style.display = 'none'; //makes the button disappear when clicked
    document.getElementById("btnContainer").style.display = "block"; //make trash bins / items appear 
    document.getElementById("scoreContainer").style.display = "block";

    //display imgage
    document.getElementById('imgPlace').src = `./img/guessImg/${window.GLOBALITEMnum}`
    
    //testing purposes
    console.log("inside the 1funct " + window.GLOBALITEMnum);
}

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

    randomNum = Math.floor(Math.random() * items.length);
    randImg = items[randomNum]; //chooses a random img from folder

    return randImg;
}

//global variable saving random item image
window.GLOBALITEMnum = NUMBERCOMP();

function checkA(userC){
    let c = userC;

    switch(c + window.GLOBALITEMnum){
        case 'gIMG6.PNG':
            console.log(c + window.GLOBALITEMnum); //testing purposes
            // alert('TRUE glass');
            win();
            break;
        case 'hIMG7.PNG':
            console.log(c + window.GLOBALITEMnum);
            // alert('TRUE haz');
            win();
            break;
        case 'paIMG4.PNG':
            console.log(c + window.GLOBALITEMnum);
            // alert('TRUE paper');
            win();
            break;
        case 'mIMG2.PNG':
            console.log(c + window.GLOBALITEMnum);
            // alert('TRUE metal');
            win();
            break;
        case 'oIMG5.PNG':
            console.log(c + window.GLOBALITEMnum);
            // alert('TRUE organic');
            win();
            break;
        case 'plaIMG1.PNG':
            console.log(c + window.GLOBALITEMnum);
            // alert('TRUE plastic');
            win();
            break;
        case 'wIMG3.PNG':
            console.log(c + window.GLOBALITEMnum);
            // alert('TRUE waste');
            win();
            break;
        default:
            wrong();
    }


    //reload window each time after win, will fix later when score is added
    window.GLOBALITEMnum = NUMBERCOMP();
    document.getElementById('imgPlace').src = `./img/guessImg/${window.GLOBALITEMnum}`
}

let userScore = 0;
// const results_div = document.querySelector(".results");

function win(){
    ++userScore;
    document.getElementById("userScoreBox").innerHTML = userScore;
    console.log(userScore);
}

function wrong(){
    document.getElementById("wrongA").innerHTML = "Wrong Answer, Try Again";
}