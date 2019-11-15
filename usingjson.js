const myMap = L.map("osm-map", {
  center: [50.315357, 17.53689],
  minZoom: 0,
  zoom: 15
});

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tileUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(myMap);

var iconList = {
  yellow: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-exclamation fa-2x'>",
    iconAnchor: [6, -3]
  }),
  green: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-map-marker fa-3x'>",
    iconAnchor: [12, -3]
  }),

  red: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-skull-crossbones fa-3x'>",
    iconAnchor: [14, -3]
  }),

  default_marker: L.divIcon({
    className: "custom-div-icon",
    html: "<i class='fas fa-map-marker-alt fa-2x'>",
    iconAnchor: [10, -3]
  })
};
const xyCoordinates =
  //   { x: 499371, y: 250248, color: "default_marker" }
  [
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
    },
    {
      name: "ONT_CHOCIMSKA_7_LAKA",
      sn: "ZTEGC0B0E27A",
      lon: 17.536851,
      lat: 50.312954,
      status: "green",
      signal: "-24.854 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_9_LAKA",
      sn: "ZTEGC41D607D",
      lon: 17.536857,
      lat: 50.312774,
      status: "yellow",
      signal: "-30.077 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_23_LAKA",
      sn: "ZTEGC41D5F2E",
      lon: 17.53731,
      lat: 50.310351,
      status: "green",
      signal: "-21.296 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_11",
      sn: "ZTEGC41D6058",
      lon: 17.536991,
      lat: 50.312506,
      status: "green",
      signal: "-27.276 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_8M20_LAKA",
      sn: "ZTEGC41D60DF",
      lon: 17.536646,
      lat: 50.310477,
      status: "green",
      signal: "65535 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_6M15_LAKA",
      sn: "ZTEGC41D5EC7",
      lon: 17.536681,
      lat: 50.310721,
      status: "green",
      signal: "-27.369 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_4M7",
      sn: "ZTEGC0AD362C",
      lon: 17.53662,
      lat: 50.310873,
      status: "green",
      signal: "-27.747 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_4M12",
      sn: "ZTEGC41D5D1C",
      lon: 17.53662,
      lat: 50.310873,
      status: "green",
      signal: "-28.378 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_12M36",
      sn: "ZTEGC41B52B4",
      lon: 17.536754,
      lat: 50.310182,
      status: "green",
      signal: "-26.989 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_10M29_LAKA",
      sn: "ZTEGC0DBE3CC",
      lon: 17.536693,
      lat: 50.310334,
      status: "green",
      signal: "-27.055 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_19",
      sn: "ZTEGC0B0E339",
      lon: 17.537214,
      lat: 50.310754,
      status: "green",
      signal: "-23.124 dBm"
    },
    {
      name: "ONT_CHOCIMSKA_6M14",
      sn: "ZTEGC0B0DE80",
      lon: 17.536681,
      lat: 50.310721,
      status: "green",
      signal: "-28.089 dBm"
    },
    {
      name: "ONT_CZERESNIOWA_1_LAKA",
      sn: "ZTEGC41D6054",
      lon: 17.540992,
      lat: 50.319061,
      status: "green",
      signal: "-23.642 dBm"
    },
    {
      name: "ONT_CZERESNIOWA_7_LAKA",
      sn: "ZTEGC0B0DA7F",
      lon: 17.539706,
      lat: 50.318811,
      status: "green",
      signal: "-22.547 dBm"
    },
    {
      name: "ONT_CZERESNIOWA_5",
      sn: "ZTEGC0B0DEAC",
      lon: 17.540774,
      lat: 50.319283,
      status: "green",
      signal: "-21.713 dBm"
    },
    {
      name: "ONT_GLUCHOLASKA_15_LAKA",
      sn: "ZTEGC41D6102",
      lon: 17.525935,
      lat: 50.312492,
      status: "green",
      signal: "-27.094 dBm"
    },
    {
      name: "ONT_GLUCHOLASKA_15_LAKA2",
      sn: "ZTEGC41D609B",
      lon: 17.525935,
      lat: 50.312492,
      status: "green",
      signal: "-27.945 dBm"
    },
    {
      name: "ONT_GLUCHOLASKA_8_LAKA",
      sn: "ZTEGC41D6052",
      lon: 17.541127,
      lat: 50.318775,
      status: "green",
      signal: "-27.979 dBm"
    },
    {
      name: "ONT_GLUCHOLASKA_32_LAKA",
      sn: "ZTEGC41D5DBD",
      lon: 17.526499,
      lat: 50.313327,
      status: "green",
      signal: "65535 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_23_LAKA",
      sn: "ZTEGC0B0D455",
      lon: 17.532035,
      lat: 50.311031,
      status: "green",
      signal: "-29.498 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_26_LAKA",
      sn: "ZTEGC41D55F4D",
      lon: 17.523331,
      lat: 50.308995,
      status: "green",
      signal: "-28.562 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_22_LAKA",
      sn: "ZTEGC41D5D0C",
      lon: 17.526623,
      lat: 50.309775,
      status: "green",
      signal: "-26.872 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_30_LAKA",
      sn: "ZTEGC41D5B25",
      lon: 17.519123,
      lat: 50.30878,
      status: "yellow",
      signal: "-31.178 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_20_LAKA",
      sn: "ZTEGC41D5D2B",
      lon: 17.527586,
      lat: 50.309985,
      status: "green",
      signal: "-24.911 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_8C",
      sn: "ZTEGC41D5E38",
      lon: 17.531521,
      lat: 50.311312,
      status: "yellow",
      signal: "-31.675 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_8A_LAKA",
      sn: "ZTEGC41D60FA",
      lon: 17.532184,
      lat: 50.311681,
      status: "green",
      signal: "-23.635 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_77_LAKA",
      sn: "ZTEGC41D5DD6",
      lon: 17.520279,
      lat: 50.308651,
      status: "green",
      signal: "-23.545 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_15M2_LAKA",
      sn: "ZTEGC41D6062",
      lon: 17.533483,
      lat: 50.311931,
      status: "green",
      signal: "-25.008 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_8B",
      sn: "ZTEGC41D6014",
      lon: 17.531783,
      lat: 50.311451,
      status: "green",
      signal: "-24.213 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_71_LAKA",
      sn: "ZTEGC41D5F80",
      lon: 17.521298,
      lat: 50.308421,
      status: "green",
      signal: "-27.027 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_29_LAKA",
      sn: "ZTEGC41D5C7D",
      lon: 17.53105,
      lat: 50.310614,
      status: "yellow",
      signal: "-30.132 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_55",
      sn: "ZTEGC41D5FE7",
      lon: 17.525361,
      lat: 50.309237,
      status: "green",
      signal: "-29.336 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_5_LAKA",
      sn: "ZTEGC41D5C5C",
      lon: 17.535257,
      lat: 50.3127,
      status: "green",
      signal: "-23.528 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_4_LAKA",
      sn: "ZTEGC41D6047",
      lon: 17.535202,
      lat: 50.31314,
      status: "green",
      signal: "-24.268 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_79_LAKA",
      sn: "ZTEGC41D5AE8",
      lon: 17.519726,
      lat: 50.308832,
      status: "green",
      signal: "-22.879 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_87_LAKA",
      sn: "ZTEGC41D6001",
      lon: 17.517845,
      lat: 50.307432,
      status: "green",
      signal: "-20.931 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_2_LAKA",
      sn: "ZTEGC41D5DD1",
      lon: 17.535577,
      lat: 50.313253,
      status: "green",
      signal: "-23.246 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_75_LAKA",
      sn: "ZTEGC0B0DFD5",
      lon: 17.520161,
      lat: 50.308838,
      status: "green",
      signal: "-21.622 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_43A",
      sn: "ZTEGC41D5E34",
      lon: 17.527177,
      lat: 50.308675,
      status: "green",
      signal: "-24.374 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_6_LAKA",
      sn: "ZTEGC0B0E005",
      lon: 17.532998,
      lat: 50.312168,
      status: "green",
      signal: "-24.374 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_67_LAKA",
      sn: "ZTEGC0B0E231",
      lon: 17.522456,
      lat: 50.308237,
      status: "green",
      signal: "-24.993 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_49_LAKA",
      sn: "ZTEGC0B0E922",
      lon: 17.525779,
      lat: 50.30935,
      status: "green",
      signal: "-23.882 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_15M4_LAKA",
      sn: "ZTEGC0B0E02D",
      lon: 17.533483,
      lat: 50.311931,
      status: "green",
      signal: "-24.901 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_81_LAKA",
      sn: "ZTEGC0B0E32F",
      lon: 17.519036,
      lat: 50.308437,
      status: "green",
      signal: "-21.938 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_39",
      sn: "ZTEGC0B0DF58",
      lon: 17.528535,
      lat: 50.309718,
      status: "green",
      signal: "65535 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_20_LAKA",
      sn: "ZTEGC0B0E3DD",
      lon: 17.527586,
      lat: 50.309985,
      status: "green",
      signal: "-23.739 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_1A",
      sn: "ZTEGC0B0DFB2",
      lon: 17.53653,
      lat: 50.312446,
      status: "green",
      signal: "-24.772 dBm"
    },
    {
      name: "ONT_JANA_PAWLA_II_69",
      sn: "ZTEGC0B0D51B",
      lon: 17.522112,
      lat: 50.30844,
      status: "green",
      signal: "-24.001 dBm"
    },
    {
      name: "ONT_KWIATOWA_9_LAKA",
      sn: "ZTEGC41D5DEB",
      lon: 17.540359,
      lat: 50.314923,
      status: "green",
      signal: "-24.007 dBm"
    },
    {
      name: "ONT_KWIATOWA_3_LAKA",
      sn: "ZTEGC41D60F9",
      lon: 17.538084,
      lat: 50.313977,
      status: "green",
      signal: "-25.555 dBm"
    },
    {
      name: "ONT_KWIATOWA_3_PARTER_LAKA",
      sn: "ZTEGC41D5D78",
      lon: 17.538084,
      lat: 50.313977,
      status: "red",
      signal: "-33.767 dBm"
    },
    {
      name: "ONT_KWIATOWA_14_LAKA",
      sn: "ZTEGC0B0D8BC",
      lon: 17.54082,
      lat: 50.315028,
      status: "green",
      signal: "-24.151 dBm"
    },
    {
      name: "ONT_KWIATOWA_16_LAKA",
      sn: "ZTEGC41D6082",
      lon: 17.540689,
      lat: 50.315188,
      status: "green",
      signal: "-25.089 dBm"
    },
    {
      name: "ONT_KWIATOWA_10_LAKA",
      sn: "ZTEGC41D61FF",
      lon: 17.539683,
      lat: 50.31406,
      status: "green",
      signal: "-23.762 dBm"
    },
    {
      name: "ONT_KWIATOWA_18_LAKA",
      sn: "ZTEGC41D5F5A",
      lon: 17.540461,
      lat: 50.315276,
      status: "green",
      signal: "-24.485 dBm"
    },
    {
      name: "ONT_KWIATOWA_20_LAKA",
      sn: "ZTEGC41D5E2E",
      lon: 17.540656,
      lat: 50.315782,
      status: "green",
      signal: "-26.887 dBm"
    },
    {
      name: "ONT_KWIATOWA_4A_LAKA",
      sn: "ZTEGC41D60DD",
      lon: 17.536871,
      lat: 50.313674,
      status: "yellow",
      signal: "-31.037 dBm"
    },
    {
      name: "ONT_KWIATOWA_8_LAKA",
      sn: "ZTEGC41D605A",
      lon: 17.538944,
      lat: 50.313898,
      status: "green",
      signal: "-25.153 dBm"
    },
    {
      name: "ONT_KWIATOWA_1_LAKA",
      sn: "ZTEGC41D5D2E",
      lon: 17.537044,
      lat: 50.313982,
      status: "green",
      signal: "-25.63 dBm"
    },
    {
      name: "ONT_KWIATOWA_3",
      sn: "ZTEGC41D5E42",
      lon: 17.538084,
      lat: 50.313977,
      status: "green",
      signal: "-24.736 dBm"
    },
    {
      name: "ONT_KWIATOWA_11_LAKA",
      sn: "ZTEGC41D600C",
      lon: 17.54021,
      lat: 50.315209,
      status: "green",
      signal: "-25.767 dBm"
    },
    {
      name: "ONT_KWIATOWA_2_LAKA",
      sn: "ZTEGC41D5CBB",
      lon: 17.536531,
      lat: 50.313787,
      status: "green",
      signal: "-23.768 dBm"
    },
    {
      name: "ONT_MLYNSKA_2",
      sn: "ZTEGC0B0E20F",
      lon: 17.541859,
      lat: 50.317353,
      status: "green",
      signal: "-22.496 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_76_LAKA",
      sn: "ZTEGC41D5DFE",
      lon: 17.52213,
      lat: 50.309691,
      status: "green",
      signal: "-29.862 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_78_LAKA",
      sn: "ZTEGC0B0DBD6",
      lon: 17.521412,
      lat: 50.309745,
      status: "green",
      signal: "-26.752 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_86",
      sn: "ZTEGC0B0D45F",
      lon: 17.51972,
      lat: 50.309921,
      status: "green",
      signal: "-24.504 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_3",
      sn: "ZTEGC0B0DE54",
      lon: 17.522039,
      lat: 50.309456,
      status: "green",
      signal: "65535 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_94",
      sn: "ZTEGC41D5FB7",
      lon: 17.517604,
      lat: 50.308401,
      status: "green",
      signal: "-24.825 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_66_LAKA",
      sn: "ZTEGC41D6088",
      lon: 17.524043,
      lat: 50.309607,
      status: "green",
      signal: "-21.857 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_6_LAKA",
      sn: "ZTEGC41D5C7F",
      lon: 17.535691,
      lat: 50.314136,
      status: "green",
      signal: "-27.122 dBm"
    },
    {
      name: "ONT_NA_ZLOTYM_POTOKIEM_36",
      sn: "ZTEGC41D5C7C",
      lon: 17.530548,
      lat: 50.311876,
      status: "green",
      signal: "-21.567 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_58",
      sn: "ZTEGC41D5CB8",
      lon: 17.525245,
      lat: 50.309793,
      status: "green",
      signal: "-20.967 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_64",
      sn: "ZTEGC41D5EDB",
      lon: 17.524286,
      lat: 50.309916,
      status: "green",
      signal: "-22.33 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_38M1",
      sn: "ZTEGC41D5DCE",
      lon: 17.530247,
      lat: 50.31162,
      status: "green",
      signal: "-21.075 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_8_LAKA",
      sn: "ZTEGC41D5FF3",
      lon: 17.535287,
      lat: 50.314032,
      status: "green",
      signal: "-27.122 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_30",
      sn: "ZTEGC41D5E54",
      lon: 17.531435,
      lat: 50.312274,
      status: "green",
      signal: "-23.165 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_42_LAKA",
      sn: "ZTEGC0B0E02F",
      lon: 17.529476,
      lat: 50.311088,
      status: "green",
      signal: "-21.356 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_3M1",
      sn: "ZTEGC41D6113",
      lon: 17.522039,
      lat: 50.309456,
      status: "red",
      signal: "-32.06 dBm"
    },
    {
      name: "ONT_NZP_40",
      sn: "ZTEGC0B0E05E",
      lon: 17.530123,
      lat: 50.31152,
      status: "green",
      signal: "-28.217 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_4",
      sn: "ZTEGC0B0E1F1",
      lon: 17.536066,
      lat: 50.314285,
      status: "green",
      signal: "-28.349 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_44M5",
      sn: "ZTEGC41D5E30",
      lon: 17.529115,
      lat: 50.310949,
      status: "green",
      signal: "-25.571 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_44M3",
      sn: "ZTEGC41D5F32",
      lon: 17.529115,
      lat: 50.310949,
      status: "green",
      signal: "-23.744 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_108",
      sn: "ZTEGC0B0E1CE",
      lon: 17.51499,
      lat: 50.307063,
      status: "green",
      signal: "-21.319 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_90",
      sn: "ZTEGC0B0DE52",
      lon: 17.518142,
      lat: 50.309172,
      status: "green",
      signal: "-26.042 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_102",
      sn: "ZTEGC0B0E398",
      lon: 17.51578,
      lat: 50.307424,
      status: "green",
      signal: "-23.79 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_68",
      sn: "ZTEGC0B0E062",
      lon: 17.523926,
      lat: 50.309768,
      status: "green",
      signal: "-28.737 dBm"
    },
    {
      name: "ONT_NAD_ZLOTYM_POTOKIEM_108M2",
      sn: "ZTEGC41D5DD4",
      lon: 17.51499,
      lat: 50.307063,
      status: "green",
      signal: "-27.057 dBm"
    },
    {
      name: "ONT_NOWA_12_LAKA",
      sn: "ZTEGC41D5E56",
      lon: 17.526083,
      lat: 50.311342,
      status: "green",
      signal: "-23.506 dBm"
    },
    {
      name: "ONT_NOWA_11_LAKA",
      sn: "ZTEGC41D613A",
      lon: 17.526204,
      lat: 50.311047,
      status: "green",
      signal: "-24.067 dBm"
    },
    {
      name: "ONT_NOWA_14_LAKA",
      sn: "ZTEGC0C2D6E2",
      lon: 17.525731,
      lat: 50.311365,
      status: "green",
      signal: "-23.925 dBm"
    },
    {
      name: "ONT_OPAWSKA_1_LAKA",
      sn: "ZTEGC41D602D",
      lon: 17.517498,
      lat: 50.309092,
      status: "green",
      signal: "-26.536 dBm"
    },
    {
      name: "ONT_POLNA_3_LAKA",
      sn: "ZTEGC0B0E25A",
      lon: 17.51544,
      lat: 50.30661,
      status: "green",
      signal: "-21.624 dBm"
    },
    {
      name: "ONT_POLNA_9_LAKA",
      sn: "ZTEGC0B0E1E8",
      lon: 17.513965,
      lat: 50.305709,
      status: "green",
      signal: "-24.134 dBm"
    },
    {
      name: "ONT_ROZANA_8",
      sn: "ZTEGC41D5DD8",
      lon: 17.541542,
      lat: 50.320345,
      status: "green",
      signal: "-25.444 dBm"
    },
    {
      name: "ONT_ROZANA_1_LAKA",
      sn: "ZTEGC41D5C1A",
      lon: 17.542109,
      lat: 50.319273,
      status: "green",
      signal: "-26.701 dBm"
    },
    {
      name: "ONT_ROZANA_5_LAKA",
      sn: "ZTEGC0B0E20A",
      lon: 17.541495,
      lat: 50.320066,
      status: "green",
      signal: "-25.395 dBm"
    },
    {
      name: "ONT_ROZANA_6_LAKA",
      sn: "ZTEGC0AD35B9",
      lon: 17.541718,
      lat: 50.320123,
      status: "green",
      signal: "-29.935 dBm"
    },
    {
      name: "ONT_SLONECZNA_3",
      sn: "ZTEGC41D5F0D",
      lon: 17.541159,
      lat: 50.314511,
      status: "green",
      signal: "65535 dBm"
    },
    {
      name: "ONT_SLOWICZA_3_LAKA",
      sn: "ZTEGC41D5A71",
      lon: 17.533177,
      lat: 50.315913,
      status: "green",
      signal: "-19.931 dBm"
    },
    {
      name: "ONT_SLOWICZA_5_LAKA",
      sn: "ZTEGC0B0E02C",
      lon: 17.532955,
      lat: 50.316297,
      status: "green",
      signal: "-21.319 dBm"
    },
    {
      name: "ONT_SPORTOWA_3_LAKA",
      sn: "ZTEGC41D60FE",
      lon: 17.528189,
      lat: 50.314554,
      status: "green",
      signal: "-27.27 dBm"
    },
    {
      name: "ONT_SZKOLNA_8B_LAKA",
      sn: "ZTEGC41D60D7",
      lon: 17.527473,
      lat: 50.311801,
      status: "green",
      signal: "-27.184 dBm"
    },
    {
      name: "ONT_SZKOLNA_6_LAKA",
      sn: "ZTEGC41D5D32",
      lon: 17.52721,
      lat: 50.312607,
      status: "green",
      signal: "-26.303 dBm"
    },
    {
      name: "ONT_SZKOLNA_9M6_LAKA_II",
      sn: "ZTEGC41D6023",
      lon: 17.528012,
      lat: 50.310737,
      status: "green",
      signal: "-25.63 dBm"
    },
    {
      name: "ONT_SZKOLNA_8A_LAKA",
      sn: "ZTEGC41D5BB1",
      lon: 17.527426,
      lat: 50.311971,
      status: "green",
      signal: "-25.846 dBm"
    },
    {
      name: "ONT_SZKOLNA_9M5_LAKA",
      sn: "ZTEGC41D5C00",
      lon: 17.528012,
      lat: 50.310737,
      status: "green",
      signal: "-25.667 dBm"
    },
    {
      name: "ONT_SZKOLNA_5",
      sn: "ZTEGC0B0D8DD",
      lon: 17.527576,
      lat: 50.312585,
      status: "green",
      signal: "-29.892 dBm"
    },
    {
      name: "ONT_WASKA_6_LAKA",
      sn: "ZTEGC41D60D0",
      lon: 17.527074,
      lat: 50.314711,
      status: "green",
      signal: "-28.181 dBm"
    },
    {
      name: "ONT_WASKA_3",
      sn: "ZTEGC41D6121",
      lon: 17.527146,
      lat: 50.313749,
      status: "green",
      signal: "-28.523 dBm"
    },
    {
      name: "ONT_WASKA_5_LAKA",
      sn: "ZTEGC0B0E0AA",
      lon: 17.526992,
      lat: 50.314206,
      status: "green",
      signal: "-25.654 dBm"
    },
    {
      name: "ONT_WISNIOWA_3",
      sn: "ZTEGC0B0DEFF",
      lon: 17.518249,
      lat: 50.309785,
      status: "green",
      signal: "-21.745 dBm"
    },
    {
      name: "ONT_ZAMKOWA_13_LAKA",
      sn: "ZTEGC0B0E8F7",
      lon: 17.538251,
      lat: 50.314492,
      status: "green",
      signal: "-25.041 dBm"
    },
    {
      name: "ONT_ZAMKOWA_1M3_LAKA",
      sn: "ZTEGC0B0E280",
      lon: 17.53689,
      lat: 50.315357,
      status: "yellow",
      signal: "-30.11 dBm"
    },
    {
      name: "ONT_ZAMKOWA_6M5_LAKA",
      sn: "ZTEGC0B0DEA5",
      lon: 17.536661,
      lat: 50.315039,
      status: "green",
      signal: "-22.291 dBm"
    },
    {
      name: "ONT_ZAMKOWA_2M1",
      sn: "ZTEGC0B0E064",
      lon: 17.536621,
      lat: 50.315425,
      status: "green",
      signal: "-22.68 dBm"
    },
    {
      name: "ONT_ZAMKOWA_3",
      sn: "ZTEGC0B0D549",
      lon: 17.536875,
      lat: 50.314925,
      status: "green",
      signal: "-22.933 dBm"
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
  //   console.log(
  //     xyCoordinates[i].name,
  //     xyCoordinates[i].sn,
  //     xyCoordinates[i].lon,
  //     xyCoordinates[i].lat,
  //     xyCoordinates[i].status,
  //     xyCoordinates[i].signal
  //   );

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

  //   console.log(
  //     markers[i].lat,
  //     markers[i].lon,
  //     markers[i].status,
  //     markers[i].sn,
  //     markers[i].signal
  //   );
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
