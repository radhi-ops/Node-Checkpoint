const fs = require('fs')
const path = require('path')

let directory = process.argv[2]  
let extension = '.' + process.argv[3]

fs.readdir(directory, function (err, list) {
    if (err) return console.log(error)
    list.forEach(file => {
            if (path.extname(file) === extension) { console.log(file)} 
    })   
      
  })