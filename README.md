# 📚 Praticar MongoDB

Repositório de prática para a **MongoDB**. Reúne um banco de exemplo, exercícios por nível de dificuldade e um guia de comandos comentados.

## 🗂️ Arquivos

| Arquivo | Descrição |
|---|---|
| `loja_games.js` | Script que cria e popula o banco `loja_games` (coleções `jogos`, `clientes` e `pedidos`), com índices e consultas de exemplo comentadas |
| `exercicios_mongodb.md` | 21 exercícios sobre o banco `loja_games`, divididos em fácil, médio e difícil, com dicas |
| `comandos_mongodb.txt` | Guia de comandos do MongoDB comentados (CRUD, operadores, arrays, índices e aggregation) |
| `playground-1.mongodb.js` | Playground do VS Code para testar as consultas |

## 🧱 Banco `loja_games`

- **jogos:** título, gênero (array), plataformas (array), preço, estoque, data de lançamento, avaliação e desenvolvedora (documento embutido)
- **clientes:** nome, e-mail, idade, cidade, estado, status e endereço (documento embutido, opcional)
- **pedidos:** referência ao cliente, data, status, forma de pagamento, itens (array de documentos) e total

## 🚀 Como usar

### Pré-requisitos

- [MongoDB](https://www.mongodb.com/try/download/community) instalado e rodando em `localhost:27017` (ou um cluster no Atlas)
- [VS Code](https://code.visualstudio.com/) com a extensão **MongoDB for VS Code**

### Criando o banco

1. Conecte ao servidor pela extensão do MongoDB.
2. Abra o `loja_games.js` (ou copie o conteúdo para um arquivo `.mongodb.js`).
3. Clique em ▶ para executar. O script apaga e recria as coleções, então pode ser rodado quantas vezes quiser.

Ou, pelo terminal:

```bash
mongosh < loja_games.js
```

### Praticando

1. Abra o `exercicios_mongodb.md` e resolva os exercícios no Playground.
2. Consulte o `comandos_mongodb.txt` quando precisar lembrar de algum operador.

> ⚠️ **Atenção:** o Playground sempre começa no banco `test`. Mantenha `use("loja_games");` na primeira linha do arquivo ao rodar suas consultas.

> 🔄 Os exercícios de update e delete alteram os dados. Rode o `loja_games.js` novamente para restaurar o banco.

## 🧠 Tópicos abordados

- CRUD: `insertOne/Many`, `find`, `updateOne/Many`, `deleteOne/Many`
- Operadores de comparação e lógicos: `$gt`, `$lt`, `$in`, `$or`, `$and`, `$not`
- Arrays e documentos embutidos: `$all`, `$size`, `$elemMatch`, `$push`, `$pull`, `$addToSet`
- Projeção, `sort`, `limit`, `skip` e `countDocuments`
- Índices (simples, compostos e únicos)
- Aggregation: `$match`, `$group`, `$unwind`, `$lookup`, `$project`, `$sort`

## 🛠️ Tecnologias

- MongoDB
- mongosh / MongoDB Playground
- VS Code

