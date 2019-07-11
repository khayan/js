var tabela = document.querySelector("#tabela-pacientes"); 

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out"); // fade-out para animar a remoção da linha.
    setTimeout(function(){ //  Delay de 450 ms para a execução da função.
        event.target.parentNode.remove(); // O evento identifica quem foi clicado na tabela e remove o pai.
    }, 450);
})