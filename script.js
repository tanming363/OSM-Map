const myMap = L.map("osm-map", { center: [50.1, 19.0], minZoom: 2, zoom: 12 });

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tileUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);

var iconList = {
  exclamation: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-exclamation fa-2x'>",
    iconAnchor: [6, -3]
  }),
  skull: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-skull-crossbones fa-2x'>",
    iconAnchor: [12, -3]
  }),

  ambulance: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-ambulance fa-2x'>",
    iconAnchor: [14, -3]
  }),

  default_marker: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-map-marker-alt fa-2x'>",
    iconAnchor: [10, -3]
  })
};
const xyCoordinates = [
  { x: 499371, y: 250248, color: "default_marker" },
  { x: 499862, y: 249654, color: "default_marker" },
  { x: 500543, y: 249887, color: "default_marker" },
  { x: 498515, y: 251562, color: "default_marker" },
  { x: 497684, y: 251776, color: "default_marker" },
  { x: 501348, y: 246648, color: "default_marker" },
  { x: 503242, y: 249848, color: "default_marker" },
  { x: 499555, y: 250342, color: "default_marker" },
  { x: 500231, y: 249849, color: "default_marker" },
  { x: 497475, y: 251510, color: "default_marker" },
  { x: 500098, y: 249260, color: "default_marker" },
  { x: 499951, y: 250331, color: "default_marker" },
  { x: 500133, y: 249682, color: "default_marker" },
  { x: 499582, y: 249624, color: "default_marker" },
  { x: 498148, y: 250145, color: "default_marker" },
  { x: 498805, y: 251343, color: "default_marker" },
  { x: 499950, y: 253186, color: "default_marker" },
  { x: 498569, y: 249682, color: "default_marker" },
  { x: 497407, y: 249528, color: "default_marker" },
  { x: 498905, y: 251005, color: "default_marker" },
  { x: 497255, y: 252131, color: "default_marker" },
  { x: 500230, y: 247065, color: "default_marker" },
  { x: 496454, y: 252852, color: "default_marker" },
  { x: 498700, y: 250326, color: "default_marker" },
  { x: 501515, y: 250867, color: "default_marker" },
  { x: 499282, y: 249918, color: "default_marker" },
  { x: 498469, y: 251654, color: "default_marker" },
  { x: 498597, y: 251818, color: "default_marker" },
  { x: 498608, y: 250713, color: "default_marker" },
  { x: 499122, y: 250223, color: "default_marker" },
  { x: 500195, y: 249244, color: "ambulance" },
  { x: 498621, y: 249280, color: "default_marker" },
  { x: 500034, y: 251299, color: "default_marker" },
  { x: 497255, y: 252131, color: "ambulance" },
  { x: 498033, y: 251394, color: "skull" },
  { x: 499856, y: 250047, color: "exclamation" },
  { x: 499386, y: 248156, color: "exclamation" },
  { x: 502707, y: 250199, color: "skull" },
  { x: 500540, y: 249896, color: "ambulance" },
  { x: 499031, y: 249065, color: "default_marker" }
];

// converting x,y co-ordinates into latitude and longitude
var markers = [];
for (var i = 0; i < xyCoordinates.length; i++) {
  proj4.defs(
    "EPSG: 2180",
    "+proj=tmerc + lat_0=0 + lon_0=19 + k=0.9993 + x_0=500000 + y_0=-5300000 + ellps=GRS80 + towgs84=0, 0, 0, 0, 0, 0, 0 + units=m + no_defs"
  );

  var coordinates = proj4("EPSG: 2180", "WGS84", [
    xyCoordinates[i].x,
    xyCoordinates[i].y,
    xyCoordinates[i].color
  ]);
  // console.log(xyCoordinates[i].color)

  markers.push({
    city: "TYCHY",
    lng: coordinates[0],
    lat: coordinates[1],
    color: xyCoordinates[i].color
  });
}

for (var i = 0; i < markers.length; i++) {
  var myIcon = iconList[markers[i].color];
  if (!myIcon) icon = iconList["default"];
  // console.log("I", myIcon);
  L.marker([markers[i].lat, markers[i].lng], { icon: myIcon })
    .bindPopup(markers[i].city)
    .addTo(myMap);
    
  L.polygon(markers[i].lat, markers[i].lng).addTo(myMap);
  // console.log(markers[i].lat, markers[i].lng, markers[i].color)
}

// to know your latitude and longitude
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(e.latlng.toString())
    .openOn(myMap);
}
myMap.on("click", onMapClick);
