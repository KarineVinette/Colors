const colors = [
    { group: "1", shades: [{ name: "Crimson", code: "#117C6F" }, { name: "Tomato", code: "#289C8E" }, { name: "IndianRed", code: "#2FC4B2" }, { name: "FireBrick", code: "#8DE5DB" }, { name: "FireBrick", code: "#B2F0E8" } ] },
    { group: "2", shades: [{ name: "LimeGreen", code: "#4A707A" }, { name: "ForestGreen", code: "#7697A0" }, { name: "OliveDrab", code: "#94B0B7" }, { name: "DarkOliveGreen", code: "#C2C8C5" },{ name: "DarkOliveGreen", code: "#DDDDDA" } ] },
    // Add more color groups and their shades as needed
  ];
  
  const colorPalette = document.querySelector(".color-palette");
  
  colors.forEach((group) => {
    const colorRow = document.createElement("div");
    colorRow.classList.add("color-row");
  
    const colorName = document.createElement("div");
    colorName.classList.add("color-name");
    colorName.textContent = group.group;
    colorRow.appendChild(colorName);
  
    group.shades.forEach((color) => {
      const colorContainer = document.createElement("div");
      colorContainer.classList.add("color-container");
  
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.backgroundColor = color.code;
      colorContainer.appendChild(colorBox);
  
      const colorCode = document.createElement("div");
      colorCode.classList.add("color-code");
      colorCode.textContent = color.code;
      colorContainer.appendChild(colorCode);
  
      colorRow.appendChild(colorContainer);
    });
  
    colorPalette.appendChild(colorRow);
  });
  