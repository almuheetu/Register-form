document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform your login or validation logic here
    console.log("Username:", username);
    console.log("Password:", password);
});