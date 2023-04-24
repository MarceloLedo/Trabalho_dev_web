
function sortear()
  {
    let sorteado = parseInt(Math.random()*5);
    document.getElementById("sorteio").innerHTML = `o valor sorteado é  ${sorteado}`;
  }

  function sortear2(){
    let e = parseInt (document.getElementById('e').value);
    let entre = parseInt (document.getElementById('entre').value);
    let sorteado2 = parseInt(Math.random()*(e - entre+1)+entre);
    document.getElementById("sorteio2").innerHTML = `o valor sorteado é  ${sorteado2}`;
  }

  