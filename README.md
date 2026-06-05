# Calculadora JS

Projeto de uma calculadora web desenvolvida com HTML, CSS e Javascript.

# 📱 Demonstração de suas funcionalidades:

<div align="center">
<img src="pasta_imagens.png/calculo-multiplicacao.png" alt="Calculadora - Multiplicação de 80x10" width="340px">
<img src="pasta_imagens.png/calculo-divisao.png" alt="Calculadora - Divisão de 7÷2" width="340px">
<img src="pasta_imagens.png/calculo-soma.png" alt="Calculadora - Soma de 50+100" width="340px">
<img src="pasta_imagens.png/calculo-subtração.png" alt="Calculadora - Subtração de 80-3" width="340px>

# Explicação da Implemntação de funções  

HTML - A criação das tags foram voltadas pra inserir os botões e criar as classes para os operadores, junto ao botão de calcular, o link com "stylesheet" e o href, está conectando conectando o arquivo HTML com o arquivo de design que é o style.css (personalização da calculadora e página). A section da classe de botões cria uma sessão aonde eles vão ficar na calculadora. No CSS essa classe usa o seguinte comando display: grid para organizar linhas e colunas. O HTML tem uma propriedade que foi inserida chamada "onclick", ao ser acionada ele executará determinada função passando determinado valor. Utilizamos (x) e (÷) como símbolos das operações, mas ao enviar as informações para a tela, o javascript só consegue ler o comando com a barra de divisão (/) e também (*) que é a multiplicação por isso esses símbolos devem estar no código para que ele não seja quebrado. O botão de igual não usa a função (Inserir), ele chama diretamente o calcular() para resolver a operação.

JS -  

CSS - 

# 🚀 Funcionalidades
- Operações matemáticas básicas (Soma, Subtração, Multiplicação e Divisão).
- Suporte a números decimais utilizando a vírgula `,`.
- Layout totalmente centralizado e responsivo com design moderno