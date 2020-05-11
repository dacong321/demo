//测试数组
var arr = new Array(1, 3, 2, 8, 9, 1, 5, 22, 3, 991, 4);
//插入排序
function InsertionSort(arr) {
    if (arr == null || arr.length < 2) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return arr;
}
//控制台输出
console.log(arr);
InsertionSort(arr);
console.log(arr);





const  fs = require('fs');
//var fs = require('fs');
var path = require('path');
var crypto = require("crypto");

var initQipai = function () {
    let pathroot = __dirname;
    let qipai = {};
    fs.readdirSync(pathroot).forEach(function (filename) {
        if (!/\.json$/.test(filename)) {
            return;
        }
        var name = path.basename(filename, '.json');
        console.log("name == ", name);
        var protoStr = fs.readFileSync(pathroot + '\\' + filename);
        var proto = JSON.parse(protoStr);
        var ver = crypto.createHash('md5').update(protoStr).digest('base64');
        qipai[name] = { filename: filename, proto: proto, ver: ver };
        console.log(" qipai[name] == %o",  qipai[name]);
    });
}

initQipai();

console.log("==================================");
let sub = "1234[56[]dsasdsadx"
console.log(sub.indexOf('['));



 //BASE64编解码
    //编码
    //var bc = new Buffer("Base64编解码内容");
    let sct = "Base64编解码内容";
    var bc = Buffer.alloc(sct.length,"Base64编解码内容");
    //const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
    var bec = bc.toString("base64");
    
    console.log("Base64编码后结果： %s",bec);
//log打印:Base64编码后结果： QmFzZTY057yW6Kej56CB5YaF5a65
    //解码
    //var bdc = new Buffer(bec, "base64");
    var bdc = Buffer.from(bec, "base64");
    var bdcs = bdc.toString();
    console.log("Base64解码后结果： %s",bdcs);
 //log打印:Base64解码后结果： Base64编解码内容



 
