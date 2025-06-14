import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

import videoRoutes from './routes/videos.routes'

// Configuracion del servidor (CRUD)

const app = express()

app.set('port', config.PORT);

app.use(morgan('dev')); // Entrega informacion de lo que se va pidiendo, las peticiones.
app.use(cors()); // Permite especificar que servidores tienen permitido conectarse/pedir cosas, en este caso cualquier servidor.
app.use(express.json()); // Para entender los obj. JSON cuando vienen la tipica peticion "POST" con un dato
app.use(express.urlencoded({extended: false})); // Para que cuando me envien una peticion POST desde un formulario pueda entender los campos que vienen desde allí.

app.use(videoRoutes)

export default app;