import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const port = 1313

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react',
})

app.use(express.json())
app.use(cors())

app.get('/aha', (req, res) => {
  const q = 'SELECT * FROM aha'
  db.query(q, (err, data) => {
    if (err) return res.send(err)
    return res.json(data)
  })
})

app.listen(port, () => {
  console.log(`A szerver a ${port} porton fut.`)
})
