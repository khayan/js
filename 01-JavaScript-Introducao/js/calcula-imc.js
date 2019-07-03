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
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    // Seleção do campo IMC
    var tdImc = paciente.querySelector(".info-imc");
    
    // Validação de peso
    if (!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    
    // Validação de altura
    if (!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    // Validação de peso e altura. Inserindo o resultado do IMC na DOM
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso > 0 && peso <= 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura <= 2.7){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = peso/(altura * 2);
    return imc.toFixed(2);
}