const conteggio = document.getElementById('display');
const selettorenum = document.querySelector('.schedanum');
let counter = 11 ;
const bottone = document.getElementById('btn');

const timer = setInterval(function(){
  counter--;
  document.getElementById('display').innerHTML = counter;
  console.log(counter);

  if(counter == 0){
    clearInterval(timer)
    selettorenum.classList.add('d-hide')
    bottone.classList.remove('d-hide')
  }
},1000)







