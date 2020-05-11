
console.log('例子1：================数组 按照json数据的属性排序sort=================');
//在nodejs中，数组按照json数据的属性排序sort
//sortType:为true表示按照降序排序，false表示按照升序排序；

function keysort(key,sortType){
    return function(a,b){
        return sortType ?(a[key]<b[key]):(a[key]>b[key])
    }
}
var ary=[{id:1,name:"f"},{id:3,name:"c"},{id:2,name:"b"},{id:4,name:"d"}];

console.log('按照升序排');
var a =ary.sort(keysort('id',false));
console.log(a);
console.log('按照降序排');
var b =ary.sort(keysort('id',true));
console.log(b);


console.log('例子2：================创建一个对象======================');
//通过原始构造函数 new Object();创建一个对象,然后赋值
var testobj = new Object();
testobj.name = "wangbadan";
testobj.age = 25;
testobj.action = function(){
    return this.age;
}
console.log(testobj);



//直接新建对象，不通过构造函数(而且直接新建速度比构造器还快一些！)
var testobj1 = {};
testobj1.name = "wangbadan1";
testobj1.age = 55;
testobj1.action = function(){
    return this.name;
}
console.log(testobj1);


//重载构造器，让构造器在构造对象时按预定的属性构建。
function newObj(name, age) {
    this.name = name;

    this.action = function(){
        return this.age;
    };
    this.age = age;
}
var testObj2 = new newObj("wangabdan2", 66);
//testObj2.anotherName = 'liuliu';
console.log(testObj2);

//直接在一个对象上定义一个新属性，或者修改一个已经存在的属性.使用Object.defineProperty();
/*
Object.defineProperty(obj, prop, desc)
obj 需要定义属性的当前对象
prop 当前需要定义的属性名
desc 属性描述符
*/


console.log('例子3：================遍历一个对象属性======================');

//创建一个对象
/*
var bianliObj = {};
bianliObj.name = "bianliwangbadan11";
bianliObj.age = 99;
bianliObj.action = function () {
    return this.age;
}
*/
var bianliObj = Object.create({},
    {
        getFoo:{
            value:function () {
                return this.foo;
            },
            //enumable:false
            enumerable: false
        }
    }
);
bianliObj.name = "bianliwangbadan11";
bianliObj.age = 99;
bianliObj.action = function () {
    return this.age;
}

console.log('===第一种  Object.keys(bianliObj)遍历后得到key的数组====获取对象可枚举的属性');
// 通过调用Object.keys()方法，获取对象上已定义(可枚举)的属性和方法
let bianlihouObj = Object.keys(bianliObj);
console.log(bianlihouObj);

console.log('===第二种遍历后得到key的数组====获取对象可枚举和不可枚举的属性');
//Object.getOwnPropertyNames():方法返回一个指定对象所有自身属性的属性名
var bianlihoukeys = [];
bianlihoukeys = Object.getOwnPropertyNames(bianliObj);
console.log(bianlihoukeys);

console.log('===第三种for遍历后得到key的数组====获取对象可枚举的属性');
let bianlihouObj2 = [];
for(let Sub in bianliObj) {
    bianlihouObj2.push(Sub);
}
console.log(bianlihouObj2);
console.log("排序前");
console.log(bianliObj);


console.log('===将遍历得到的keys数组排序====');
function bianlikeysort(sortType){
    return function(a,b){
        return sortType ?(a<b):(a>b)
    }
}
console.log('按照升序排');
var a =bianlihouObj2.sort(bianlikeysort(false));  //得到对象key的排序 bianlihouObj2

console.log("排序后的key数组   ");
console.log(bianlihouObj2);
console.log("排序后的对象属性   ");
console.log(bianliObj); //结论：还是原来的值，排序bianlihouObj2 得到的数组并不影响bianliObj，他们是两个东西。
console.log(a);





/*
let aaaa = {};

aaaa.sss =  '111';
aaaa.bbb =  '4112';
aaaa.ddd =  '254';
aaaa['ffff'] = '989';
console.log(aaaa);


function BigKuoHaokeysort(key,sortType){
    return function(a,b){
        return sortType ?(a[key]<b[key]):(a[key]>b[key])
    }
}

let cccc = aaaa.sort(BigKuoHaokeysort('id',true));
console.log(cccc);
*/




// /**
//  * js 里函数调用有 4 种模式：方法调用、正常函数调用、构造器函数调用、apply/call 调用。
//  */
// //方法调用：
// var a = {
// 	v:5,
// 	func : function(value){
// 		this.v  = value;
// 		console.log("这是一个方法调用:a.v == " + this.v);
// 	}
// 	//这个时候，上面函数里的 this 就绑定的是这个对象 a。所以 this.v 可以取到对象 a 的属性 v。
// }
// a.func(5);

