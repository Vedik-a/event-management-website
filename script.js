var p = document.querySelector("#pointer");
var pp = document.querySelector("#pb");

document.addEventListener("mousemove", function(dets) {
    p.style.left = dets.x + "px";
    p.style.top = dets.y + "px";
    pp.style.left = (dets.x - 150) + "px";
    pp.style.top = (dets.y - 150) + "px";
});
gsap.to("#nav", {
    backgroundColor: "transparent",
    height: 120,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        scrub: 2
    }
});
gsap.to("#main", {
    backgroundColor: "#968979",
    scrollTrigger: {
        trigger: "#main",
        start: "top -25%",
        end: "top -100%",
        scrub: 2
    }
});
gsap.from("#aboutus img,#aboutin",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus", 
    scroller:"body",
    start: "top 60%",
    end:"top 58%",
scrub:3
   }
});
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        trigger:"#card", 
    scroller:"body",
    start: "top 60%",
    end:"top 58%",
scrub:3
   }
});
gsap.from("#quote",{
    x:-70,
    y:-70,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#quote", 
    scroller:"body",
    start: "top 60%",
    end:"top 58%",
    scrub:1
   }
});
gsap.from("#quote2", {
    x: 70,
    y: 70,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#quote2",
      scroller: "body",
      start: "top 80%",  
      end: "top 40%",    
      scrub:1
    }
  });
 gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 80%",  
        end: "top 40%",    
        scrub:3
    }
 });
  