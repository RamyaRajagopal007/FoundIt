function searchItem() {
  const text = document.getElementById("searchText").value.trim().toLowerCase();
  const status = document.getElementById("status");
  const results = document.getElementById("results");

  status.innerText = "";
  results.innerHTML = "";

  if (text === "") {
    status.innerText = "Please enter an item name";
    status.style.color = "#ffcccc";
    return;
  }

  const foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

  const matchedItem = foundItems.find(
    item => item.name.toLowerCase() === text
  );

  if (matchedItem) {
    status.innerText = "✅ Match Found!";
    status.style.color = "#00ffcc";

    results.innerHTML = `
      <li><strong>📍 Found at:</strong> ${matchedItem.place}</li>
      <li><strong>👤 Reported by:</strong> ${matchedItem.reporter}</li>
      <li><strong>📧 Contact:</strong> ${matchedItem.email}</li>
      <li><strong>📌 Status:</strong> ${matchedItem.status}</li>
    `;
  } else {
    status.innerText = "❌ No found report exists for this item yet";
    status.style.color = "#ffcccc";
  }
}
