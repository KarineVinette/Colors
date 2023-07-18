const colors = [
    { group: "Reds", shades: [{ name: "Crimson", code: "#DC143C" }, { name: "Tomato", code: "#FF6347" }, { name: "IndianRed", code: "#CD5C5C" }, { name: "FireBrick", code: "#B22222" }] },
    { group: "Greens", shades: [{ name: "LimeGreen", code: "#32CD32" }, { name: "ForestGreen", code: "#228B22" }, { name: "OliveDrab", code: "#6B8E23" }, { name: "DarkOliveGreen", code: "#556B2F" }] },
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
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.backgroundColor = color.code;
  
      colorRow.appendChild(colorBox);
    });
  
    colorPalette.appendChild(colorRow);
  });
  