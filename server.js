const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

//import routes
const stickerRoutes = require('./routes/stickerRoutes');

//create app
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// COSR handler
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

//Middllewares
// app.use(logger);

//ROUETS
app.get('/', (req, res) => {
  return res.json(['hello from nodejs server']);
});

app.use('/stickers', stickerRoutes);

app.listen(port, () => console.log(`server run on port ${port}`));
