import express from 'express'
import routes from './routes/router.js'

const app = express();
const PORT = 8001;

app.use(routes);
app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));