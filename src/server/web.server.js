const express = require('express')

export default class WebServer {
  
  constructor () {
    this.app = express()
    this.app.use(express.static('dist/public'))
  }

  start (port) {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(port, function () {
          resolve()
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }

  stop () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (e) {
        console.error(e.message)
        reject(e)
      }
    })
  }
}