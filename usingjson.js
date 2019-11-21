const myMap = L.map("osm-map", {
  center: [50.312168, 17.532998],
  minZoom: 0,
  zoom: 13
});


const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tileUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(myMap);

//markers
var iconList = {
  yellow: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas i1  fa-map-marker fa-2x'>",
    iconAnchor: [11, 8]
  }),
  green: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas i2 fa-map-marker '>",
    iconAnchor: [11, 8]
  }),

  red: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas i3 fa-map-marker fa-4x'>",
    iconAnchor: [11, 8]
  }),

  default_marker: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas i4 fa-map-marker  fa-2x'>",
    iconAnchor: [11, 8]
  })
};

const xyCoordinates = [
  {
    name: "ONT_CHOCIMSKA_1_LAKA",
    sn: "ZTEGC41B59F8",
    lon: 17.536416,
    lat: 50.313407,
    status: "red",
    signal: "-33.21 dBm"
  },
  {
    name: "ONT_CHOCIMSKA_17_LAKA",
    sn: "ZTEGC41D5F5C",
    lon: 17.537063,
    lat: 50.311076,
    status: "green",
    signal: "-21.859 dBm"
  },
  {
    name: "ONT_CHOCIM_25",
    sn: "ZTEGC41D6035",
    lon: 17.537274,
    lat: 50.310152,
    status: "green",
    signal: "-27.258 dBm"
  }

];

var markers = [];

for (var i = 0; i < xyCoordinates.length; i++) {
  var coordinates = [
    xyCoordinates[i].name,
    xyCoordinates[i].sn,
    xyCoordinates[i].lon,
    xyCoordinates[i].lat,
    xyCoordinates[i].status,
    xyCoordinates[i].signal
  ];

  markers.push({
    name: coordinates[0],
    sn: coordinates[1],
    lon: coordinates[2],
    lat: coordinates[3],
    status: coordinates[4],
    signal: coordinates[5]
  });
}

for (var i = 0; i < markers.length; i++) {
  var myIcon = iconList[markers[i].status];
  if (!myIcon) icon = iconList["default"];

  L.marker([markers[i].lat, markers[i].lon], { icon: myIcon })
    .bindPopup(
      "<b>Name:</b> " +
      markers[i].name +
      "<br><b>Serial No:</b> " +
      markers[i].sn +
      "<br><b>Signal Strength:</b> " +
      markers[i].signal
    )
    .addTo(myMap);
}


// function myFunction() {
//   document.getElementById("getLonLat").innerHTML
//   // .setAttribute("style", "cursor:crosshair;");
//   alert("hello")



// }



var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
  // .setContent(e.latlng.toString())
  // .openOn(myMap);
  setLonLat(e.latlng.lat, e.latlng.lng);
}
myMap.on('click', onMapClick);


function setLonLat(lat, lon) {
  lat = Number(lat).toFixed(6);
  lon = Number(lon).toFixed(6);
  document.getElementById("lat").value = lat;
  document.getElementById("lng").value = lon;
}

