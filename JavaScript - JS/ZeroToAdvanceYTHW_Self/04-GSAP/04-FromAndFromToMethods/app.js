// from: In from method you don't have to specify the inital state, (It will figure out by itself)

gsap.from(".box1", {
  x: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

// fromTo: In fromTo method you have to specify the default value, ans also the new animation state.
gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
  }
);

gsap.fromTo(
  ".box3",
  {
    // x: 300,
    opacity: 0,
  },
  {
    x: 340,
    opacity: 1,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true,
  }
);
