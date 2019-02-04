const express = require('express'); 
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000); 
app.locals.title = "My Server About Nothing"
app.locals.characters = ['Jerry', 'Newman', 'George', 'Elaine', 'Kramer']

app.get('/', (request, response) => {
  response.status(200).json(app.locals.characters)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});