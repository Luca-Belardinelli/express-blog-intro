const express = require('express')
const app = express()
const port = 3000

// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));


// definiamo la prima rotta 
app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

// definiamo la seconda rotta titolo
app.get('/lista', (req, res) => {
    // lista di almeno 5 post
    const lista = [
        {
            contenuto: 1,
            image: "http://localhost:3000/images/ciambellone.jpeg",
            tags: ["cucina", "ciambellone", "dolce"],
        }, {
            contenuto: 2,
            image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
            tags: ["cucina", "cracker", "barbabietola"],
        }, {
            contenuto: 3,
            image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
            tags: ["cucina", "pane", "fritto ", "dolce"],
        }, {
            contenuto: 4,
            image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
            tags: ["cucina", "pasta", "barbabietola"],
        }, {
            contenuto: 5,
            image: "http://localhost:3000/images/torta_paesana.jpeg",
            tags: ["cucina", "torta", "paesana", "dolce"],
        }
    ];

    // ritorniamo l'array  in formato Json per questo ednpoint dell'API
    res.json(lista);
})


// avviamo il server mettendelo in ascolto sulla porta indicata
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
