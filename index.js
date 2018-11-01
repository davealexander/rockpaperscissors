
//computerPlay function chooses randomly from bps array
function computerPlay(){
    let bps = ["boulder", "parchment", "shears"];
    let random =[Math.floor(Math.random()*bps.length)];
    return(bps[random]);
}

// player selection and decides winner of round
function playRound(computerSelection,playerSelection){
    let result= "";
        if(computerSelection == playerSelection){
             result = "Tie!";
        }
        if(playerSelection == "boulder"){
            if(computerSelection =="shears"){
                result = "You win";
            } else if (computerSelection =="parchment"){
                result = "Computer Wins";
            } else if (computerSelection == playerSelection){
                result ="Tie!"
            }else{
                result ="invalid text!";
            }
        }
        if(playerSelection == "shears"){
            if(computerSelection =="parchment"){
                result = "You win";
            } else if (computerSelection == "boulder"){
                result = "Computer wins";
            } else if (computerSelection == playerSelection){
                result = "Tie!"
            } else{
                result ="invalid text!";
            }
        }
        if(playerSelection == "parchment"){
            if(computerSelection =="boulder"){
                result = "You win";
            }else if (computerSelection == "shears"){
                result ="Computer wins";
            }else if (computerSelection == playerSelection){
                result ="Tie!";
            }else{
                result = "invalid text!";
            }
        }
    return result;
}
    
// function determines score and winner of round. Will also produce overall victor
function game(){
    let player_score = 0;
    let computer_score = 0;
    let message = "";

//results
    for (var i=1; i<=5; i++){
        let playerSelection = prompt("boulder, parchment, or shears?").toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection);
        console.log("Round " + i + ": " + result);
    //scoring
        if(result === "You win"){
            player_score += 1;
        } else if(result === "Computer wins"){
            computer_score += 1;
        }
    //overall score text
        if(player_score > computer_score){
            message = "Congratulations! You crushed the computer!";
        } else{
            message = "You lose. Computers now control the world.";
        } 
        if(player_score === computer_score){
            message = "It is a tie!"
        }
    }
    console.log("Your score: " + player_score + "\nComputer score: " + computer_score + "\n" + message);
}

game();
