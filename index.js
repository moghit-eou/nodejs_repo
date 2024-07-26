const express = require('express') //ini web server on our computer
const app = express() // call it as function and call it app
const port = 3000 // equivalent to domain

// defining the routes
// ( '/' ) is the home route which is localhost:8080
// moghit is a route localhost:8080/moghit
// we can response
const home_route = '/'
function response_function(request , response)
{
    return response.send("fffffff one thing")
}


app.use(express.static('front_end_files'))
// look for in the dir front_end_files and send its files

app.get( home_route , response_function)

    // response.send("message")  this will display a msg as well 
    // we can send antying response.sendstatus(200 ) for example 
    // response.send({json formate})
 

function display_server()
{
    console.log("the sever is running and you can print anything here ")
}

app.listen(port,  display_server )
    // telling our server to listen to requests from this port 