//-------------Form API(Application Programming Interface)---------------------


function validation() {
    const inputObj = document.getElementById("id1");

    if (inputObj.validity.rangeOverflow) {
        inputObj.setCustomValidity("You have made a range overflow!");
      
    } 
    else if (inputObj.validity.rangeUnderflow) {
        inputObj.setCustomValidity("You have made a range underflow!");
      
    }
    else if (inputObj.validity.valueMissing) {
        inputObj.setCustomValidity("You have not any Value!");
      
    }
    else {
        inputObj.setCustomValidity("Correct!"); // Reset the message
       
    }
    //its use instate of checkValidity of inputObj.validationMessage;

    // inputObj.reportValidity();

    
    // Show the message if input is invalid
    if (!inputObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }


}


//------------Web History API--------

function historyLength(){
    alert(window.history.length);
}

function historyBack(){
    window.history.back();
}

function historyForward(){
    window.history.forward();
}

function historyGo(n){
    window.history.forward(n);
}


//------------Web Storage API--------

//localStorage

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    alert(`Saved: ${key} = ${value}`);
}

function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    alert(value ? `Retrieved: ${key} = ${value}` : "No data found!");
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
    alert(`Removed: ${key}`);
}

function clearLocalStorage() {
    localStorage.clear();
    alert("All LocalStorage cleared!");
}

function lengthLocalStorage(){
    alert(localStorage.length);
}

//sessionStorage--- same as localStorage just replcae the where is localStorage then it sessionStorage





//------------Web Workers API--------



let w;

//start worker
function startWorker(){

    if(typeof Worker!='undefined'){
        //worker available

        //check if w worker is not already defied
        if(typeof w=="undefined"){
            w=new Worker("worker.js"); //create new Worker called w and inside the js file(where the exter js file store the worker task)
        }

        //lestening for worker events/message

        w.onmessage=function (event){
            document.getElementById("worker").innerHTML=event.data;
        }
    }else{
        alert("Your browser does not support web worker!");
    }
}


//stop worker

function stopWorker(){

    if(typeof Worker!='undefined'){
        w.terminate();
        w=undefined; //for clear the previously created worker
    }else{
        alert("Your browser does not support web worker!");
    }
}




//------------JavaScript Fetch API--------
const display=document.getElementById("data");

/* 

function fetchData(){
    fetch("http://127.0.0.1:5500/JS/Web%20API/data.txt")
        .then((res) => res.text())
        .then((data) => {
            console.log("Hello2"); // This will log after the data is fetched
            display.innerText = data;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    console.log("Hello1"); // This will log immediately after the fetch is initiated
} 

*/


//Now we can use async functions

async function fetchData() {
    const res=await  fetch("http://127.0.0.1:5500/JS/Web%20API/data.txt");
    const data =await res.text();

    display.innerText=data;
    
}