const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
require('dotenv').config();

const {NotFoundError, HttpError} = require('./utils/errors');
require('./config/db');

const app = express();
const swaggerDocument = YAML.load('src/docs/swagger.yaml');

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/template-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

const petRoutes = require('./routes/pets');

app.use('/pets', petRoutes);

app.use((err, req, res, next) => {
  console.log('Error', err);
  if (err.details) return res.status(400).send(err.details[0].message);
  if (err instanceof NotFoundError) {
    return res.status(404).send(err.message);
  } else if (err instanceof HttpError) {
    return res.status(err.status).send(err.response);
  }
  res.status(503).send('Oooops something went wrong, try again');
});

module.exports = app;
