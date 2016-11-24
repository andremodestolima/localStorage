
function Pronto(){
    var temp = localStorage.getItem("titulo");
    var titulo = document.getElementById("titulo");
    var campo = document.getElementById("campo");
    var botao = document.getElementById("salvar");

    if(temp){
        titulo.innerHTML = temp;
    }

    botao.addEventListener("click", function(){
        localStorage.setItem("titulo",campo.value);
        titulo.innerHTML = localStorage.getItem("titulo");
    });
}

document.addEventListener("deviceready", Pronto);