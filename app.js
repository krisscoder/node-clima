const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad a obtener el clima.',
        demand: true
    }
}).argv;

const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Buenos Aires',
    headers: { 'x-rapidapi-key': '0e4821597bmsh1b326807aee299cp1acc56jsn482502ee38e6' }
});

instance.get()
    .then(resp => {
        console.log((resp));
    })
    .catch(err => {
        console.log('ERROR!', err);
    })

console.log(argv.direccion);