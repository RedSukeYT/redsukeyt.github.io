// Loader
window.addEventListener("load", () => {
  gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => document.querySelector(".loader").remove()
  });
});

// Play videos on hover
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});

// GSAP animations
gsap.from(".hero h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power3.out"
});
