import express from "express"
import http from "http"

import apiRoutes from "./routes"

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(apiRoutes)

server.listen(3000)