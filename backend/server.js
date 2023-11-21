const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes/router.js');


const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});
