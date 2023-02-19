const calcBtn = document.querySelector("button");
const litres = document.querySelector("#litres");
const kilometres = document.querySelector("#kilometres");

function averageFuelConsumption(lt, km) {
  const result = document.querySelector(".result");
  averageConsumption = Math.round(((lt * 100) / km) * 10) / 10;
  kpl = Math.round((km / lt) * 10) / 10;
  mpg = Math.round(((km * 0.62137119224) / (lt * 0.264172)) * 10) / 10;

  return (result.innerHTML = `Your vehicle's average fuel consumption is ${averageConsumption} 
  litres per 100km / ${kpl}  km per litre, wich equals <span class="markup">${mpg} miles per gallon (US)</span>`);
}
calcBtn.addEventListener("click", (e) => {
  averageFuelConsumption(litres.value, kilometres.value);
});
