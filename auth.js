function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
  } 
  else if (user !== "" && pass !== "") {
    localStorage.setItem("role", "user");
    window.location.href = "index.html";
  } 
  else {
    alert("Please enter credentials");
  }
}
