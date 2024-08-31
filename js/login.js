const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});


// 자동으로 슬라이드 넘기기 setInterval(function, 1초=1000)

let currentIndex = 1;
const getInterval = () => {
  return setInterval(() => {
  currentIndex++;
  currentIndex = currentIndex >= bullets.length+1 ? 1 : currentIndex;
  let currentImage = document.querySelector(`.img-${currentIndex}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(currentIndex  - 1) * 2.2}rem)`;

  let currentBullet = document.querySelector(`.bullets span:nth-child(${currentIndex})`)
  bullets.forEach((bull) => bull.classList.remove("active"));
  currentBullet.classList.add("active");

  }, 3000);
}

let interval = getInterval(); // interval 등록
