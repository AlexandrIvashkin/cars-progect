import express from 'express';
import path from 'path';

const PORT = 7700;
const PUBLIC_PATH = __dirname + '/public';
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
} else {
  app.use(express.static(PUBLIC_PATH));
}

app.all("*", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});