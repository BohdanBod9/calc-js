const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .buttons button')
    .forEach( btn => btn.addEventListener('click', btnClicked));

document.querySelector('.calc .back').addEventListener('click', back);


function btnClicked(ev) {
    display.value += ev.target.innerText;

}
document.querySelector('.calc .eq').addEventListener('click' ,
  () => display.value = eval(display.value) );

document.querySelector('.calc .reset') .addEventListener ('click' , function () {
    display.value = '';
    display.classList.remove('not-allowed');
    symbols = 1;
    valueTemp = '';
    valPointData = 0; });

function back() {
    const exp = display.value;
    display.value = exp.substr(0, exp.length - 1);};
