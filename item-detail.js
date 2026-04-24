window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');
    const allItems = JSON.parse(localStorage.getItem("items") || "[]");
    const item = allItems.find(i => i.id == itemId);
    const container = document.getElementById("detailContainer");

    if (!item) {
        container.innerHTML = `<div style="text-align:center; padding: 50px;"><h2>Record Not Found</h2></div>`;
        return;
    }

    container.innerHTML = `
        <div class="detail-header">
            <div>
                <h1>${item.name}</h1>
                <p style="color: #888; font-size: 12px; margin-top:5px;">System Ref: #${item.id}</p>
            </div>
            <span class="status-badge ${item.type.toLowerCase()}">${item.type}</span>
        </div>

        <img src="${item.image || 'https://via.placeholder.com/400x250?text=Item+Preview'}" 
             style="width: 100%; height: 250px; object-fit: cover; border-radius: 15px; margin: 20px 0;">

        <div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div>
                <span style="display:block; font-size:11px; color:#aaa; font-weight:700; text-transform:uppercase;">Location</span>
                <span style="font-size:15px; color:#333;">📍 ${item.location}</span>
            </div>
            <div>
                <span style="display:block; font-size:11px; color:#aaa; font-weight:700; text-transform:uppercase;">Date Reported</span>
                <span style="font-size:15px; color:#333;">📅 ${item.date}</span>
            </div>
        </div>

        <div style="background: #fcfcfc; padding: 15px; border: 1px solid #eee; border-radius: 12px; margin-bottom: 30px;">
            <p style="font-size: 14px; color: #555; line-height: 1.6;">${item.desc || "No additional description provided."}</p>
        </div>

        <div style="border-top: 2px solid #f0f2f5; padding-top: 25px; text-align: center;">
            <p style="font-weight: 600; color: #444; margin-bottom: 5px;">Reporter Registration No:</p>
            <h2 style="color: #4dabf7; font-size: 24px; margin-bottom: 15px;">${item.userReg}</h2>
            
            <p style="font-weight: 600; color: #444; margin-bottom: 5px;">Direct Contact Number:</p>
            <h2 style="color: #28a745; font-size: 26px;">${item.contact}</h2>
            
            <p style="font-size: 12px; color: #999; margin-top: 15px;">
                Contact the student directly to verify and claim the property.
            </p>
            <button onclick="window.history.back()" 
                    style="margin-top: 20px; background: none; border: 1px solid #ddd; padding: 8px 25px; border-radius: 20px; cursor: pointer; color: #777;">
                ← Back to Gallery
            </button>
        </div>
    `;
};