// Se os campos "nome" e "email" estiverem preenchidos: Envie os dados
// Senão peça o usuário que preencha os campos "nome" e "email".


document.getElementById("botaoEnviar").addEventListener("click", enviarFormulario)

function enviarFormulario (){
    if(document.getElementById("nome-usuario").value != "" && document.getElementById("email-usuario").value != "" && document.getElementById("numero-telefone").value != ""){
        alert("Pronto, obrigada!")
    }
    else{
        alert("Por favor, preencha todos os campos.")
    }
}