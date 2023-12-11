const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port =3000;
const requestIp = require("request-ip");

app.get("*", (req, res) => {
  try {
    const clientIp = requestIp.getClientIp(req);
          console.log("clientIp") ;
    const query = req.query;
        fs.writeFile("log.txt", clientIp, function(err) {});
    if (
      query &&
      Object.keys(query).length > 0 && !Object.keys(query).includes("fbclid")
    ) {
      res.sendFile(path.join(__dirname, "/asroma.html"));
    } else {
      res.sendFile(path.join(__dirname, "/duyet.html"));
    }

  } catch (err) {
    res.sendFile(path.join(__dirname, "/duyet.html"));
  }
});

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});
