import express, { Express } from 'express';
import itemRoutes from './routes/itemRoutes';

// Cria a instância do aplicativo Express
const app: Express = express();

// Middleware para parsear JSON
app.use(express.json());

// Usa as rotas definidas
app.use('/api', itemRoutes);

// Configura o porto e inicia o servidor
const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, async () => {
  try {
    // Verifica a conexão com o banco de dados e sincroniza os modelos
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
