// ============================================================
// Banco: loja_games  |  Execução: mongosh < loja_games.js
// ou dentro do mongosh: load("loja_games.js")
// ============================================================

use("loja_games");

//1
//db.jogos.find()

//2
//db.jogos.find({preco:{$lt: 50}})

//3
//db.jogos.find({}, {preco:1, titulo:1, _id:0})

//4
//db.clientes.find({cidade: "Campinas"})

//5
//db.clientes.countDocuments()

//6
//db.jogos.find().sort({preco: -1}).limit(3)