let tl = gsap.timeline();

tl.from("#img1", {
  delay: 0.3,
  opacity: 0,
  duration: 0.8,
  y: 100,
});
tl.from(
  "#img2",
  {
    delay: 0.3,
    opacity: 0,
    duration: 0.8,
    x: 100,
  },
  "-=0.8"
);
tl.from(
  "#img3",
  {
    delay: 0.3,
    opacity: 0,
    duration: 0.8,
    y: -100,
  },
  "-=0.8"
);
tl.from(
  "#main h1",
  {
    delay: 0.3,
    opacity: 0,
    duration: 0.8,
  },
  "-=0.8"
);

gsap.from("#page2 h5,#page2 h1, #about-us", {
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2 h5",
    scroller: "body",
    start: 'top 80%',
  },
});
