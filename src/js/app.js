let query = '';

const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const cors = 'https://cors-anywhere.herokuapp.com/';
const detail = 'Default';
const privateKey = "4289fec4e962a33118340c888699438d"
const publicKey = "72a5ad5293a99ad46a9235121a3e0df2"

import { fetchData } from "./modules/fetch.js";
import { checkError } from "./modules/error.js";

const config = {
    Authorization: `Bearer ${privateKey}`
  };

window.addEventListener("offline", function() {
    checkError('noInternet');
});

window.addEventListener("hashchange", getData);

function getData(){
    query = location.hash;
    query = `${query.substring(1)}`;
    const url = `${cors}${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&output=json`;

    fetchData(url, config);
}