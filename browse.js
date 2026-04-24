window.onload = () => {
    loadItems();
};

function loadItems() {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    const grid = document.getElementById("itemsGrid");
    
    if(items.length === 0) {
        grid.innerHTML = "<p style='text-align:center; grid-column: 1/-1; color: #888;'>No reports found.</p>";
        return;
    }

    grid.innerHTML = items.map(item => `
        <div class="item-card">
            <span class="badge ${item.type.toLowerCase()}">${item.type.toUpperCase()}</span>
            <h3>${item.name}</h3>
            <p><strong>📍 Location:</strong> ${item.location}</p>
            <p><strong>📅 Date:</strong> ${item.date}</p>
            <p style="display:none;">${item.desc}</p> 
            <button class="view-btn" onclick="goToDetails('${item.id}')">View Full Details</button>
        </div>
    `).join('');
}

function filterItems() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const cards = document.getElementsByClassName("item-card");
    const grid = document.getElementById("itemsGrid");
    
    let matchCount = 0;

    for (let i = 0; i < cards.length; i++) {
        const cardText = cards[i].innerText.toLowerCase();
        
        if (cardText.includes(query)) {
            cards[i].style.display = "block";
            matchCount++;
        } else {
            cards[i].style.display = "none";
        }
    }

    const existingMsg = document.getElementById("noResultsMsg");
    if (existingMsg) existingMsg.remove();

    if (matchCount === 0) {
        const msg = document.createElement("p");
        msg.id = "noResultsMsg";
        msg.innerHTML = `No items match "<strong>${query}</strong>"`;
        msg.style.cssText = "grid-column: 1/-1; text-align: center; color: #888; padding: 20px;";
        grid.appendChild(msg);
    }
}

function goToDetails(id) {
    window.location.href = `item-detail.html?id=${id}`;
}