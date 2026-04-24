window.onload = function() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
        return; 
    }

    const reg = localStorage.getItem("userReg");
    document.getElementById("userName").innerText = reg;

    const allItems = JSON.parse(localStorage.getItem("items") || "[]");
    const recentItems = allItems.slice(-2).reverse(); 
    
    const container = document.getElementById("recentItemsList");

    if (recentItems.length === 0) {
        container.innerHTML = "<p style='color: #888; padding: 20px;'>No recent reports to show.</p>";
    } else {
        container.innerHTML = recentItems.map(item => `
            <div class="recent-item-card">
                <img src="${item.image || 'https://via.placeholder.com/150'}" alt="item">
                <div class="recent-details">
                    <span class="mini-badge ${item.type.toLowerCase()}">${item.type}</span>
                    <h4>${item.name}</h4>
                    <p>📍 ${item.location}</p>
                    <p style="font-size: 11px; color: #999; margin-top: 5px;">Reported on: ${item.date}</p>
                </div>
            </div>
        `).join('');
    }
};
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}