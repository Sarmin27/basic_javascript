var orangePrice=100;
console.log(orangePrice)
var applePrice='200';
var bananaPrice=600;
console.log(applePrice)
console.log(typeof applePrice)
console.log(orangePrice + applePrice)
console.log(orangePrice + bananaPrice)

// converts a string to an integer 
var tomatoPrice=parseInt('200');
console.log( typeof tomatoPrice)
var tomatoPrice=parseInt('jhqsqhkjs;sqsjhq;s'); //NaN=not a number
console.log( tomatoPrice)
var price=parseInt('22.2');
console.log(price)
//converts a string to a Float 
var price=parseFloat('22.2');
console.log(price)

var first=0.1;
var second=0.2;
console.log(first+second) //ans:0.30000000000000004
// this problem solve 
var first=0.1;
var second=0.2;
var total=first+second;
console.log(total.toFixed(5)) //tofixed er problem hocche eta number k string e convert kore dei.
const num1 = 50 / 0;
console.log(num) //ans:infinity
const number =-60/0;
console.log(number) //ans:-infinity

// --------/converts a string to a number
var x='10';
var num=Number(x)
console.log(num)




