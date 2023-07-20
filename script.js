const colors = [
    { group: "1", shades: [{ code: "#117C6F" }, { code: "#289C8E" }, { code: "#2FC4B2" }, { code: "#8DE5DB" }, { code: "#B2F0E8" } ] },
    { group: "2", shades: [{ code: "#4A707A" }, { code: "#7697A0" }, { code: "#94B0B7" }, { code: "#C2C8C5" },{  code: "#DDDDDA" } ] },
    // Add more color groups and their shades as needed
    { group: "3", shades: [{ code: "#2C121B" }, { code: "#F26F14" }, { code: "#FBD3B7" }, { code: "#EEE7DF" } ] },
    { group: "4", shades: [{ code: "#0C133B" }, { code: "#32D3E7" }, { code: "#EBF4F1" }, { code: "#D1E0DB" } ] },
    { group: "4a", shades: [{ code: "#3C3D42" }, { code: "#9CCD62" }, { code: "#F6F8E2" }, { code: "#E0DDCA" } ] },

    { group: "5", shades: [{ code: "#F57C51" }, { code: "#FCBC58" }, { code: "#F6F6E2" }, { code: "#E0DDCA" } ] },
    { group: "6", shades: [{ code: "#2EA1DA" }, { code: "#F1D39D" }, { code: "#FCF5E5" }, { code: "#F8CBC5" } ] },
   
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
  