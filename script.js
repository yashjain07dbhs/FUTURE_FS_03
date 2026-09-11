// Reservation Form

const form = document.getElementById("reservationForm");

const message = document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const guests =
        document.getElementById("guests").value;

    const date =
        document.getElementById("date").value;


    message.textContent =
        "Thank you " +
        name +
        "! Your request for " +
        guests +
        " guests on " +
        date +
        " has been received.";


    form.reset();

});