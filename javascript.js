let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);
let color = 'black';
let container = document.querySelector('.container');
let slider = document.getElementById('myRange');
let counter = document.querySelector('.counter');
let applyBtn= document.querySelector('.btn');
//setting the slider value
slider.addEventListener('input', sliderChange);
function sliderChange() {
  counter.innerText= `grid size:${this.value}`;
}
//container size
   function populateBoard(){
    let sliderValue = slider.value
    let cells = container.querySelectorAll('div');
    cells.forEach((div)=> div.remove());
    container.style.gridTemplateColumns=`repeat(${sliderValue}, 1fr)`;
    container.style.gridTemplateRows=`repeat(${sliderValue}, 1fr)`;

    let count= sliderValue*sliderValue
    for(let i=0;i<=count;i++){
        let cell= document.createElement('div');
        cell.style.backgroundColor = 'pink';
        cell.addEventListener('mouseover', changeClr)
        container.insertAdjacentElement('beforeend', cell);
    }
   }
   function changeClr(){
    this.style.backgroundColor= `rgb(${r},${g},${b})`
   }

   
   applyBtn.addEventListener('click', populateBoard)
   //reset button
reset.addEventListener('click', clear);
function clear(){
    let cells = container.querySelectorAll('div');
    cells.forEach((div)=> div.style.backgroundColor='pink');
}





