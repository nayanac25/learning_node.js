const http = require("http");
const app = http.createServer((request,response)=>{
response.write("Hello, Welcome to the server");
response.end();
});

const PORT = 2000;
const HOST = "127.0.0.1";

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})