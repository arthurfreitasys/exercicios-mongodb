// ============================================================
// Banco: loja_games  |  Execução: mongosh < loja_games.js
// ou dentro do mongosh: load("loja_games.js")
// ============================================================

use("loja_games");

// Limpa para poder rodar de novo
db.jogos.drop();
db.clientes.drop();
db.pedidos.drop();

// ------------------------------------------------------------
// COLEÇÃO: jogos
// ------------------------------------------------------------
db.jogos.insertMany([
  { _id: 1, titulo: "The Witcher 3", genero: ["RPG", "Aventura"], plataformas: ["PC", "PS5", "Xbox"], preco: 89.90, estoque: 40, lancamento: ISODate("2015-05-19"), avaliacao: 9.7, desenvolvedora: { nome: "CD Projekt Red", pais: "Polônia" } },
  { _id: 2, titulo: "FIFA 24", genero: ["Esporte"], plataformas: ["PC", "PS5", "Xbox"], preco: 249.90, estoque: 25, lancamento: ISODate("2023-09-29"), avaliacao: 7.2, desenvolvedora: { nome: "EA Sports", pais: "Canadá" } },
  { _id: 3, titulo: "Hollow Knight", genero: ["Metroidvania", "Indie"], plataformas: ["PC", "Switch"], preco: 46.99, estoque: 60, lancamento: ISODate("2017-02-24"), avaliacao: 9.4, desenvolvedora: { nome: "Team Cherry", pais: "Austrália" } },
  { _id: 4, titulo: "Elden Ring", genero: ["RPG", "Ação"], plataformas: ["PC", "PS5", "Xbox"], preco: 229.90, estoque: 18, lancamento: ISODate("2022-02-25"), avaliacao: 9.5, desenvolvedora: { nome: "FromSoftware", pais: "Japão" } },
  { _id: 5, titulo: "Stardew Valley", genero: ["Simulação", "Indie"], plataformas: ["PC", "Switch", "Mobile"], preco: 24.99, estoque: 100, lancamento: ISODate("2016-02-26"), avaliacao: 9.3, desenvolvedora: { nome: "ConcernedApe", pais: "EUA" } },
  { _id: 6, titulo: "God of War Ragnarök", genero: ["Ação", "Aventura"], plataformas: ["PS5"], preco: 299.90, estoque: 12, lancamento: ISODate("2022-11-09"), avaliacao: 9.6, desenvolvedora: { nome: "Santa Monica Studio", pais: "EUA" } },
  { _id: 7, titulo: "Minecraft", genero: ["Sandbox", "Aventura"], plataformas: ["PC", "PS5", "Xbox", "Switch", "Mobile"], preco: 129.90, estoque: 75, lancamento: ISODate("2011-11-18"), avaliacao: 9.0, desenvolvedora: { nome: "Mojang", pais: "Suécia" } },
  { _id: 8, titulo: "Cyberpunk 2077", genero: ["RPG", "Ação"], plataformas: ["PC", "PS5", "Xbox"], preco: 199.90, estoque: 0, lancamento: ISODate("2020-12-10"), avaliacao: 8.1, desenvolvedora: { nome: "CD Projekt Red", pais: "Polônia" } },
  { _id: 9, titulo: "Celeste", genero: ["Plataforma", "Indie"], plataformas: ["PC", "Switch", "PS5"], preco: 36.99, estoque: 55, lancamento: ISODate("2018-01-25"), avaliacao: 9.2, desenvolvedora: { nome: "Maddy Makes Games", pais: "Canadá" } },
  { _id: 10, titulo: "Forza Horizon 5", genero: ["Corrida"], plataformas: ["PC", "Xbox"], preco: 249.90, estoque: 20, lancamento: ISODate("2021-11-09"), avaliacao: 9.1, desenvolvedora: { nome: "Playground Games", pais: "Reino Unido" } }
]);

