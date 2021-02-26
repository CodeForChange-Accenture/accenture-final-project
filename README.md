<div align="center">
    <img src="src/img/logobank.png">
    <h1 align="center">GamaBank</h1>
</div>
<p id="sobre">Projeto desenvolvido para Accenture durante as semanas de estudo com a <a
        href="https://www.gama.academy/">GamaAcademy</a> utilizando ReactJS e seguindo
    o <a
        href="https://www.figma.com/file/tdrTDIY2hal9Ky4fbTvBl2/DesafioGamaAccenture_1_2-desktop?node-id=1%3A2">layout</a>
    disponibilizado no Figma pela equipe do Gama.
<p>

<h1>Tabela de conteúdos</h1>
<ul>
    <li>
        <a href="#sobre">Sobre</a>
    </li>
    <li>
        <a href="#participantes">Participantes</a>
    </li>
    <li>
        <a href="#tecnologias">Tecnologias usadas</a>
    </li>
    <li>
        <a href="#instalacao">Instalação</a>
    </li>
    <li>
        <a href="#estrutura">Estrutura</a>
    </li>
    <li>
        <a href="#features">Features</a>
    </li>
</ul>

<h1 id="participantes">Participantes</h1>
<ul>
    <li>
        <a href="https://github.com/castelvani">Gabriel Steidle Castrezano</a>
    </li>
    <li>
        <a href="https://github.com/matheusCMendes">Matheus Cruz Mendes</a>
    </li>
    <li>
        <a href="https://github.com/bettyap">Elisabeth Aparecida dos Santos Silva</a>
    </li>
    <li>
        <a href="https://github.com/nathanoliveiras">Nathan Oliveira Santos</a>
    </li>
</ul>

<h1 id="tecnologias">Tecnologias usadas</h1>

<ul>
    <li>
        <a href="https://github.com/facebook/react">ReactJS</a>
    </li>
    <li>
        <a href="https://github.com/reduxjs/redux">Redux</a>
    </li>
    <li>
        <a href="https://github.com/microsoft/TypeScript">TypeScript</a>
    </li>
    <li>
        <a href="https://github.com/styled-components/styled-components">Styled Components</a>
    </li>
    <li>
        <a href="https://github.com/axios/axios">Axios</a>
    </li>
    <li>
        <a href="https://github.com/fkhadra/react-toastify">React toastify</a>
    </li>
    <li>
        <a href="https://github.com/sanniassin/react-input-mask">React Input Mask</a>
    </li>
    <li>
        <a href="https://react-hook-form.com/">React Hook Forms</a>
    </li>
    <li>
        <a href="https://react-icons.github.io/react-icons/">React Icons</a>
    </li>
</ul>

<h1 id="instalacao">Instalação</h1>

<p>
    Para instalar as dependências e pacotes, basta clonar o
    repositório e utilizar os seguintes scripts:
</p>

<p>Para instalar as dependências</p>

### `yarn`
### `npm install`

<p>Para iniciar o projeto</p>

### `yarn start`
### `npm start`

<h1 id="estrutura">Estrutura</h1>
![image](https://user-images.githubusercontent.com/21091313/109364376-6e2ad000-786d-11eb-8331-9b6c6278ce1b.png)

<p>O projeto foi dividido em pastas onde cada uma possui sua particularidade e funcionalidade, são elas:</p>

<strong>src</strong>

<p>A pasta <b>src</b> concentra todo o projeto e suas subpastas, onde o Index é o arquivo de renderização dos
    componentes e App é o arquivo utilizado para definir o uso da store <a href="#tecnologias">Redux</a>, rotas e
    estilos globais.</p>
<hr>

<strong>**tests**</strong>

<p>A pasta <b>__tests__</b> concentra todos os testes unitários.</p>
<hr>

<strong>img</strong>

<p>A pasta <b>img</b> concentra todas as imagens utilizadas.</p>
<hr>

<strong>pages</strong>

<p>A pasta <b>pages</b> é dividida em subpastas as quais os títulos são as páginas, componentes e estilização da
    aplicação, em especial as pastas dashboard e home possuem outra camada de subpastas que dividem os seus componentes
    em outros diretórios. </p>
<hr>

<strong>routes</strong>

<p>A pasta <b>routes</b> possui dois arquivos, <b>privateRoutes</b> para rotas privadas e <b>Index</b> para as rotas
    públicas.</p>
<hr>
<strong>services</strong>
<p>A pasta <b>services</b> possui a url base da api consumida no desenvolvimento e um outro arquivo chamado auth para
     a fácil
    validação de autenticação via token guardado no <b>localStorage</b></p>
<hr>

<strong>store</strong>

<p>A pasta <b>store</b> é utilizada para armazenar os arquivos referentes ao <a href="#tecnologias">Redux</a>, a qual
    possui um arquivo <b>Index</b> para criar sua store e as subpastas <b>modules/user</b> as actions reducers e
    interfaces(ts) do <a href="#tecnologias">Redux</a></p>
<hr>
<strong>style</strong>
<p>A pasta <b>style</b> possui um arquivo <b>Index</b> para fácil estilização global da aplicação</p>
<hr>

### Features

- [x] Cadastro de usuários;
- [x] Controle de sessão (Login);
- [x] Listar planos de conta;
- [x] Depósitos e transferências;
- [x] Atualização de saldo;
- [x] Consultas de lançamentos por datas (extrato);
- [x] Uso de Styled Components;
- [x] Uso de arquitetura FLUX com o react-redux;
- [x] Responsividade;
- [x] Uso de localstorage;
- [x] Controle de rotas públicas e privadas;
- [x] Hooks;
- [x] Consumo de api;
- [x] Uso de typescript;
- [x] Fidelização de <a
                                                href="https://www.figma.com/file/tdrTDIY2hal9Ky4fbTvBl2/DesafioGamaAccenture_1_2-desktop?node-id=1%3A2">layout</a>;
- [x] Testes unitários;
- [x] Máscara e validação de inputs;
