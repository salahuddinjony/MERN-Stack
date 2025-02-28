//JSON ----------JavaScript Objcet Notation----------------

const person={
    name: "salah",
    age: 25,
    Aim: "To be a softawre Engineer"
}

const text=JSON.stringify(person); //convert to string
const obj=JSON.parse(text); //convert to Js object

console.log("Its a JSON file: ", text);
console.log("Its an object file: ", obj);



//now we create JSON 

const parse2={
    Name: "Jony",
    Age: 26,
    Book:{
        Name: "Samne Likhbo",
        Topics: "programming"
    },
    Array: ["Hello", 20, 113, true, [1,2,3,4,4]],
    Aim: "To be a Millioner",
    disease: null,
    Device: "MacBook Pro M3 Pro"

}

console.log(JSON.stringify(parse2));



//--------JSON vs XML------------


//in JSON 
const jsonString = `[
    {"firstName": "Salah", "lastName": "Uddin"},
    {"firstName": "Sakin", "lastName": "Rakin"},
    {"firstName": "Peter", "lastName": "Jones"}
]`;


const employees = JSON.parse(jsonString);
console.log(`My name is: ${employees[0].firstName} ${employees[0].lastName}`); // Output: salah


//in XML

/*
const xmlString = ` 
<employees>
    <employee>
        <firstName>salah</firstName>
        <lastName>uddin</lastName>
    </employee>
    <employee>
        <firstName>Sakin</firstName>
        <lastName>Rakin</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName>
        <lastName>Jones</lastName>
    </employee>
</employees>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const firstEmployee = xmlDoc.getElementsByTagName("employee")[0];
const firstName = firstEmployee.getElementsByTagName("firstName")[0].textContent;

console.log(firstName); // Output: salah

 */

//-------JSON Data Types------
/* 
Valid Data Types:

In JSON, values must be one of the following data types:

1. a string
2. a number
3. an object (JSON object)
4. an array
5. a boolean
6. null 

JSON values cannot be one of the following data types:

1. a function
2. a date
3. undefined
*/
//-------JSON.parse()-------


//When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

const textArray = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(textArray);
console.log(myArr);



const MyString=`{
    "Name": "salah",
    "Birth": "2000-03-03",
    "City": "Dhaka"
}`;



//Using revive functions 
const MyObj1=JSON.parse(MyString,function(key,value){

    if(key==="Birth"){
        return new Date(value).toUTCString();
    }
    return value;

});
console.log(MyObj1);



//------JSON.stringify()----




const person1={
    name: "salah",
    age: 25,
    Aim: "To be a softawre Engineer"
}

const text1=JSON.stringify(person); //convert to string

console.log(text1);


//-----JSON Object Literals-----

// Inside the JSON string there is a JSON object literal:

// {"name":"John", "age":30, "car":null}








// -----------JSON Server-----------



async function getData() {
    try {
        const response = await fetch("data.txt");
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Assuming data is an object or array
        document.getElementById("data").innerHTML = JSON.stringify(data, null, 2); // Pretty print JSON
    } catch (error) {
        console.error("Failed to fetch data:", error);
        document.getElementById("data").innerHTML = "Error loading data.";
    }


    //use functions inside JSON.stringify(name, func, whitespace)
}const person11 = {
    name: "John",
    age: 30,
    email: "john@example.com",
    password: "secret123",
    hobbies: ["reading", "traveling"]
};

// Replacer function
function replacer(key, value) {
    // Exclude the properties you don't want to include
    if (key === "age" || key === "password") {
        return undefined; // Return undefined to omit this key
    }
    return value; // Include other keys
}

// Convert the object to a JSON string using the replacer function
const jsonString11 = JSON.stringify(person11, replacer, 2);
console.log(jsonString11);








//----------JSON HTML----------
/* 

function change_myselect(sel) {
    const dbParam = JSON.stringify({table:sel,limit:20});
    
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      myObj = JSON.parse(this.responseText);
      text = "<table border='1'>"
      for (x in myObj) {
        text += "<tr><td>" + myObj[x].name + "</td></tr>";
      }
      text += "</table>"    
      document.getElementById("demo").innerHTML = text;
    }

    xmlhttp.open("POST", "json_demo_html_table.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }



 */