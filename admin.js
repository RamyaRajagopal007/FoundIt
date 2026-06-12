function loadAdminData() {
  const adminDiv = document.getElementById("adminContent");

  const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
  const foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

  let html = "";

  // LOST ITEMS
  html += "<h3>🔴 Lost Items</h3>";
  if (lostItems.length === 0) {
    html += "<p>No lost items reported.</p>";
  } else {
    lostItems.forEach((item, index) => {
      html += `
        <div class="admin-card lost">
          <p><strong>Item:</strong> ${item.name}</p>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Lost Place:</strong> ${item.place}</p>
          <p><strong>Reported By:</strong> ${item.reportedBy}</p>
          <p><strong>Email:</strong> ${item.email}</p>
        </div>
      `;
    });
  }

  // FOUND ITEMS
  html += "<h3>🟢 Found Items</h3>";
  if (foundItems.length === 0) {
    html += "<p>No found items reported.</p>";
  } else {
    foundItems.forEach((item, index) => {
      html += `
        <div class="admin-card found">
          <p><strong>Item:</strong> ${item.name}</p>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Found Place:</strong> ${item.place}</p>
          <p><strong>Reported By:</strong> ${item.reportedBy}</p>
          <p><strong>Email:</strong> ${item.email}</p>
        </div>
      `;
    });
  }

  adminDiv.innerHTML = html;
}
