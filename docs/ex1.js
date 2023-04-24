function selecionar(){
    let nome = document.getElementById("nome").value;
    let pais = document.getElementById("pais").value;
    let posicao = document.getElementById("posicao").value;
    let clube = document.getElementById("clube").value;
    
    let corFundo = "";
    let corTexto = "";
    
    if(pais === "brasil" && posicao === "zagueiro"){
        corFundo = "green";
        corTexto = "yellow";
    }else if(pais === "brasil" && posicao === "atacante"){
        corFundo = "green";
        corTexto = "blue";
    }else if(pais === "argentina" && posicao === "zagueiro"){
        corFundo = "lightblue";
        corTexto = "white";
    }else if(pais === "argentina" && posicao === "atacante"){
        corFundo = "lightblue";
        corTexto = "black";
    }else{
        corFundo = "white";
        corTexto = "black";
    }
    
    document.getElementById("resultado").innerHTML = "Nome: " + nome + "<br>" + "País: " + pais + "<br>" + "Posição: " + posicao + "<br>" + "Clube: " + clube;
    document.getElementById("resultado").style.backgroundColor = corFundo;
    document.getElementById("resultado").style.color = corTexto;
}

function limpar(){
    document.getElementById("formulario").reset();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultado").style.backgroundColor = "white";
    document.getElementById("resultado").style.color = "black";
}