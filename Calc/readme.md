Calculadora com JavaScript, CSS e HTML.

 No CSS, temos algumas propriedades básicas para desenvolvimento com frontend, com CSS Grid para sistema mais organizado e moderno para site.
 Temos também as pseudo-classes para selecionar os itens (filhos) específicos para container (pai) no seletor.

 Na parte do HTML, temos classes, divs e principalmente os atributos que serão utilizados no JavaScript, para executar funções específicas a cada classe .btn do .calc--tecla. Por exemplo o data-type = "digito", que possui o value digito, que posteriormente será verificado com dataset., se for o digito de um número vai executar tal função.

 Ademais, no JS tem DOM mais aprimorado com botao.addEventListener, para analisar a cada button com classe .btn. Além disso, será utilizado o objeto o state com estados (propriedades), na calculadora se deve analisar os estados, para que não aconteça erros quando um usuário digitar. Cada um desse estados tem uma responsabilidade, para analisar executar a função certa em cada situação.

 Entretanto, ele tem algumas limtações, uma delas não executa expressões númericos, por exemplo 70 + 5 : 80  * 3. Outro seria os parênteses, que não tem essa função.