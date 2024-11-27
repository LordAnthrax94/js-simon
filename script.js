const conteggio = document.getElementById('display');
const selettorenum = document.querySelector('.schedanum');
let counter = 2 ;
const numform = document.getElementById('insnumeri');

let numerirandom = [];

const min = 1;
const max = 50;

 
for(let i = 0; i < 5; i++ ){
  numerirandom.push(Math.floor(Math.random((max + min) - min)* 50))  
}

console.log(numerirandom.toString())
document.getElementById('selezrndm').innerHTML = numerirandom.toString();

const timer = setInterval(function(){
  counter--;
  document.getElementById('display').innerHTML = counter;
  console.log(counter);

  if(counter == 0){
    clearInterval(timer)
    
    document.getElementById('insnumeri').classList.remove('d-none')
   // document.querySelector('.btn').classList.remove('d-none')
    document.getElementById('selezrndm').classList.add('d-none')
  }
},1000)

    
    


numform.addEventListener('submit', (event) => { 
  event.preventDefault() 
   const num1 = document.getElementById('num1')
   const num2 = document.getElementById('num2')
   const num3 = document.getElementById('num3')
   const num4 = document.getElementById('num4')
   const num5 = document.getElementById('num5')

    let numinseriti=[
      parseInt(num1.value), 
      parseInt(num2.value), 
      parseInt(num3.value), 
      parseInt(num4.value), 
      parseInt(num5.value)
    ]

    function validazione(array1, array2){
      return array1.filter(number => array2.includes(number))
    }

    let numvalidati = validazione(numinseriti, numerirandom);

    let x = numvalidati.length   
    
    confirm(x, numvalidati)  
    
    let numconfirm = confirm(x, numvalidati);

     numUtente = []

  //    for(let i = 0; i < numinseriti.lenght; i++){
  //     if(!isNaN(numinseriti[i]) && numinseriti[i] >= max && numinseriti[i] <= min && !numUtente.includes(numinseriti[i])){
  //       numUtente.push(numinseriti[i])
  //    }
     
  
  //  }
  //  console.log(numUtente);
})

function confirm(confirm1, confirm2){
  console.log(confirm1, confirm2);
}




let messaggio = document.getElementById('messaggio'); 






 
























