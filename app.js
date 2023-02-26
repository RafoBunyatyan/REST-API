const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
	{ id: 1, name: 'Rafo', value: '+7-921-100-20-30', marked: false }
]

// GET
app.get('/api/contacts', (req, res) => {
	res.status(200).json(CONTACTS)
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))
