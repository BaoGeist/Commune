const express = require('express')
const app = express()

// routes
const loginRouter = require('./routes/loginRouter.js')

app.use(express.json());
app.use("/", loginRouter)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
