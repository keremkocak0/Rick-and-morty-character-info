import express from "express";
const app = express();
import path from "path";
import axios from "axios";
import bodyParser from "body-parser";

const API_URL = "https://rickandmortyapi.com/api";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {character: null, error:null});
})

app.post("/get-character", async (req, res) => {
    
    const inputCharacterId = req.body.inputCharacterId;

    try {
        const result = await axios.get(`${API_URL}/character/${inputCharacterId}`);
        res.render("index.ejs", { character: result.data, error: null }); 
    } catch (error) {
        res.render("index.ejs", { character: null, error: error.response.data }); 
    }
});




app.listen(3000,() =>{
    console.log("server running 3000")
})


