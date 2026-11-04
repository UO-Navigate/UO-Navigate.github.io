var questions = document.getElementsByClassName("faq-question");

for (var i = 0; i < questions.length; i++) {
  questions[i].onclick = function () {
    var item = this.parentElement;
    var answer = item.getElementsByClassName("faq-answer")[0];

    if (item.classList.contains("active")) {
      item.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  };
}
