const feedbackEl = document.querySelector(".feedback-container");
const resultEl = document.querySelector(".result-container");

const ratingBtnEl = document.querySelectorAll(".rating");

const submitEl = document.querySelector(".btn");

ratingBtnEl.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    // event.target.textContent;
    chooseNumber();
    ratingBtnEl[index].classList.add("active");
    submitEl.addEventListener("click", () => {
      feedbackEl.style.display = "none";
      resultEl.classList.add("show");
      resultEl.innerHTML = `        
      <div class="img-box">
          <img src="./images/illustration-thank-you.svg" alt="Thanks img" />
        </div>
        <p class="select-result">You selected <span>${event.target.textContent} </span>out of 5</p>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>`;
    });
  });
});

function chooseNumber() {
  ratingBtnEl.forEach((btn) => {
    btn.classList.remove("active");
  });
}
