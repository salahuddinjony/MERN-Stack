
//Object
const person={
    Name: "salah",
    Age: "25",
    wight: "25",
    color:"Brown",
    Aim:"---",
    current_status:"Developer",
    start: function(){
        this.future();
    },
    future : function(){
        let abrod="USA"; 
        let salary =1000;
        console.log("Hello, Salah!");
    }
};

console.log(person.future());

console.log(person.start());
console.log(person.Name); 
console.log(person['Age']);

delete person.salary; //delete the object
console.log(person.salary);

//HTML Event
function displayDate(){
    alert(document.getElementById('demo').innerHTML=Date());
  
}


//String

let text="Hi there , \"How are you\" ?";
let texty="Hi there , \"How are you\" ?";
console.log(text.length);
console.log(texty);


/*
How to Define a JavaScript Object
Using an Object Literal
Using the new Keyword
Using an Object Constructor
*/


let x="John";
let y=new String("John"); //become an object

console.log(x==y);
console.log(x===y);


//String method
let zorina="I love zorina";
let sokina=zorina.replace("zorina","sokina");
console.log(sokina);  
console.log(sokina.toUpperCase());
console.log(zorina.split(" "));  //its create an array
console.log(zorina.split(""));  //its create an array with single character


//String Search

console.log(zorina.search("love"));//powerfull than indexOf
console.log(zorina.indexOf("zorina"));
console.log(zorina.includes("zorina",12));//return true


//Template Strings use back-ticks (``) 
let a=`It's my life`;
let aa=`It's my life with ${sokina}`;//Interpolation

console.log(a);
console.log(aa);


let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}
console.log(html);
 

//Numbers

let number=32.123;//number
let Num=new Number(123);//object
console.log(number.toString(2));//conver it to binary
console.log(number.toString(8));//conver it to octal
console.log(number.toString(16));//conver it to hexa

let NumA=number.toString();//it's convert to number to string
console.log(typeof NumA); 
console.log((100+223).toString());//its a string data type
console.log(number.toExponential(2));
console.log(number.toFixed(1));//print after decimal
console.log(number.toPrecision(1));//print total length
console.log(Number("10")); //return a number
console.log(Number("10 3")); //return Not a number
console.log(parseInt("10.3"));//return integer number
console.log(parseInt("20 30"));//return integer number of 1st

// Number Properties
let mx = Number.MAX_VALUE;  
let mn = Number.MIN_VALUE;  
console.log(mx,mn);

//Array 

const arr = ["salah", "Rakin", "sakin", "Sabit", "Arosh"];
console.log("The size is:", arr.length);  // Output: The size is: 5
//document.getElementById("demo").innerHTML=arr;//print whole array

arr.push("Mostafa");
 for(i=0;i<arr.length; i++){
    console.log(arr[i]);
}


console.log("\n");
 
//forEach 
const fruits = ["Orange", "Banana", "Apple", "Mango", "Painapple"];
fruits.pop();
function myFunc(value){
    console.log(value)
}


fruits.forEach(myFunc); //for each

fruits.unshift("Lemon");//its add front but push add from backend
console.log(Array.isArray(fruits));
delete fruits[0];
fruits.splice(2,2,"Lichy", "Coconut"); //add 2 elements and remove 1
fruits.splice(0,1);//remove 1 elements

 
//Array Method
   
console.log(fruits.toString()); //convert array to string using toString()
console.log(fruits.join(" * "));   

const totalArray=arr.concat(fruits);
console.log(totalArray);

//Array sorting
const fruitList= ["Painapple", "Banana", "Apple", "Mango", "Orange"];

fruitList.sort();
// fruitList.reverse();
// document.getElementById("demo").innerHTML=fruitList;

const numList=[10,1,4,11,20,0];

//Sort the number in JS
numList.sort(function(a,b){ 
    return a-b; //it's for assending,if want to decending then return b-a
});
// document.getElementById("demo").innerHTML=numList;
 
//Create max value
function myMax(arr){
    return Math.max.apply(nul,arr);
}
 

//-------------Array Iterations-----------

const numberList=[2,1,3,0];

let sum=0;

