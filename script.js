function loginnow() {
  var username = document.getElementById("ufield").value;
  var password = document.getElementById("pfield").value;
  switch (username) {
    case "testusr":
      switch (password) {
        case "testpsswrd123":
          window.location.href = "testusr.html";
          break
        default:
          alert("wrong username or password");
          break
      }
      break;
    default:
      alert("Wrong username or password!");
      break
  }
}
