const dummyReports = [
    {
        id: 101,
        userReg: "24BKT0093",
        type: "Lost",
        name: "Blue Dell Laptop Sleeve",
        location: "Library Reading Room",
        desc: "Dark blue padded sleeve, size 14 inch.",
        date: "2026-03-25",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=400"
    },
    {
        id: 102,
        userReg: "23BCE2459",
        type: "Found",
        name: "Scientific Calculator",
        location: "Block B, Room 302",
        desc: "Casio FX-991EX found on the back bench.",
        date: "2026-03-28",
        image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=400"
    },
    {
        id: 103,
        userReg: "24BKT0093",
        type: "Found",
        name: "Gym Water Bottle",
        location: "Sports Complex",
        desc: "Black Milton flask, 1 liter.",
        date: "2026-03-30",
        image: "https://images.unsplash.com/photo-1602143399827-bd95ef6f43ad?q=80&w=400"
    }
];

function initDummyData() {
    // Only populate if LocalStorage is totally empty
    if (!localStorage.getItem("items")) {
        localStorage.setItem("items", JSON.stringify(dummyReports));
    }
}

initDummyData();