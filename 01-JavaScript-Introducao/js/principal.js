//var ola = "Hello World! <3";
//alert(ola);

// Alterando um elemento na DOM - h1 através da classe 'titulo'
var titulo = document.querySelector('.titulo');
titulo.textContent = "Mariana Nutricionista";

// Criando um Array de elementos da DOM
var pacientes = document.querySelectorAll('.paciente');

// Percorrendo todo o Array
for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    // Flags para validação
    var pesoValido = true;
    var alturaValida = true;
    
    // Seleção do campo IMC
    var tdImc = paciente.querySelector(".info-imc");
    
    // Validação de peso
    if (peso <= 0 || peso >= 500) {
        // console.log("Peso inválido.");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    // Validação de altura
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida.");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    // Validação de peso e altura. Inserindo o resultado do IMC na DOM
    if (pesoValido && alturaValida) {
        var imc = peso/(altura * 2);
        tdImc.textContent = imc.toFixed(2);
    }
}

// Adicionando evento no botão
var btnAdicionar = document.querySelector("#add-paciente");
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#add-form");

    // Capturando os conteúdos dos campos no form através dos atributos name
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Criando o modelo de linha para inserir as informações de um paciente
    var pacienteTr = document.createElement("tr"); // linha (tr - table roll)

    var nomeTd = document.createElement("td"); // célula (td - table data)
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome; // atribuindo valores capturados às novas células
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd); // inserindo células à nova linha
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); // inserindo a nova linha à tabela existente
})