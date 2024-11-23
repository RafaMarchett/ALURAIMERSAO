// Importa o framework Express.js para construir a aplicação web back-end
import express from "express";

// Importa as rotas definidas em postRoutes.js
import routes from "./src/config/routes/postRoutes.js";

// Cria uma instância do Express para representar o servidor
const app = express();
app.use(express.static("uploads"))
// Aplica as rotas importadas ao servidor
routes(app);

// Inicia o servidor para escutar na porta 3000 (porta comum para desenvolvimento local)
app.listen(3000, () => {
  console.log("Servidor escutando na porta 3000");
});

// Função buscarPorID (não utilizada no código fornecido)
function buscarPorID(id) {
  return backroomsHub.findIndex((post) => {
    return post.id === Number(id);
  });
}
