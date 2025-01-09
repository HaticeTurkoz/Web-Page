function validateForm() {
  // Form elemanlarını al
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kullanıcı adı ve şifre doğrulama
  if (username === "" || password === "") {
    alert("Kullanıcı adı ve şifre boş olamaz.");
    return false; // Formun gönderilmesini engelle
  }

  if (username.length < 5) {
    alert("Kullanıcı adı en az 5 karakter olmalıdır.");
    return false; // Formun gönderilmesini engelle
  }

  if (password.length < 4) {
    alert("Şifre en az 4 karakter olmalıdır.");
    return false; // Formun gönderilmesini engelle
  }

  if (password !== "1234" || username !== "admin") {
    return false;
  }
  // Başarılı doğrulama sonrası formun gönderilmesine izin ver
  return true;
}
