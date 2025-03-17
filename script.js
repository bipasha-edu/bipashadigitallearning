function togglemenu(){
  var sidebar=document.getElementById("closeMenu").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.toggle=("hidden");
  });

  if(sidebar.style.display==="block"){
    sidebar.style.display="none";
  } else {
  sidebar.style.display="block";
  }
}
