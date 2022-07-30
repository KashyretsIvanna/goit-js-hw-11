textOfInput = '';
document.getElementById('name-input').addEventListener('input', () => {
  textOfInput = document.getElementById('name-input').value;
  console.log(textOfInput);

  if (textOfInput === '') {
    document.getElementById('name-output').innerText = 'Anonimus';
  } else {
    document.getElementById('name-output').innerText = textOfInput;
  }
});
