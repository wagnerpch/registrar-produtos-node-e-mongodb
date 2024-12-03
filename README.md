# Registrar produtos usando Node.js e MongoDB
 Registro de pensamentos com autenticação, utilizando Node.Js e MongoDB

[![Static Badge](https://img.shields.io/badge/license-GNU-green)](https://github.com/wagnerchc/chess-system-java/blob/master/LICENSE)

# Sobre o projeto

Aplicação backend em Node.Js e MongoDB.

Esse projeto foi desenvolvido com base nas aulas da <a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/?kw=Node.js+do+Zero+a+Maestria+com+diversos+Projetos&src=sac&couponCode=KEEPLEARNINGBR" target="_blank">Node.js do Zero a Maestria com diversos Projetos</a>

# Tecnologias utilizadas

## Back end

- Node.Js
- MongoDB
- Mongo Express

## Dependências: 
- Express
- Express-handlebars
- MongoDB
- Nodemon (dev)

# Como executar o projeto

## Back end

Pré-requisitos: Node.Js, MongoDB e Mongo Express

A instalação do MongDB e Mongo Express com docker compose está disponível no seguinte <a href="https://github.com/wagnerpch/mongo-docker-compose" target="_blank">link</a>

```bash
# clonar repositório
git clone https://github.com/wagnerpch/registrar-produtos-node-e-mongodb

# acessar a pasta
cd registrar-produtos-node-e-mongodb

# instalar as dependências do projeto
npm install

# executar o projeto
npm run start
```

# Rotas

- Home = http://localhost:3000
- Produtos = http://localhost:3000/products
- Criar produto = http://localhost:3000/products/create
- Editar produto = http://localhost:3000/products/edit/:id
- Saiba mais = http://localhost:3000/products/:id
- Deletar pensamento = http://localhost:3000/products/remove/:id

# Autor

Wagner Pereira Chequeleiro

https://www.linkedin.com/in/wagnerpch/

## Contribuição e agradecimento

Projeto desenvolvido a partir da aulas do curso "Node.js do Zero a Maestria com diversos Projetos". 
Agradeço ao professor pela didática e por proporcionar acesso organizado ao mundo do Node.Js.