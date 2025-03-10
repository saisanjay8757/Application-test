open folder
split terminal for client side(react) and server side


cd client
npx create-react-app ./

SERVER TERMINAL
cd server
npm init -y
npm install body-parser cors express mongoose nodemon
# body-parser for post request 
# cors for cross origin request
# express for framework
# mongoose for models
# nodemon for reset the changes saves automaticlly
# in package.json add "type" = "module for latest version of import statements

#  in package.json "scripts" -> "start":"nodemon index.js"

npm i dotenv

npm i bcryptjs jsonwebtoken













delete src in client 
again create src and src/index.js which connects index.html and index.js
create app.js in src
npm start

in server/index.js
create app=express()


create cluster in mangodb atlas connect database network aceses

"scripts": {
    "start": "nodemon index.js"
  },

  in package.json

"type": "module", in package.json for imports 

PORT = 8080 in .env file

CONNECTION_URL from mongodb cluster

dotenv

app.listen(port,()=>{})

mongoose.connect(url,{urlen...}).then().catch()

SVGbackground.com



heroku and netlify


sets npm 7 to npm 6 

npm config set legacy-peer-deps true 






/*{
  "name": "server",
  "version": "1.0.0",
  "description": "open folder split terminal for client side(react) and server side",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.0.4",
    "nodemon": "^2.0.22"
  }
}
*/