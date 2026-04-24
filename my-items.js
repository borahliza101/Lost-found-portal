window.onload = function() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
        return;
    }

    const currentReg = localStorage.getItem("userReg");
    document.getElementById("displayReg").innerText = currentReg;

    loadMyItems(currentReg);
};

function loadMyItems(reg) {
    const container = document.getElementById("myItemsList");
    const allItems = JSON.parse(localStorage.getItem("items") || "[]");
    
    const myItems = allItems.filter(item => item.userReg === reg);

    if (myItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>You haven't reported any items yet.</p>
                <br>
                <a href="report.html" style="color: #4dabf7; text-decoration: none; font-weight: bold;">Report an Item Now</a>
            </div>
        `;
        return;
    }
    container.innerHTML = myItems.map(item => `
        <div class="item-row ${item.type === 'Found' ? 'found-type' : ''}">
            <div class="item-info">
                <h3>${item.name} <small style="color:#999; font-weight:normal;">(${item.type})</small></h3>
                <p>📍 ${item.location} | 📅 ${item.date}</p>
                <p style="margin-top:5px; font-style:italic;">"${item.desc}"</p>
            </div>
            <div class="item-actions">
                <button class="delete-btn" onclick="deleteItem(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
}

function deleteItem(id) {
    if (confirm("Are you sure you want to remove this report?")) {
        let allItems = JSON.parse(localStorage.getItem("items") || "[]");
        allItems = allItems.filter(item => item.id !== id);
        
        localStorage.setItem("items", JSON.stringify(allItems));

        const currentReg = localStorage.getItem("userReg");
        loadMyItems(currentReg);
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}