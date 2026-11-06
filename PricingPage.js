const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");

function setBilling(yearly) {
  monthlyButton.classList.toggle("selected", !yearly);
  yearlyButton.classList.toggle("selected", yearly);

  monthlyButton.setAttribute("aria-pressed", String(!yearly));
  yearlyButton.setAttribute("aria-pressed", String(yearly));

  document.querySelectorAll(".plan").forEach(function (plan) {
    const amount = plan.querySelector(".amount");
    let price = Number(amount.dataset.month);

    if (yearly) {
      price = Number(amount.dataset.year);
    }

    amount.textContent = "$" + price.toFixed(2);
    let note = "Billed monthly";

    if (price === 0) {
      amount.textContent = "$0";
      note = "Free forever";
    } else if (yearly) {
      note = "$" + (price * 12).toFixed(2) + " CAD billed yearly";
    }

    plan.querySelector(".billing-note").textContent = note;
  });
}

monthlyButton.addEventListener("click", function () {
  setBilling(false);
});

yearlyButton.addEventListener("click", function () {
  setBilling(true);
});
