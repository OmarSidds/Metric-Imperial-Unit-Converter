
const inputNumber = document.getElementById("input-Number");
const convertBtn = document.getElementById("convert-Btn");
const lengthConversion = document.getElementById("length-conversion");
const volumeConversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");


convertBtn.addEventListener('click', function(){
    const value = inputNumber.value;
    let feet = (value * 3.28084).toFixed(3); 
    let meters = (value * 0.3048).toFixed(3);

    lengthConversion.innerHTML = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;


    let gallons = (value * 0.264172).toFixed(3); 
    let liters = (value * 3.78541).toFixed(3);

    volumeConversion.innerHTML = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;


    let pounds = (value * 2.20462).toFixed(3); 
    let kilos = (value * 0.453592).toFixed(3);

    massConversion.innerHTML = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`

})