const http = require("http");
const url = require("url");

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Welcome to Node.js Server</h1>");

  const result = url.parse(req.url, true);
  console.log(result);

  if (result.pathname == "/") {
    res.write("<h1>This is Home page</h1>");
  } else if (result.pathname == "/about") {
    res.write("<h1>This is About page</h1>");
  } else {
    res.write("<h1>Page Not Found</h1>");
  }
  res.end();
});

const PORT = 2000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`Server is Running at http://${HOST}:${PORT}`);
});
