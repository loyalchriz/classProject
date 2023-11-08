const express = require ('express')
const app = express()
const port = 3500

// line 5 helps display the css
app.use(express.static('public'))

  //route to handle GET requests to the "/signup" endpoint.
app.get('/signup', (req, res) => {
    res.sendFile('index.html', {root:__dirname })
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })