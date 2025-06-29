# Event Manager API

## ✨ Sobre o Projeto

A **Event Manager API** é uma aplicação backend desenvolvida em **Node.js com Express** e banco de dados **MySQL**. Ela permite o **cadastro, autenticação e gerenciamento de eventos** por usuários organizadores. O sistema também oferece filtros por data e local, e é protegido com autenticação JWT.

## ⚖️ Tecnologias Utilizadas

* Node.js
* Express
* MySQL (Railway)
* JWT para autenticação
* Joi para validação
* Swagger para documentação

## 📚 Funcionalidades

* Cadastro e login de usuários
* Criação e edição de eventos (apenas para organizadores)
* Listagem de eventos com filtros por local e data
* Geração de relatórios de eventos

## 🚀 Onde está hospedado

* **API Render:** [https://event-manager.onrender.com](https://event-manager-api-69hk.onrender.com/api-docs)
* **Banco de dados Railway**

## 🔧 Como executar localmente

1. Clone o repositório
2. Crie um arquivo `.env` com as variáveis de ambiente:

```env
DB_HOST=crossover.proxy.rlwy.net
DB_PORT=38294
DB_USER=root
DB_PASSWORD=SUA_SENHA
DB_NAME=railway
JWT_SECRET=sua_chave_jwt
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm start
```

5. Acesse a documentação Swagger em:

```
http://localhost:3000/api-docs
```

---

Feito com ❤️ para fins de estudo e prática de backend com Node.js.