// ------------------------------------------------------------
// COLEÇÃO: clientes
// ------------------------------------------------------------
db.clientes.insertMany([
  { _id: 1, nome: "Ana Souza", email: "ana.souza@email.com", idade: 24, cidade: "Campinas", estado: "SP", ativo: true, plataformaPreferida: "PC", endereco: { rua: "Rua das Flores", numero: 120, cep: "13010-000" }, cadastro: ISODate("2023-03-10") },
  { _id: 2, nome: "Bruno Lima", email: "bruno.lima@email.com", idade: 31, cidade: "Mogi Mirim", estado: "SP", ativo: true, plataformaPreferida: "PS5", endereco: { rua: "Av. Brasil", numero: 45, cep: "13800-000" }, cadastro: ISODate("2022-07-21") },
  { _id: 3, nome: "Carla Mendes", email: "carla.mendes@email.com", idade: 19, cidade: "Rio de Janeiro", estado: "RJ", ativo: true, plataformaPreferida: "Switch", endereco: { rua: "Rua Copacabana", numero: 800, cep: "22020-001" }, cadastro: ISODate("2024-01-15") },
  { _id: 4, nome: "Diego Rocha", email: "diego.rocha@email.com", idade: 42, cidade: "Belo Horizonte", estado: "MG", ativo: false, plataformaPreferida: "Xbox", endereco: { rua: "Rua da Bahia", numero: 33, cep: "30160-011" }, cadastro: ISODate("2021-11-02") },
  { _id: 5, nome: "Eduarda Alves", email: "eduarda.alves@email.com", idade: 27, cidade: "Campinas", estado: "SP", ativo: true, plataformaPreferida: "PC", endereco: { rua: "Rua Barão de Jaguara", numero: 910, cep: "13015-001" }, cadastro: ISODate("2023-09-05") },
  { _id: 6, nome: "Felipe Costa", email: "felipe.costa@email.com", idade: 35, cidade: "Curitiba", estado: "PR", ativo: true, plataformaPreferida: "PS5", cadastro: ISODate("2024-05-30") },
  { _id: 7, nome: "Gabriela Nunes", email: "gabriela.nunes@email.com", idade: 22, cidade: "Porto Alegre", estado: "RS", ativo: true, plataformaPreferida: "PC", endereco: { rua: "Rua da Praia", numero: 77, cep: "90010-000" }, cadastro: ISODate("2024-08-12") },
  { _id: 8, nome: "Henrique Dias", email: "henrique.dias@email.com", idade: 29, cidade: "Mogi Mirim", estado: "SP", ativo: false, plataformaPreferida: "Xbox", endereco: { rua: "Rua XV de Novembro", numero: 15, cep: "13800-100" }, cadastro: ISODate("2022-02-18") }
]);

// ------------------------------------------------------------
// COLEÇÃO: pedidos (itens embutidos + referência ao cliente)
// ------------------------------------------------------------
db.pedidos.insertMany([
  { _id: 1, clienteId: 1, data: ISODate("2024-02-10"), status: "entregue", pagamento: "cartao", itens: [ { jogoId: 1, titulo: "The Witcher 3", quantidade: 1, precoUnitario: 89.90 }, { jogoId: 5, titulo: "Stardew Valley", quantidade: 1, precoUnitario: 24.99 } ], total: 114.89 },
  { _id: 2, clienteId: 2, data: ISODate("2024-03-05"), status: "entregue", pagamento: "pix", itens: [ { jogoId: 6, titulo: "God of War Ragnarök", quantidade: 1, precoUnitario: 299.90 } ], total: 299.90 },
  { _id: 3, clienteId: 3, data: ISODate("2024-03-18"), status: "entregue", pagamento: "pix", itens: [ { jogoId: 3, titulo: "Hollow Knight", quantidade: 1, precoUnitario: 46.99 }, { jogoId: 9, titulo: "Celeste", quantidade: 1, precoUnitario: 36.99 } ], total: 83.98 },
  { _id: 4, clienteId: 1, data: ISODate("2024-04-02"), status: "cancelado", pagamento: "boleto", itens: [ { jogoId: 4, titulo: "Elden Ring", quantidade: 1, precoUnitario: 229.90 } ], total: 229.90 },
  { _id: 5, clienteId: 5, data: ISODate("2024-05-14"), status: "entregue", pagamento: "cartao", itens: [ { jogoId: 7, titulo: "Minecraft", quantidade: 2, precoUnitario: 129.90 } ], total: 259.80 },
  { _id: 6, clienteId: 6, data: ISODate("2024-06-21"), status: "enviado", pagamento: "cartao", itens: [ { jogoId: 2, titulo: "FIFA 24", quantidade: 1, precoUnitario: 249.90 }, { jogoId: 6, titulo: "God of War Ragnarök", quantidade: 1, precoUnitario: 299.90 } ], total: 549.80 },
  { _id: 7, clienteId: 7, data: ISODate("2024-08-30"), status: "pendente", pagamento: "pix", itens: [ { jogoId: 10, titulo: "Forza Horizon 5", quantidade: 1, precoUnitario: 249.90 } ], total: 249.90 },
  { _id: 8, clienteId: 2, data: ISODate("2024-09-09"), status: "entregue", pagamento: "pix", itens: [ { jogoId: 4, titulo: "Elden Ring", quantidade: 1, precoUnitario: 229.90 }, { jogoId: 8, titulo: "Cyberpunk 2077", quantidade: 1, precoUnitario: 199.90 } ], total: 429.80 },
  { _id: 9, clienteId: 5, data: ISODate("2024-10-01"), status: "enviado", pagamento: "cartao", itens: [ { jogoId: 5, titulo: "Stardew Valley", quantidade: 3, precoUnitario: 24.99 } ], total: 74.97 },
  { _id: 10, clienteId: 3, data: ISODate("2024-10-15"), status: "pendente", pagamento: "boleto", itens: [ { jogoId: 9, titulo: "Celeste", quantidade: 1, precoUnitario: 36.99 } ], total: 36.99 }
]);

