import express from 'express';
import saludoRouter from './routes/saludo.routes.js';

const app = express();

app.use(express.json());

app.use(saludoRouter);

app.listen(3007, () => {
  console.log(`Servidor corriendo https://localhost:3007`);
});
