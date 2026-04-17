
//built-in module we are using in this file
const http=require("http");


//user-defined module we are using in this file
const Calci=require("./custom_module");

const app=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    // res.write(`<h1>Sum is=${Calci(100,200,300)}</h1>`);
    res.write(`<h1>Sum is =${Calci.Calci(10,20,30)}</h1>`);
    res.write(`<h1>Power is=${Calci.Power(5,7)}</h1>`);
    res.end();
});

const PORT=3000;
const HOST="127.0.0.1"

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})