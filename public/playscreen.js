function change() {
    rbutton.style.animation = 'changecolor3 0.2s infinite';
}
function changeback() {
    rbutton.style.animation = 'changecolor3 0.1s ';
}

function revolutiononclick() {
    ev=1;
    player.style.backgroundImage = 'none';
    player.style.animation = 'changecolor4 0.2s infinite ';
    setTimeout(function () {
        player.style.animation = 'changecolor4 0.1s ';
        player.style.backgroundImage = 'url(image/raechu.gif)';
        sound.pause();
        sound.src = 'revolution.mp3';
        sound.play();
        sound.volume = 0.3;
    }, 3000);
}

var enemybloodarray = [];
var playerbloodarray = [];
var enemyattack = 3;
var playerattack = 0;
var a = 1;
var boss = 0;
var s=0;
var ev=0;

var playerpaper = () => {
    playerattack = 0;

}
var playersissors = () => {
    playerattack = 1;

}
var playerstone = () => {
    playerattack = 2;

}

var attack = () => {
    enemyattack = 3;
    a = a + 1;
    enemyattack = parseInt(enemyattack * Math.random());
    if (enemyattack == 0) {
        console.log('0');
        enemystatus.style.backgroundImage = 'url(image/papers.png)';

    }
    else if (enemyattack == 1) {
        console.log('1');
        enemystatus.style.backgroundImage = 'url(image/sissors.png)';

    }
    else if (enemyattack == 2) {
        console.log('2');
        enemystatus.style.backgroundImage = 'url(image/stone.png)';

    }

    if (playerattack == 0 && enemyattack == 2 || playerattack == 1 && enemyattack == 0 || playerattack == 2 && enemyattack == 1) {
        if(ev==1){
        s=s+5;
        }
        else{s=s+10;}
        score.innerHTML=s;
        var div = document.querySelector('.border');
        console.log('attack');
        if(ev==0){
        div.style.backgroundImage = 'url(image/attack.gif)';
        }
        else{div.style.backgroundImage = 'url(image/attack2.gif)';}
        div.style.backgroundSize = '100%,100%';
        div.style.backgroundRepeat = 'no-repeat';
        setTimeout(function () {
            div.style.backgroundImage = 'none';
            enemy.style.animation = 'changecolor5 0.2s infinite';
            setTimeout(function () {
                enemy.style.animation = 'changecolor5 0.1s ';
                enemybloodarray.push('attacked');
                if (enemybloodarray.length == 1) {
                    enemyhp.style.animation = 'changewidth1 1s';
                    enemyhp.style.width = '150px';
                }
                else if (enemybloodarray.length == 2) {
                    enemyhp.style.animation = 'changewidth2 1s';
                    enemyhp.style.width = '100px';
                }
                else if (enemybloodarray.length == 3) {
                    enemyhp.style.animation = 'changewidth3 1s';
                    enemyhp.style.width = '50px';
                }
                else if (enemybloodarray.length == 4) {
                    if (boss == 0) {
                        enemyhp.style.animation = 'changewidth4 1s';
                        enemyhp.style.width = '0px';
                        setTimeout(function () {
                            enemy.style.backgroundImage = 'none';
                            setTimeout(function () {
                                enemy.style.animation = 'changecolor5 0.2s infinite';
                                setTimeout(function () {
                                    enemybloodarray = [];
                                    enemyhp.style.animation = 'changewidth5 0.3s';
                                    enemyhp.style.width = '200px';
                                    enemy.style.backgroundImage = 'url(image/fire.gif)';
                                    enemy.style.backgroundRepeat = 'no-repeat';
                                    enemy.style.backgroundSize = '250px,250px';
                                    enemy.style.backgroundPosition='center';
                                    enemy.style.animation = 'changecolor5 0.1s';
                                    sound.src = 'fire.mp3';
                                    sound.play();
                                    sound.volume=0.3;
                                    s=s+50;
                                    score.innerHTML=s;
                                }, 2000)
                            }, 2000)

                        }, 1000)

                        boss++;
                    }

                    else {
                        game.end();
                        sound.pause();
                        resultscreen = new Result(result,score2,s);
                        setTimeout(function () { resultscreen.show(); }, 5);

                    }
                }





            }, 2000)
            console.log(enemybloodarray);
            round.innerHTML = 'Round' + a;
        }, 4000);

    }
    else if (playerattack == enemyattack) {
        round.innerHTML = 'Round' + a;
        s=s+2;
        score.innerHTML=s;

    }


    else {
       

        var div = document.querySelector('.border');
        console.log('attack');
        if (boss == 0) {
            div.style.backgroundImage = 'url(image/attack3.gif)';
            if(ev==0){
            s=s-10;
            }
            else{s=s-5};
            score.innerHTML=s
        }
        else { div.style.backgroundImage = 'url(image/fireattack.gif)'; 
        if(ev==0){
        s=s-15;
        }
        else{
            s=s-10;
        }
        score.innerHTML=s;
    }
        div.style.backgroundSize = '100%,100%';
        div.style.backgroundRepeat = 'no-repeat';
        setTimeout(function () {
            div.style.backgroundImage = 'none';
            player.style.animation = 'changecolor4 0.2s infinite';
            setTimeout(function () {
                player.style.animation = 'changecolor4 0.1s ';
                playerbloodarray.push('attacked');
                if (playerbloodarray.length == 1) {
                    playerhp.style.animation = 'changewidth1 1s';
                    playerhp.style.width = '150px';
                }
                else if (playerbloodarray.length == 2) {
                    playerhp.style.animation = 'changewidth2 1s';
                    playerhp.style.width = '100px';
                }
                else if (playerbloodarray.length == 3) {
                    playerhp.style.animation = 'changewidth3 1s';
                    playerhp.style.width = '50px';
                }
                else if (playerbloodarray.length == 4) {
                    playerhp.style.animation = 'changewidth4 1s';
                    playerhp.style.width = '0px';
                    game.end();
                    sound.pause();
                    resultscreen = new Result(result,score2,s);
                    setTimeout(function () { resultscreen.show(); }, 5);
                }





            }, 2000)
            console.log(enemybloodarray);
            round.innerHTML = 'Round' + a;
        }, 4000);

    }



}



class Playscreen {
    constructor(frame, paper, sissors, stone, rbutton) {
        this.frame = frame;
        this.paper = paper;
        this.sissors = sissors;
        this.stone = stone;
        this.rbutton = rbutton;
        // this.playerstatus = playerstatus;


    }

    change() {
        this.rbutton.addEventListener('mouseover', change);
        this.rbutton.addEventListener('mouseout', changeback);
        this.rbutton.addEventListener('click', revolutiononclick);
    }

    attack() {
        this.paper.addEventListener('click', playerpaper);
        this.paper.addEventListener('click', attack);
        this.sissors.addEventListener('click', playersissors);
        this.sissors.addEventListener('click', attack);
        this.stone.addEventListener('click', playerstone);
        this.stone.addEventListener('click', attack);
    }


}