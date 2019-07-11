var btnAdicionar = document.querySelector("#buscar-pacientes");

btnAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest(); // Criando uma nova requisição.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Iniciando a conexão >>> .open("MÉTODO", endereço);
    
    xhr.addEventListener("load", function(){ // Carrega os dados.
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // Toda a string encapsulada na resposta.
            var pacientes = JSON.parse(resposta); // Parseando a string, transformando em um array de objetos.
            
            pacientes.forEach(function(paciente){ // Para cada objeto paciente...
                adicionaPacienteNaTabela(paciente) // ... adiciona na tabela.
            });
        }else{ // Qualquer status diferente de 200...
            console.log(xhr.status); // Mostra o status no console...
            console.log(xhr.responseText); // Mostra o erro do status.

            erroAjax.classList.remove("invisivel"); // Remove a classe invisível, tornando o texto de erro visível na página.
        }
    });
    xhr.send(); // Envia a requisição.
});