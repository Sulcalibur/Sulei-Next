module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "TwoUnits": "32px",
        "Unit": "16px",
        "FourUnits": "64px",
        "OneAndHalfUnits": "24px",
        "ThreeUnits": "48px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px",
        "Radius4": "4px"
      },
      "scale": {
        "XSmall": "16px",
        "Large": "144px",
        "Medium": "96px",
        "XXLarge": "288px",
        "Small": "48px",
        "XLarge": "192px",
        "MaxWidth": "1324px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}