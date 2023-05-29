let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');
let resetButton = document.getElementById('reset');
let initialPositions = [];

for (let list of lists) {
    initialPositions[list.id] = list.parentElement;
    list.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

}

rightBox.addEventListener('dragover', (event) => {
    event.preventDefault();
});

rightBox.addEventListener('drop', (event) => {
    event.preventDefault(); 
    const id = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    if(draggedElement){
      rightBox.appendChild(draggedElement);
  }

resetButton.addEventListener('click', () => {
  for(let list of lists) {
    initialPositions[list.id].appendChild(list);
  }
});
});