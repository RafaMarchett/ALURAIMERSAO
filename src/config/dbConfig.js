// Importa o MongoClient para estabelecer conexão com o MongoDB
import { MongoClient } from 'mongodb';

// Função exportada (conectarAoBanco) para conexão com o banco de dados
export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    // Cria uma instância do MongoClient usando a string de conexão
    mongoClient = new MongoClient(stringConexao);
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna a instância do MongoClient para uso posterior
    return mongoClient;
  } catch (erro) {
    // Exibe mensagem de erro no console e finaliza o processo em caso de falha
    console.error('Falha na conexão com o banco!', erro);
    process.exit();
  }
}