const http = require("http");
const app = require("express")();
const PORT = process.env.PORT || 7676;

app.get('/', (req, res)=>{
    res.json({message: "Docker is Easy!!"});
});

app.listen(PORT, ()=>{
    console.log(`app listening on http://localhost:${PORT}`);
});

