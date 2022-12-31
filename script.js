let player={
    name: "Dami:",
    chips: 100
}



let cards=[];

let sum = 0;
let hasBlackjack= false;
let isAlive= false;
let message="";



let sumEl= document.getElementById("sum-el");

let cardsEl= document.getElementById("cards-el");

let messageEl= document.getElementById("message-el");

let playerEl= document.getElementById("player-el");

playerEl.textContent= player.name + " $" + player.chips;



//functions

function getRandomCard(){
    var randomNumber = Math.floor((Math.random() * 13) + 1);
    if (randomNumber> 10) {
        return 11
    }
    else if(randomNumber<2){
        return 10
    }
    else{
        return randomNumber
    }
    ;
}

function startGame(){
    isAlive= true;
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();

    cards=[firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame(){

    cardsEl.textContent= "Cards: ";

for (let i = 0; i< cards.length; i++) {
        cardsEl.textContent+= cards[i]+ " ";  
    }
   

    sumEl.textContent+= " "+ sum;

 

    if (sum <21){
    message="Do you want more cards?";
    }
    else if( sum===21){
    message="Blackjack!!!";
    hasBlackjack= true;
    }
    else{
        message="Game Over";
        isAlive= false;
    }

    messageEl.textContent=message;
}

function newCard(){
 if ( isAlive===true && hasBlackjack===false) {
    

 let card= getRandomCard();
  cards.push(card);
  sum+= card; 
 renderGame();
 }
}
