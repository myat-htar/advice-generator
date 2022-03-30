let adviceID = document.querySelector(".advice-id");
let message = document.querySelectorAll(".advice-message");
let btn = document.getElementById("btn");
async function fetchData() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  let { id, advice } = Object.values(data)[0];
  adviceID.classList.remove("loading-heading");
  message[0].classList.remove("loading-text");
  message[1].remove();
  adviceID.textContent = `advice #${id}`;
  message[0].textContent = advice;
}
fetchData().catch((err) => console.log(err));
fetchData();
btn.addEventListener("click", fetchData);
