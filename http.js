

var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    //Access-Control-Allow-Origin *代表任何域名都可以访问这个服务.用作匹配同源策略
    response.writeHead(200,{'content-Type':'text/plain',"Access-Control-Allow-Origin":"*"});

    let resPoms = {
        'info' : 'Hello world'
    }
    // 发送响应数据 "Hello World"
    //response.end('Hello World\n');
    response.end(JSON.stringify(resPoms));
}).listen(8181);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8181/');


