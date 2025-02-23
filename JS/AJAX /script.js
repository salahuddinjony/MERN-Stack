//-----------*****AJAX->Asynchronous JavaScript And XML*******---------
/* 

The keystone of AJAX is the XMLHttpRequest object.

1.Create an XMLHttpRequest object
2.Define a callback function
3.Open the XMLHttpRequest object
4.Send a Request to a server 

*/


//[ NOTE: Modern Browsers can use Fetch API instead of the XMLHttpRequest Object. ]

function loadData() {
    // Create a new request 
    const xhr = new XMLHttpRequest();

    // Handle the response call function
    xhr.onload = function() {
          if(this.status==200){ // Ensure successful response

            // console.log("Response finished!"); //its cause of xhr.open(method, url, asynchronous: true(default), false)

            // console.log(this.getAllResponseHeaders()); //show the all rquest header 
            // console.log(this.getResponseHeader("last-modified"));

            const container = document.getElementById("demo");
            container.innerHTML = xhr.responseText; //we can use it this.responseText
          }else{
            console.error("Error fethching data: ", this.status,this.statusText);
          }
        
    };

    // Prepare request - methods: GET, POST, PUT, PATCH, DELETE
    // xhr.open("GET", "data.txt",true); //open(method, url, async)
    xhr.open("GET", "data.txt"); //same as-->/open(method, url, async)


    //Returns specific header information
    // xhr.setRequestHeader("MY_GF", "javaScript");

    // Send request
    xhr.send();

    // console.log("It will be appear berfore onload callbackFn[Responsee finished]");

    //Can abort the requet 
    // xhr.abort();
}


//----Multiple Callback Functions-----

/* 
//form html function inside button onlclick
loadDoc("url-1", myFunction1);
loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    cFunction(this);

    }

  xhttp.open("GET", url);

  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
  const container=document.getElemntById("demo1");
  container=xhttp.responseText;
}
function myFunction2(xhttp) {
  // action goes here

   const container1=document.getElemntById("demo2");
    container1=xhttp.responseText;

} 
*/



//-------AJAX - XMLHttpRequest----------


//To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

/* xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
 */



//------AJAX - Server Response----------
//this example shown the above
   // console.log(this.getAllResponseHeaders()); //show the all rquest header 
    // console.log(this.getResponseHeader("last-modified"));


//------AJAX  Final Example----------



//This just for understand code with commend 

/* function getData() {
    // Create a new XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define what happens when the request is loaded
    xhttp.onload = function() {
 
        //when not declare  xhttp.responseType = "json"; then we can parse text to JSON use is
        // console.log(JSON.parse(this.responseText).userId);
        
        // Log the entire response (parsed automatically as JSON due to responseType)
        console.log(this.response);

        // If you want to log a specific property (e.g., userId), you can do:
        // console.log(this.response.userId);
    };

    // Initialize the request
    // "GET" method is used to retrieve data
    // The URL points to a sample JSON API
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    // Set the response type to JSON to automatically parse the response text
    xhttp.responseType = "json"; 

    // Send the request
    xhttp.send();
} */


function sendRequest(method, url,data=null){


  const promise = new Promise ( (resolve, reject)=>{

    const xhttp= new XMLHttpRequest();
    
    xhttp.onload = function () {
      //handle applications error
       if(this.status>=200 && this.status<300){
        resolve(this.response);
       } else {
        reject(new Error(`Requset failed Boss with status ${this.status} : ${this.statusText}`));
       }
    };

    xhttp.onerror=function(){
      reject(new Error("Network Error Boss"));
    };

    xhttp.open(method, url);

    xhttp.responseType = "json";

    if(data){
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(JSON.stringify(data)); //Make data string if is not string

    }else{
      xhttp.send();
    }
  } );

  return promise;

   
    
 }

 // GET Request
function getData(){

    sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1")
      .then((responseData)=>{
        console.log("GET Response: ", responseData);
      })
      .catch(function(error){
        console.error(error)
      })

}

// POST Request
function sendData() {

  const newTodo = {
    userId: 1,
    title: "Practice is it post requset work or not",
    completed: false
  };

  sendRequest("POST", "https://jsonplaceholder.typicode.com/todos", newTodo)
    .then((responseData) => {
      console.log("POST Response:", responseData);
    })
    .catch((error) => console.error(error));
}

const getButton=document.getElementById("get");
const sendButton=document.getElementById("send");


getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);




