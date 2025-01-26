//when the button is clicked the gameFunc will begin
function gameFunc(){

    document.getElementById("gameStart").style.display = 'none'; //makes the button disappear when clicked

    document.getElementById("btnContainer").style.display = "block"; //make trash bins appear 


    //an array of 7 items images
    let myOps = new Array(
        'IMG1.PNG',
        'IMG2.PNG',
        'IMG3.PNG',
        'IMG4.PNG',
        'IMG5.PNG',
        'IMG6.PNG',
        'IMG7.PNG',
    );

    randomNum = Math.floor(Math.random() * myOps.length);
    randImg = myOps[randomNum]; //chooses a random img from folder

    //display imgage
    document.getElementById('imgPlace').src = `./img/guessImg/${randImg}`

    // -----------------
    //tryna figure our how to make statements of correct answers
    checkAnswer();
}

function checkAnswer(){
    var score = 0; // start w score 0

}

//i think needing to save which randIMG to compare w trash can needs to be made