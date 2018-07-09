const fs = require('fs')
const csv = require('csvtojson')
const inputCSV = 'customer-data.csv'
const outputJSON = 'customer-data.json'

csv()
  .fromFile(inputCSV)
  .then((jsonObj) => {
    var json = JSON.stringify(jsonObj)
    //console.log(jsonObj)
    fs.writeFileSync(outputJSON, json);
  })
