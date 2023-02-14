const allRates = document.getElementsByClassName("rate");
const submitBtn = document.getElementById("rate-state-submit");
const submitContainer = document.getElementById("submit-state-container");
const rateContainer = document.getElementById("rate-state-container");
const selectedRate = document.getElementById("selected-rate");
const topRate = document.getElementById("top-rate");

const removeActiveState = () => {
    Array.from(allRates).forEach((element) => {
        element.classList.remove('active-state');
    });
}
const selectRate = (element) => {
    removeActiveState();
    element.classList.add("active-state");
}

const submitRate = () => {
    const activeState = document.getElementsByClassName("active-state");
    selectedRate.innerText = activeState[0].value;
    topRate.innerText = allRates.length.toString();
    submitContainer.style.visibility = "visible"
    rateContainer.style.visibility = "hidden"
}

for (let rate of Array.from(allRates)) {
    rate.addEventListener("click", () => selectRate(rate));
}
submitBtn.addEventListener("click", submitRate);
