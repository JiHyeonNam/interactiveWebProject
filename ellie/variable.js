// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict'

// 2. Variable, rw(read write)
// let (added in ES6)
let globalName = 'global name';
{
	let name = 'ellie';
	console.log(name);
	name = 'hello';
	console.log(name);
	console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting(move declaration from bottom to top)
// has no block scope
{
	age = 4;
	var age;
}
console.log(age);

// 3. Contants, r(read only)
// use const whenever possible
// only use let if variabale needs to change
const daysInWeek = 7;
const maxNumber = 5;

//  Note!
//  Immutable data types : primitive types, frozen object(i.e. object.freeze())
// 	Mutable data types : all objects by default are mutable in JS
// 	favor immutable data type always for a few reasons:
// 	- security
// 	- thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

// number - speicla numeric values : infinity, -infinity
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//  bigInt ( fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type : ${typeof bigInt}`);
