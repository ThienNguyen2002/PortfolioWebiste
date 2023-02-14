window.addEventListener("load", function() {
	let stickyTop = 0,
	  scrollTarget = false;
  
	let timeline = document.querySelector(".timeline__nav"),
	  items = timeline.querySelectorAll("li"),
	  milestones = document.querySelectorAll(".timeline__section .milestone"),
	  offsetTop = parseInt(window.getComputedStyle(timeline).top);
  
	const TIMELINE_VALUES = {
	  start: 190,
	  step: 30
	};
  
	window.addEventListener("resize", function() {
	  timeline.classList.remove("fixed");
  
	  stickyTop = timeline.offsetTop - offsetTop;
  
	  window.dispatchEvent(new Event("scroll"));
	});
	window.dispatchEvent(new Event("resize"));
  
	window.addEventListener("scroll", function() {
	  if (window.scrollY > stickyTop) {
		timeline.classList.add("fixed");
	  } else {
		timeline.classList.remove("fixed");
	  }
	});
	window.dispatchEvent(new Event("scroll"));
  
	for (let i = 0; i < items.length; i++) {
	  items[i].querySelector("span").addEventListener("click", function() {
		let li = this.parentNode,
		  index = Array.from(li.parentNode.children).indexOf(li),
		  milestone = milestones[index];
  
		if (
		  !li.classList.contains("active") &&
		  milestone !== undefined
		) {
		  scrollTarget = index;
  
		  let scrollTargetTop = milestone.offsetTop - 80;
  
		  window.scroll({
			top: scrollTargetTop,
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		  });
  
		  setTimeout(function() {
			scrollTarget = false;
		  }, 400);
		}
	  });
	}
  
	window.addEventListener("scroll", function() {
	  let viewLine = window.scrollY + window.innerHeight / 3,
		active = -1;
  
	  if (scrollTarget === false) {
		for (let i = 0; i < milestones.length; i++) {
		  if (milestones[i].offsetTop - viewLine > 0) {
			break;
		  }
  
		  active++;
		}
	  } else {
		active = scrollTarget;
	  }
  
	  timeline.style.top =
		-1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + "px";
  
	  for (let i = 0; i < items.length; i++) {
		if (items[i].classList.contains("active")) {
		  items[i].classList.remove("active");
		}
	  }
  
	  items[active != -1 ? active : 0].classList.add("active");
	});
	window.dispatchEvent(new Event("scroll"));
  });
  document.getElementById("back-button").addEventListener("click", function() {
    window.history.back();
  });
    