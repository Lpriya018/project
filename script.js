function signup() {
    const username = document.getElementById("signupUsername").value; 
    const password = document.getElementById("signupPassword").value;
    localStorage.setItem("username", username); 
    localStorage.setItem("password", password); 
    alert("Sign up successful! Redirecting to login...");
    window.location.href = "index.html";
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value; 
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) { 
        alert("Login successful!"); 
        window.location.href = "details.html"; 
    } else { 
        alert("Invalid credentials. Try again."); 
    } 
}

function submitDetails() {
    const fullName = document.getElementById("fullName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    console.log("Submitted Details:", { fullName, age, email });
    alert("Details submitted successfully!");
}
