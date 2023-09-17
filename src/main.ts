import ArcGISMap from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";

import esriConfig from "@arcgis/core/config.js";

const apiKey = 'AAPK2cfc253e947540b59ba889a00dcd4491EhtKpH8Sd1w3NFXMo4kAeEcS0yKJhVZYVCRbklbZFAzMfBORI37eiJbjLdJCP0-3'

esriConfig.apiKey = apiKey;

const map = new ArcGISMap({
  basemap: "arcgis-dark-gray"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

view.when(() => {
  console.log("Map is loaded");
})