var fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
  if (err) {
    console.log("error", err);
  } else {
    var content = data.toString();

    var newtext = content.replaceAll("tynybay", "TYNYBAY PVT LTD");
    // console.log(newtext)
    fs.writeFile("sample.txt", newtext, (err, data) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("data replaced");
      }
    });
  }
});
