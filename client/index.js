function createAccount(event) {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    console.log(email, name, age)
    sendPostRequest({email, name, age});
}

function sendPostRequest(params){
    const http = new XMLHttpRequest();
    http.open('POST', 'http://localhost:3000/account/create', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify(params)); // Make sure to stringify
    http.onload = function() {
        // Do whatever with response
        alert(http.responseText);
    }
}
console.log('load javascript page');