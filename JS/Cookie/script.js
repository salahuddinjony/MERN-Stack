//JavaScript Cookies

//document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); // Calculate expiration date
    let expires = "expires=" + d.toUTCString(); 
  
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // Set the cookie
}
  function getCookie(cname){
    // console.log(document.cookie);
    // name=salah uddin; username=salah
    
    let name=cname+"=";
    let ca=document.cookie.split(";"); //create array with splite by where is ;(semicolon)

    for(let i=0; i<ca.length; i++){
        let c=ca[i];

        while(c.charAt(0)===" "){

            c=c.substring(1);

        }
        //we can use intate of while trim() c=c.trim();
        if(c.indexOf(name)===0){
            return c.substring(name.length);
            // return c.substring(name.length,c.length); //also can write it
        } 

    }

    return "";

  
}


// setCookie and  getCookie
  
function checkCookie(name,exdays) {
    let cookieValue = getCookie(name); // Get the cookie value
    if (cookieValue != "") {
        alert("Welcome again " + cookieValue);
    } else {
        let userInput = prompt("Please enter your name:", "");
        if (userInput != "" && userInput != null) {
            setCookie(name, userInput, exdays); // Set cookie using the given name
        }
    }
}
