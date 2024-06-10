const express = require('express')
const router = require('express').Router()
const app = express()

app.use(express.json({ limit: '10mb', extended: true }))

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST request to the homepage')
})

router.get('/',  (req, res) => {
  console.log(req.query)
  res.send('GET request to the homepage')
})

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send('GET request to the homepage')
})

router.put('/:id', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  res.send('PUT request to the homepage')
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  res.send('DELETE request to the homepage')
})

app.use('/api/admin/users', router)

app.listen(8080, () => {
  console.log(`El servidor está corriendo en el puerto 8080.`)
})
