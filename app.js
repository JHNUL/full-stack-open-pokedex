const app = express()

const express = require('express')
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_, res) => {
  res.send('ok')
})

app.get('/version', (_, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("server started on port 5000");
})
