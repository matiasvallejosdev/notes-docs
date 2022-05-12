console.log('This is the overview JS file');

// Select element by id
const nameId = document.getElementById('name');

nameId.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  if(name!=null){
    nameId.textContent = `${name}`;
  }
}