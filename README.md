```markdown
# Book Management API

Este projeto é uma API para gerenciamento de livros utilizando Node.js, Express e MongoDB. A API permite realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados de livros.

## Descrição do Projeto

A API permite gerenciar uma coleção de livros com os seguintes atributos:
- **ID**: Identificador único do livro.
- **Nome**: Nome do livro.
- **Autor**: Autor do livro.
- **Editora**: Editora do livro.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos dados.

## Pré-requisitos

Antes de começar, verifique se você tem o seguinte instalado:

- [Node.js](https://nodejs.org/) (v16 ou superior recomendado)
- [MongoDB](https://www.mongodb.com/) (local ou através de um serviço de hospedagem como MongoDB Atlas)

## Instalação e Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/SeuUsuario/book-management.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd book-management
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   ```

4. **Configure a Conexão com o MongoDB**

   Edite o arquivo `config/database.js` para configurar a URL do seu banco de dados MongoDB:

   ```javascript
   module.exports = {
     mongoURI: 'mongodb://localhost:27017/bookmanagement' // Substitua pela URL do seu MongoDB
   };
   ```

5. **Inicie o Servidor**

   ```bash
   npm start
   ```

   O servidor estará rodando em `http://localhost:3001` por padrão.

## Endpoints da API

A API possui os seguintes endpoints para gerenciar os livros:

### 1. Criar um Novo Livro

- **Método**: POST
- **URL**: `/books`
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Nome do Livro",
    "autor": "Autor do Livro",
    "editora": "Editora do Livro"
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "message": "Book successfully created",
    "book": {
      "id": "ID do Livro",
      "nome": "Nome do Livro",
      "autor": "Autor do Livro",
      "editora": "Editora do Livro"
    }
  }
  ```

### 2. Retornar Todos os Livros

- **Método**: GET
- **URL**: `/books`
- **Resposta de Sucesso**:
  ```json
  [
    {
      "id": "ID do Livro",
      "nome": "Nome do Livro",
      "autor": "Autor do Livro",
      "editora": "Editora do Livro"
    }
    // ... mais livros
  ]
  ```

### 3. Atualizar um Livro

- **Método**: PUT
- **URL**: `/books/:id`
- **Corpo da Requisição**:
  ```json
  {
    "nome": "Novo Nome do Livro",
    "autor": "Novo Autor do Livro",
    "editora": "Nova Editora do Livro"
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "message": "Book successfully updated",
    "book": {
      "id": "ID do Livro",
      "nome": "Novo Nome do Livro",
      "autor": "Novo Autor do Livro",
      "editora": "Nova Editora do Livro"
    }
  }
  ```

### 4. Deletar um Livro

- **Método**: DELETE
- **URL**: `/books/:id`
- **Resposta de Sucesso**:
  ```json
  {
    "message": "Book successfully deleted"
  }
  ```

## Testando a API

Para testar a API, você pode usar ferramentas como [Postman](https://www.postman.com/) ou [Swagger](https://swagger.io/) para enviar requisições e verificar as respostas.

### Exemplos com Postman

1. **Criar um Novo Livro**:
   - Selecione o método **POST** e a URL `http://localhost:3001/books`.
   - No corpo da requisição, insira os dados do livro em formato JSON.

2. **Retornar Todos os Livros**:
   - Selecione o método **GET** e a URL `http://localhost:3001/books`.

3. **Atualizar um Livro**:
   - Selecione o método **PUT** e a URL `http://localhost:3001/books/{id}`.
   - No corpo da requisição, insira os dados atualizados do livro em formato JSON.

4. **Deletar um Livro**:
   - Selecione o método **DELETE** e a URL `http://localhost:3001/books/{id}`.

## Contribuição

Se você deseja contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request com suas melhorias.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```