// Necessary general Express stuff
const express = require('express') // imports express
const path = require("path") // so we can use path.resolve() and path.join() and any other path stuff
const app = express()
const port = process.env.PORT || 5000 // assigning port to 5000

// getting absolute route paths for back-end and front-end:
const apiDir = path.resolve("./api")
const clientDir = path.resolve("./client")

// STORY 2: When user goes to localhost:5000/api they get to see the contents of the json file with restaurant IDs:
app.get("/api", (request, response) => {
    response.sendFile(apiDir + "/IDs.json")
})

// STORY 3: When user goes to localhost:5000/id where id is an actual restaurant id, they get to see the contents of the json file with info of that restaurant (this uses path params):
app.get("/api/:id", (request, response) => {
    let filePath = apiDir + "/" + request.params.id + ".json"
    response.sendFile(filePath)
})

// listening on the previously assigned port, and console logging it for funsies
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
