const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form =  document.querySelector('form');
form.addEventListener('submit',handelbmi)
 
function handelbmi(e){
e.preventDefault();
calculateBmi();
}

const inputs = document.querySelectorAll('input')

function calculateBmi(){
 const height = inputs[0].value;
 const weight = inputs[1].value

 if (!height || !weight || height <=0 || weight<=0) {
   handelError()
 }
const  BMI = (weight/Math.pow(height/100,2)).toFixed(1);
console.log(BMI)
handelResult (BMI)
}
const displayBmi =  document.querySelector('.bmi-value')
const result = document.querySelector('.result')

function handelError(){
  displayBmi.textContent= "Wops"
  displayBmi.style.color="inherit" 
  result.textContent = "Remplissez correctement les inputs"
}


 function handelResult( value){
    const rank = BMIData.find( data =>{
    if (value >=data.range[0] && value <data.range[1]) return data
    else if(typeof data.range ==="number" && value > data.range) return data 
   })
   displayBmi.textContent= value
   displayBmi.style.color=`${rank.color}`
   result.textContent = "Resultat: "+ `${rank.name}`

 }
