document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("name");
    const name = prompt("Nama anda: ", "");
    
    if (name) { nameSpan.textContent = name; } });