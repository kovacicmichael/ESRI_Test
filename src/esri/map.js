import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import DistanceMeasurement2D from "@arcgis/core/widgets/DistanceMeasurement2D";
import Expand from "@arcgis/core/widgets/Expand";

const noop = (err) => {
  console.error(err)
};

const myMap = new Map({
  basemap: "streets-night-vector"
});
// Create a MapView instance (for 2D viewing) and reference the map instance
const view = new MapView({
  map: myMap,
  center: [0, 0],
  zoom: 2
});

const basemapGallery = new BasemapGallery({
  view: view,
});
const bgExpand = new Expand({
  view: view,
  content: basemapGallery
});
const measurment = new DistanceMeasurement2D({
  view: view
});
const msExpand = new Expand({
  view: view,
  content: measurment
});

view.ui.add(bgExpand, "top-right");
view.ui.add(msExpand, "top-right");

export const initialize = (container) => {
  view.container = container;
  view
    .when()
    .then(_ => {
      console.log("Map and View are ready");
    })
    .catch(noop);
  return () => {
    view.container = null;
  };
};