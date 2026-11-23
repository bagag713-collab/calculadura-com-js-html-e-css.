Calculadora com JavaScript, CSS e HTML.

No CSS, temos algumas propriedades básicas para desenvolvimento com frontend, com CSS Grid para sistema mais organizado e moderno para site. Temos também pseudo-classes para selecionar os itens (filhos) específicos para container (pai) no seletor.

Na parte do HTML, temos classes, divs e principalmente os atributos que serão usados ​​no JavaScript, para executar funções específicas para cada classe .btn do .calc--tecla. Por exemplo o data-type = "digito", que possui o valor digito, que posteriormente será selecionado com dataset., se for o digito de um número vai executar tal função.

Além disso, no JS tem DOM mais aprimorado com botao.addEventListener, para analisar cada botão com classe .btn. Além disso, será utilizado o objeto o estado com estados (propriedades), na calculadora deverá analisar os estados, para que não ocorram erros quando um usuário digitar. Cada um desses estados tem uma responsabilidade, para analisar executar a função certa em cada situação.

Entretanto, ele tem algumas limitações, uma delas não executa expressões numéricas, por exemplo 70 + 5 : 80 * 3. Outra seria os parênteses, que não tem essa função.