// console.log("这个时候，上面函数里的 this 就绑定的是这个对象 a。所以 this.v 可以取到对象 a 的属性 v。");


// //正常的函数调用：
// function f(value){
// 	this.x = value;
// 	console.log("这是一个正常的函数调用:this.x == " + this.x + "this 是调用对象,也就是绑定的windows");
// 	//这个时候，函数 f 里的 this 绑定的是全局对象，如果是在浏览器运行的解释器中，一般来说是 window 对象。所以这里 this.x 访问的其实是 window.x ，当然，如果 window 没有 x 属性，那么你这么一写，按照 js 的坑爹语法，就是给 window 对象添加了一个 x 属性，同时赋值。
// }
// f(6);


// //构造器函数调用：
// let handler = function(app){
// 	this.app = app;
// 	console.log("this.app=%o", app);
// 	console.log("this=%o", this);
// 	console.log("this.prototype=%o", this.prototype);
// 	console.log("这是一个构造器函数调用 this.app.name = " + this.app.name + "this 是调用对象,也就是绑定的new出来的Handler对象本身");
// }

// let app = {
// 	name:"lxkTest",
// 	age: 25
// }
// let Handler = new handler(app);
// //如果你在一个函数前面带上 new 关键字来调用，那么 js 会创建一个 prototype 属性是此函数的一个新对象，同时在调用这个函数的时候，把 this 绑定到这个新对象上。
// //上面这个函数和正常调用的函数写法上没什么区别，只不过在调用的时候函数名前面加了关键字 new罢了，这么一来，this 绑定的就不再是前面讲到的全局对象了，而是这里说的创建的新对象，所以说这种方式其实很危险，因为光看函数，你不会知道这个函数到底是准备拿来当构造函数用的，还是一般函数用的。


// //apply/call 调用：
// //上面的 3 种函数调用方式，你可以看到，this 都是自动绑定的
// console.log("call() 方法和 apply() 方法很类似，它们的存在都是为了改变 this 的绑定");
// function handlerAbc(app1, app2){
// 	console.log("this=%o" ,this)
// 	this.app1 = app1;
// 	this.app2 = app2;
// }
// var o = {};
// handlerAbc.apply(o, [5]);  //第一个参数是绑定给 this 的值，后面接受的是一个数组.
// handlerAbc.call(o,66,88);  //第一个参数也是绑定给 this 的值，但是后面接受的是不定参数，而不再是一个数组，也就是说你可以像平时给函数传参那样把这些参数一个一个传递。
// //是不是很神奇，函数 handlerAbc 居然可以给 o 加属性值。当然，如果你 apply 的第一个参数传递 null，那么在函数 handlerAbc 里面 this 指针依然会绑定全局对象。

// console.log(handlerAbc.app1 + " --- " + handlerAbc.app1);    // undefined
// console.log(o.app1 + " --- " + o.app2);    // 5


// console.log("上面讲的无论是 call() 也好， apply() 也好，都是立马就调用了对应的函数，而 bind() 不会");
// //再来说 bind() 函数，上面讲的无论是 call() 也好， apply() 也好，都是立马就调用了对应的函数，而 bind() 不会，
// //bind() 会生成一个新的函数，bind() 函数的参数跟 call() 一致，第一个参数也是绑定 this 的值，后面接受传递给函数的不定参数。
// //bind() 生成的新函数返回后，你想什么时候调就什么时候调，看下代码就明白了

// var m = {
//     "x" : 1
// };
// function foo(y) {
// 	console.log("y = " + y);
// 	console.log(this.x + y);
// 	console.log("this=%o" ,this);
// }
// foo.apply(m, [5]); //立即调用
// foo.call(m, 5);    //立即调用
// var foo1 = foo.bind(m, 7); //不是立即调用，想什么时候调就什么时候调, 当调用foo的时候，this就是m， 在foo函数内当然可以对m进行各种操作，比如说赋值。

// console.log("m.x = " + m.x);
// foo1();


// //=========================

// // 验证var 和 let
// // var newobj = {
// // 	name:"lllx",
// // 	action:function(){
// // 		console.log("this is action func");
// // 	}
// // }


// var newobj = function(name ,func){
// 	this.name = name,
// 	this.func = func
// }

// let name = "dsda";
// let	action= function(){
// 		console.log("this is action func");
// 	}


// var newobj = function(name, action) {
// 	return new newobj(app);
// };

// var newobj5 = newobj.prototype;  //一般我们不会起一样的名字

// newobj5.action1 = function(){
// 	console.log("this is action1");
// }

// newobj.prototype.action1();

// // let exp = newobj.prototype;

// // exp.action1 = function(){
// // 	console.log("this is action1");
// // }

// // newobj.prototype.action1();
// // //newobj.action1();