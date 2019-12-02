var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  maxZoom: 4
}).addTo(mymap);

var marker = L.marker([51.5, -0.122]).addTo(mymap);

mymap.panTo([51.5, -0.122], animate=true);
