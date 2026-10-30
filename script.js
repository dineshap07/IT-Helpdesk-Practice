
const form = document.getElementById("ticketForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const employee = document.getElementById("employee").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const ticketId = "INC" + Date.now();

    const ticket = {
        id: ticketId,
        employee: employee,
        category: category,
        description: description,
        status: "Open"
    };

    const tickets = JSON.parse(
        localStorage.getItem("tickets") || "[]"
    );

    tickets.push(ticket);

    localStorage.setItem(
        "tickets",
        JSON.stringify(tickets)
    );

    document.getElementById("result").textContent =
        "Ticket created successfully! ID: " + ticketId;

    form.reset();
});
