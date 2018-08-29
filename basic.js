//'use strict'; //使用严格模式
//javascript是区分大小写的

/**
 * 最新的ECMAScript标准有7种数据类型
     基础类型：
	   1. bool类型 true、false
	   2. null类型，因为javascript区分大小写，所以null与NULL或Null不相等
	   3. undefined 没有值的变量
	   4. Number 数字类型，整型或浮点型
	   5. 字符串类型，如"hello"
       6. Symbol类型，其实例具有不可变性与唯一性
	 Object类型
*/

var name; //声明一个未赋值的变量，默认值为undefined

name = 'joy'; //赋值，变量类型自动变为string

age = 20; //在函数外声明一个不带var关键字的变量并初始化其值，为全局变量，在严格模式下会产生警告信息,尽量不要使用这种方式声明变量

let sex = 'male'; //let关键字用来声明一个变量，此变量的作用域只存在于在它所声明的位置

console.log(name);
console.log(age);
console.log(sex);

var a; //声明变量，默认值为undefined
console.log('the value of a is: ' + a);

console.log('the value of b is: ' + b);
var b; //先使用，后声明，会将变量“提升”到使用语句的前面

console.log('the value of c is: ' + c);
var c = 'hello'; //先使用，后声明，变量“提升”之后的值为undefined
console.log("after `hoist`, the value of c is: " + c); //c = hello

//console.log('the value of d is: ' + d); //使用一个未定义的变量会报错

let e; //默认值为undefined
console.log('the value of e is: ' + e);  

//console.log('the value of f is:' + f); //报错，因为let变量不可以"提升",相当于使用了未定义的变量
let f; 

var g; //undefined在进行数学运算时为NaN, bool运算为false
console.log('the value of g is: ' + (g + 1));
console.log('the value of g is: ' + (!g));

var h = null; //null值在数学运算中转换为0, bool运算为false
console.log('the value of h is: ' + (h + 1));
console.log('the value of h is: ' + (!h));

if (true) { //ECMAScript 2015之前是没有语句块作用域的概念的，此处定义的变量i是全局变量
    var i = 8;
}
console.log('the value of i is: ' + i);

if (true) { //从ECMAScript 2015开始引入语句块作用，在大概号定义的变量只能在大概括号中使用
    let j = 8;
}
//console.log('the value of j is: ' + j); //报错，j未定义

//对声明类型的函数可以`提升`，表达式类型的函数不能`提升`:
f1(); // result: function f1
function f1() { console.log('function f1'); }

//f2(); //报错，因为表达式类型的函数无法`提升`
var f2 = function() { console.log('function f2'); }

//全局变量其实是全局对象的一个属性, 在网页中，window就是全局对象:
console.log('the value of name is: ' + window.name);

//通过`const`关键字定义一个只读常量
const PI = 3.14;
console.log('the value of PI is:' + PI);

//在同一个作用域下，常量名不能与变量名或函数名重名
function f3() {};
//const f3 = 5;  //因为与函数同名，报错
//const name = 6; //因为与变量同名，报错

//声明一个值为对象或数组的常量是不会对其值进行保护的:
const k = {'key': 'value'};
k.key = 'value2';
console.log('the value of k.key is: ' + k.key); // result: value2

const l = ['a', 'b'];
l[0] = 1;
l.push('c');
console.log('the 1th element value is: ' + l[0]); // result: 1
console.log('the 3th element value is: ' + l[2]); // result: c

//数字与字符串相加时，数字将转换成字符串:
console.log('1' + 1); // 11
console.log('hello ' + 2); // hello 2

//数字与字符串相减则所有不同:
console.log('3' - 2); // 字符串1转换成数字1，结果为0
console.log('hello ' - 2); //hello无法转换成数字，非数字进行数学计算，结果为NaN

var a1 = parseInt('1'); //1
var a2 = parseInt('2hello'); //2
var a3 = parseInt('3 hello'); //3
var a4 = parseInt('hello 4'); //NaN
var a5 = parseInt('hello5world'); //NaN
console.log('the value of a1 is: ' + (a1+2)); // 3
console.log('the value of a2 is: ' + a2);
console.log('the value of a3 is: ' + a3);
console.log('the value of a4 is: ' + a4);
console.log('the value of a5 is: ' + a5);

//数组字面量，缺省元素值为undefined, 数组字面量也属于Array Object
var a6 = ['French Roast', 'Colombian', 'Kona'];
for (var item in a6) {
    console.log(a6[item]);
}

//缺省值为undefined, 长度为3，a7[1]==undefined
var a7 = ['a', , 'c'];
console.log('a7 length: ' + a7.length);
console.log('the value of a7[1] is: ' + a7[1]); //undefined

//逗号在最后一个元素的尾部，突略不计:
var a8 = ['a', 'b', 'c',]; //长度为3
console.log('a8 length: ' + a8.length);

//逗号在第一个元素前面也算一个元素，默认值为undefined
var a9 = [, 'b', 'c'];
console.log('a9 length: ' + a9.length); // 3
console.log('the value of a9[0] is: ' + a9[0]); // undefined

