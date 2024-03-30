const express = require('express')
const app = express()

// routes
const loginRouter = require('./routes/loginRouter.js')

app.use(express.json());
app.use("/", loginRouter)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
