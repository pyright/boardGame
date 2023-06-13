
let currentPhase = 0;


var nextPhase = function(){

    switch(currentPhase){

        case 1:
            //player 1 actions
            //player 2 actions
            //player 3 actions
            //player 4 actions
            currentPhase = 2;
        break;

        case 2:
            //player 1 actions
            //player 2 actions
            //player 3 actions
            //player 4 actions
            currentPhase = 3;
        break;

        case 3:
            //player 1 actions
            //player 2 actions
            //player 3 actions
            //player 4 actions
            currentPhase = 4;
        break;

        case 4:
            //player 1 actions
            //player 2 actions
            //player 3 actions
            //player 4 actions
            currentPhase = 5;
        break;

        case 5:
            //player 1 actions
            //player 2 actions
            //player 3 actions
            //player 4 actions
            score()
            currentPhase = 1;
        break;
    }
}

/********************************************************** */
//PLAYER OBJECT
class Player{
    bench[]
    benchSize = this.bench.length

    hand[]
    handSize = this.hand.length

    drawBool;

    playerNumber
}



//MATH
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }





//36 cards total. 12 characters total. 3 cards of each character.
//Deal 9 cards to 4 players. Draft 3 cards. Shuffle undrafted cards and make a draw pile.


const deck = [];
let drawPile = [];

let myDrawIndex;
let myDrawCard;

//returns a random index in a specified array
function randomDraw(arr){
    return getRandomInt(0, (arr.length));
}

function updateMyDraw(arr, i){
    myDrawCard = arr[i];
}

function updatePile(arr, i){
    arr.splice(i, 1)
}


//Phase 0, DRAFT
//Deal 9 cards from deck[] to 4 players. Draft 3 cards. Shuffle undrafted cards and make a draw pile.


/*********************************************************************************************/
//Phase 1, DRAW

function drawCard(player){
        myDrawIndex = randomDraw(drawPile); //select a card from drawPile
        myDrawCard = drawPile[myDrawIndex]  //store the card in myDrawCard

        player.hand.push(myDraw); //add myDrawCArd card to player.hand[]
        player.handSize += 1; //update hand size

        drawPile.splice[myDrawIndex, 1]; //remove the myDrawCard from drawPile[]   

        //Reset myDrawCard and myDrawIndex
        myDrawIndex = null;
        myDrawCard = null;
    }

function updateDrawBool(player)
{
    player.drawBool = !drawBool;
}

function conditionalDrawCard(player){
    if(player.drawBool){
        drawCard(player);
    }
}




//Phase 2, PLAY + MODIFY

//Phase 3, MARK THE WORLD + EVENT

//Phase 4, REVEAL + KILL

//Phase 5, SCORE

