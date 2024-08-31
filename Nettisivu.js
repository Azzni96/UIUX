document.addEventListener("DOMContentLoaded", () => {
  // Hae tarvittavat elementit
  const Kuva = document.getElementById("Kuva");
  const Logo = document.getElementById("Logo");
  const container = document.querySelector(".container");
  const otherSections = document.querySelectorAll(".info");
  const mainElement = document.querySelector("main");

  // Näytä tai piilota container ja muokkaa taustakuvaa
  Kuva.onclick = function () {
    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
      document.body.style.backgroundImage = "url('ruoka.jpg')";
      mainElement.style.display = "none";
      otherSections.forEach((element) => (element.style.display = "none"));
      Kuva.style.display = "none";
    } else {
      container.style.display = "block";
      document.body.style.backgroundImage = "none";
      mainElement.style.display = "none";

      document.body.style.backgroundImage = "url('ruoka.jpg')";
      otherSections.forEach((element) => (element.style.display = "block"));
    }
  };

  // Sulje container
  Logo.onclick = function () {
    if (container.style.display === "block" || container.style.display === "") {
      container.style.display = "none";
      document.body.style.backgroundImage = "url('ruoka.jpg')";
      mainElement.style.display = "block";
      otherSections.forEach((element) => (element.style.display = "block"));
      Kuva.style.display = "block";
    } else {
      container.style.display = "block";
      document.body.style.backgroundImage = "none";
      mainElement.style.display = "none";
      document.body.style.backgroundImage = "url('ruoka.jpg')";
      otherSections.forEach((element) => (element.style.display = "block"));
    }
  };

  // Vaihda kirjautumis- ja rekisteröitymislomakkeiden välillä
  const switchBtn = document.getElementById("switch-btn");
  const loginForm = document.getElementById("Login");
  const registerForm = document.getElementById("register-form");
  const formTitle = document.getElementById("form-title");

  switchBtn.addEventListener("click", () => {
    loginForm.classList.toggle("active");
    registerForm.classList.toggle("active");

    if (loginForm.classList.contains("active")) {
      formTitle.textContent = "Log In";
      switchBtn.textContent = "Don't have an account? Sign up now";
      registerForm.classList.remove("active");
    } else {
      formTitle.textContent = "Sign Up";
      switchBtn.textContent = "Already have an account? Log in";
      loginForm.classList.remove("active");
    }
  });
});
