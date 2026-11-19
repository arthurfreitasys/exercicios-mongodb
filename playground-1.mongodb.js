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

//7
//db.jogos.find({plataformas: {$all: ["PC", "Switch"]}},{_id:0, titulo: 1, plataformas:1})

//8
//db.jogos.find({$or:[ {estoque: 0}, {avaliacao: {$gte: 9.5} } ] }, 
//  {titulo:1, _id:0, avaliacao: 1, estoque:1})

//9
//db.clientes.find({endereco:{$exists:false}})

//10
//db.jogos.find({"desenvolvedora.pais": "Polônia"}, {titulo:1, _id:0, desenvolvedora:1})