//forEach
function myFunction(value, index, array){
    value*=2;
    console.log(value);
    console.log(index);
    // console.log(array);
    console.log("---------");
}
numberList.forEach(myFunction);




//Map
function myFunctionMap(value,index,array){
    return value * 3;
   
}
const num=numberList.map(myFunctionMap);
console.log("The map is:", num);



//filter
function myFunctionFilter(value,index, array){
    
    return value > 1; //its return only greater than 10 and generate new array
}
const numFilter=numberList.filter(myFunctionFilter);
 
console.log("The filter is:", numFilter);


//reduce

function myFunctionReduce(total , value, index, array){
    return total+value;
}

const numReduce=numberList.reduce(myFunctionReduce,10); //(here initial value is 10)----reduce retun ta previous sum of value and then its finally store the total value of the array 
//const numReduce=numberList.reduceRight(myFunctionReduce,10);
console.log("The total sum is: ",numReduce);


//every

function myFunctionEvery(value, index, array){
    return value > 2;
}

const numEvery=numberList.every(myFunctionEvery);//its check every value array is greater than 2 if ture then return true otherwise false
console.log(numEvery); 


//some

function myFunctionSome(value, index, array){
    return value > 2;
}
const numSome=numberList.some(myFunctionSome);//its check one of value array is greater than 2 if ture then return true otherwise false
console.log(numSome); 


//indexOf

const position=numberList.indexOf(0);
const positionLast=numberList.lastIndexOf(0);
console.log(position,"\n",positionLast);


//find

function myFunctionFind(value, index, array){
    return value > 2;
}
const numFind=numberList.find(myFunctionFind);
console.log(numFind); 



//findIndex

function myFunctionFindIndex(value, index, array){
    return value > 2;
}
const numFindIndex=numberList.findIndex(myFunctionFindIndex);
console.log(numFindIndex); 


//Date

const dd=new Date();
//document.getElementById("demoTime").innerHTML=dd;
//document.getElementById("demoTime").innerHTML=dd.toDateString();//same as
//document.getElementById("demoTime").innerHTML=dd.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];
//document.getElementById("demoTime").innerHTML=month;

//Set Date
const today=new Date();
const someday=new Date();

someday.setFullYear(2022,11,20);

console.log(today);
console.log(someday);
 
if(someday > today){
    console.log("Someday is greater than today");
}else{
    console.log("Today is greater than someday");
}


//Math
const v=36.5;
console.log(Math.PI);
console.log(Math.sqrt(v));


Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


console.log(Math.round(v));

const c=4.4;
console.log(Math.round(c));
console.log(Math.ceil(c));
console.log(Math.floor(c));
console.log(Math.trunc(c));
console.log(Math.sign(c));
console.log(Math.pow(2,2));
console.log(Math.abs(-2));
console.log(Math.sin(90*Math.PI/180));
console.log(Math.random());
console.log(Math.log(1));


//Ludo number generates
function Ludo(Mn,Mx){

    return Math.floor(Math.random()*(Mx-Mn+1))+Mn;
}
console.log(Ludo(1,6));

//Leap year find
function isleapYear(year){

    if(year % 400 ===0 || (year % 4===0 && year % 100 !=0 )){
        console.log(`${year} is a leap year!`);
    }else{
        console.log(`${year} is not a leap year!`);
    }
}
isleapYear(2026);


//vowels find
const vowels=["a", "e", "i", "o", "u", "A", "E","I","O","U"];

function coutsVowels(sentence){
    let count=0;
    const letter=Array.from(sentence);//conver to array
    letter.forEach(function (value,index,array){

        if(vowels.includes(value)){
            count++;
        }

    });
    return count;
}
console.log(coutsVowels("I love Bangladesh"));



//Duplicates value return

const NUmber=[1,2,3,3,1,5,5];

const duplicatesNum=NUmber.filter(function(value,index,array){

    return array.indexOf(value) !=index;

});

console.log(duplicatesNum);

//Find distincts value return

const dupNum=[1,2,3,3,1,5,5];

const distinctsNum=dupNum.filter(function(value,index,array){

    return array.indexOf(value) ===index;

});
console.log(distinctsNum);







