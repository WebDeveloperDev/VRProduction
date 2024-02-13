const fs = require('fs')
const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');
const { createArrayCsvWriter } = require('csv-writer');

const app = express()
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'));
})


app.post('/contact', (req, res) => {
    const newData = [`"${req.body.first_name + req.body.last_name}"`, `"${req.body.email}"`, `"${req.body.phone_no}"`, `"${req.body.address}"`, `"${req.body.services}"`, `"${req.body.duration}"`, `"${req.body.budget}"`];
    let allowvar = true
    for (let index = 0; index < newData.length; index++) {
        const element = newData[index];
        if (element == `""`) {
            console.log('inside the function')
            allowvar = false
            res.status(204).send()
            break
        }
        else {
            console.log(element)
        }
    }
    setTimeout(() => {
        if (allowvar == true) {
            ThankYouHtml="<h2 style='text-align:center'>Your Registration was successful!</h2><h1 style='text-align:center'>Thank you for registration</h1><a href='/' style='text-align:center;display:block'>HOME</a>"
            res.send(ThankYouHtml);
            // Define the new data as an array

            // Read the existing data from the CSV file
            const existingData = fs.readFileSync('client.csv', 'utf-8');
            console.log(existingData)

            // Append the new data to the existing data
            const updatedData = existingData + '\n' + newData.join(',');

            // Write the updated data to the CSV file
            fs.writeFileSync('client.csv', updatedData, 'utf-8');
            console.log('success')
        }
    }, 500);
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})