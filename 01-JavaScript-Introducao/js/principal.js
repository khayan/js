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
    }
    
    // Validação de altura
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida.");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
    }
    
    // Validação de peso e altura. Inserindo o resultado do IMC na DOM
    if (pesoValido && alturaValida) {
        var imc = peso/(altura * 2);
        tdImc.textContent = imc.toFixed(2);
    }
}