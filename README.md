# Book Management API

## Descrição do Projeto

Desenvolvemos uma API para gerenciamento de livros utilizando Node.js, MongoDB e Postman. Esta API permite realizar operações de criar, ler, atualizar e deletar (CRUD) livros com os seguintes atributos:

- **ID**: Identificador único do livro.
- **Nome**: Nome do livro.
- **Autor**: Autor do livro.
- **Editora**: Editora do livro.

A API é testada e documentada usando Postman para garantir o correto funcionamento dos endpoints.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor. [Node.js](https://nodejs.org/)
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados. [MongoDB](https://www.mongodb.com/try/download/community)
- **Postman**: Ferramenta para testar e documentar APIs. [Postman](https://www.postman.com/downloads/)
- **Visual Studio Code**: Editor de código para desenvolvimento. [Visual Studio Code](https://code.visualstudio.com/)

## Pré-requisitos

Antes de executar o projeto, você precisa ter os seguintes softwares instalados:

1. **Node.js**: Para executar o servidor e instalar as dependências do projeto.
2. **MongoDB**: Para gerenciar o banco de dados onde os livros serão armazenados.
3. **Postman**: Para testar a API.

## Passos para Executar o Projeto

### 1. Clone o Repositório

Primeiramente, clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/mrmessiaspg/book-management.git
cd book-management
```

### 2. Instale as Dependências

Certifique-se de que o Node.js está instalado. Instale as dependências do projeto executando:

```bash
npm install
```

### 3. Configure o Banco de Dados

Certifique-se de que o MongoDB está em execução no seu ambiente. Por padrão, o MongoDB é executado na porta `27017` localmente, e não são necessárias configurações adicionais.

### 4. Inicie o Servidor

Inicie o servidor com o seguinte comando:

```bash
npm start
```

O servidor será iniciado na porta `3001` por padrão. 

### 5. Teste a API com o Postman

Use o Postman para testar a API. Aqui estão os endpoints disponíveis e como utilizá-los:

- **Criar Livro (POST /books)**: Envie uma solicitação POST para adicionar um novo livro. No corpo da solicitação, envie um JSON com os seguintes dados:

  ```json
  {
    "name": "O Hobbit",
    "author": "J.R.R. Tolkien",
    "publisher": "HarperCollins"
  }
  ```

- **Listar Livros (GET /books)**: Envie uma solicitação GET para recuperar todos os livros armazenados no banco de dados.

- **Atualizar Livro (PUT /books/:id)**: Envie uma solicitação PUT para atualizar um livro existente. Substitua `:id` pelo ID do livro que deseja atualizar e envie um JSON com os dados atualizados.

- **Deletar Livro (DELETE /books/:id)**: Envie uma solicitação DELETE para remover um livro do banco de dados. Substitua `:id` pelo ID do livro que deseja deletar.

### Exemplo de Uso no Postman

#### Adicionar um Livro

- Método: `POST`
- URL: `http://localhost:3001/books`
- Corpo (Body) da solicitação (JSON):

  ```json
  {
    "name": "O Mito de Sísifo",
    "author": "Albert Camus",
    "publisher": "Editora XYZ"
  }
  ```

#### Listar Todos os Livros

- Método: `GET`
- URL: `http://localhost:3001/books`

#### Atualizar um Livro

- Método: `PUT`
- URL: `http://localhost:3001/books/:id`
- Corpo (Body) da solicitação (JSON):

  ```json
  {
    "name": "O Estrangeiro",
    "author": "Albert Camus",
    "publisher": "Editora ABC"
  }
  ```

#### Deletar um Livro

- Método: `DELETE`
- URL: `http://localhost:3001/books/:id`

Substitua `:id` pelo ID do livro que deseja deletar.

## License

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.