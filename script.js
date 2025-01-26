//when the button is clicked the gameFunc will begin
function gameFunc(){

    document.getElementById("gameStart").style.display = 'none'; //makes the button disappear when clicked
    document.getElementById("btnContainer").style.display = "block"; //make trash bins appear 
    document.getElementById("scoreContainer").style.display = "block";


    // an array of 7 items images
    // let myOps = new Array(
    //     'IMG1.PNG',
    //     'IMG2.PNG',
    //     'IMG3.PNG',
    //     'IMG4.PNG',
    //     'IMG5.PNG',
    //     'IMG6.PNG',
    //     'IMG7.PNG',
    // );

    // randomNum = Math.floor(Math.random() * myOps.length);
    // randImg = myOps[randomNum]; //chooses a random img from folder
    // console.log(randImg);

    // //display imgage
    // document.getElementById('imgPlace').src = `./img/guessImg/${randImg}`
    
    // -----------------
    // tryna figure our how to make statements of correct answers
}

//scores
var score = 0; // start w score 

    const myOps = ["IMG1.PNG", "IMG2.PNG", "IMG3.PNG"];
    randomNum = Math.floor(Math.random() * myOps.length);
    randImg = myOps[randomNum]; //chooses a random img from folder
    console.log(randImg);

    document.getElementById('imgPlace').src = `./img/guessImg/${randImg}`

function checkAnswer(userChoice){

    // let guesses = ['1,2,3,4,5,6,7'];

    switch(userChoice + guesses){
        case "glassIMG6.PNG":
            alert('trueeee');
            break;
    }
}


//i think needing to save which randIMG to compare w trash can needs to be made