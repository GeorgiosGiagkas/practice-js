//game values
let min=1,
    max=10,
    winningNum = getRandomNum(min, max),
    guessesLeft=3;


//UI elements
const game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

//assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;


//play again event llistener (use event delegation)
game.addEventListener("mousedown",//dont use "click"
    function(e){
        if(e.target.className==="play-again"){
            //reload page
            window.location.reload();
        }
    }
)



//listen for guess
guessBtn.addEventListener("click",
    function(){
        let guess = parseInt(guessInput.value);

        if(isNaN(guess) || guess < min || guess > max){
            setMessage(`Please enter a number between ${min} and ${max}`,"red");
            return;
        }

        //check if won
        if(guess===winningNum){
            //won
            gameOver(true,`${winningNum} is correct!`);
        }
        else{
            guessesLeft-=1;
            if(guessesLeft===0){
                //game over loss
                gameOver(false,`Game over. The correct number was ${winningNum}`);
            }
            else{
                //continue
                guessInput.style.borderColor="red";
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,"red");
                //clear input
                guessInput.value="";

            }

        }
    }    
)

function gameOver(won, msg){
    //disable input
    guessInput.disabled=true;

    //set color
    let color;
    won===true ? color="green" : color = "red";

    //change border color
    guessInput.style.borderColor=color;
    //set Message
    setMessage(msg, color);

    //play again?
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
    
}


function getRandomNum(min, max){
    let randomNum =(min+parseInt(Math.random()*max));
    //console.log(randomNum);
    return randomNum;
    
}


function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}