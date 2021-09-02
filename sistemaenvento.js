// Cadastro de Participantes para Evento

// Validação da data evento

var dataAtual = new Date (2017, 01, 28); 

var dataEvento = new Date (2017, 04, 09); 

if (dataEvento <= dataAtual) {
    console.log("Data Válida")

} else {
    console.log("Data Inválida")
}

// Validação da idade dos participantes do evento
let idade = 18;

if (idade >= 18) {
    console.log("Idade Permitida")

} else {
    console.log("Idade não permitida")
}

// Validação da capacidade de participantes do evento
let Participantes = ["Pedro", "Maria", "Bruno", "Natalia"]

if (Participantes.length < 100) {
    console.log("Cadastro Efetuado")

} else {
    console.log("Esgotado")
}

