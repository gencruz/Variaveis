function armazenarNome() {
    //amarzena o valor que o usuario digitou
    var userInput = document.getElementById("userInput").value;
    // compare se a caixa de entrada de valor nao esta vazio
    if (userInput != "") {
        //exibe o valor amarzenado
        console.log("Seu nome é: " + " " + userInput);
        //atualiza o valor que o usuario digitar
        document.getElementById("valorInserido").innerText = "Parabéns " + userInput + "," + " você clicou no botao Okay!";
        // se a condicao for falsa sem valor
    } else {
        //inform usuario que precisa entrar o nome
        document.getElementById("valorInserido").innerText = "Escreva seu nome"
    }

}

