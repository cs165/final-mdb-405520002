// TODO(you): Modify the file in whatever ways necessary to implement
// the flashcard app behavior.
var play = document.querySelector('#choices1');
var pokemon = document.querySelector('#pokemon1');
var choosegame = document.querySelector('#main');
var choosecharacter = document.querySelector('#app1')
var menu = document.querySelector('#menu');
var game1 = document.querySelector('#paper');
var game2 = document.querySelector('#paper2');
var original = document.querySelector('#paper3');
var evolution = document.querySelector('#paper4');
var rule1 = document.querySelector('#game1');
var rule2 = document.querySelector('#game2');
var start = document.querySelector('#startbutton')
var enemy = document.querySelector('#enemy')
var enemyhp = document.querySelector('.hp');
var playerhp = document.querySelector('.hp2');
var player = document.querySelector('#player')
var play1 = document.querySelector('#playscreen');
var paper = document.querySelector('#papers');
var sissors = document.querySelector('#sissors');
var stone = document.querySelector('#stone');
var rbutton = document.querySelector('#evolution');
var enemystatus = document.querySelector('#enemystatus.border.high');
var round = document.querySelector('#round');
var sound = new Audio();
var game;
const result=document.querySelector('#results');
var resultscreen;
var score=document.querySelector('#score');
var score2=document.querySelector('#finalscore');



var hoverplay = () => {
    play.style.animation = 'changecolor 0.5s';
    play.style.backgroundColor = 'black';
    play.style.cursor = 'pointer';
    pokemon.style.backgroundImage = 'url(image/pikachurun.gif)'
    console.log('over');
}
var mouseout = () => {
    play.style.animation = 'changecolor2 0.5s';
    pokemon.style.backgroundImage = 'url(image/menu.gif)'
    play.style.backgroundColor = 'gray';

}

var playonclick = () => {
    choosegame.classList.remove('inactive');
    menu.classList.add('inactive');


}

var papermouseover = () => {
    game1.style.animation = 'changecolor3 0.2s infinite';
    game1.style.cursor = 'pointer';
    rule1.classList.remove('inactive');

}
var papermouseout = () => {
    game1.style.animation = 'changecolor3 0.1s ';
    rule1.classList.add('inactive');
    console.log('out');


}

var papermouseover2 = () => {
    game2.style.animation = 'changecolor3 0.2s infinite';
    rule2.classList.remove('inactive');
    game2.style.cursor = 'pointer';


}
var papermouseout2 = () => {
    game2.style.animation = 'changecolor3 0.1s ';
    rule2.classList.add('inactive');
    console.log('out');


}

var clickpaper1 = () => {
    choosegame.classList.add('inactive');
    app1.classList.remove('inactive');
    app1.style.border = 'none';
    original.style.backgroundImage = 'url(image/pikachu.gif)';
    evolution.style.backgroundImage = 'url(image/raechu.gif)';
    original.style.backgroundPositionY = '75px';
    evolution.style.backgroundSize = '175px';
    evolution.style.backgroundPositionY = '40px';
}

var hoverstartgame = () => {
    start.style.animation = 'changecolor3 0.2s infinite';

}

var startrmouseout = () => {
    start.style.animation = 'changecolor3 0.1s ';
}

var gamestart = () => {
    choosecharacter.classList.add('inactive');
    console.log('game start');
    var gamescreen = document.querySelector('#gamescreen')
    game = new Game(gamescreen, enemy, player, enemyhp, playerhp);
    game.start();

}


play.addEventListener('mouseover', hoverplay);
play.addEventListener('mouseout', mouseout);
play.addEventListener('click', playonclick);
game1.addEventListener('mouseover', papermouseover);
game1.addEventListener('mouseout', papermouseout);
game1.addEventListener('click', clickpaper1);
game2.addEventListener('mouseover', papermouseover2);
game2.addEventListener('mouseout', papermouseout2);
start.addEventListener('mouseover', hoverstartgame);
start.addEventListener('mouseout', startrmouseout);
start.addEventListener('click', gamestart);