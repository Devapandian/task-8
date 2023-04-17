const mySpan = document.getElementById('my-span');

mySpan.addEventListener('mouseover', () => {
  mySpan.style.color = 'red';
});

mySpan.addEventListener('mouseout', () => {
  mySpan.style.color = '';
});
