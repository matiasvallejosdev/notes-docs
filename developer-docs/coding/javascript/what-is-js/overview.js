console.log('This is the overview JS file');

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  if(name!=null){
    para.textContent = `Player 1: ${name}`;
  }
}