<template>
  <div>
    <div id="viewDiv"></div>
    <div id="overviewDiv">
      <div id="extentDiv"></div>
    </div>
  </div>
</template>

<script>
import esriLoader from "esri-loader";
import option from "./config";
export default {
  data() {
    return {
      option,
      mainMap: "this is mainmap",
      overviewMap: "this is overviewmap",
      mainView: "this is mainview",
      mapView: "this is mapview",
      fl: "this is a FeatureLayer"
    };
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      // const option = {
      //   url: "http://localhost:3010/Web/arcgis_js_api/library/4.12/init.js"
      // };
      esriLoader
        .loadModules(
          [
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/FeatureLayer",
            "esri/geometry/Point",
            "esri/core/watchUtils"
          ],
          this.option
        )
        .then(([Map, MapView, FeatureLayer, Point, watchUtils]) => {
          //主地图mainmap
          this.mainMap = new Map({
            basemap: "streets"
          });
          //小地图overviewmap
          this.overviewMap = new Map({
            basemap: "topo"
          });
          //主视图mainview
          this.mainView = new MapView({
            container: "viewDiv",
            map: this.mainMap,
            zoom: 12,
            center: [119.28, 26.08]
          });
          //小地图视图mapview
          this.mapView = new MapView({
            container: "overviewDiv",
            map: this.overviewMap,
            constraints: {
              rotationEnabled: false
            }
          });
          // Remove the default widgets
          this.mapView.ui.components = [];
          this.fl = new FeatureLayer({
            url:
              "http://220.250.29.189:6080/arcgis/rest/services/SampleWorldCities/MapServer"
          });
          this.mainMap.add(this.fl);
          //console.log(this.mainView.extent);//不知道为什么，这句话直接是获取不到extent的
          /**下面这段，.when写在这里好像没用啊 */
          // this.mapView.when(() => {
          //   this.mainView.watch("extent", this.updateOverviewExtent);
          //   this.mapView.watch("extent", this.updateOverviewExtent);
          //   this.watchUtils.when(
          //     this.mainView,
          //     "stationary",
          //     this.updateOverview
          //   );
          // });
        });
    },
    updateOverviewExtent() {
      esriLoader
        .loadModules(["esri/geometry/Point"], this.option)
        .then(([Point]) => {
          var extent = this.mainView.extent;

          var bottomLeft = this.mapView.toScreen(
            new Point({
              x: extent.xmin,
              y: extent.ymin,
              spatialReference: extent.spatialReference
            })
          );

          var topRight = this.mapView.toScreen(
            new Point({
              x: extent.xmax,
              y: extent.ymax,
              spatialReference: extent.spatialReference
            })
          );

          extentDiv.style.top = topRight.y + "px";
          extentDiv.style.left = bottomLeft.x + "px";

          extentDiv.style.height = bottomLeft.y - topRight.y + "px";
          extentDiv.style.width = topRight.x - bottomLeft.x + "px";
        });
    },
    updateOverview() {
      this.mapView.goTo({
        center: this.mainView.center,
        scale:
          this.mainView.scale *
          2 *
          Math.max(
            this.mainView.width / this.mapView.width,
            this.mainView.height / this.mapView.height
          )
      });
    },
    changePosition(e) {
      this.mainView.goTo({
        center: e.mapPoint
      });
    }
  },
  /**师兄说这里直接都写在mounted函数里就可以了 */
  watch: {
    mapView: function() {
      this.mainView.watch("extent", this.updateOverviewExtent);
      this.mapView.watch("extent", this.updateOverviewExtent);
      esriLoader
        .loadModules(["esri/core/watchUtils"], this.option)
        .then(([watchUtils]) => {
          watchUtils.when(this.mainView, "stationary", this.updateOverview);
          watchUtils.when(this.mapView, "stationary", this.updateOverview);
        });
      this.mapView.on("click", event => {
        this.changePosition(event);
      });
    }
  }
};
</script>

<style scoped>
#viewDiv {
  height: 1000px;
  width: 100%;
  z-index: -1;
}
#overviewDiv {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 300px;
  height: 200px;
  border: 1px solid black;
  z-index: 1;
  overflow: hidden;
}
#extentDiv {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 2;
}
</style>