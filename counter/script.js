(() => {
  const minusButton = document.querySelector(".minus-button");
  const plusButton = document.querySelector(".plus-button");
  const counterValueSpan = document.querySelector(".counter-value");

  const minusButtonHandler = () => {
    let counterValue = +counterValueSpan.innerHTML;
    if (counterValue > 0) {
      counterValueSpan.innerHTML = --counterValue;
    }
  };

  const plusButtonHandler = () => {
    let counterValue = +counterValueSpan.innerHTML;
    counterValueSpan.innerHTML = ++counterValue;
  };

  minusButton.addEventListener("click", minusButtonHandler);
  plusButton.addEventListener("click", plusButtonHandler);
})();
