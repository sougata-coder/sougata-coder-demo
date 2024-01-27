let scope="33abc"
let a=null
let b=undefined
console.log(typeof scope);// type is string
console.log(typeof(scope)); // type is string

let valueInNumber=Number(scope)
console.log(typeof valueInNumber); // type is number
console.log(typeof valueInNumber)
console.log(scope)

let valueNumber=Number(a)
console.log(valueNumber);  //null is 0

let value=Number(b)
console.log(value) // value is NaN means not a number

//"33"=> 33
//"33abh"=>NaN
// true=>1 false=>0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true
// 1=> true 0=>false
//""=>false
//"sangi"=>true


let number=88
let stringNumber=String(number)
console.log(stringNumber);// number is 88
console.log(typeof stringNumber);// string type 