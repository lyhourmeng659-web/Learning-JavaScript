const QRcode = require("qrcode");
const text = "https://github.com/lyhourmeng659-web/Learning-JavaScript";

QRcode.toFile(
  "github-JavaScript.png",
  text,
  {
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
    width: 300,
  },
  function (err) {
    if (err) throw err;
    console.log("QR Code generated!");
  },
);
