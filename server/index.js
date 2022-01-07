const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()
const PORT = config.get('serverPort')
const start = () => {
    try {
        
        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()