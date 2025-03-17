function togglemenu(){
  var sidebar=document.getElementById("closeMenu").addEventListener("click", function(){
  document.querySelector(".sidebar").style.display="none";
  });

  if(sidebar.style.display==="block"){
    sidebar.style.display="none";
  } else {
  sidebar.style.display="block";
  }
}
