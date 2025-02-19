const randomColors = [
  "#FFAEBC",
  "#A0E7E5",
  "#B4F8C8",
  "#FBE7C6",
  "#b4b5be",
  "#333738",
  "#b18742",
  "#635b6c",
  "#51624f",
  "#e6d5a9",
  "#afbea2",
  "#9cb4ac",
];

function colorChange() {
  const randomIndex = Math.floor(Math.random() * randomColors.length);

  document.getElementById("wrapper").style.backgroundColor =
    randomColors[randomIndex];
}
