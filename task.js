/*
Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300
*/
var money=1000;
var orangePrice=350;
var applePrice=350;
var total=(orangePrice+applePrice);
var sub=(money-total);
console.log(sub)
 
/*
Task-02
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/
var math=75.25;
var biology=65;
var chemistry=80;
var physics=35.45;
var bangla=99.50;
var total=(75.25+65+80+35.45+99.50);
console.log((total/5).toFixed(2))

/*
Task-3
You task is to divide the given number by 5 and show the remainder as the output.

Input:
The first line of the input contains the number.

Output:
Print the remainder.

Sample Input:
119

Sample Output:
5
*/ 
var num=119;
console.log(119%5)
// task-4 
