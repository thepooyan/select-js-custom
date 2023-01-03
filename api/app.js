
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

let corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/search', (req, res) => {
  res.send([{category:'آموزش گام به گام', result:[{title:'مقاله یک', href:'href1'},{title:'مقاله دو', href:'href2'},{title:'مقاله سه', href:'href3'}]},{category:'فیلم', result:[{title:'مقاله یک', href:'href1'},{title:'مقاله دو', href:'href2'},{title:'مقاله سه', href:'href3'}]}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})