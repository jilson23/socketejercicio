var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiamlsc29uMjIiLCJhIjoiY2t5eXVjejZqMHUyMjJvcWtpMXZ6eG41cyJ9.GrQYTZUmWyfU_r5BQLlY4Q'
}).addTo(map);

function random (){
    return Math.random()*(180 - -180)+min;
}


function automarkers(){
    
    L.marker([51.5, -0.09]).addTo(map);
}

random();
// setInterval(automarkers, 3000)
