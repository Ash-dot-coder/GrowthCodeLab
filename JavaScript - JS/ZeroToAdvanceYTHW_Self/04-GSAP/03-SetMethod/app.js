gsap.set(".box", {
  opacity: 0,
  background: "yellow",
});

gsap.to(".box", {
  opacity: 1,
  background: "crimson",
  duration: 2.11,
  y: 180,
  repeat: -1,
  yoyo: true,
});
