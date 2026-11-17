(function () {

    const state = {
        displayValue: "0",
        firstOperand: null,
        operator: null,
        waitingForSecond: false
    };

    const visor = document.getElementById("output");
    //testando o valor do visor.
    console.log(visor)
    const btns = document.querySelectorAll(".calc--tecla .btn");

    function renderizar() {
        visor.value = state.displayValue;
    };

    function limpar() {
        state.displayValue = "0";
        state.firstOperand = null;
        state.operator = null;
        state.waitingForSecond = false;
    };

    function digitarDigito(valor) {
        if (state.waitingForSecond) {
            state.displayValue = valor;
            state.waitingForSecond = false;
        } else {
            if (valor === "." && state.displayValue.includes(".")) return;

            if (state.displayValue === "0" && valor !== ".") {
                state.displayValue = valor
                //state.waitingForSecond = false
            } else {
                state.displayValue += valor
            };
        };
    };

    function escolherOperador(valorOperator) {
        state.firstOperand = state.displayValue;
        state.operator = valorOperator;
        state.waitingForSecond = true;
        console.log('Esse é firstOperand: ' + state.firstOperand);

    };

    function calcular() {
        if (state.operator === null) return;

        let secondNumber;

        if (state.waitingForSecond == true) {
            secondNumber = state.firstOperand;
        } else {
            secondNumber = state.displayValue;
        };

        const resultado = executarOperacao(state.firstOperand, secondNumber, state.operator);

        state.displayValue = String(resultado);
        state.firstOperand = null;
        state.operator = null;
        state.waitingForSecond = false;
    };

    function executarOperacao(a, b, sinal) {
        let n1 = Number(a);
        let n2 = Number(b);
        switch (sinal) {
            case 'x':
                return n1 * n2;
            case ':':
                return n2 === 0 ? 'Erro' : n1 / n2;
            case '+':
                return n1 + n2;
            case '-':
                return n1 - n2;
            default:
                return b;
        };
    };

    function trocarSinal() {
        if (state.displayValue !== "0" && state.displayValue !== "Erro") {

            if (state.displayValue.startsWith("-")) {
                state.displayValue = state.displayValue.slice(1)
            } else {
                state.displayValue = "-" + state.displayValue;
            };
        };
    };

    function porcentagem() {
        
        if (state.displayValue === "0" || state.displayValue === "Erro") return;

        const numero = Number(state.displayValue);

        if (state.operator !== null && (state.operator === "+" || state.operator === "-")){
            const base = Number(state.firstOperand);
            
            state.displayValue = String((numero * base) / 100);
        } else {
            state.displayValue = String(numero / 100);
        }
        //pegar displayValue, ele está em string
        //transformar 1/100
    };

    btns.forEach((botao) => {
        botao.addEventListener('click', function () {
            const type = botao.dataset.type;

            console.log(botao.textContent);
            if (type === 'digito') digitarDigito(botao.textContent);
            if (type === 'operator') escolherOperador(botao.textContent);
            if (type === 'acao' && botao.textContent === "C") limpar();
            if (type === 'acao' && botao.textContent === "=") calcular();
            if (type === 'acao' && botao.textContent === "±") trocarSinal();
            if (type === 'acao' && botao.textContent === "%") porcentagem();

            renderizar();
        });
    });

})();