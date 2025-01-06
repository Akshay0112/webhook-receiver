const { response } = require("express");

const webhooksUrl = 'http://localhost:3000/webhook';

function listening(){
    fetch(webhooksUrl)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('failed to listen', error)
    })
    .finally(() => {
        setTimeout(listening, 3000);
    })
}
listening();
