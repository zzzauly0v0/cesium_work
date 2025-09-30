<template>
  <div id="cesiumContainer" ref="cesiumContainer"></div>
  <div>hello world</div>
</template>

<script setup>
import * as Cesium from "cesium";
import "../Widgets/widgets.css";
import { onMounted } from "vue";

window.CESIUM_BASE_URL = '/';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YTY2NTRhNi1iMmJkLTQwYTQtOWRlNS05OWYzYTBlMDdjYmIiLCJpZCI6MzQ1MjA5LCJpYXQiOjE3NTkwMzAzODV9.xGskbzgS8nkuMPR7rUx0CCaecFAawVg6NRmSyUu4dU0';


onMounted(async () => {
  try {
    // 创建 Viewer 实例并加载世界地形
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    // 异步加载 OpenStreetMap 建筑物
    const osmBuildings = await Cesium.createOsmBuildingsAsync();

    //定义数据点
    const dataPoint = { longitude: -122.38985, latitude: 37.61864, height: -27.32 };

    //创建点实体
    const pointEntity = viewer.entities.add({
      description: `经纬度: ${dataPoint.longitude}, ${dataPoint.latitude}`,
      position: Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.height),
      point: { pixelSize: 10, color: Cesium.Color.RED }
    });

    //飞向该点
    viewer.flyTo(pointEntity);

    // 添加建筑物到场景中
    viewer.scene.primitives.add(osmBuildings);
  } catch (error) {
    console.error("发生错误:", error);
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
