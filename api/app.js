
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/search', (req, res) => {

  let data = [
    { category: 'آموزش گام به گام', count: Math.floor(Math.random()*50), href: 'href1' }, 
    { category: 'فیلم ها', count: Math.floor(Math.random()*50), href: 'href2' }, 
    { category: 'کتاب ها', count: Math.floor(Math.random()*50), href: 'href3' },
    { category: 'دوره ها', count: Math.floor(Math.random()*50), href: 'href4' },
    { category: 'پروژه ها', count: Math.floor(Math.random()*50), href: 'href5' },
  ]
  let resp = data.filter(item=>{
    if (Math.floor(Math.random()*2) === 1)
    return item
  })

  return res.send(resp)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})