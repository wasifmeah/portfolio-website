// Fade in animation on scroll

const sections = document.querySelectorAll(
  ".section, .project-card, .card, .timeline-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


// Navbar background on scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(2, 6, 23, 0.9)";
  } else {
    navbar.style.background = "rgba(2, 6, 23, 0.6)";
  }
});


// Optional subtle floating effect

const glassCard = document.querySelector(".glass-card");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  glassCard.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;
});
// Scroll Reveal Animation

const hiddenElements = document.querySelectorAll(
  '.featured-card, .capability-card, .experience-card'
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });

});

hiddenElements.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});
// Reactive Background Movement

const blurOne = document.querySelector(".blur-one");
const blurTwo = document.querySelector(".blur-two");
const blurThree = document.querySelector(".blur-three");

document.addEventListener("mousemove", (e) => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blurOne.style.transform =
    `translate(${x * 30}px, ${y * 30}px)`;

  blurTwo.style.transform =
    `translate(${x * -40}px, ${y * -40}px)`;

  blurThree.style.transform =
    `translate(${x * 20}px, ${y * -20}px)`;

});