const express = require("express");
const parseurl = require("parseurl");
const bodyParser = require("body-parser");
const expressValidor = require("express-validator");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("static"));

mongoose.connect("mongodb://localhost:27017/signatures", {useNewUrlParser : true});

const signitureSchema = new mongoose.Schema ({
    guestSignature:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    message:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})

const Signature = mongoose.model('Signature', signitureSchema);

app.get("/", function(req, res){
    res.json("you did it!")
});

app.get("/api/signatures", function(req, res){
    Signature.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

app.post("/api/signatures", function(req, res){
    Signature.create({
        guestSignature: req.body.signatureOfGuest,
        message: req.body.MessageofGuest
    }).then(signature => {
        res.json(signature);
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
