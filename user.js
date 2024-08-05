const express = require("express");
const router = express.Router();

const users = require("../data/users");

router.get("/", (req, res) => {
    res.json(users);
})

router.post("/", (req, res) => 
    {
    console.log(req.res);
    })
    if (req.breed.health && req.breed.grooming) {
        
        if (users.find((b) => b.breed == req.dog.breed)) {
            res.json({ error: "same breed" });
            return;
        }}
import { table } from "console";

table.dog1 = new Dog("Yorke", true, false);
table.dog2 = new Dog("Poodle", true, false);
table.dog3 = new Dog("Beagle", true, false);


console.log(dog1); 
console.log(dog2); 
console.log(dog3); 

facts.fact1= new Dog("Life-Span", true, false);
facts.fact2= new Dog("Friendly", true, false);
facts.fact3= new Dog("Health", true, false);

console.log(fact1);
console.log(fact2);
console.log(fact3);