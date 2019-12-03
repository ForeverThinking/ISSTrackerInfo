//jshint esversion:6

// function to GET ISS position
function updatePos() {

  // jQuery action to GET API data
  $.getJSON('http://api.open-notify.org/iss-now.json', (data) => {
    let lat = data.iss_position.latitude;
    let long = data.iss_position.longitude;

    // set lat and long of marker and view location
    marker.setLatLng([lat, long]);
    mymap.panTo([lat, long]);
  });

  // refresh request every 5 seconds
  setTimeout(updatePos, 5000);
}

// create map element
let mymap = L.map('mapid').setView([0, 0], 3);

// add tile layer to map
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community. Marker icon made by Freepik from www.flaticon.com',
  maxZoom: 4
}).addTo(mymap);

// add icon information
let myIcon = L.icon({
    iconUrl: '/img/space-station.png',
    iconSize: [48, 48],
    popupAnchor: [-3, -76]
});

// add marker to map
let marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);

// pan map to starting location
mymap.panTo([0, 0], animate=true);

// start updating function
updatePos();
