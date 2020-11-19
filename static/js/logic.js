
// document.addEventListener('wheel', onwheel, {passive: true});


const url= "static/js/1.0_day_geojson.json";

d3.json(url).then(function(data) {
    console.log(data);
    const features = data.features;
    console.log(features);
    let magnitudes= [];
    for (i=0; i<features.length; i++){ 
        magnitudes.push(features[i].properties.mag);
    }
    let latitudes =[];
    let longtitudes =[];
    let depths_earth =[];
    let coordinates =[];

    for (i=0; i<features.length; i++){ 
        latitudes.push(features[i].geometry.coordinates[0]);
        longtitudes.push(features[i].geometry.coordinates[1]);
        depths_earth.push(features[i].geometry.coordinates[2]);
    }
    // console.log(features[0].geometry);

    console.log("maginutudes :"); console.log(magnitudes);
    console.log("lat :"); console.log(latitudes);
    console.log("lon :"); console.log(longtitudes);
    console.log("depths :"); console.log(depths_earth);

    createFeatures(features);

}
);

  
function createFeatures(earthquakeData) {

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }
  
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature
    });
  
    // Sending our earthquakes layer to the createMap function
    createMap(earthquakes);
  }
  

  
function createMap(earthquakes) {
    var myMap = L.map("mapid", {
        center: [
          37.09, -95.71
        ],
        zoom: 5,
        }
    );
        // layers: [streetmap
        // ]});

    // Define streetmap and darkmap layers
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    }).addTo(myMap);
    
    // var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    //     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    //     maxZoom: 18,
    //     id: "dark-v10",
    //     accessToken: API_KEY
    //   });
    
      // Define a baseMaps object to hold our base layers
    //   var baseMaps = {
    //     "Street Map": streetmap,
    //   };
    

      // Create our map, giving it the streetmap and earthquakes layers to display on load
    //   var myMap = L.map("mapid", {
    //     center: [
    //       37.09, -95.71
    //     ],
    //     zoom: 5,
    //     layers: [streetmap
    //     ]});
    
      // Create a layer control
     
  }