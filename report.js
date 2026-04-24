window.onload = function() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
};

document.getElementById("reportForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const rawNumber = document.getElementById("contactNo").value;
    const formattedNumber = "+91 " + rawNumber;

    const report = {
        id: Date.now(),
        userReg: localStorage.getItem("userReg"),
        contact: formattedNumber,
        type: document.getElementById("type").value,
        name: document.getElementById("itemName").value,
        category: document.getElementById("category").value,
        location: document.getElementById("location").value,
        desc: document.getElementById("desc").value,
        date: new Date().toLocaleDateString(),
        status: "Active"
    };

    let items = JSON.parse(localStorage.getItem("items") || "[]");
    items.push(report);
    localStorage.setItem("items", JSON.stringify(items));

    alert("Report Posted Successfully!");
    window.location.href = "browse.html";
});

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}