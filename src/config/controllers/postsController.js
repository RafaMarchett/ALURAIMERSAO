// Importa a função getTodosPosts de postModel.js (buscar todos os posts)
import {getTodosPosts, criarPost, atualizarPost} from "../postsModels/postModel.js";
import fs from "fs";

// Função exportadora (listarPosts) que lista todos os posts
export async function listarPosts(req, res) {
  // Chama a função getTodosPosts para buscar os posts do banco
  const posts = await getTodosPosts();

  // Envia uma resposta com status 200 (OK) e os posts no formato JSON
  res.status(200).json(posts);
}

export async function criarNovoPost(req, res) {
  const novoPost = req.body; //Toda requisição tem um cabeçario com informações, ao enviar coisas vai ter o conteudo, esse é o corpo
  try { //tenta realizar algo
    const postCriado = await criarPost(novoPost);
      res.status(200).json(postCriado);
  } catch(erro) {//Pegou erro
    console.error(erro.message) //Recebe o erro, código de erro
    res.status(500).json({"Erro":"Falha na requisição da criação do post"}) //Erro interno
  }
}

export async function uploadImagem(req, res) {
  const novoPost = req.body; //Toda requisição tem um cabeçario com informações, ao enviar coisas vai ter o conteudo, esse é o corpo
  try { //tenta realizar algo
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
    fs.renameSync(req.file.path, imagemAtualizada)
      res.status(200).json(postCriado);
  } catch(erro) {//Pegou erro
    console.error(erro.message) //Recebe o erro, código de erro
    res.status(500).json({"Erro":"Falha na requisição da criação do post"}) //Erro interno
  }
}

export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  const urlImagem = "http://localhost:3000/" + id + ".png"
  const postAtualizado = {
    imgUrl: urlImagem,
    descricao: req.body.descricao,
    alt: req.body.alt
  } 
  try { 
    const postCriado = await atualizarPost(id, postAtualizado);
      res.status(200).json(postCriado);
  } catch(erro) {
    console.error(erro.message) 
    res.status(500).json({"Erro":"Falha na requisição da criação do post 2"})
  }
}
