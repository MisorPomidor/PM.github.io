
document.getElementById('menu').addEventListener('submit', function(event) {
    if (!validatePasswords()) {
        event.preventDefault(); 
    }
});


function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("c-password").value;

    if (password !== confirmPassword) {
        alert("Паролі не співпадають!");
        return false;
    }
    return true; 
}
