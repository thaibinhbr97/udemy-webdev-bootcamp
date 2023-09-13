mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: campgroundObj.geometry.coordinates, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker()
    .setLngLat(campgroundObj.geometry.coordinates)
    .addTo(map);