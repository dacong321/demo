/*
let fs = require('fs');
var log4js = require('log4js');
var logger = log4js.getLogger();
console.log("--------begin");

// 判断日志目录是否存在，不存在时创建日志目录
function checkAndCreateDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
checkAndCreateDir('logs');



//logger.debug("Time:", new Date());
logger.warn("Time:", new Date());


console.log("--------over");
*/


var express = require("express");
var app = express();

///var log4js = require("./logger");
var log4js = require('log4js');
var logger = log4js.logger("normal","info");

/**
 日志级别对应规则：
 http responses 3xx, level = WARN
 http responses 4xx & 5xx, level = ERROR
 else, level = INFO
 **/
app.use(log4js.connectLogger(logger,{level:"auto"}));

app.all("*",function(req,res,next){
    logger.info(req.ip+"  "+req.originalUrl+" access");
    next();
});

app.all("/hello",function(req,res,next){
    res.sendfile("hello.html");
});
app.all("/hello2",function(req,res,next){
    res.send("hello");
});

app.listen(3000,function(){
    logger.trace("服务启动trace");
    logger.debug("服务启动debug");
    logger.info("服务启动info");
    logger.warn("服务启动warn");
    logger.error("服务启动error");
    logger.fatal("服务启动fatal");
    console.log("服务启动console.log");
});



var log4js = require("log4js");
log4js.configure({
    appenders:[
        {
            type:"console"//控制台输出日志
        },
        {
            type:"file",// 文件记录日志
            filename:'logs/access.log',// logs目录必须手动新建
            maxLogSize:1024,//文件最大size 单位：K
            backups:3,// 备份文件总数,默认1
            category:'normal'//日志类型，下面getLogger对象就是根据这个
        }
    ],
    replaceConsole:true	//以[INFO] console代替console默认样式
});

exports.logger = function(category,level){
    var logger = log4js.getLogger(category);
    logger.setLevel(level);
    return logger;
}

exports.connectLogger = function(logger,options){
    return log4js.connectLogger(logger,options);
}





