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

const cupDisplay = document.querySelector(".cup-display");
// !Cup Converter
cupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const cupInput = document.querySelector("#cup").value;

  if (cupInput === "") {
    errorMsg.classList.add("active");
    cupDisplay.classList.remove("active");
    errorMsg.innerText = "Please enter a number";
  } else {
    if ((errorMsg.innerText = "Please enter a number"))
      errorMsg.classList.remove("active");
    if (document.querySelector('#cupChoice1').checked) {
      let cupConversion = parseInt(cupInput * 128);
      cupDisplay.classList.add("active");
      cupDisplay.innerText = ` ${cupConversion} gr`;
    } else {
      let cupConversion = parseInt(cupInput / 128);;
      cupDisplay.classList.add("active");
      cupDisplay.innerText = ` ${cupConversion} cup`;
    }
  }
});
