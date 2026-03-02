let score= JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lost:0,
    tie:0,
}
updateDisplay();

function rock(){
    let randomNo= Math.random()*3;
    if(randomNo>0 && randomNo<=1){
let computerChoice='📄'; 
document.querySelector('.display').innerText=('computer had chosen '+
computerChoice+'\n\n -you lost! 👻');
score.lost+=1;
storageLost();
}
else if(randomNo>1 && randomNo<=2){
    let computerChoice='✂️';
    document.querySelector('.display').innerText=('computer had chosen '+computerChoice+' \n\n-you won! 🏆');
    score.win+=1;
    storageWin();
}
else{
    let computerChoice='🗿';
   document.querySelector('.display').innerText=('computer had chosen '+computerChoice+' \n\n-tie⚖️ :/');
   score.tie+=1;
   storageTie();
}
}

function paper(){
    let randomNo= Math.random()*3;
    if(randomNo>0 && randomNo<=1){
let computerChoice='🗿';
document.querySelector('.display').innerText=('computer had chosen '+computerChoice+'\n\n-you won! 🏆');
score.win+=1;
storageWin();
}
else if(randomNo>1 && randomNo<=2){
    let computerChoice='📄';
document.querySelector('.display').innerText=('computer had chosen '+computerChoice+'\n\n-tie⚖️ :/');
score.tie+=1;
storageTie();
}
else{
    let computerChoice='✂️';
    document.querySelector('.display').innerText=('computer had chosen '+computerChoice+' \n\n-you lost! 👻');
    score.lost+=1;
   storageLost();
}
}

function scissors(){
    let randomNo= Math.random()*3;
    if(randomNo>0 && randomNo<=1){
let computerChoice='🗿';
document.querySelector('.display').innerText=('computer had chosen '+computerChoice+'\n\n-you lost! 👻');
score.lost+=1;
storageLost();
}
else if(randomNo>1 && randomNo<=2){
    let computerChoice='📄';
document.querySelector('.display').innerText=('computer had chosen '+computerChoice+'\n\n-you won! 🏆');
score.win+=1;
storageWin();
}
else{
    let computerChoice='✂️';
    document.querySelector('.display').innerText=('computer had chosen '+computerChoice+' \n\n-tie⚖️ :/');
    score.tie+=1;
 storageTie();
}
}  

function storageLost(){
localStorage.setItem('score',JSON.stringify(score));
let scoreStr;

scoreStr= JSON.parse(localStorage.getItem('score'));
console.log(scoreStr);

return document.querySelector('.inLost').innerText= (scoreStr.lost);

}

function storageWin(){
    localStorage.setItem('score',JSON.stringify(score));
    let scoreStr;
  scoreStr= JSON.parse(localStorage.getItem('score'));
console.log(scoreStr);

   return document.querySelector('.inWin').innerText= (scoreStr.win);

}

function storageTie(){
    localStorage.setItem('score',JSON.stringify(score));
    let scoreStr;
   scoreStr= JSON.parse(localStorage.getItem('score'));
console.log(scoreStr);

  return document.querySelector('.inTie').innerText= (scoreStr.tie);
 
}

//function made to update the score from score object (after the 1st line of this code execution as score= JSON.parse(localStorage.getItem('score')) ).
function updateDisplay(){
    document.querySelector('.inWin').innerText= score.win;
    document.querySelector('.inLost').innerText= score.lost;
    document.querySelector('.inTie').innerText= score.tie;
}

//function made to reload the page used in html in onclick reset.
function reloadpage(){
    location.reload();
}




//you can try doing :
//CHECK scoreStr=== undefined then do {scoreStr= json.parse(localsStorage.getItem('score'));
// updateDisplay();}