//For loop , for in loop , forEach loop , for of loop------



//forEach loop use for functions

//for in loop[try to use for object, work with index]
const Per={Fname: "Salah", Age:23, Phone:111};
const ANum=[0,1,2,3];

for (let x in Per){
    console.log(Per[x]);
}
/* for (let x in ANum){
    console.log(ANum[x]);
} */

//for of loop [use Array]  
 for(let x of ANum){
    console.log(x);
 }

//JavaScript While Loop

let I=0;
let Tx="";
while(I<10){
    // Tx+="The Number is :"+I+"\n";
    Tx="The Number is :"+I+"\n";
    console.log(Tx);
    I++;
}
// do while loop

let txt=" ";
let L=0;

do {
    //txt +="The number is " + L+"\n";
    console.log(L);
    L++;
  }
  while (L < 10);  





  //------Js Set-----



// Create a Set----->Sets are Objects

//const letters = new Set(["a","b","c"]);

// Create a Set
const letters = new Set(); //The set has 3 values.

// Add Values to the Set
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

//JS Set Methods

// Does the Set contain "d"?
answer = letters.has("d"); 
console.log("Find the match value: ",answer);

//Get all Values
const myIterator = letters.values();
for (const entry of myIterator) {
    text += entry;
  }

 // Create an Iterator
/* const myIterator = letters.keys(); 
// List all Elements
let text = "";
for (const x of myIterator) {
  text += x + "<br>";
} */









  //JS Map--->Maps are Objects


  //You can create a Map by passing an Array to the new Map() constructor:



// Create a Map
const fruit = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Create a Map



const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);
 
fruits1.get("apples");    // Returns 500

//The size property returns the number of elements in a map:
fruits1.size;
//Delete values
fruits1.delete("apples");
fruits1.clear(); //The clear() method removes all the elements from a map:



//The has() method returns true if a key exists in a map:
fruits1.has("apples");


// List all entries
let tex = "";
fruits1.forEach (function(value, key) {
  tex += key + ' = ' + value; //apples = 500
})


//The entries() method returns an iterator object with the [key,values] in a map:
// List all entries
let text11 = "";
for (const x of fruits.entries()) {
  text11 += x; //apples,500
}


//Map.keys()
//The keys() method returns an iterator object with the keys in a map:

// List all keys
let text111 = "";
for (const x of fruits.keys()) {
  text111 += x;
}


// Map.values()
// The values() method returns an iterator object with the values in a map:
// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}











  //------------Regular Expression-----------
/* 
let tex = "W3school is very powerful for programming , W3school";

const Tex = tex.replace(/W3school/ig, "Microsoft");
console.log(Tex);


let NUmb = 12334445;
let re = NUmb.toString().match(/[0-3]/g); // Convert number to string first
console.log(re);
*/


//----------*********Error Handling**********-------------


/* 
try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
  } 
*/

//Throw
/*
  function myFuncionErr(){
    const message=document.getElementById("p01");
    message.innerHTML="";
    let x=document.getElementById("demoinput").value;
    try{
        if(x=="") throw "empty";
        if(isNaN(x)) throw "Not a number";
        x=Number(x);
        if(x<5) throw "Too low";
        if(x>10) throw "Too high";
        throw "perfect!";
    }catch(err){
        message.innerHTML="Input is " + err;
    }finally {
        document.getElementById("demoinput").value = "";
      }
  }

*/


  //Js Scope


  // code here can NOT use carName
/*
function myF() {
    let carName = "Volvo";
    // code here CAN use carName
  }

 */
  
  // code here can NOT use carName





//JavaScript Hoisting

g = 5; // Assign 5 to g

console.log(g);
var g; // Declare g




//JavaScript Strict mode


/* 

"use strict";  //The "use strict" Directive
z = 3.14;// This will cause an error because x is not declared


"use strict";
myFunction();
function myFunction1() {
  y = 3.14;   // This will also cause an error because y is not declared
}



x = 3.14;       // This will not cause an error.
myFunction();
function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

*/





//JavaScript "this" Keyword


