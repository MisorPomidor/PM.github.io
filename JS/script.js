document.getElementById('menu').addEventListener('submit', function(event) {
    if (!validatePasswords()) {
        event.preventDefault(); 
    } else {
        window.location.href = "https://pablo-restrepo.github.io/Troll-Page-Scream/";
    }
});

function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("c-password").value;

    if (password.trim() === "" || confirmPassword.trim() === "") {
        alert("Паролі не можуть бути порожніми!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Паролі не співпадають!");
        return false;
    }
    return true; 
}
