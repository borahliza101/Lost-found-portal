function login() {
  const reg = document.getElementById("reg").value.trim().toUpperCase();
  const pass = document.getElementById("pass").value;

  const regex = /^\d{2}[A-Z]{3}\d{4}$/;

  if (!regex.test(reg)) {
    document.getElementById("error").innerText =
      "Invalid Reg Number format (e.g. 24BKT0093)";
    return;
  }

  const users = [
    { reg: "24BKT0093", pass: "1234" },
    { reg: "23BCE2459", pass: "abcd" }
  ];

  const user = users.find(u => u.reg === reg && u.pass === pass);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userReg", reg);
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}