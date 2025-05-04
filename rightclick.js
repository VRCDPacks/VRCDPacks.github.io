const contextMenu = document.getElementById("customContextMenu");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  // Get mouse position where the user clicked
  let posX = e.pageX;
  let posY = e.pageY;

  const menuWidth = contextMenu.offsetWidth;
  const menuHeight = contextMenu.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Check if the context menu is going off the right side of the window
  if (posX + menuWidth > windowWidth) {
    posX = windowWidth - menuWidth - 10;
  }
  // Check if the context menu is going off the bottom of the window
  if (posY + menuHeight > windowHeight) {
    posY = windowHeight - menuHeight - 10;
  }

  // Set the position of the context menu
  contextMenu.style.left = `${posX}px`;
  contextMenu.style.top = `${posY}px`;

  // Make sure the menu is visible
  contextMenu.style.display = "block";
});

// Hide the context menu when clicking anywhere else
document.addEventListener("click", function () {
  contextMenu.style.display = "none";
});