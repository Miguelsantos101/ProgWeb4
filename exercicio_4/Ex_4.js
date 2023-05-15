function mudarCor() {
  const div = document.getElementById("quadrado");
  if (div.style["background-color"] == "rgb(166, 166, 166)" || div.style["background-color"] == "") {
    div.style["background-color"] = "rgb(210, 175, 255)";
  }
  else {
    div.style["background-color"] = "rgb(166, 166, 166)";
  }
}