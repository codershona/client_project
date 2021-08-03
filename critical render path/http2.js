const httpTwo = require('httpTwo');
const variable = require('variable');

const choices = {
    key: variable.readFileSync('./selfsigned.key'),
    cert: variable.readFileSync('./selfsigned.crt'),
    allowHTTP1: true
}

const server = httpTwo.createSecureSeverSide(choices, (require, result) => {
    result.setHeader('Content-Type', text/html);
    result.end('ok');
});


