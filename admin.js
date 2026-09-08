import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("add-btn").addEventListener("click", async () => {
    const model = document.getElementById("model").value;
    const ramrom = document.getElementById("ramrom-").value; // Thik korechen nicher line ti
    const color = document.getElementById("color").value;
    const price = document.getElementById("price").value;

    if(!model || !price) {
        alert("Model ar Price obossoi dite hobe!");
        return;
    }

    try {
        await addDoc(collection(db, "phones"), {
            model: model,
            ramrom: document.getElementById("ramrom").value,
            color: color,
            price: Number(price)
        });
        alert("Phone successful add hoyeche!");
        location.reload();
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Kono bhul hoyeche!");
    }
});