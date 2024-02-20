let body = document.body,
  scroll_counter = 0,
  auto_scroll_kicked = false,
  scroller; // Declare scroller globally

// Start auto-scrolling when the page loads
window.addEventListener("load", startAutoScrolling);

function startAutoScrolling() {
  auto_scroll_kicked = true;
  // Increase the scroll counter
  scroll_counter += 1.8;
  // Set the scroll position
  document.documentElement.scrollTop = scroll_counter;
  // Request the next animation frame
  scroller = window.requestAnimationFrame(startAutoScrolling);

  // Cancel the animation frame when the scrolling reaches the end
  if (scroll_counter >= body.offsetHeight) {
    window.cancelAnimationFrame(scroller);
  }
}

// Stop auto-scrolling when the user scrolls manually
window.addEventListener("wheel", () => {
  if (auto_scroll_kicked) {
    window.cancelAnimationFrame(scroller);
    auto_scroll_kicked = false;
  }
});
