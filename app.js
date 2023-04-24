const spanbtn = document.getElementById("spanbtn");

//Span tag on the signup page
spanbtn.addEventListener("click", spanSign);
function spanSign() {
  document.getElementById("name").style.display = "none";
  document.getElementById("signupBtn").style.setProperty("background-color", "#33A5FF");
  document.getElementById("signupBtn").textContent="Sign In";
  document.getElementById("googletext").textContent="Sign In with Google";
  document.getElementById("signedin").style.display = "none";
  document.getElementById("signedup2").style.display = "block";
  document.getElementById("welcome").textContent = "Hello Again.";
  document.getElementById("signtoruche").textContent = "Sign in to Ruche";
  document.getElementById("email").placeholder = "Email or username";
  document.getElementById("password").placeholder = "Password";
  document.getElementById("createpassword").style.display = "none";
  document.getElementById("youremail").style.display = "none";
  document.getElementById("youremail").style.display = "none";
}


document.querySelector("#join").addEventListener("click", function () {
  document.querySelector("#signscroll").scrollIntoView({
    behavior: "smooth",
  });
});