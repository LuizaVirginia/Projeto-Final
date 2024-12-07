require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log('Servidor rodando na porta', process.env.PORT)))
  .catch((err) => console.error(err));
