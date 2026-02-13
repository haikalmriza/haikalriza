document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});

const text = "Data Analyst | Machine Learning | Problem Solver";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector(".hero p").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

document.querySelector(".hero p").textContent = "";
typeEffect();
