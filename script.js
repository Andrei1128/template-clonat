function selected() {
  var element = event.target;
  if (element.classList.contains("selected"))
    element.classList.remove("selected");
  else element.classList.add("selected");
}
function toggleNavBar(){
  const ul = document.querySelector("ul");
  if(ul.style.display==="none")
    ul.style.display="flex"
    else
    ul.style.display="none"
}
function addSideNavbarClass() {
  const windowSize = window.innerWidth;
  const ul = document.querySelector("ul");
  const title = document.querySelector("h3");
  const menu = document.querySelector("p");

  if (windowSize <= 768) {
    ul.classList.add("side-navbar");
    title.style.display="none";
    ul.style.display="none";
    menu.style.display="block";
  } else {
    ul.classList.remove("side-navbar");
    ul.style.display="flex";
    title.style.display="block";
    menu.style.display="none";
  }
}
window.addEventListener("resize", addSideNavbarClass);
window.addEventListener("load", addSideNavbarClass);