const SALAH = {
    firstName: "Salah",
    lastName : "Uddin",
    id       : 204113,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(SALAH.fullName());

//Explicit Function Binding
//The call() and apply() methods are predefined JavaScript methods.

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
console.log(person1.fullName.call(person2));//here said 'this' will be person2





/* 
//JS Arrow Functions



//Before arraw
let hello = function() {
    return "Hello World1!";
  }

//After arrow
const Hello=()=>{
    return "Hello World2";
}
const hello1 = () => "Hello World3!";// If the function has only one statement
hello = (val) => "Hello " + val;//Arrow Function With Parameters
  console.log(hello());
  console.log(hello1());


//"this" keyword for arrow functions

// Regular Function:
hello = function() {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);  //when load then "this" is window
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello); //when click button then "this" is button window
  //But for arrow its bind the window not change to button its the different
  
*/






  //--------JS class--------

  class Person {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    // Method with parameter
    play(status) { 
       return `${this.name} is playing ${status}`;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const Person1 = new Person("Salah", 2000); // Create an object using the class
const Person2 = new Person("Jony", 1998);

console.log(`${Person1.play("well")} and he is ${Person1.age()} years old!`);
console.log(`${Person2.play("not bad")} and he is ${Person2.age()} years old!`);






// JS Module




// Modules are imported from external files with the import statement.
// Modules also rely on type="module" in the <script> tag.

/*
<script type="module">
import message from "./message.js";
</script>
*/







// JS JSON----[JSON for JavaScript Object Notations]





// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

//its write A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

/*
//JSON Objects
{"firstName":"John", "lastName":"Doe"}

//JSON Arrays
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
*/

//Converting a JSON Text to a JavaScript Object use JSON.perse()
let text1= '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj=JSON.parse(text1);//convert the string into a JavaScript object:
console.log(obj);

console.log(obj.employees[0].firstName);
console.log(obj.employees[1].lastName);


//Converting a JavaScript object to a JSON Text  use JSON.stringify()
const Myself={
    Name: "SALAH",
    Age: 35,
    ID:20000
};
let text2=JSON.stringify(Myself); //convert into a JavaScript object to the JSON:
console.log(text2);







//----------JS Problem solving-------------




//find out number of salah and find the 1st occurance index of salah
const Sentence="Salah, your dedication and innovative mindset are truly inspiring. It’s incredible to see how Salah approaches every challenge with such determination. Whether it’s crafting solutions for IoT projects or contributing to the DUET Photographic Society, Salah always leaves a mark of excellence. Salah’s vision for using technology to improve lives and tackle real-world problems is a testament to his passion for making a difference ";
let matches=Sentence.match(/salah/ig); //Regular expressions, here i for inintensity of letter and g for global thats mean for all text of sentence

let matchesNumber=matches ? matches.length : "Not found!";
console.log(matchesNumber);

let occurance=Sentence.search(/salah/i);
console.log(occurance>=0 ? "The find index is: "+occurance : "Haven't any occurance!");


//search a element from an array

function linerSearch(arr,val){
  const lenght=arr.length;
  for(let i=0; i<lenght; i++){
    if(arr[i]==val) return i; 
  }
  return "Not found!";
}

console.log('The status is:',linerSearch(['a','b','c','d'],'z'));


//find max strisng and its index;

function lognestString(names){ //iterataor "for of" loop
  let lognestWord='';
  for(let name of names){
    if(name.length >lognestWord.length){
      lognestWord=name;
    }
  }
  return [lognestWord, names.indexOf(lognestWord)];
}

console.log(lognestString(['salah uddin', 'salah uddin jony', 'salah'] ));


//find a 1-100 number which is 3, 5 or both divisible
function fizzBuzz(number){
  for(let i =1;i<=number; i++){
    if(i%15==0){
      console.log(`${i} is fizzbuzz!`);
    }else if (i%3==0){
      console.log(`${i} is fizz!`);
    }else if (i%5==0){
      console.log(`${i} is buzz`);
    }else{
      console.log(`${i} none one!`);
    }
  }
}
fizzBuzz(10);


//filter a number from array is it number or not
const mixArray=[
  "la",
  undefined,
  "learn with salah",
  false,
  40,
  "k",
  true,
  "thanks all",
  NaN
];

/* let tureAraay=mixArray.filter(function(el){
  if(el) return true;
  else return false;
}); */

// Also can use boolean functions
let tureAraay=mixArray.filter(Boolean);
console.log(tureAraay);



//delete falsy value from object
const mixObj = {
  a: "la",
  b: undefined,
  c: "learn with salah",
  d: false,
  e: 40,
  f: "k",
  g: true,
  h: "thanks all",
  i: NaN
};

const trueObj = function (mixObj) {
  for (let i in mixObj) {
    if (!mixObj[i] && mixObj[i] !== 0) {
      delete mixObj[i];
    }
  }
  return mixObj;
};

console.log(trueObj(mixObj));//To execute the function and see its returned value, you must call it with parentheses:console.log(trueObj(mixObj));




//-------------------******Details of JS Object******--------------------

//Here Mac is an objct of JS
const Mac={
  Model:' Macbook Pro',
  M:' M3',
  Core: ' 11Core',
  gpu: ' 14GPU',
  Price:' 212k',
  Name:' -> Macbook pro M3 pro'
};

Mac.PurchaseDate=' -27th Sep 2024';//we can add new property to objet  

console.log(Mac.Name);
console.log(Mac['Name']);

let A='M';
console.log(Mac[A]);//correct
//console.log(Mac.A);//Incorrect


delete Mac.Name; //same as delete Mac['Name'];
//for in for obect
let output='';
for(let x in Mac){
  output+=Mac[x];
}
console.log(output);


//---------JS Object Properties-------- 




//Nasted Object
const Cars={
  Name: 'BMW',
  cars:{
    car1:'Ford',
    car2:'BMW',
    car3:'Fiat'
  }
};
console.log(Cars.cars.car1);
// console.log('Also can2:',Cars.cars['car1']);
// console.log('Also can3:',Cars['cars']['car1']);



const personN={
  chacis: 'xasd12',
  Model: '123M',
  age: 23,
  Status: 'true'
};

//const ob=Object.keys(personN); //its store all the keys of personN
const ob=Object.values(personN); //its store all the value of personN
for(let x of ob){
  console.log(x);
}


//In object JSON.Stringnify(person) conver all to stirng but its not convert to string of functions
//if we want to stringnify the functions then we have to tostring of function then applay JSON.Stringnify(person)

const person11 = {
  name: "John",
  age: function () { return 30; }  // Function property
};


// Convert function to string before JSON serialization

person11.age = person11.age.toString();
let myString = JSON.stringify(person11);
//document.getElementById("demo11").innerHTML = myString;


console.log(typeof myString);//the typeof will string


//-------JS Object Accessor-----------

 //get Accessor

//Object method
/*  const per={ 
  firstName: 'Salah',
  lastName: 'Udiin',
  fullName: function(){
    return this.firstName+ ' ' + this.lastName;
  }
 }
 console.log(per.fullName()); */


 // get ---its return computed properties  ---> get and functions main different is "Data Quality" but theire work is same
 const per={
  firstName: 'Salah',
  lastName: 'Uddin',
  get fullName(){
    return this.firstName+ ' ' + this.lastName;
  }
 }
 console.log(per.fullName); 



 const per1={
  firstName: 'Salah',
  lastName: 'Uddin',
  languge:"",
  set lang(lang){
     this.languge=lang;
  }
 }
 per1.lang='en';
 console.log(per1.languge); 

//if we want to add some property for the object after a while time then we use "Object.defineProperty()"
Object.defineProperty(per1,"fullName",{
  get: function(){
    return this.firstName + ' ' + this.lastName;
  }
});

console.log(per1.fullName);






//-------------JS Constractor-----------------

//Constractor Functions

function bluePrintperson(first, last, age){
  this.firstName=first;
  this.lastName=last;
  this.age=age;
  this.fullName=function(){
    return this.firstName +' '+ this.lastName;
  }
}

const shakin=new bluePrintperson('Shakin', 'Taharir', 10);//create new object for perticular persons
const rakin=new bluePrintperson('Rakin', 'Shaharir', 15);
const arosh=new bluePrintperson('Arosh', 'Yamin', 11);

console.log(shakin);

//aslo add propertties for new created object
shakin.country='Bangladesh';
console.log(shakin);

//But we can't add property from outside
// bluePrintperson.country='Bangladesh'; //Can't do this witout prototypes



console.log(shakin.fullName());


//-----------JS Object Prototypes-----------
bluePrintperson.prototype.country='Sri Lanka';//use prototype
console.dir(rakin.country.toLocaleUpperCase()); //show 'Srilanka' 



//-----------JS Object Iterables-----------



/* 

const nums=[1,2,3];
const numIterator=nums[Symbol.iterator]();
console.dir(numIterator.next());
console.dir(numIterator.next());
console.dir(numIterator.next());
console.dir(numIterator.next()); 

*/
//Make object Iterator using Symbol.iterator, next(), done
const myNumbers={};

myNumbers[Symbol.iterator]=function(){
  let n=0;
  let done=false;
  return{
    next(){
      n+=10;
      if(n==100){ done=true}
      return{
        value:n,
        done: done
      }

    }
  }
}


for(let num of myNumbers){ //now use "for of" for object
  console.dir(num);
}





//*************JS Sets ************* Collections of unique values
//*************JS Map ************* Collections of unique values










//-------**************JS Functions details**************-----------




//functions declarations
function sleep(){
  console.log("I am going to sleep");
}

//functions Expressions

// const Aa=function sleep1(){
//   console.log("I am going to sleep");
// }

//Expressions of functions
const Aa=function(){
  console.log("I am going to sleep");
}; //here also use semicolon(;) or not
Aa();



//Fuctions perameter and arguments

function P(x,y){  //here x and y are the functions perameter --->name listed in the functions definations
  return x*y; 
}
P(12,1); //here 12 and 1 are arguments -->The real values passed to(and received by) the funtions



//The Arguments Object
let xx=findMax(1,12,3,22,13,44,144);

function findMax(){
  let mx=-Infinity;
  for(let i=0; i<arguments.length; i++){  //arguments is count the number of passed arguments
    if(arguments[i]> mx){
      mx=arguments[i];
    }
  }
  return mx;

} 
console.log(Number(xx));


//passed argument as a object then its change the value of object through the functions
function Pp(x){
  x.one=7;
  return x.one * x.two; //7*5=35
}

//object
const m={
  one: 4,  // willl change to n=7;
  two: 5
};

console.log(Pp(m));//passed by referrence
console.log(m.one);//7



//---------Function Invocation-----------
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(10, 2)); // Will return 20



//---------Function call-----------
const aA={
  firstName: "Salman",
  sleep: function(){
    console.log(`${this.firstName} is sleeping!` );
  }
};
aA.sleep();
 

//call
const per0={
  // fullName: function(){
  fullName: function(city, country){
    return `${this.firstName} ${this.lastName} from ${ city} ,${ country}`;
    // return this.firstName+ this.lastName+ ", "+ city +" ,"+ country;
  }
  
};
const per11={
  firstName: "John",
  lastName: " wick"
};
const per22={
  firstName: "Crish",
  lastName: "Gail"
};
 
// console.log(per0.fullName.call(per11));//I declare 'this 'is 'call(parameter)'
console.log(per0.fullName.call(per11,"Cox's Bazar", 'Bangladesh'));//I declare 'this' is 'call(parameter,arguments1, arguments1)'


//------Function apply()--------
//The main different between call and apply is for the call arguments pass as a value but for apply we passed he arguments as a array
console.log(per0.fullName.apply(per22,["Cox's Bazar", "Bangladesh"]));


const Arr=[100,2,3,1,4,1,1,122];
console.log(Math.max.apply(null, Arr));//null as a for no need to 'this' and its call the Arr for max value;


//-----------JS Closures------------> Closures for Encapsulation



// JavaScript variables can belong to:

// The local scope or The global scope

// Global variables can be made local (private) with closures.

// Closures makes it possible for a function to have "private" variables.

let count=0; //declare global varibale
function cnt(){
  return count++;
}
console.log(cnt());// 0
console.log(cnt());// 1
console.log(cnt());// 2
console.log(cnt());// 3


//Creating an IIFE (Immediately Invoked Function Expression) using JS Nested Functions(Inner Functions) 
// and create it with" JS closure"
const counterFn = (function () {
  let count = 0; // Private counter variable

  return function () {
    return ++count;
  };
})();


function myCounter() {
  document.getElementById("counterBtn").innerHTML = counterFn();
}

// Conclusion
// A closure is a function that has access to the parent scope, after the parent function has closed.





//-------**************JS Class details**************-----------
 


//Details of class
class cAr{
  constructor(name, year){
    this.name=name;
    this.year=year;
  }

  //method
  run(speed){
    console.log(this.name+ ' is runnig ' +speed);
  }
  
}

const BMW=new cAr('BMW',2021);
const Yamaha=new cAr('Yamaha',2001);
console.log(BMW, " " , Yamaha);

BMW.run('1kmn/hr');



//class inheritance
class mobile{
  constructor(brand){
    this.name=brand;
  
  }
  present(){
    return 'I have a ' + this.name;
  }
}
//inherit from mobile clsss
class model extends mobile{
  constructor(brand, mod){
    super(brand);//indicate supperior class constructor's arguments of perameter
    this.model=mod;
  }
  show(){
    return this.present() + ' ' + 'it is a ' + this.model +' Series';
  }
}

let newMobile=new model('Infinix', 'Note-30');

console.log(newMobile.show());



//JS Static Methods

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class: for static
console.log( Car.hello());

// But NOT on a Car Object:
// myCar.hello();
// this will raise an error.

 //If you want to use the myCar object inside the static method, you can send it as a parameter:

/*  
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);
 */





//--------------************JavaScript Asynchronous************--------------




//----------%%%%%%%--JavaScript Callbacks--%%%%%%%%%----------



// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished



// function display(some){
//   console.log(some);
// }
// function calculator(a, b){
//   let result= a*b;
//   display(result);

// }
// calculator(2,1);

//if i want to control inner functions is call or not then we use 'callback'


function display(some){
  console.log(some);
}
function calculator(a, b,callback){
  let result= a*b;
  if(callback) callback(result);

}
calculator(2,1);//not display 2 
calculator(2,1,display);//display 2 


//--------Asynchronous JavaScript Functions-------

/* setTimeout(function(){
  console.log("This show after a sudden time!");
}, 2000); */


//its count down after a time Repeatedly
/*
 setInterval(function(){
  console.log("Set Interval!");
}, 100);
 */


// "I will finish later!"

// Functions running in parallel with other functions are called asynchronous

// A good example is JavaScript setTimeout()




//Example of asychronous functions with callback functions(Example of course enrollment)

/*

const enrolled=true;
const marks=80;

function courseEnrolled(callback){
  console.log("Course Enrollment is prosees...");

  setTimeout(function(){
    if(enrolled){
      callback();
    }
    else{
      console.log("Payment failed!");
    }
  },2000)
}

function progress(callback){
  console.log("Your course is progress...");

  setTimeout(function(){
    if(marks>=80){
      callback();

    }else{
      console.log("Sorry! You're not got enough marks to get the certificates!");

    }
  },1500)
}

function getcertificate(){
  console.log("Congress! You're get the certificate!");
}


courseEnrolled(function(){
  progress(getcertificate);
})

*/

//clock
/*
setInterval(ClockFn,1000);

function ClockFn(){
let d=new Date();
document.getElementById("clock").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
} 

*/

//also can 

/* setInterval(function (){
  let d=new Date();
  document.getElementById("clock").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
},1000); */



//----------%%%%%%%%-  JavaScript Promises  -%%%%%%%%-----------

// "I Promise a Result!"

// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code




let statusT=true;

//promise definations
const promise=new Promise(function(resolve,reject){
  console.log("It's Processing...");
  setTimeout(function(){
    if(statusT){
      resolve("It's Success!");
    }else{
      reject("It's Failed!");
    }
  },3000);

});

//promise call
promise
  .then(function(value){
    console.log(value);
  })
  .catch(function(err){
    console.log(err);
  })