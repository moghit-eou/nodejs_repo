const express = require('express');
const app = express()// call it as function and call it app
const port = 3000 // equivalent to domain


app.use(express.static('front_end_files'))
app.use(express.json())

let route = '/'
app.get( route , (request, response ) => { 
    response.status(200).send('<h1>JUST SAKE</h1>')
} ) 

const friends = {
}

app.get('/friends' , (request, response) =>{
   // response.status(200).send('<h1>get friend request</h1>')
    response.status(200).send(friends) // sending the "friends" object
})
app.post('/friends' , (request , response ) => {
    const { best_friend } = request.body 
    friends[best_friend] = "is mdr"
    response.sendStatus(200)
}) // if we want to create a new friend

app.patch('/' , (request , response ) => {
    
})

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