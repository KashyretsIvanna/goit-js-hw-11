const inp = document.getElementById('font-size-control');
const sp = document.getElementById('text');

inp.addEventListener('input', () => {
  let siz = inp.value;
  sp.style.fontSize = siz + 'px';
});
