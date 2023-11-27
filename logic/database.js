// DATABASE

  // Adding database library and importing basic methods I intend to use
  import {getDatabase, set, get, ref, child} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDK7Vf32YbsZFMMrAVeYrV02iZPy2aKGqc",
    authDomain: "portfoliowebsite-ccb6b.firebaseapp.com",
    databaseURL: "https://portfoliowebsite-ccb6b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfoliowebsite-ccb6b",
    storageBucket: "portfoliowebsite-ccb6b.appspot.com",
    messagingSenderId: "127508765771",
    appId: "1:127508765771:web:3bbd66a956b1d0eee501ce",
    measurementId: "G-3P9LSMQLYX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

  var enterEmail = document.querySelector("#enterEmail");
  var enterDate = document.querySelector("#enterDate");
  var enterName = document.querySelector("#enterName");
  var enterDescription = document.querySelector("#enterDescription");

  var submitBtn = document.querySelector("#submit");

  var count = 0;

  function SubmitData() {
    set(ref(db, "Review" + count + "/" + enterName.value + Math.floor((Math.random() * 10) + 1)),{
        Email: enterEmail.value,
        Date: enterDate.value,
        Name: enterName.value,
        Description: enterDescription.value
    })
    .then(()=>{
        count ++;
        alert("Data added successfully!");
    })
    .catch((error)=>{
        alert(error);
    });
}

submitBtn.addEventListener('click', SubmitData);

// TIMER

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
}

setInterval(updateTime, 1000);

updateTime();