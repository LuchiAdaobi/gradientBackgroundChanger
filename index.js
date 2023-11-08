const btn = document.getElementById("btn");
const gradientCont = document.getElementById("gradient-container");

btn.addEventListener("click", () => {
  const gradientColors = randomGradientBg();
  document.body.style.background = gradientColors.gradient;

  gradientCont.innerHTML = "";

  const gradientText = document.createElement("div");
  gradientText.classList.add("grad-text");
  const colorName1 = getColorName(gradientColors.color1);
  const colorName2 = getColorName(gradientColors.color2);
  gradientText.innerHTML = `<h4>Gradient Colors: ${colorName1}, ${colorName2}</h4>
     <h4>HSL: ${gradientColors.color1} ${gradientColors.color2}</h4>`;

  //   gradientText.innerText = `Gradient Colors: ${gradientColors.color1}, ${gradientColors.color2}`;

  gradientText.style.color = "rgb(26, 10, 71)";

  gradientCont.appendChild(gradientText);
});

function randomGradientBg() {
  const angle = Math.floor(Math.random() * 361); // Random angle between 0 and 360
  const color1 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  const color2 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  const color3 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  return {
    gradient: `linear-gradient(${angle}deg, ${color1}, ${color2}`,
    color1: color1,
    color2: color2,
  };
}

function getColorName(color) {
  const hslValues = color.match(/\d+/g).map(Number);
  const hue = hslValues[0];

  if (hue >= 0 && hue < 30) {
    return "Red";
  } else if (hue >= 30 && hue < 90) {
    return "Yellow";
  } else if (hue >= 90 && hue < 150) {
    return "Green";
  } else if (hue >= 150 && hue < 210) {
    return "Cyan";
  } else if (hue >= 210 && hue < 270) {
    return "Blue";
  } else if (hue >= 270 && hue < 330) {
    return "Magenta";
  } else {
    return "Red";
  }
}
