<template>
  <div id="mapview"></div>
</template>

<script>
import esriLoader from "esri-loader";

export default {
  mounted() {
    const option = {
      url: "http://localhost:3010/Web/arcgis_js_api/library/4.12/init.js"
    };
    esriLoader
      .loadModules(
        ["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"],
        option
      )
      .then(
        ([Map, MapView, FeatureLayer]) => {
          const map = new Map({
            basemap: "streets"
          });
          const mapview = new MapView({
            container: "mapview",
            map: map,
            zoom: 12,
            center: [119.28, 26.08]
          });
          const fl = new FeatureLayer({
            url:
              "http://220.250.29.189:6080/arcgis/rest/services/SampleWorldCities/MapServer"
          });
          map.add(fl);
        },
        result => {
          console.log(result);
        }
      );
  }
};
</script>

<style scoped>
#mapview {
  height: 1000px;
  width: 100%;
}
</style>