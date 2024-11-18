const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const porcessRequest = (req, res) => {
  const { method, url } = req
  console.log(url)

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(dittoJSON))
          break
        
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>404</h1>')
          break

      }
    break
    
    case 'POST':
      switch (url) {
        case '/pokemon':
          let body = ''

          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)

            res.writeHead(201, {'Content-type': 'application/json; charset=utf-8'})

            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break 

        default:
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.statusCode = 404
          res.end('<h1>404</h1>')

      }
    
    default:
      break

  }
}

const server = http.createServer(porcessRequest)

server.listen(1234, () => {
  console.log('listening on port 1234')
})