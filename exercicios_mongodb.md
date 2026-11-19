# Exercícios MongoDB: banco `loja_games`

Coleções: `jogos`, `clientes`, `pedidos`.
Tente resolver sozinho antes de olhar as dicas. O gabarito está em outro arquivo.

> Dica de rotina: antes de cada exercício de **update/delete**, rode o script `loja_games.js` de novo para restaurar os dados.

---

## 🟢 NÍVEL FÁCIL (leitura básica)

**1.** Liste todos os jogos da coleção.
*Dica:* `find()` sem filtro.

**2.** Liste os jogos com preço menor que R$ 50.
*Dica:* operador `$lt`.

**3.** Mostre apenas `titulo` e `preco` dos jogos do gênero "RPG", sem o `_id`.
*Dica:* o segundo parâmetro do `find` é a projeção. Como `genero` é um array, `{ genero: "RPG" }` já funciona.

**4.** Liste os clientes da cidade de Campinas.

**5.** Conte quantos clientes estão ativos.
*Dica:* `countDocuments()`.

**6.** Mostre os 3 jogos mais caros, do mais caro para o mais barato.
*Dica:* `sort()` e `limit()`.

---

## 🟡 NÍVEL MÉDIO (filtros avançados, update, delete)

**7.** Liste os jogos disponíveis **ao mesmo tempo** para PC e Switch.
*Dica:* operador `$all`.

**8.** Liste os jogos que estão sem estoque **ou** que têm avaliação maior ou igual a 9.5.
*Dica:* `$or` recebe um array de condições.

**9.** Liste os clientes que **não possuem** o campo `endereco`.
*Dica:* `$exists`.

**10.** Liste os jogos cuja desenvolvedora é da Polônia.
*Dica:* campo dentro de documento embutido usa notação de ponto, entre aspas.

**11.** Liste os jogos lançados a partir de 1º de janeiro de 2020.
*Dica:* compare com `ISODate("...")` e `$gte`.

**12.** Aumente em 10% o preço de todos os jogos do gênero "Indie".
*Dica:* `updateMany` com `$mul`.

**13.** Adicione a plataforma "Switch" ao jogo "The Witcher 3" (`_id: 1`) sem apagar as outras.
*Dica:* `$push` ou `$addToSet`. Qual a diferença entre os dois?

**14.** Liste os pedidos que possuem **mais de um item**.
*Dica:* `$expr` com `$size` e `$gt`.

**15.** Delete todos os pedidos com status "cancelado".
*Dica:* `deleteMany`. Rode o `find` com o mesmo filtro antes, para conferir o que será apagado.

---

## 🔴 NÍVEL DIFÍCIL (aggregation)

**16.** Mostre, para cada status de pedido, a quantidade de pedidos e o valor total.
*Dica:* `$group` com `$sum: 1` e `$sum: "$total"`.

**17.** Descubra qual é o **jogo mais vendido** (soma das quantidades nos itens dos pedidos).
*Dica:* `$unwind` em `itens` → `$group` → `$sort` → `$limit`.

**18.** Calcule o preço médio dos jogos por gênero, do maior para o menor, mostrando também quantos jogos há em cada gênero.
*Dica:* `genero` é array, então precisa de `$unwind` antes do `$group`. Use `$avg`.

**19.** Liste os pedidos mostrando o **nome do cliente**, o total e o status (sem o `_id` do pedido).
*Dica:* `$lookup` (de `clientes`, ligando `clienteId` a `_id`), depois `$unwind` e `$project`.

**20.** Mostre o **gasto total por cliente** (ignorando pedidos cancelados), exibindo o nome do cliente, apenas dos que gastaram **mais de R$ 200**, em ordem decrescente.
*Dica:* `$match` → `$group` → `$match` (filtra o resultado do group) → `$lookup` → `$unwind` → `$project` → `$sort`.

**21.** Calcule o faturamento por **mês** dos pedidos.
*Dica:* dentro do `$group`, use `{ $month: "$data" }` como `_id`.

---

## 🏆 Desafio extra

Crie uma nova coleção `avaliacoes` (com `jogoId`, `clienteId`, `nota`, `comentario`), insira 5 documentos e depois faça um `$lookup` para mostrar o título do jogo e o nome do cliente em cada avaliação.
