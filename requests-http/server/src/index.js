const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multparty = require('connect-multiparty')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

const multipartyMiddleware = multparty({ uploadDir: './uploads' })
app.post('/upload', multipartyMiddleware, (req, res, err) => {
    console.log('Teste FIles')
    const files = req.files;
    console.log(files)
    res.json({ message: 'retorno post', error: err })
});

app.get('/downloadExcel', (req,res) => {
  res.download('./uploads/report.xlsx');
});

app.get('/downloadPdf', (req,res) => {
  res.download('./uploads/report.pdf');
});

app.use((err, req, res, next) => res.json({ error: err.message }))

app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000");
})
