
//search fligth function
function searchFligts(){
    return new Promise((resolve,reject)=>{
        console.log("Searching for flights...");
        setTimeout(()=>{
        console.log("flight found");
        resolve();
    },2000);
    });
}

function fetchFlightDetails(){
return new Promise((resolve,reject)=>{
    console.log("Fetching flight details...");
    setTimeOut(()=>{
        console.log("Flight details fetched");
        resolve();
    },2000);
});
}

function processPayment(){
    return new Promise((resolve,reject)=>{
        console.log("processing payment...");
        setTimeout(()=>{
            console.log("Payment processed");
            resolve();
        },2000);
    });
}

function generateTicket(){
    return new Promise((resolve,reject)=>{
        console.log("Generating ticket...");
        setTimeout(()=>{
            console.log("Ticket generated");
            resolve();
        },2000);
    });
}

function sendConfirmation(){
    return new Promise((resolve,reject)=>{
        console.log("Sending confirmation...");
        setTimeout(()=>{
            console.log("Confirmation sent");
            resolve();
        },2000);
    });
}

searchFligts()
.then(()=> fetchFlightDetails())
.then(()=> processPayment())
.then(()=> generateTicket())
.then(()=> sendConfirmation())
.then(()=>{
    console.log("booking completed successfully!");
})