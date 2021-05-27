const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (request, response) => {
  response.send("hello!")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
