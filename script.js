const conteggio = document.getElementById('display');
const selettorenum = document.querySelector('.schedanum');
let counter = 11 ;
const bottone = document.querySelector('.btn');

let numerirandom = [];

const min = 1;
const max = 50;

 
for(let i = 0; i < 5; i++ ){
  numerirandom.push(Math.floor(Math.random((max - min) + min)* 50))
}

document.getElementById('selezrndm').innerHTML = numerirandom;

const timer = setInterval(function(){
  counter--;
  document.getElementById('display').innerHTML = counter;
  console.log(counter);

  if(counter == 0){
    clearInterval(timer)
    document.querySelector('.schedanum').classList.remove('d-none')
    document.querySelector('.btn').classList.remove('d-none')
    document.getElementById('selezrndm').classList.add('d-none')
  }
},1000)







console.log(numerirandom);










