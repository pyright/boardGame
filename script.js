
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

    draftHand[]
    draftHandSize = this.draftHand.length

    drawBool;

    playerNumber
}



var playerList = [];

function createNewPlayer(){
    var newPlayer = new Player();
    return newPlayer;
}

function addPlayer(){
    playerList.push(createNewPlayer());
}

//MATH
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }





//36 cards total. 12 characters total. 3 cards of each character.
//Deal 9 cards to 4 players. Draft 3 cards. Shuffle undrafted cards and make a draw pile.

const fullDeck = [];
let deck = [];
let drawPile = [];

let draftCounter = 0;

let myDrawIndex;
let myDrawCard;

//returns a random index in a specified array
function randomCard(arr){
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

const freshDraftHandLimit = 9;

function draft(playerListArr){

    let myDraftIndex;
    let myDraftCard;


    while(draftCounter < freshDraftHandLimit){
        for(var playerNum = 0; playerNum < playerListArr.length; playerNum++){
            myDraftIndex = randomCard(deck); //select a card from deck[]
            myDraftCard = deck[myDraftIndex];  //store the card in myDraftCard

            playerListArr[playerNum].draftHand.push(myDraftCard); //add myDraftCArd card to player.draftHand[]

            deck.splice[myDraftIndex, 1]; //remove the myDraftCard from deck[] 
             
            //Reset myDraftCard and myDraftIndex
            myDraftIndex = null;
            myDraftCard = null;
        }
        draftCounter++;
    }
}

draft(playerList);

/*********************************************************************************************/
//Phase 1, DRAW

function drawCard(player){
        myDrawIndex = randomCard(drawPile); //select a card from drawPile
        myDrawCard = drawPile[myDrawIndex]  //store the card in myDrawCard

        player.hand.push(myDrawCard); //add myDrawCArd card to player.hand[]

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

