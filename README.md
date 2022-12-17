# Pra Quem Doar - Projeto Final {reprograma}

O Projeto Final tem como objetivo colocar em prática os conhecimentos obtidos durante as 18 semanas de imersão em Back-end da [{reprograma}](https://reprograma.com.br/).

O Todas em Tech é uma iniciativa da **{reprograma}** e do **BID Lab (Laboratório de Inovação do Grupo Banco Interamericano de Desenvolvimento)**, desenvolvida para mulheres que querem usar a tecnologia para mudar vidas e criar um impacto positivo no mundo. O objetivo do projeto é ensinar programação e dar a oportunidade de um futuro melhor por meio da tecnologia para mulheres em situações de vulnerabilidade social, econômica e de gênero, priorizando negras e/ou trans e travestis.

Além da capacitação em programação front-end e back-end, o Todas em Tech auxilia no aprimoramento de competências comportamentais (soft skills) e no desenvolvimento do portfólio das alunas, visando conectá-las ao mercado de trabalho.

## Sobre o Projeto

Este projeto tem por objetivo trazer visibilidade às ONGs e Projetos Sociais do Estado do Espírito Santo. Como o final de ano dá início a uma onda de solidariedade, é comum que as pessoas procurem Instituições para ajudar, e neste momento é até difícil escolher quem ajudar. A ideia aqui é listar projetos com causas sociais diferentes, para você se sentir motivado a participar ou apoiar de alguma forma um projeto social e facilitar a busca entre quem precisa de ajuda e quem quer ajudar.

A existência de bons projetos sociais traz esperança para as pessoas beneficiadas e também para quem já anda descrente em relação ao ser humano. Eles mostram que, com boa vontade e organização, é possível promover importantes avanços.

É claro que o viés filantrópico não é tudo. Além de dar a mão a quem precisa, os projetos são responsáveis por gerar empregos e movimentar o mercado. Segundo o **[Mapa das Organizações da Sociedade Civil](https://mapaosc.ipea.gov.br/indicadores)**, do IPEA, são mais de 820 mil Organizações da Sociedade Civil no Brasil, gerando 2,9 milhões de empregos formais. Essa é mais uma evidência da força de um setor que vem conduzindo nos últimos anos uma revolução silenciosa, amparando, dando oportunidades e abraçando os mais carentes.

## Tecnologias utilizadas

| Ferramenta       | Descrição                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `javascript`     | Linguagem de programação                                                                                                 |
| `nodejs`         | Ambiente de execução do JavaScript                                                                                       |
| `express`        | Framework NodeJS                                                                                                         |
| `dotenv`         | Dependência para proteger dados sensíveis do projeto                                                                     |
| `mongoose`       | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections                    |
| `nodemon`        | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente                  |
| `npm`            | Gerenciador de pacotes                                                                                                   |
| `MongoDB`        | Banco de dado não relacional orietado a documentos                                                                       |
| `Mongo Atlas`    | Interface gráfica para verificar se os dados foram persistidos                                                           |
| `Thunder Client` | Interface gráfica para realizar os testes                                                                                |
| `swagger`        | Framework para gerar a documentação do projeto, auxiliando na descrição, consumo e visualização dos endpoints de uma API |
| `Render`         | Plataforma utilizada para deployar aplicações backend                                                                    |

<br>

## Arquitetura

```
  📁 reprograma-praQuemDoar
  |
  |-  📁 src
  |    |- 📁 controllers
  |         |- 📄 donnorController.js
  |         |- 📄 institutionController.js
  |    |- 📁 database
  |         |- 📄 mongooseConnect.js
  |    |- 📁 models
  |         |- 📄 donorModel.js
  |         |- 📄 institutionModel.js
  |    |- 📁 routes
  |         |- 📄 donorRoutes.js
  |         |- 📄 institutionRoutes.js
  |    |- 📄 app.js
  |
  |- 📄 .env
  |- 📄 .env.example
  |- 📄 .gitignore
  |- 📄 package-lock.json
  |- 📄 pakage.json
  |- 📄 README.md
  |- 📄 server.js
```

<br>
## Executando o Projeto

```bash
# Clone o repositório
$ git clone https://github.com/mellyssaStephanny/reprograma-praQuemDoar.git

# Entre na pasta do projeto
$ cd reprograma-praQuemDoar

# Crie uma variável de ambiente e use o `.env.example` como modelo de preenchimento
$ touch .env

# Instale as dependências
$ npm install
$ npm install dotenv --save

# Execute o servidor
$ npm start
```

## Dados para Collection Institutions

- **\_id**: autogerado e obrigatório
- **institutionName**: texto e obrigatório (_único_)
- **address**: texto e obrigatório
- **description**: texto e obrigatório
- **socialCause**: texto e obrigatório
- **pix**: number e obrigatório
- **phoneNumber**: number e obrigatório
- **email**: texto e obrigatório

 <br>

## Dados para Collection Donors

- **\_id**: autogerado e obrigatório
- **donorName**: texto e obrigatório (_único_)
- **email**: texto e obrigatório
- **phoneNumber**: number e obrigatório
- **cpf**: number e obrigatório
- **donationAmount**: number e obrigatório
- **donationInstitution**: texto e obrigatório

## Rotas

- ## Institution

- **GET**/reprograma-praquemdoar/institution/all
  - lista todas as Instituições cadastradas
- **GET**/reprograma-praquemdoar/institution/:id
  - listar a Instituição por id
- **PATCH**/reprograma-praquemdoar/institution/:id
  - atualiza uma Instituição por id
- **DELETE**/reprograma-praquemdoar/institution/:id
  - apagar uma Instituição cadastrada
- **POST**/reprograma-praquemdoar/institution/:id

  - cadastra uma Instituição na base de dados

- ## Donor

- **GET**/reprograma-praquemdoar/donor/all
  - lista todas os Doadores cadastrados
- **GET**/reprograma-praquemdoar/donor/:id
  - listar o Doador por id
- **PATCH**/reprograma-praquemdoar/donor/:id
  - atualiza um Doador por id
- **DELETE**/reprograma-praquemdoar/donor/:id
  - apagar um Doador cadastrado
- **POST**/reprograma-praquemdoar/donor/:id
  - cadastra um Doador na base de dados

## Documentação

[Swagger](https://praquemdoar.onrender.com/documentacao)
[Render](https://praquemdoar.onrender.com)
