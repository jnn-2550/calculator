const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.display');
const equalBtn = document.querySelector('.equal-btn');
const clearlBtn = document.querySelector('.clear-btn');
const delBtn = document.querySelector('.del-btn');


for (let i = 0; i < btns.length; i++) 
   {
    btns[i].addEventListener('click',  function() {
let button = btns[i].getAttribute('value');
  screen.value += button;
    }) 
  }


equalBtn.addEventListener('click', function() {
  let value = eval(screen.value);
  screen.value = value;
})

clearlBtn.addEventListener('click', function() {
  screen.value = '';
})

delBtn.addEventListener('click', function() {
  screen.value = screen.value.toString().slice(0,-1);

})