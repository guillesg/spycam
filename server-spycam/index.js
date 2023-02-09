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

// const whitelist = ['http://localhost:3000', 'http://localhost:19000'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   }
// }

app.use(cors('*'))

routerApi(app)

require('./utils/auth/index')

app.get('/', (req, res) => {
  res.send('hola')
})

app.listen(port,  () => {
    console.log('Listening on port ' + port)
})
