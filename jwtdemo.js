const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

const jwtsecret = "most secretish code ever"

app.use(express.json())
app.use(express.static("public"))

app.post("/login", (req, res) => {
  if ((req.body.username == "johndoe", req.body.password == "qwerty")) {
    res.json({ status: "success", token: jwt.sign({ name: "John Doe", favColor: "blue" }, jwtsecret) })
  } else {
    res.json({ status: "failure" })
  }
})

app.post("/topsecret", (req, res) => {
  jwt.verify(req.body.token, jwtsecret, function (err, decoded) {
    if (err) {
      res.json({ status: "failure" })
    } else {
      res.json({ status: "success", message: `hey ${decoded.name} your fav color is ${decoded.favColor} and the secret code is X` })
    }
  })
})

app.listen(3000)
