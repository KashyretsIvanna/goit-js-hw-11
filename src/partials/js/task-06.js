document.getElementById('validation-input').addEventListener('blur', () => {
  const el = document.querySelector("input[data-length='6']");

  if (el.value.length > el.dataset.length) {
    document.getElementById('validation-input').classList.add('invalid');
    document.getElementById('validation-input').classList.remove('valid');
  } else {
    document.getElementById('validation-input').classList.add('valid');
    document.getElementById('validation-input').classList.remove('invalid');
  }
  console.log(el.dataset.length);
});
