const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const porcessRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('404')
  }
}

const server = http.createServer(porcessRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on http://localhost:${desiredPort}`)
})