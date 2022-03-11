'use strict';

let score =20;
let highscore=0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}
const displayScore = function(scores){
    document.querySelector('.score').textContent=scores;
}

let secretNumber = Math.trunc(Math.random()*20)+1;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage(' No Content ');
    }else if(guess===secretNumber){
        displayMessage(' Congrats !!!! ');
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.number').style.width='30rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
            
        }
    } else {
        if(guess!==secretNumber){
            if (score>1){
        displayMessage( guess>secretNumber ? ' Too High ': ' Too Low ');
        score--;
        displayScore(score);
            }else{
                displayMessage(' You Lost ');
            }
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score=20;
    displayScore(score);
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?';

})