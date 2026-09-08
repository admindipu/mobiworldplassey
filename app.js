import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Apnar Firebase Config ekhane din (Firebase console theke paben)
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

async function loadPhones() {
    const container = document.getElementById("phone-list");
    container.innerHTML = "Loading...";
    
    const querySnapshot = await getDocs(collection(db, "phones"));
    container.innerHTML = "";
    
    querySnapshot.forEach((doc) => {
        const phone = doc.data();
        container.innerHTML += `
            <div class="card">
                <h3>${phone.model}</h3>
                <p>RAM/ROM: ${phone.ramrom}</p>
                <p>Color: ${phone.color}</p>
                <p class="price">Price: ৳${phone.price}</p>
            </div>
        `;
    });
}

loadPhones();