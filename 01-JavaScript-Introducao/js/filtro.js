var campoFiltro = document.querySelector("#filtrar-tabela"); // Seleciona o input de filtro.

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente"); // Cria o array com todos os pacientes a partir da classe paciente.
    
    if (this.value.length > 0) { // Verifica se existe algo digitado no input.
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome"); // Seleciona o td que contém o nome do paciente.
            var nome = tdNome.textContent; // Extraí a string do td.

            var expressao = new RegExp(this.value, "i"); // Expressão Regular: busca na tabela pelo valor digitado, ignorando o sensitive case.
    
            if(!expressao.test(nome)){ // test é uma função do objeto RegExp que testa se o valor é correspondente.
                paciente.classList.add("invisivel"); // se o nome pesquisado for diferente do nome da tabela é aplicado o display none.
            }else{
                paciente.classList.remove("invisivel");
            }
        } 
    }else{
        for (var i = 0; i < pacientes.length; i++) { // se todo o texto for apagado todos os pacientes voltam a aparecer na tabela.
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
