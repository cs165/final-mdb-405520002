
var backtomenu=document.querySelector('.margin');
var back=()=>{
    window.location.reload();
}

backtomenu.addEventListener('click',back);
class Result {
    constructor(containerelement ,finalscore,s) {
      this.containerelement = containerelement;
      this.finalscore=finalscore;
      this.s=s;
    }
  
    show() {
        this.containerelement.classList.remove('inactive');
        this.finalscore.innerHTML=this.s;

    }
  
    end() {
      this.containerelement.classList.add('inactive');
    }
  
  }