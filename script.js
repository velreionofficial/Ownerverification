const API_URL = "https://script.google.com/macros/s/AKfycby3hJV8r9EIL0iggthm80iWzYN9ZyRhhBPaiGxGEQ_QlMF2z77ChnK1NAfwicGPeYE/exec";

async function verifyOwner() {

    const id = document.getElementById("certificate").value.trim().toUpperCase();
    const result = document.getElementById("result");

    if (!id) {
        result.innerHTML = `
        <div class="verify-card">
            <h2 style="color:#ff4444;text-align:center;">Enter Certificate ID</h2>
        </div>`;
        return;
    }

    result.innerHTML = `
    <div class="verify-card">
        <p style="text-align:center;">Checking ownership...</p>
    </div>`;

    try {

        const response = await fetch(API_URL + "?id=" + encodeURIComponent(id));
        const data = await response.json();

        if (data.found) {

            result.innerHTML = `
            <div class="verify-card">

                <div style="text-align:center;">
                    <img src="images/gold-logo.png" alt="VELREION Logo">
                </div>

                <h2 class="verified-title">
                    ✔ VERIFIED OWNER
                </h2>

                <p class="certificate-subtitle">
                    Official Ownership Certificate
                </p>

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
                        <td>******${String(data.phone).slice(-4)}</td>
                    </tr>

                    <tr>
                        <td>Collection</td>
                        <td>${data.collection}</td>
                    </tr>

                    <tr>
                        <td>Product</td>
                        <td>${data.product}</td>
                    </tr>

                    <tr>
                        <td>Certificate ID</td>
                        <td>${data.certificateId}</td>
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

                <h2 style="color:#ff4444;text-align:center;">
                    ❌ INVALID CERTIFICATE
                </h2>

                <p style="text-align:center;color:#9f9f9f;">
                    This Certificate ID does not exist.
                </p>

            </div>
            `;

        }

    } catch (error) {

        console.error(error);

        result.innerHTML = `
        <div class="verify-card">

            <h2 style="color:#ff4444;text-align:center;">
                SERVER ERROR
            </h2>

            <p style="text-align:center;color:#9f9f9f;">
                Unable to connect with database.
            </p>

        </div>
        `;

    }

}