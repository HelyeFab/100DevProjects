window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const navToggler = document.querySelector(".navbar__toggler");
const navTogglerBurger = document.querySelector(".navbar__toggler-burger");
const navBar = document.querySelector(".navbar__menu");

navToggler.addEventListener("click", () => {
  navToggler.classList.toggle("open");
  navTogglerBurger.classList.toggle("open");
  navBar.classList.toggle("open");
});


window.addEventListener("mouseup", function (e) {
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
  }
});

//! Temperature Converter

const errorMsg = document.querySelector(".errorMsg");
const tempFahr = document.querySelector("#tempChoice2");
const tempCels = document.querySelector("#tempChoice1");
const displayResult = document.querySelector(".content-display");
const convertBtn = document.querySelector(".tempBtn");
const cupBtn = document.querySelector(".cupBtn");

// !Temp Converter
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const tempInput = document.querySelector("#temp").value;

  if (tempInput === "") {
    errorMsg.classList.add("active");
    displayResult.classList.remove("active");
    errorMsg.innerText = "Please enter a number";
  } else {
    if ((errorMsg.innerText = "Please enter a number"))
        errorMsg.classList.remove("active");
      if (tempFahr.checked) {
         let tempConversion = parseInt((tempInput * 9 / 5) + 32 );
         displayResult.classList.add("active");
         displayResult.innerText = tempConversion;
      } else {
          let tempConversion = ( (parseInt(tempInput) - 32) * 5/9).toFixed(2);
          displayResult.classList.add("active");
          displayResult.innerText = tempConversion;
          
      }
      
  }
});

//! Text Converter

const textToConvert = document.getElementById('text');
const textBtn = document.querySelector('.textBtn');


textBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const textConverted = textToConvert.value.toLowerCase();
  textToConvert.value = '';
  textToConvert.value = textConverted;


  

})

//! Pokemon Trainer

const pokeball = document.querySelectorAll('.content-visual-item');
const pokeDisplayText = document.querySelector('.poke-displayText');

console.log(pokeDisplayText);

pokeball.forEach((el) => {
  el.addEventListener('click', () => {
    pokeDisplayText.innerText = '';
    
    document.querySelector('.poke-display img');
    const pokeDisplay = document.querySelector(".poke-display img");
    let randomFile = Math.floor(Math.random() * 3 + 1);
    let randomPokemon = pokeDisplay.attributes[0].value = `/css/assets/img/File_${randomFile}.png`;
    console.log(randomPokemon);
 
    if (randomPokemon === '/css/assets/img/File_2.png') {
      pokeDisplayText.innerHTML =
        "<mark>Bulbasaur </mark><br> is going to be your friend";
    } else if (randomPokemon === "/css/assets/img/File_1.png") {
      pokeDisplayText.innerHTML =
        "<mark>Pikachu </mark><br>is going to be your friend";
    } else if (randomPokemon === "/css/assets/img/File_3.png") {
      pokeDisplayText.innerHTML = "<mark>Charmander </mark> <br> is going to be your friend";
    }
   
    


   


  })
});