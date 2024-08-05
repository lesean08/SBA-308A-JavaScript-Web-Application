const express = require("express");
const app = express();
const PORT = 3000;

const user= express.user();

user.get('/', (req, res) => {
    res.send('eventually this will show all grades');
})

user.get('/:id', (req, res) => {
    res.send(`eventually this will show an individual grade with id: ${req.params.id}`)
})

const users = require('./data/users');
const posts = require('./data/posts');

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    
})
import axios from 'axios'
import React, { useEffect, UseState } from 'react'

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Dogs Dogs Dogs!");
    }, 1000);
});

console.log(fetch("https://dog.ceo/api/breeds/image/random"));
const dog = document.getElementById('dog');
dog.addEventListener("click", getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer'
}

getNewDog();

let request;

document
    .getElementById('myBtn')
    .addEventListener("click", testRequest);

async function testRequest() {
    let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });

    alertResponse(response);
}

async function alertResponse(response) {
    if (response.ok) {
        const textData = await response.text();
        alert(textData);
    } else {
        alert('The request returned a status other than 200 OK: ' + response.status);
    }
       
            fetch (err => console.log(err));

} []

export default User
