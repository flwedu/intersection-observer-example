const allBoxes = document.querySelectorAll(".box");

/**
 * Handle the intersection event
 * @param {IntersectionObserverEntry[]} entries
 * @param {IntersectionObserver} observer
 */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.5) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
    entry.target.querySelector("p").textContent = `${(
      entry.intersectionRatio * 100
    ).toFixed(2)}%`;
  });
}

const boxObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: [0, 0.25, 0.5, 0.75, 1],
});

allBoxes.forEach((box) => boxObserver.observe(box));
