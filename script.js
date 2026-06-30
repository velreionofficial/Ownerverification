const API_URL = "https://script.google.com/macros/s/AKfycby3hJV8r9EIL0iggthm80iWzYN9ZyRhhBPaiGxGEQ_QlMF2z77ChnK1NAfwicGPeYE/exec";
async function verifyOwner() {

    const id = document.getElementById("certificate").value.trim().toUpperCase();
    const result = document.getElementById("result");

    if (!id) {
        result.innerHTML = `
        <div class="verify-card">
            <h2 style="color:#ff4444;">Enter Certificate ID</h2>
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

                <h2>${data.collection}</h2>

                <p><strong>Owner:</strong> ${data.owner}</p>

                <p><strong>Certificate ID:</strong> ${data.certificateId}</p>

                <p><strong>Product:</strong> ${data.product}</p>

                <p><strong>Size:</strong> ${data.size}</p>

                <p><strong>Color:</strong> ${data.color}</p>

                <p><strong>Edition:</strong> ${data.edition}</p>

                <p style="color:#66ff66;font-size:26px;margin-top:20px;">
                ✔ Ownership Verified
                </p>

            </div>`;
        }

        else {

            result.innerHTML = `
            <div class="verify-card">

            <h2 style="color:#ff4444;">INVALID CERTIFICATE</h2>

            <p>This Certificate ID does not exist.</p>

            </div>`;
        }

    }

    catch (err) {

        result.innerHTML = `
        <div class="verify-card">

        <h2 style="color:#ff4444;">SERVER ERROR</h2>

        <p>Unable to connect with database.</p>

        </div>`;

        console.log(err);

    }

}