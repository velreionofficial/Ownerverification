function verifyOwner() {
    const id = document.getElementById("certificate").value.trim().toUpperCase();
    const result = document.getElementById("result");

    const database = {
        "AUR-0001": {
            level: "AUREUM",
            owner: "Prakash Raj",
            product: "Phoenix Oversized Tee",
            color: "gold"
        },
        "ARG-0001": {
            level: "ARGENTUM",
            owner: "Rahul Kumar",
            product: "Phoenix Oversized Tee",
            color: "silver"
        },
        "FER-0001": {
            level: "FERRUM",
            owner: "Demo User",
            product: "Phoenix Regular Tee",
            color: "#8B4513"
        }
    };

    if (database[id]) {
        const data = database[id];

        result.innerHTML = `
            <div style="margin-top:20px;padding:20px;border:2px solid ${data.color};border-radius:12px;">
                <h2 style="color:${data.color};">${data.level}</h2>
                <p><b>Owner:</b> ${data.owner}</p>
                <p><b>Certificate ID:</b> ${id}</p>
                <p><b>Product:</b> ${data.product}</p>
                <p style="color:lime;">✔ Ownership Verified</p>
            </div>
        `;
    } else {
        result.innerHTML = `
            <p style="color:red;margin-top:20px;">
            ❌ Invalid Certificate ID
            </p>
        `;
    }
}