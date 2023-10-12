let selected = 0;

const submit = document.querySelector(".submit");
const ratingButtons = document.querySelectorAll(".rating__button");
const ratingCard = document.querySelector(".rating__card");
const ThankuCard = document.querySelector(".thanku__card");
const result = document.querySelector(".result");

//    Handling submit button   //
submit.addEventListener("click", function (e) {
  e.preventDefault();
  ratingCard.classList.add("hidden");
  ThankuCard.classList.remove("hidden");
  result.textContent = `You selected ${selected} out of 5.`;
});

//  Event Delegation on buttons //
document
  .querySelector(".rating__button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    //Matching Strategy
    if (e.target.classList.contains("btn")) {
      const id = e.target;
      selected = id.innerHTML;
    }
  });
