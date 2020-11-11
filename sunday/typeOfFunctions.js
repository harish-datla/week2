//Print ODD numbers using Normal JavaScript Function
function printOddNumbers(arr){
	let out = arr.filter(n => n%2===1);
	return out;
}
console.log("Normal Function ==> "+printOddNumbers([0,1,2,3,4,5,6,7,8,9,10]));


//Print ODD numbers using Anonymous function
var printOddNumbers = function (arr){
    let out = arr.filter(n => n%2===1);
    return out;
}
console.log("Anonymous Function ==> "+printOddNumbers([0,1,2,3,4,5,6,7,8,9,10]));


//Print ODD numbers using IIFE(Immediate Invoked Function Expression
var output = (function(arr){
	let out = arr.filter(n => n%2===1);
	return out;
})([0,1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE Function ==> "+output);


//Print ODD numbers using Arrow Function
var arr = [0,1,2,3,4,5,6,7,8,9,10];
(() => {
	var out = arr.filter(n => n%2===1); 
	console.log("Arrow Function ==> "+ out);
})();


console.log();

//Convert all strings to titleCase using Normal JavaScript Function
function titleCase(stringArray) {

    for(var i = 0; i< stringArray.length; i++){
        stringArray[i] = stringArray[i].toLowerCase();
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    }
 return stringArray;
 }
console.log("Normal Function ==> "+titleCase(["cat","mouse","dog"]));



//Convert all strings to titleCase using Anonymous function
var titleCase = function (stringArray){
    for(var i = 0; i< stringArray.length; i++){
        stringArray[i] = stringArray[i].toLowerCase();
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    }
 return stringArray;
}
console.log("Anonymous Function ==> "+titleCase(["cat","mouse","dog"]));



//Convert all strings to titleCase using IIFE(Immediate Invoked Function Expression
var output = (function(stringArray){
	for(var i = 0; i< stringArray.length; i++){
        stringArray[i] = stringArray[i].toLowerCase();
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    }
 return stringArray;
})(["cat","Mouse", "Dog"]);
console.log("IIFE Function ==> "+output);



//Convert all strings to titleCase using Arrow Function
var stringArray =["cat","Mouse", "doG"];
(() => {
	for(var i = 0; i< stringArray.length; i++){
        stringArray[i] = stringArray[i].toLowerCase();
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    }
	console.log("Arrow Function ==> "+ stringArray);
})();

console.log();

//Print Sum of Array using Normal JavaScript Function
function sumOfArray(arr){
	let out = arr.reduce((a, b) => a + b, 0);
	return out;
}
console.log("Normal Function ==> "+sumOfArray([0,1,2,3,4,5,6,7,8,9,10]));


//Print Sum of Array using Anonymous function
var sumOfArray = function (arr){
    let out = arr.reduce((a, b) => a + b, 0);
    return out;
}
console.log("Anonymous Function ==> "+sumOfArray([0,1,2,3,4,5,6,7,8,9,10]));


//Print Sum of Array using IIFE(Immediate Invoked Function Expression
var output = (function(arr){
	let out = arr.reduce((a, b) => a + b, 0)
	return out;
})([0,1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE Function ==> "+output);


//Print Sum of Array using Arrow Function
var arr = [0,1,2,3,4,5,6,7,8,9,10];
(() => {
	var out = arr.reduce((a, b) => a + b, 0)
	console.log("Arrow Function ==> "+ out);
})();

console.log();

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]


//Print Primes in an array using Normal JavaScript Function
function returnPrimes(numArray){
	let out = numArray.filter((number) => {
        if(number == 0 || number == 1)return false;
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
	return out;
}
console.log("Normal Function ==> "+returnPrimes([0,1,2,3,4,5,6,7,8,9,10]));


//Print Primes in an array using Anonymous function
var returnPrimes = function (numArray){
    let out = numArray.filter((number) => {
        if(number == 0 || number == 1)return false;
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
	return out;
}
console.log("Anonymous Function ==> "+returnPrimes([0,1,2,3,4,5,6,7,8,9,10]));


//Print Primes in an array using IIFE(Immediate Invoked Function Expression
var output = (function(numArray){
	let out = numArray.filter((number) => {
        if(number == 0 || number == 1)return false;
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
	return out;
})([0,1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE Function ==> "+output);


//Print Primes in an array using Arrow Function
var numArray = [0,1,2,3,4,5,6,7,8,9,10];
(() => {
	let out = numArray.filter((number) => {
        if(number == 0 || number == 1)return false;
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
	console.log("Arrow Function ==> "+ out);
})();
console.log();
function isPalindrome(string){
    let str = String(string);
    let i = 0;
    let j = str.length - 1;
    while(i < j) {
       if(str[i] === str[j]) {
          i++;
          j--;
       }
       else {
          return false;
       }
    }
    return true;
 };
 
    

//Print Palindromes using Normal JavaScript Function
function filterPalindromes(arr){
	let out =  arr.filter(el => isPalindrome(el));
	return out;
}
console.log("Normal Function ==> "+filterPalindromes(['carecar', 1344, 12321, 'did', 'cannot']));


//Print Palindromes using Anonymous function
var filterPalindromes = function (arr){
    let out = arr.filter(el => isPalindrome(el));
    return out;
}
console.log("Anonymous Function ==> "+filterPalindromes(['carecar', 1344, 12321, 'did', 'cannot']));


//Print Palindromes using IIFE(Immediate Invoked Function Expression
var output = (function(arr){
	let out = arr.filter(el => isPalindrome(el));
	return out;
})(['carecar', 1344, 12321, 'did', 'cannot']);
console.log("IIFE Function ==> "+output);


//Print Palindromes using Arrow Function
var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
(() => {
	var out = arr.filter(el => isPalindrome(el));
	console.log("Arrow Function ==> "+ out);
})();

console.log();

function getMedian( a, b) 
{ 
    let n = a.length;
    let i = 0; 
    let j = 0;
    let median1 = -1;
    let median2 = -1; 
    for(var count = 0; count <= n; count++) 
    { 
        if (i == n) { 
            median1 = median2; 
            median2 = b[0]; 
            break; 
        } 
        else if(j == n){ 
            median1 = median2; 
            median2 = a[0]; 
            break; 
        } 
        if (a[i] <= b[j]){ 
            median1 = median2;  
            median2 = a[i]; 
            i++; 
        } 
        else{ 
            median1 = median2;  
            median2 = b[j]; 
            j++; 
        } 
    } 
  
    return (median1 + median2)/2; 
} 


  //Print median using Normal JavaScript Function
function getMedianEqualSize(a,b){
	let out = getMedian(a,b);
	return out;
}
console.log("Normal Function ==> "+getMedianEqualSize([0,1,2,3,4],[0,2,3,5,9]));


//Print median using Anonymous function
var getMedianEqualSize = function (a,b){
    let out = getMedian(a,b);
    return out;
}
console.log("Anonymous Function ==> "+getMedianEqualSize([0,1,2,3,4],[0,2,3,5,9]));


//Print median using IIFE(Immediate Invoked Function Expression
var output = (function(a,b){
	let out = getMedian(a,b);
	return out;
})([0,1,2,3,4],[0,2,3,5,9]);
console.log("IIFE Function ==> "+output);


//Print median using Arrow Function
var a = [0,2,3,5,9];
var b = [0,1,2,3,4];
(() => {
	var out = getMedian(a,b);
	console.log("Arrow Function ==> "+ out);
})();
console.log();
//Print unique elements Normal JavaScript Function
function uniqueElements(arr){
	let unique = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    return unique;
}
console.log("Normal Function ==> "+uniqueElements([0,1,2,3,3,4,5,6,7,8,9,10,10]));


//Print unique elements using Anonymous function
var uniqueElements = function (arr){
    let unique = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    return unique;
}
console.log("Anonymous Function ==> "+uniqueElements([0,1,2,3,3,4,5,6,7,8,9,10],10));


//Print unique elements using IIFE(Immediate Invoked Function Expression
var output = (function(arr){
	let unique = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
    return unique;
})([0,1,2,3,3,4,5,6,7,8,9,10,10]);
console.log("IIFE Function ==> "+output);


//Print unique elements using Arrow Function
var arr = [0,1,2,3,3,4,5,6,7,8,9,10,10];
(() => {
	let unique = arr.filter((c, index) => {
        return arr.indexOf(c) === index;
    });
	console.log("Arrow Function ==> "+ unique);
})();


console.log();

//Print rotated array Normal JavaScript Function
function rotateArray(arr,k){
	for (var i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
    return arr;
}
console.log("Normal Function ==> "+rotateArray([0,1,2,3,4,5,6,7,8,9,10],3));


//Print rotated array using Anonymous function
var rotateArray = function (arr,k){
    for (var i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
    return arr;
}
console.log("Anonymous Function ==> "+rotateArray([0,1,2,3,4,5,6,7,8,9,10],3));


//Print rotated array using IIFE(Immediate Invoked Function Expression
var output = (function(arr,k){
	for (var i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
    return arr;
})([0,1,2,3,4,5,6,7,8,9,10],3);
console.log("IIFE Function ==> "+output);


//Print rotated array using Arrow Function
var arr = [0,1,2,3,4,5,6,7,8,9,10];
var k = 3;
(() => {
	for (var i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
	console.log("Arrow Function ==> "+ arr);
})();