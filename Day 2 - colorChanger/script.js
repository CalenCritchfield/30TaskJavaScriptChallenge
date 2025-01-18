function generateRandomColor() {
  const hexCode = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBox(color) {
  const box = document.createElement("div");
  box.classList.add("color-box");
  box.style.backgroundColor = color;

  box.addEventListener("click", () => {
    document.body.style.backgroundColor = color;

    const hexCodeWrite = document.getElementById("hexCodeWrite");
    hexCodeWrite.style.color = color;
    hexCodeWrite.innerHTML = color;
  });
  return box;
}

function colorPalette() {
  const colorPalette = document.getElementById("color-palette");
  colorPalette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const box = createBox(color);
    colorPalette.appendChild(box);
  }
}

colorPalette();

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", colorPalette);
