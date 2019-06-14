class Game {
  constructor(containerelement, enemy, player, enemyhp, playerhp) {
    this.containerelement = containerelement;
    this.enemy = enemy;
    this.enemyhp = enemyhp;
    this.player = player;
    this.playerhp = playerhp;

  }

  start() {
    this.containerelement.classList.remove('inactive');
    var playscreen = new Playscreen(play1, paper, sissors, stone, rbutton);
    playscreen.change();
    playscreen.attack();
    sound.src = 'pokemon.mp3';
    sound.play();
    this.player.style.animation = 'changesize1 3s';
    this.enemy.style.animation = 'changesize2 3s ';
    setTimeout(function () {
      this.enemy.style.backgroundImage = 'url(image/jump.gif)';
      this.enemy.style.backgroundSize = '120px,120px';
      this.player.style.animation = 'changecolor4 0.3s';
      this.enemy.style.animation = 'changecolor5 0.3s';
      this.player.style.backgroundImage = 'url(image/pikachuback.gif)';
      this.player.style.backgroundSize = '200px,200px';
      this.player.style.backgroundRepeat = 'no-repeat';
      this.player.style.backgroundPosition = 'center';


    }, 3000)


  }

  end() {
    this.containerelement.classList.add('inactive');
  }

}