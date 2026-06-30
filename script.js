function verifyOwner() {

    const id = document.getElementById("certificate").value.trim().toUpperCase();
    const result = document.getElementById("result");

    const database = {

        "AUR-0001": {
            level: "AUREUM",
            owner: "Prakash Raj",
            phone: "9876542086",
            product: "Phoenix Oversized Tee",
            size: "XL",
            color: "Black",
            purchaseDate: "30 June 2026",
            verificationDate: "30 June 2026",
            edition: "Limited Edition (01 of 05)",
            certificateNo: "VLR-AUR001-001",
            status: "VERIFIED",
            colorCode: "#D4AF37",
            logo: "images/gold-logo.png"
        },

        "ARG-0001": {
            level: "ARGENTUM",
            owner: "Rahul Kumar",
            phone: "9123456789",
            product: "Phoenix Oversized Tee",
            size: "L",
            color: "White",
            purchaseDate: "30 June 2026",
            verificationDate: "30 June 2026",
            edition: "Limited Edition (02 of 05)",
            certificateNo: "VLR-ARG001-001",
            status: "VERIFIED",
            colorCode: "silver",
            logo: "images/gold-logo.png"
        },

        "FER-0001": {
            level: "FERRUM",
            owner: "Demo User",
            phone: "9988776655",
            product: "Phoenix Regular Tee",
            size: "M",
            color: "Brown",
            purchaseDate: "30 June 2026",
            verificationDate: "30 June 2026",
            edition: "Limited Edition (03 of 05)",
            certificateNo: "VLR-FER001-001",
            status: "VERIFIED",
            colorCode: "#8B4513",
            logo: "images/gold-logo.png"
        }

    };

    if (database[id]) {

        const data = database[id];

        result.innerHTML = `

<div class="verify-card">

<div style="text-align:center;margin-bottom:20px;">
<img src="${data.logo}" alt="VELREION Logo">
</div>

<h2 class="verified-title">
✔ VERIFIED OWNER
</h2>
<p class="certificate-subtitle">Official Ownership Certificate</p>

<table class="verify-table">

<tr>
<td>Certificate</td>
<td>${data.certificateNo}</td>
</tr>

<tr>
<td>Owner</td>
<td>${data.owner}</td>
</tr>

<tr>
<td>Phone</td>
<td>******${data.phone.slice(-4)}</td>
</tr>

<tr>
<td>Collection</td>
<td>${data.level}</td>
</tr>

<tr>
<td>Product</td>
<td>${data.product}</td>
</tr>

<tr>
<td>Certificate ID</td>
<td>${id}</td>
</tr>

<tr>
<td>Edition</td>
<td>${data.edition}</td>
</tr>

<tr>
<td>Size</td>
<td>${data.size}</td>
</tr>

<tr>
<td>Color</td>
<td>${data.color}</td>
</tr>

<tr>
<td>Purchase Date</td>
<td>${data.purchaseDate}</td>
</tr>

<tr>
<td>Verification Date</td>
<td>${data.verificationDate}</td>
</tr>

<tr>
<td>Status</td>
<td class="verified">${data.status}</td>
</tr>

</table>

</div>

`;

    } else {

        result.innerHTML = `

<div class="verify-card">

<h2 style="color:red;text-align:center;">
❌ INVALID CERTIFICATE
</h2>

<p style="text-align:center;color:#999;">
This Certificate ID does not exist.
</p>

</div>

`;

    }

}