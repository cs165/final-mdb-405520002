async function onSet(event) {
    event.preventDefault();
    const userInput = results.querySelector('#name');
    const playername = userInput.value;
    const final=results.querySelector('#finalscore').textContent;
    console.log(playername);
    console.log(final);
  
    const message = {
      player: playername,
      score: final
    };
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    };
    const status = results.querySelector('#status');
    // status.textContent = '';
    await fetch('/history/', fetchOptions);

    console.log('send');
  


  }

  async function onGet(event) {
    event.preventDefault();
    var history=document.getElementById('history');
    history.classList.remove('inactive');
    choosegame.classList.add('inactive');
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    let arrplayer=[]
    let arrscore=[]
    await fetch('/getAllUserData', fetchOptions)
    .then((res)=>res.json())
    .then((jsonData)=>{
      arrplayer = Object.values(jsonData).map((value)=>value.player);
      arrscore = Object.values(jsonData).map((value)=>value.score);
      console.log('sssssssssssss'+arrscore)
      var div=document.getElementById('addplayer')
      for(let i=0;i<arrplayer.length;i++){
        var a=document.createElement('div');
        a.innerHTML='name:'+arrplayer[i]+'      score:'+arrscore[i];
        a.style.fontSize='20px';
        a.style.margin='10px';
        a.style.marginRight='auto';
        a.style.marginLeft='auto';
        div.appendChild(a);
      }
    })
    console.log(arrplayer);

   


  }

 

  const set = document.querySelector('#send');
  set.addEventListener('click', onSet);
  game2.addEventListener('click',onGet);
 