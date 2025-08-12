// src/server.js
const mongoose = require('mongoose');
const app = require('./app');

const {
  DB_HOST = 'localhost',
  DB_PORT = '27017',
  DB_NAME = 'mydb',
  PORT = 3000
} = process.env;

const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

(async () => {
  try {
    await mongoose.connect(DB_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log(`[DB] Conectado em ${DB_URL}`);

    const server = app.listen(PORT, () => {
      console.log(`[HTTP] Server rodando na porta ${PORT}`);
    });

    // Graceful shutdown
    const shutdown = async (signal) => {
      console.log(`[${signal}] Encerrando...`);
      await mongoose.connection.close();
      server.close(() => process.exit(0));
    };
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
  } catch (err) {
    console.error('[BOOT] Falha ao iniciar:', err);
    process.exit(1);
  }
})();
