// Adicionando evento no botão
var btnAdicionar = document.querySelector("#add-paciente");
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // Seleciona o form
    var form = document.querySelector("#add-form");

    // Capturando os conteúdos dos campos no form
    var paciente = capturaDadosPaciente(form);

    // Criando o modelo de linha para inserir as informações de um paciente
    var pacienteTr = criaLinha(paciente);

    // Recebe o retorno da validação
    var erros = validaPaciente(paciente);
    
    // Verifica se há erros
    if(erros.length > 0){
        exibeMsgsErro(erros);
        return;
    }

    // Seleciona a tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // inserindo a nova linha à tabela existente

    form.reset();
    var listaErros = document.querySelector("#msgs-erro");
    listaErros.innerHTML = "";
});



function exibeMsgsErro(erros) {
    var listaErros = document.querySelector("#msgs-erro");
    listaErros.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        listaErros.appendChild(li);
    });
}



function capturaDadosPaciente(form) {
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}



function criaCelula(dadoCliente, infoClasse) {
    var td = document.createElement("td"); // cria a célula (td - table data)
    td.textContent = dadoCliente; // atribuindo valores capturados às novas células
    td.classList.add(infoClasse); // adiciona a classe à td
    return td;     
}



function criaLinha(paciente) {
    var pacienteTr = document.createElement("tr"); // linha (tr - table roll)
    pacienteTr.classList.add("paciente"); // adiciona a classe à tr

    // Inserindo células à nova tr
    pacienteTr.appendChild(criaCelula(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaCelula(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaCelula(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaCelula(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaCelula(paciente.imc, "info-imc"));

    return pacienteTr;
}



function validaPaciente(paciente){
    
    var erros = [];
    
    if(paciente.nome.length == 0) erros.push("O campo Nome não pode ser nulo!");

    if(paciente.peso.length == 0) erros.push("O campo Peso não pode ser nulo!");

    if(paciente.altura.length == 0) erros.push("O campo Altura não pode ser nulo!");

    if(paciente.gordura.length == 0) erros.push("O campo % de Gordura não pode ser nulo!");

    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida!");

    return erros;
}