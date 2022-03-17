import { fetchData } from "./fetch.js";

let query = '';

const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const cors = 'https://cors-anywhere.herokuapp.com/';
const detail = 'Default';
const privateKey = "4289fec4e962a33118340c888699438d"
const publicKey = "72a5ad5293a99ad46a9235121a3e0df2"
const typeBook = "facet=Type(book)"
const typeAudioBook = "facet=Type(audiobook)"
const typeExcerpts = "facet=Type(schooltv)"
const refine = "refine=true"

const config = {
  Authorization: `Bearer ${privateKey}`
};

export function getData(){
    query = location.hash;
    query = `${query.substring(1)}`;

    //load books
    const urlBooks = `${cors}${endpoint}${query}&${typeBook}&${refine}&authorization=${publicKey}&detaillevel=${detail}&output=json`;
    fetchData(urlBooks, 'book');

    //load listening books
    const urlListenBooks = `${cors}${endpoint}${query}&${typeAudioBook}&${refine}&authorization=${publicKey}&detaillevel=${detail}&output=json`;
    fetchData(urlListenBooks, 'audiobook');

    //load schooltv
    const urlExcerpts = `${cors}${endpoint}${query}&${typeExcerpts}&${refine}&authorization=${publicKey}&detaillevel=${detail}&output=json`;
    fetchData(urlExcerpts, 'schooltv');
}