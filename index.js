const express = require('express') //ini web server on our computer
const app = express() // call it as function and call it app
const port = 8080 // equivalent to domain

// defining the routes
// ( '/' ) is the home route which is localhost:8080
// moghit is a route localhost:8080/moghit

app.get( '/moghit' , ( request , response ) => {
        response.json({message:"this is a message" , 
        name: "moghit" , 
        type: "retard" // sending data in form of json 
    })

    // response.send("message")  this will display a msg as well 
    // we can send antying response.sendstatus(200 ) for example 
})

app.listen(port, () => console.log("the server is running") )
    // telling our server to listen to requests from this port 