const query = 'tolkien';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const cors = 'https://cors-anywhere.herokuapp.com/';
const detail = 'Default';
const privateKey = "4289fec4e962a33118340c888699438d"
const publicKey = "1e19898c87464e239192c8bfe422f280"
const url =`${cors}${endpoint}${query}&authorization=${publicKey}&detaillevel=${detail}&output=json`;

import { fetchData } from "./modules/fetch.js";
import { checkError } from "./modules/error.js";

const config = {
    Authorization: `Bearer ${privateKey}`
  };

window.addEventListener("offline", function() {
    checkError('noInternet');
});

//onload = fetchData(url, config);