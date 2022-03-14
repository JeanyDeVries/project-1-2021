const query = 'tolkien';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const cors = 'https://cors-anywhere.herokuapp.com/';
const detail = 'Default';
const privateKey = "4289fec4e962a33118340c888699438d"
const publicKey = "1e19898c87464e239192c8bfe422f280"
const url =`${cors}${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&output=json`;


onload = (fetchData(url));

function fetchData(url){
    fetch(url)
        .then(response => {
            if(response.ok)
                return response.json();
        })
        .then(function(data){
            console.table(data.results);
        })
        .catch((error) => {
            console.log(error);
        });
}