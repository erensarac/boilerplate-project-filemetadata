require('dotenv').config()
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer({ dest: './public/uploads/' })
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single('upfile'), async (req, res) => {
  res.json({ name: req.file.originalname, type: req.file.mimetype, size: req.file.size })
})

app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
});