// ------------------------------------------------------------
// ÍNDICES
// ------------------------------------------------------------
db.clientes.createIndex({ email: 1 }, { unique: true });
db.jogos.createIndex({ titulo: 1 });
db.jogos.createIndex({ genero: 1, preco: -1 });
db.pedidos.createIndex({ clienteId: 1, data: -1 });

print("Banco loja_games criado!");
print("jogos: " + db.jogos.countDocuments() + " | clientes: " + db.clientes.countDocuments() + " | pedidos: " + db.pedidos.countDocuments());

// ============================================================
// CONSULTAS PARA PRATICAR (descomente e teste uma a uma)
// ============================================================

// --- CRUD / Filtros ---
// db.jogos.find({ preco: { $lt: 50 } })
// db.jogos.find({ genero: "RPG" }, { titulo: 1, preco: 1, _id: 0 })
// db.jogos.find({ plataformas: { $all: ["PC", "Switch"] } })
// db.jogos.find({ $or: [{ estoque: 0 }, { avaliacao: { $gte: 9.5 } }] })
// db.jogos.find({ "desenvolvedora.pais": "Polônia" })
// db.clientes.find({ endereco: { $exists: false } })
// db.clientes.find({ cidade: { $in: ["Campinas", "Mogi Mirim"] }, ativo: true })
// db.jogos.find().sort({ preco: -1 }).limit(3)
// db.jogos.find({ titulo: /^the/i })

// --- Update ---
// db.jogos.updateOne({ _id: 8 }, { $set: { estoque: 30 } })
// db.jogos.updateMany({ genero: "Indie" }, { $inc: { preco: 5 } })
// db.jogos.updateOne({ _id: 1 }, { $push: { plataformas: "Switch" } })
// db.jogos.updateOne({ _id: 1 }, { $pull: { plataformas: "Switch" } })
// db.clientes.updateMany({ ativo: false }, { $set: { status: "inativo" } })

// --- Delete ---
// db.pedidos.deleteOne({ _id: 4 })
// db.clientes.deleteMany({ ativo: false })

// --- Aggregation ---
// Total vendido por status:
// db.pedidos.aggregate([ { $group: { _id: "$status", qtd: { $sum: 1 }, total: { $sum: "$total" } } } ])
//
// Jogos mais vendidos (unwind nos itens):
// db.pedidos.aggregate([
//   { $unwind: "$itens" },
//   { $group: { _id: "$itens.titulo", vendidos: { $sum: "$itens.quantidade" } } },
//   { $sort: { vendidos: -1 } }
// ])
//
// Preço médio por gênero:
// db.jogos.aggregate([
//   { $unwind: "$genero" },
//   { $group: { _id: "$genero", media: { $avg: "$preco" }, qtd: { $sum: 1 } } },
//   { $sort: { media: -1 } }
// ])
//
// Pedidos com dados do cliente ($lookup = "join"):
// db.pedidos.aggregate([
//   { $lookup: { from: "clientes", localField: "clienteId", foreignField: "_id", as: "cliente" } },
//   { $unwind: "$cliente" },
//   { $project: { _id: 0, pedido: "$_id", cliente: "$cliente.nome", total: 1, status: 1 } }
// ])
//
// Gasto total por cliente (só pedidos não cancelados):
// db.pedidos.aggregate([
//   { $match: { status: { $ne: "cancelado" } } },
//   { $group: { _id: "$clienteId", gasto: { $sum: "$total" } } },
//   { $sort: { gasto: -1 } }
// ])
