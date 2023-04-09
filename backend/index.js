import express from 'express';
import bodyParser from 'body-parser'

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();
const port = 3000;

/**
 * Liste aller ToDos. 
 * Wird später durch Datenbank ersetzt!
 */
let TODOS = [
    {
        "id": 1671056616571,
        "title": "Übung 4 machen",
        "due": "2022-11-12T00:00:00.000Z",
        "status": 0
    },
    {
        "id": 1671087245763,
        "title": "Für die Klausur Webentwicklung lernen",
        "due": "2023-01-14T00:00:00.000Z",
        "status": 2
    },
];

// Your code here
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  res.send(TODOS);
})

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id == id) {
        let todo = TODOS[i];
      };
    };
    res.send(todo)
})

app.delete('/todos/:id', (req,res) => {
  let id = parseInt(req.params.id);
  remove(id);
})

app.put('/todos/:id', (req,res) => {

})

app.create('/todos', (req,res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})