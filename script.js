const colors = [
    { group: "1", shades: [{ code: "#117C6F" }, { code: "#289C8E" }, { code: "#2FC4B2" }, { code: "#8DE5DB" }, { code: "#B2F0E8" } ] },
    { group: "2", shades: [{ code: "#4A707A" }, { code: "#7697A0" }, { code: "#94B0B7" }, { code: "#C2C8C5" },{  code: "#DDDDDA" } ] },
    // Add more color groups and their shades as needed
    { group: "3", shades: [{ code: "#2C121B" }, { code: "#F26F14" }, { code: "#FBD3B7" }, { code: "#EEE7DF" } ] },
    { group: "4", shades: [{ code: "#0C133B" }, { code: "#32D3E7" }, { code: "#EBF4F1" }, { code: "#D1E0DB" } ] },
    { group: "4a", shades: [{ code: "#3C3D42" }, { code: "#9CCD62" }, { code: "#F6F8E2" }, { code: "#E0DDCA" } ] },

    { group: "5", shades: [{ code: "#F57C51" }, { code: "#FCBC58" }, { code: "#F6F6E2" }, { code: "#E0DDCA" } ] },
    { group: "6", shades: [{ code: "#2EA1DA" }, { code: "#F1D39D" }, { code: "#FCF5E5" }, { code: "#F8CBC5" } ] },
   
    { group: "7", shades: [{ code: "#407C87" }, { code: "#A5DBDD" }, { code: "#EEF1F6" }, { code: "#D3E1E2" } ] },
    { group: "8", shades: [{ code: "#89687D" }, { code: "#FCD8CC" }, { code: "#FFF7EC" }, { code: "#A7E0E9" } ] },

    { group: "9", shades: [{ code: "#555A54" }, { code: "#F7F2EF" }, { code: "#E1DDD2" }, { code: "#BFBBAF" } ] },
    { group: "10", shades: [{ code: "#D1114D" }, { code: "#EED5D1" }, { code: "#F38592" }, { code: "#D6517C" } ] },

    { group: "11", shades: [{ code: "#C722929" }, { code: "#FFCCCC" }, { code: "#FF8080" }, { code: "#FF4D4D" } ] },
    { group: "12", shades: [{ code: "#404040" }, { code: "#737373" }, { code: "#A6A6A6" }, { code: "#D9D9D9" } ] },

    { group: "13", shades: [{ code: "#8CBD62" }, { code: "#FFC16A" }, { code: "#FFF7EC" }, { code: "#F6E6CF" } ] },
    { group: "14", shades: [{ code: "#065F89" }, { code: "#218DAA" }, { code: "#C6DFE6" }, { code: "#64B4CD" } ] },

    { group: "15", shades: [{ code: "#758058" }, { code: "#A4AA7C" }, { code: "#E2E0CF" }, { code: "#BFBB95" } ] },
    { group: "16", shades: [{ code: "#FF8C00" }, { code: "#FFD8A8" }, { code: "#FFCA7A" }, { code: "#FFAD42" } ] },

   
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
  