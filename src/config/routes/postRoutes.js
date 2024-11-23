// Importa o Express e a função listarPosts de postsController.js
import express from "express";
import multer from "multer";
import cors from "cors";
import { criarNovoPost, listarPosts, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOption = {
  oring: "http://localhost:8000",
  optionsSuccessStatus: 200
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
})


const upload = multer({ dest: "./uploads" , storage})
// Define as rotas da aplicação
const routes = (app) => {
  // Habilita o parseamento de dados JSON do corpo da requisição
  app.use(express.json());
  app.use(cors(corsOption))

  // Rota GET para "/posts" que executa a função listarPosts
  app.get("/posts", listarPosts);
  app.post("/posts", criarNovoPost) //parametro rota e função
  app.post("/upload", upload.single("imagem"), uploadImagem)
  app.put("/upload/:id", atualizarNovoPost)
}

// Exporta a função routes para uso em outros arquivos
export default routes;