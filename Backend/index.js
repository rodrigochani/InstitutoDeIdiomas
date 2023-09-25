import express from 'express'
import router from './rutas/rutas.js'

const app = express()
const port = 3001




app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log(`el servidor esta escuchando en el puerto ${port}`)
})

