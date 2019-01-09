- mkdir myStack, cd myStack, git init, touch README.md (create a README)
- mkdir -p src/client src/server, touch .gitignore (create a gitignore),
- npm init, touch src/client/index.html (create a index.html)
- npm install express, touch src/server/web.server.js (create a express server)
- touch src/server.index.js (create a startup file)
- **added port variable in startup and express server file**
- npm i babel-cli babel-preset-env --save-dev, touch .babelrc (create a babelrc config file and add env)
- (add build commands in package.json), npm run build, npm start
- **Use Babel and env preset to run ES7, ES7 and ES8**

-npm i jest --save-dev, touch src/server/web.server.test.js (create test file for server)
- (add test command in package.json)
- npm i react react-dom, touch src/client/app.js (create react app file)
- touch src/client/index.js (add index file to render react app file)
- **tell babel to handle React/JSX**
- npm install --save-dev babel-preset-react (add react into .babelrc config file)
- (add script file to load index.js in the HTML file)
- **Babel is just a transpiler so it still needs to support dynamically loading modules... webpack!**

- npm i webpack, touch webpack.config.js, (added a node configuration webpack config)
- **This file specifies the output bundle and ignore native node modules from being bundled. The client is set to web and server set to node.**
- npm install babel-loader --save-dev, (added loader to webpack config)
- **This loader allows webpack to handle ES6 and JSX**
- npm i webpack-node-externals --save-dev, (added loader to webpack config)
- **This loader excludes all packages under node_modules**
- (update build commands for webpack)

- npm install rimraf, (add clean command in package.json), npm run clean, npm install, npm run build
  
- **changed loaders to rules**
- **warning in configuration - mode not set**
- **Error: Cannot find module '@babel/core' babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.**
- npm install --save-dev @babel/core @babel/preset-env
- **Error: Cannot find module '@babel/preset-react'**
- (reinstall @babel/ prefix npm modules, changed presets to prefix @babel/)
  
- **index.html is missing...**
- npm i html-webpack-plugin --save-dev
- (add plugin to webpack config file then add plugins key to the client config)
- **remove the reference to index.js in the html file**
- npm run clean, npm install, npm run build...

- **Running npm test gives a jest error: Couldn't find preset "@babel/env" relative to directory**
- npm i -D 'babel-core@^7.0.0-0'

- npm i --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
- **Enzyme allows us to assert, manipulate and traverse react components in jest**
- touch src/enzyme.setup.js (added jest in package.json)
- (no warning but ) npm i --saveDev raf
- npm test, npm start