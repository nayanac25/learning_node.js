const http = require("http");

const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hellow ...Welcome to the node js server</h1>");


  //url parsing - Uniform Resourse Locator
  const url = require("url");
//   const result = url.parse(
//     "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
//     true,
//   );
  //true- gives exact parsing of url


  //another ex for writing parsing
  const url_parsing=('https://getbootstrap.com/docs/5.0/getting-started/introduction/')
  const result=url.parse( url_parsing,true)
  console.log(result);

  //to print on browser
  res.write(JSON.stringify(result));

  res.end("response end here");
});

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, (req, res) => {
  console.log(`Server is up on http://${HOST}:${PORT}`);
});
