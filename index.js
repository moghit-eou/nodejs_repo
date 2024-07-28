const express = require('express');
const app = express()// call it as function and call it app
const port = 3000 // equivalent to domain


app.use(express.static('front_end_files'))
app.use(express.json()) //
// helps parse this JSON payload and make it accessible in the request.body

let route = '/'
app.get( route , (request, response ) => { 
    response.status(200).send('<h1>JUST SAKE</h1>')
} ) 

const friends = {
    "empty" : "inside_work"
}

app.get('/friends' , (request, response) =>{
   // response.status(200).send('<h1>get friend request</h1>')
    response.status(200).send(friends) // sending the "friends" object
})
app.post('/friends' , (request , response ) => {
    const { best_friend , description } = request.body 
    friends[best_friend] = description
    response.sendStatus(200)
}) // if we want to create a new friend

app.patch('/friends', (req, res) => {
    const { best_friend } = req.body; // Get the friend name from route request body
    const { description } = req.body; // Get the new description from request body

        friends[best_friend] = description; // Update the description
        res.sendStatus(200).send(friends)   ; // Send a 200 OK status
    
})// update what's has been created // updating friends object

app.put('/' , (request , response ) => {
    
})

app.delete('/' , (request , response ) => {
    
})


function display_server()
{
    console.log("the sever is running and you can print anything here ")
}
app.listen(port,  display_server )
    // telling our server to listen to requests from this port 