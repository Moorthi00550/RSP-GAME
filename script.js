
let user_display=document.getElementById('show1');
user_display.style.transform='scaleX(-1)';
user_display.style.zIndex='-1';
let computer_display=document.getElementById('show2');
let score=document.getElementById('score');
let draws_shows=document.getElementById('draws');
let user_score=0;
let computer_score=0;
let computer_unbreakable=false;
let rounds=0;
let draws=0;


alert('WELCOME');

//restart
document.getElementById('restart').style.display='none';
let rounds_show=document.getElementById('rounds');





function user_selected(choice){
  let user_choice=(choice==0)?'Start':(choice==1)?'Rock':(choice==2)?'Paper':(choice==3)?'Scissor':choice;

  if (user_choice=='Rock'|| user_choice=='Paper' || user_choice=='Scissor'){
  let generator=Math.round(Math.random(0,2)*2);
  let computer_choice=unbreakable(generator,user_choice,computer_unbreakable);
  rounds++;
  
  show(computer_choice,computer_display);
  show(user_choice,user_display);
  
  score_generator(user_choice,computer_choice,user_display,computer_display);
  if(computer_unbreakable==false){
    document.querySelector('.Hard').style.background='grey';
  document.querySelector('.Hard').addEventListener("click",(e)=>{
  e.target.innerTEXT+='true';
  e.target.style.background='green';
  return (computer_unbreakable=true);
} );  }
  else if(computer_unbreakable==true){
    document.querySelector('.Hard').style.background='green';
  document.querySelector('.Hard').addEventListener("click",(e)=>{
  e.target.innerTEXT+='false';
  e.target.style.background='grey';
  return (computer_unbreakable=false);
} );  }
  
}
else if(user_choice=='Start'){
  user_display.innerHTML='<i class="far fa-address-book"></i>';
  computer_display.innerHTML='<i class="fas fa-laptop"></i>';
  user_display.style.background='grey';
  computer_display.style.background='grey';
  user_score=0;
  computer_score=0;
  computer_unbreakable=false;
  draws=0;
  rounds_show.innerHTML=('Rounds: '+rounds+'____'+'Draw: '+draws);
  document.querySelector('.Hard').style.background='grey';
  document.getElementById('restart').style.display='none';
}
else{
  document.getElementById('restart').style.display='flex';
  //document.getElementById('restart').style.width='100vw';
  //document.getElementById('restart').style.height='100vh';
  document.getElementById('winner').innerHTML=user_choice;
}
}



function score_generator(user,computer,user_bg,computer_bg){
  if (user==computer){
    user_score+=0;
    computer_score+=0;
    user_bg.style.background='lightgreen';
    computer_bg.style.background='lightgreen';
    draws++;
    rounds_show.innerHTML=('Rounds: '+rounds+'____'+'Draw: '+draws);
  }
  else if (user=='Rock' && computer=='Scissor') {
    user_score+=1;
    user_bg.style.background='green';
    computer_bg.style.background='red';
  }
  else if (user=='Rock' && computer=='Paper') {
    computer_score+=1;
    user_bg.style.background='red';
    computer_bg.style.background='green';
  }
  else if (user=='Scissor' && computer=='Rock') {
    computer_score+=1;
    user_bg.style.background='red';
    computer_bg.style.background='green';
  }
  else if (user=='Scissor' && computer=='Paper') {
    user_score+=1;
    user_bg.style.background='green';
    computer_bg.style.background='red';
  }
  else if (user=='Paper' && computer=='Rock') {
    user_score+=1;
    user_bg.style.background='green';
    computer_bg.style.background='red';
  }
  else if (user=='Paper' && computer=='Scissor') {
    computer_score+=1;
    user_bg.style.background='red';
    computer_bg.style.background='green';
  }
  rounds_show.innerHTML=('Rounds: '+rounds+'____'+'Draw: '+draws);
return score_shower(user_score,computer_score);
}


function score_shower(user,computer){
  if (rounds==11){
  if (user>computer){
    score.innerHTML='Player Wins';
    user_selected("Player Wins");
    rounds=0;
  }
  else if (computer>user){
    score.innerHTML='Computer Wins';
    user_selected("Computer Wins");
    rounds=0;
  }
  else{
    score.innerHTML='Draw';
    user_selected("Draw");
    rounds=0;
  }
}
  else{
   score.innerHTML='<p style="display:inline;position:absolute;left:15%;"> User : '+user+'</p>';
  score.innerHTML+='<p style="display:inline;position:absolute;right:10%;"> Computer : '+computer+'</p>';
  }
}



function show(computer,display){
  switch (computer) {
    case 'Rock':
      display.innerHTML='<i class="fas fa-hand-rock"></i>';
      break;
    case 'Paper':
      display.innerHTML='<i class="fas fa-hand-paper"></i>';
      break;
    case 'Scissor':
      display.innerHTML='<i class="fas fa-hand-scissors"></i>'; 
      break;
    default:
      display.innerHTML='<i class="fas fa-handshake"></i>';
  }
}

function unbreakable(generator_is,player,bool,is_player=false) {
  if (bool==true){
    if (player=='Rock'){
      return (generator_is='Paper');
    }
    else if(player=='Paper'){
      return (generator_is="Scissor");
    }
    else {
      return (generator_is='Rock');
    }
  }
  else{
    return (generator_is==0)?'Rock':(generator_is==1)?'Paper':'Scissor';
  }
}