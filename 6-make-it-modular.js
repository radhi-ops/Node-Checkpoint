const newModule = require('./6-mymodule.js')

var dir = process.argv[2]
var extension = process.argv[3]

newModule(dir, extension, function(err, list) {
  if (err) {
      return console.log(err)
  }
  list.forEach(function (list) {
      console.log(list)
    })
  })