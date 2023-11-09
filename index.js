const btn = document.getElementById("btn");
const gradientCont = document.getElementById("gradient-container");

btn.addEventListener("click", () => {
  const gradientColors = randomWaveGradientBg();
  document.body.style.background = gradientColors.gradient;

  gradientCont.innerHTML = "";

  const gradientText = document.createElement("div");
  gradientText.classList.add("grad-text");
  const colorName1 = getColorName(gradientColors.color1);
  const colorName2 = getColorName(gradientColors.color2);
  gradientText.innerHTML = `<h4>Gradient Colors: ${colorName1}, ${colorName2}</h4>
     <h4>HSL: ${gradientColors.color1} ${gradientColors.color2}</h4>`;

  gradientText.style.color = "rgb(26, 10, 71)";

  gradientCont.appendChild(gradientText);
});

function randomWaveGradientBg() {
  let color1, color2;
  do {
    color1 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    color2 = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  } while (areColorsTooClose(color1, color2));

  return {
    gradient: `linear-gradient(45deg, ${color1} 0%, ${color2} 20%, ${color1} 40%, ${color2} 60%, ${color1} 80%, ${color2} 100%)`,
    color1: color1,
    color2: color2,
  };
}

function areColorsTooClose(color1, color2) {
  const hslValues1 = color1.match(/\d+/g).map(Number);
  const hslValues2 = color2.match(/\d+/g).map(Number);
  const hue1 = hslValues1[0];
  const hue2 = hslValues2[0];

  const threshold = 99; // Adjust the threshold as needed

  return Math.abs(hue1 - hue2) < threshold;
}

function getColorName(color) {
  const hslValues = color.match(/\d+/g).map(Number);
  const hue = hslValues[0];

  if (hue >= 0 && hue < 30) {
    return "Red";
  } else if (hue >= 15 && hue < 45) {
    return "Orange";
  } else if (hue >= 30 && hue < 90) {
    return "Yellow";
  } else if (hue >= 90 && hue < 150) {
    return "Green";
  } else if (hue >= 150 && hue < 210) {
    return "Cyan";
  } else if (hue >= 210 && hue < 270) {
    return "Blue";
  } else if (hue >= 240 && hue < 300) {
    return "Purple";
  } else if (hue >= 255 && hue < 285) {
    return "Indigo";
  } else if (hue >= 270 && hue < 330) {
    return "Magenta";
  } else if (hue >= 330 && hue < 345) {
    return "Pink";
  } else {
    return "Red";
  }
}
