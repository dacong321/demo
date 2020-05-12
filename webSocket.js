var app = require('express')();
var server = require('http').Server(app);
var WebSocket = require('ws');
//-- 监听8080端口
var wss = new WebSocket.Server({ port: 8080 });
//console.log('wss==', wss);
//-- 当有新的连接请求到达时，打印日志，同时向客户端发送消息
wss.on('connection', function connection(ws) {
    console.log('server: receive connection.');
    //-- 当收到客户端的消息时，同样打印日志
    ws.on('message', function incoming(message) {
        console.log('server: received: %s', message);
    });

    ws.send('world');
});
//-- 监听3000端口，当收到3000端口的请求时发送当前路径下的index.html文件显示在浏览器上
app.get('/', function (req, res) {
    console.log("服务端开始发送index.html")
    res.sendFile(__dirname + '/index.html');
    console.log("--------")
});

app.listen(3000);

//服务端输出：
//server: receive connection.
//server: received: from client: hello