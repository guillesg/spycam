const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const routerApi = require('./routes/index')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json());
// app.use(helmet())
app.use(morgan('dev'))

// const whitelist = ['http://localhost:8080', 'https://myapp.co'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   }
// }

routerApi(app)

app.use(cors())

require('./utils/auth/index')

app.get('/', (req, res) => {
  res.send('hola')
})

app.listen(port,  () => {
    console.log('Listening on port ' + port)
})
