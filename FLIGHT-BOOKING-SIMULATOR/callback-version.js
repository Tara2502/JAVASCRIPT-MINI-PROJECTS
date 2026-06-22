//search flight
function searchFlight(callback){
    console.log("Searching for flights...");
    setTimeout(()=>{
        console.log("flight found");
        callback();
    },2000);
}
//fetch flight details
function fetchFlightDetails(callback){
    console.log("Fetching flight details...");
    setTimeout(()=>{
console.log("Flight details fetched");
    callback();
    },2000);
}
//process payment
function processPayment(callback){
    console.log("processing payment...");
    setTimeout(()=>{
console.log("Payment processed");
callback();
    },2000);
}
//generate tickets
function generateTicket(callback){
    console.log("Generating ticket...");
    setTimeout(()=>{
console.log("Ticket generated");
callback();
    },2000);
}

function sendConfirmation(callback){

    console.log("Sending confirmation...");

    setTimeout(() => {

        console.log("Confirmation sent");

        callback();

    },2000);

}

searchFlight(() => {

    fetchFlightDetails(() => {

        processPayment(() => {

            generateTicket(() => {

                sendConfirmation(()=>{
                    console.log("booking completed successfully!");
                });

            });

        });

    });

});