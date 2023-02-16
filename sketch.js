let data_url = 'https://api.wheretheiss.at/v1/satellites/25544';
let data;
let longitude, latitude;
async function getData() {
    const response = await fetch(data_url);
    data = await response.json();
    let { latitude, longitude, altitude, velocity } = data;

    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
    document.getElementById('altitude').textContent = altitude;
    document.getElementById('velocity').textContent = velocity;
    console.log(data);
}

let loc_url = 'https://api.wheretheiss.at/v1/coordinates/';

async function getLocation() {
    const response = await fetch(loc_url + data.latitude + ',' + data.longitude);
    const loc = await response.json();
    console.table(loc);

    document.getElementById('country_code').textContent = loc.country_code;
    document.getElementById('maps').href = loc.map_url;
    document.getElementById('maps').innerHTML = loc.map_url;
}
