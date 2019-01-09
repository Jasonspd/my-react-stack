import WebServer from './web.server'

const port = 4000;
let webServer = new WebServer();

webServer.start(port)
  .then(() => {
    console.log(`Web server started on http://localhost:${port}/`);
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });