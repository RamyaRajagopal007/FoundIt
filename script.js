let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
let foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

function addLost() {
  let arr = JSON.parse(localStorage.getItem("lostItems")) || [];

  arr.push({
    name: lostName.value,
    category: lostCategory.value,
    place: lostPlace.value,
    reportedBy: lostUser.value,
    email: lostEmail.value
  });

  localStorage.setItem("lostItems", JSON.stringify(arr));
  location.href = "success.html";
}

function addFound() {
  let arr = JSON.parse(localStorage.getItem("foundItems")) || [];

  arr.push({
    name: foundName.value,
    category: foundCategory.value,
    place: foundPlace.value,
    reportedBy: foundUser.value,
    email: foundEmail.value
  });

  localStorage.setItem("foundItems", JSON.stringify(arr));
  location.href = "success.html";
}
