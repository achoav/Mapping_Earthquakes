// 13.2.4. Add console.log to check to see if our code is working in Chrome
console.log("working");

//  Create the map object with options.
let map = L.map('mapid').setView([34.0522, -118.2437],14);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Add a circle to the map on the locatiom, black outlined, filled with yellow color
L.circleMarker([34.0522, -118.2437], {radius: 300, color: "black", fillColor: '#ffffa1'}).addTo(map); 

// We create the tile layer for "STREETS" that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// We create the tile layer that will be the background of our map.
streets.addTo(map)