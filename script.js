const API_URL = "https://script.google.com/macros/s/AKfycby3hJV8r9EIL0iggthm80iWzYN9ZyRhhBPaiGxGEQ_QlMF2z77ChnK1NAfwicGPeYE/exec";

async function verifyOwner() {

    const id = document.getElementById("certificate").value.trim().toUpperCase();
    const result = document.getElementById("result");

    if (!id) {
        result.innerHTML = `
        <div class="verify-card">
            <h2 style="color:#ff4444;">Please Enter Certificate ID</h2>
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

            const purchaseDate = new Date(data.purchaseDate).toLocaleDateString("en-GB");
            const verificationDate = new Date(data.verificationDate).toLocaleDateString("en-GB");

            result.innerHTML = `
            <div class="verify-card">

                <img src="images/gold-logo.png" alt="VELREION">

                <div class="verified-title">
                    ${data.collection}
                </div>

                <div class="certificate-subtitle">
                    Official Ownership Certificate
                </div>

                <table class="verify-table">

                    <tr>
                        <td>Owner</td>
                        <td>${data.owner}</td>
                    </tr>

                    <tr>
                        <td>Certificate ID</td>
                        <td>${data.certificateId}</td>
                    </tr>

                    <tr>
                        <td>Certificate No.</td>
                        <td>${data.certificateNo}</td>
                    </tr>

                    <tr>
                        <td>Product</td>
                        <td>${data.product}</td>
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
                        <td>Edition</td>
                        <td>${data.edition}</td>
                    </tr>

                    <tr>
                        <td>Purchase Date</td>
                        <td>${purchaseDate}</td>
                    </tr>

                    <tr>
                        <td>Verification Date</td>
                        <td>${verificationDate}</td>
                    </tr>

                    <tr>
                        <td>Status</td>
                        <td class="verified">${data.status}</td>
                    </tr>

                </table>

            </div>`;
        }

        else {

            result.innerHTML = `
            <div class="verify-card">

                <h2 style="color:#ff4444;">INVALID CERTIFICATE</h2>

                <p>This certificate was not found in the VELREION database.</p>

            </div>`;
        }

    } catch (error) {

        result.innerHTML = `
        <div class="verify-card">

            <h2 style="color:#ff4444;">SERVER ERROR</h2>

            <p>Unable to connect with VELREION database.</p>

        </div>`;

        console.log(error);

    }

}
// Auto Verify from QR Code
window.addEventListener("load", function () {

    const params = new URLSearchParams(window.location.search);
    const certificateId = params.get("id");

    if (certificateId) {

        document.getElementById("certificate").value = certificateId.toUpperCase();

        verifyOwner();

    }

});