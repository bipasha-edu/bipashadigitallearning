function togglemenu(){
  document.getElementById("menuToggle").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.add("show");
  });
  document.getElementById("closeMenu").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.remove("show"); 
  });
}
