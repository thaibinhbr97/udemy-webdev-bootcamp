mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: campgroundObj.geometry.coordinates, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

// Create a default Marker and add it to the map.
new mapboxgl.Marker()
    .setLngLat(campgroundObj.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${campgroundObj.title}</h3><p>${campgroundObj.location}</p>`)) // add popup
    .addTo(map)