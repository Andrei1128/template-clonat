function selected() {
  var element = event.target;
  if (element.classList.contains("selected"))
    element.classList.remove("selected");
  else element.classList.add("selected");
}
