const https = require('https');
const path = require('path');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const { PORT } = require('./config');
const { errorHandlingMiddleware } = require('./middlewares');
var cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ 'extended': false }));

const apiRoutes = require('./routes/api');
const apiDocsRoutes = require('./routes/apiDocs');

app.use('/api', apiRoutes);
app.use('/api-docs', apiDocsRoutes);

app.get('/', (req, res) => {
  res.send('Agile Board API Endpoint { use /api-docs to read the documentation }');
});

app.use(errorHandlingMiddleware);

if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} else {
  const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
  }, app);
  
  sslServer.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
  });
}