let express = require('express'),
    app     = express()


    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })

    app.listen('8008',()=>{
        console.log('server started at port no. 8008')
    })