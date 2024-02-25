const https = require('https');

const router = require('find-my-way')({
    ignoreTrailingSlash: true,
    maxParamLength: 500,
    // onBadUrl: (path, req, res) => {
    //     res.statusCode = 404
    //     res.end(`Bad request there is no route with this ${path}`)
    //   },
      defaultRoute: (req, res) => {
        res.statusCode = 404
        res.end(JSON.stringify({
            status:false,
            message : "there is no rout with this requested url"
        }))
      }
});

const initServer = (req, res) =>{
    router.lookup(req, res);
}



const server = https.createServer(initServer);


const socketConnection = () => new WebSocket('wss://websocketserver-github-io-1.onrender.com');

socketConnection.onopen = () =>{
    connection.send('hellow , socket connection is open for client')
}

socketConnection.onerror = (error) =>{
    console.log('Web Error' + error)
}

socketConnection.onmessage = (message) =>{
    console.log(message.data);
}

server.listen('https://websocketserver-github-io-1.onrender.com', ()=>{
    console.log("server is connected with port 4000")
})