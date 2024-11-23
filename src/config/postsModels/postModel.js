// Importa a função conectarAoBanco de dbConfig.js (estabelece conexão com o banco)
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../dbConfig.js";

// Estabelece a conexão com o banco de dados de forma assíncrona
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função exportada (getTodosPosts) que busca todos os posts do banco
export async function getTodosPosts() {
  // Acessa o banco de dados e seleciona a coleção "posts"
  const db = conexao.db("imersao-backrooms");
  const colecao = db.collection("posts");

  // Busca todos os posts da coleção e retorna um array
  return colecao.find().toArray();
};

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-backrooms");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
};

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-backrooms");
  const colecao = db.collection("posts")
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost}); //Post a ser atualizado
}