//最后一个元素尾部有2个逗号:
var a10 = ['a', 'b',,] //长度为3
console.log('a10 length: ' + a10.length); // 3
console.log('the value of a10[2] is: ' + a10[2]); //undefined
console.log('the value of a10[5] is: ' + a10[5]); //越界访问数组元素，默认值为undefined

//数字字面量
//整数可以用以下进制来表示：十进制，十六进制，八进制
//十进制的数可以通过非前导0的数字组成: 123, 4525432
//八进的数由前导0、0o、0O开头
//十六进制由前导0x、0X开头
//二进制由0b、0B开头

//对象字面量(object interal),由0个或多个属性、属性值对组成，用{}号包起来
//如果属性名不是`identifier`规范或者数字类型，属性名称必须使用引号包括起来,并且只能通过“[]”号访问
var sales = 'Toyota';
function carTypes(name) {
    if (name == 'Honda') {
	    return name;
	} else {
	    return "Sorry, we don't sell " + name + ".";
	}
}
var oName = 'name';
var car = { 
	myCar: 'Saturn',
	getCard: carTypes('Honda'),
	special: sales,
	oName: 'haha',
	personal: {name: 'joy', 2: 'number', 'age': 20}, //嵌套对象
};
car[oName] = 'hello';

console.log(car.myCar); //Saturn
console.log(car.getCard); //Honda
console.log(car.special); //Toyota
console.log(car.oName); //haha
console.log(car[oName]); //hello
console.log(car.personal.name); //joy
console.log(car.personal[2]); //读取属性为数字的key, 结果：number
console.log(car.personal.age);//

//正则表达式字面量
var re = /ab+c/;

//字符串字面量: 用双引号或单引号括起来的0个或多个字符:
var a1 = 'a1';
var a2 = "a2";
var a3 = "a1 a2 a3";
var a4 = "";

//可以对字符串字面量使用String object中的任何方法，在使用其方法时，会将字符串字面量临时转换成String object
//类型，使用完这些方法之后，会丢弃临时的String object
console.log('variable a3 length is: ' + a3.length); //8, 包含了空格符

//ES2015开始支持``号模板字符串，用以在字符串中插入变量
var name = 'joy';
var a5 = `hello ${name}`;
console.log(a5);

//支持多行
var a6 = `
    hello
	world
`;
console.log(a6);

/* 单引号或双引号不支持下面形式的换行,但上面的能做到
var a7 = " 
    hello
	world
";
console.log(a7);
*/

/* 下面的值为false
 * 1. false
 * 2. undefined
 * 3. null
 * 4. 0
 * 5. NaN
 * 6. ""
 */

//条件控制语句
if (true) {
    console.log('true');
} else if (false) {
    console.log('false');
} else {
    console.log('default');
}

var name = 'helo';
switch(name) {
    case 'helo':
		console.log('helo');
		break;
	case 'nice':
		console.log('nick');
		break;
	default:
		console.log('switch default');
}

//抛出异常与捕获异常:
function UserException (message) {
    this.message = message;
	this.name = "UserException";
}

//此处抛出异常，且没有对异常进行捕获，所以程序不会往下执行
//throw new UserException("Value too high");

try {
    throw "myException";
} catch (e) {
    console.log("myException");
}

//finally块中的语句无论发生什么错误都会执行
try {
    throw "myException";
} catch (e) {
    console.log("finally test");
} finally {
    console.log('finally execueted');
}

//函数的作用域，在全局中定义的函数可以访问全局变量，在函数中定义的函数只能访问父函数中的变量
//只能由内向外访问，不能由外向内访问:
var a1 = 'global';
var a2 = 'global2';
function f1() {
    console.log('global a1 value: ' + a1); //读取全局变量，结果：global

	var a2 = 'outter';
	console.log('outer a1 value: ' + a2); //读取函数内部变量a2, 结果：outter
	
	function f2() {
		var inner = 'inner';
	    console.log('global a1 value: ' + a1); //读取全局变量a1的值，结果：global
	}
	f2();
	//console.log('inner inner value: ' + inner); //不能访问f2()中的inner变量，报使用了未定义的变量错误
}
f1();

//函数递归:
function loop(x) {
    if (x<1) {
	    return;
	}
	console.log(x-1);
	loop(x-1);
}
loop(10);

//闭包
function outside(x) {
    function inside(y) {
	    return x + y;
	}
	return inside;
}
var inside = outside(3);
var result = inside(5); 
console.log('inside function return value is: ' + result);
console.log('inside function return value is: ' + outside(3)(5));

//声明一个生成器函数:
function* generator(i) {
    yield i;
	yield i + 10;
	yield i + 10;
}
var gen = generator(10);
console.log(gen.next().value); //读取第一个yield语句产生的值
console.log(gen.next().value); //读取第二个yield语句产生的值
console.log(gen.next().value); //第三个


function f4() {
	'use strict';
    return this;
}

if (window.f4() == window) {console.log('returned value of f4() equal window object')}




