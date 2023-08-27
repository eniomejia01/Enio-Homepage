document.addEventListener("DOMContentLoaded", function() {

    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const menuContent = document.getElementById("menuContent");
  
    menuButton.addEventListener("click", function() {
      menuButton.style.display = "none";
      closeButton.style.display = "block";
      menuContent.style.display = "block";
    });
  
    closeButton.addEventListener("click", function() {
      closeButton.style.display = "none";
      menuButton.style.display = "block";
      menuContent.style.display = "none";
    });

    closeButton.style.display = "none";

});
  