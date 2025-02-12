// botoes
const equacao = document.getElementById("equacao");
const saida = document.getElementById("saida");
const btnQuadrado = document.getElementById("btnQuadrado");
const btnDivisao = document.getElementById("btnDivisao");
const btnMultiplicacao = document.getElementById("btnMultiplicacao");
const btnApagar = document.getElementById("btnApagar");
const btn9 = document.getElementById("btn9");
const btn8 = document.getElementById("btn8");
const btn7 = document.getElementById("btn7");
const btnSoma = document.getElementById("btnSoma");
const btn6 = document.getElementById("btn6");
const btn5 = document.getElementById("btn5");
const btn4 = document.getElementById("btn4");
const btnSubtracao = document.getElementById("btnSubtracao");
const btn3 = document.getElementById("btn3");
const btn2 = document.getElementById("btn2");
const btn1 = document.getElementById("btn1");
const igualdade = document.getElementById("igualdade");
const btnRaiz = document.getElementById("btnRaiz");
const btn0 = document.getElementById("btn0");
const virgula = document.getElementById("virgula");


document.querySelectorAll(".numero").forEach(botao => {
    botao.addEventListener("click", function () {

        if (equacao.textContent !== "0") {
            saida.textContent = botao.textContent;
            equacao.textContent = "0";
        } else if (saida.textContent === "0") {
            saida.textContent = botao.textContent;
            equacao.textContent = "0";
        } else {
            saida.textContent += botao.textContent;
        }
    });
});

btnApagar.addEventListener("click", function () {
    if (saida.textContent.length == 1) {
        saida.textContent = 0;
    } else {
        saida.textContent = saida.textContent.slice(0, -1);
    }
});

virgula.addEventListener("click", function () {
    saida.textContent += virgula.textContent;
});

igualdade.addEventListener("click", function () {

    try {
        equacaoString = saida.textContent;
        equacaoString = equacaoString.replace("÷", "/").replace("X", "*");

        equacaoresultado = String(eval(equacaoString));
        saida.textContent = equacaoresultado;
        equacao.textContent = equacaoString.replace("/", "÷").replace("*", "X");

    } catch (erro) {
        alert(erro);
    }
});

document.querySelectorAll(".operacao").forEach(botao => {
    botao.addEventListener("click", function () {
        if (saida.textContent === "0" && botao.textContent !== "-") {
            alert("por 0?????");
        } else {
            saida.textContent += botao.textContent;
        }
    })
});

document.querySelectorAll(".operacaoEspecial").forEach(botao => {
    botao.addEventListener("click", function () {
        equacaoString = saida.textContent.replace("÷", "/").replace("X", "*");
        equacaoresultado = eval(equacaoString);

        switch (botao.id) {
            case "btnQuadrado":
                equacaoresultado = (equacaoresultado * equacaoresultado).toFixed(2);

                break;
            case "btnRaiz":
                equacaoresultado = Math.sqrt(equacaoresultado).toFixed(2);
                break;

        }

        saida.textContent = equacaoresultado;
        equacao.textContent = "(" + equacaoString.replace("/", "÷").replace("*", "X") + ")²";
    })
});