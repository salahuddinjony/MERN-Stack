//-----------AJAX- Asynchronous JavaScript And XML---------


//*******Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.

function loadData() {
    // Create a new request 
    const xhr = new XMLHttpRequest();

    // Handle the response
    xhr.onload = function() {
            const container = document.getElementById("demo");
            container.innerHTML = xhr.responseText;
        
    };

    // Prepare request - methods: GET, POST, PUT, PATCH, DELETE
    xhr.open("GET", "data.txt");

    // Send request
    xhr.send();
}