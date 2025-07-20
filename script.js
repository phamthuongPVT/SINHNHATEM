let password = "";
const correctPassword = "280605";
const passwordInput = document.getElementById("password");

function addNumber(number) {
  if (password.length < 6) {
    password += number;
    passwordInput.value = password;
    passwordInput.classList.add("active");
  }
}

function clearPassword() {
  password = "";
  passwordInput.value = password;
  passwordInput.classList.remove("active");
}

function checkPassword() {
  if (password === correctPassword) {
    alert("Mật khẩu đúng! Chẩn bị đón bất ngờ nè!!");
    window.location.href = "sinhnhat.html";
  } else {
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
      alert("Mật khẩu sai! Vui lòng thử lại.");
      clearPassword();
    }, 500);
  }
} 

function createHeartEffects() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.backgroundColor = `hsl(${Math.random() * 20 + 330}, 80%, ${Math.random() * 20 + 60}%)`;
    document.body.appendChild(heart);
  }
}

window.addEventListener("load", () => {
  createHeartEffects();
});
function showErrorMessage(message) {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
  errorDiv.classList.add("show");

  setTimeout(() => {
    errorDiv.classList.remove("show");
    errorDiv.classList.add("hidden");
  }, 2000); // hiện 2 giây
}

function checkPassword() {
  if (password === correctPassword) {
  // Hiệu ứng nhỏ (nếu muốn thêm sau), rồi chuyển trang
  passwordInput.classList.add("success");

  setTimeout(() => {
    window.location.href = "sinhnhat.html";
  }, 300); // delay nhẹ cho mượt
}
 else {
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
      showErrorMessage("Mật khẩu sai! Vui lòng thử lại.");
      clearPassword();
    }, 500);
  }
}
