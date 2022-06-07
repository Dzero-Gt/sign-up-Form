function verifyPassword (form) {
  
}

form = document.getElementById("odin");
form.addEventListener('submit', function (e) {
  const password = form.password.value;
  const passwordConfirm = form.passwordConfirm.value;
  const alert = document.getElementById("passConf")
    let match = true;
  if (password != passwordConfirm) {
    alert.textContent = "Passwords do not match!";
    e.preventDefault();
    $('#password').insertRule('border : 2px solid red')
    $('#passwordConfirm').addClass('invalid');
    
  }
});