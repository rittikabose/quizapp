function setDivMargins() {
    // Get the screen width.
    var screenWidth = window.innerWidth;
  
    // Calculate the desired margin based on the screen width.
    var margin = screenWidth * 0.05;
  
    // Set the div margins.
    var div = document.querySelector(".my-div");
    div.style.margin = margin + "px";
  }
  
  // Set the div margins on page load and on resize.
  window.addEventListener("load", setDivMargins);
  window.addEventListener("resize", setDivMargins);