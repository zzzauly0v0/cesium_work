## 构建航班实时路线显示
1. 首先搭建一个简易的Cesium应用
    * Cesium.Ion.defaultAccessToken = 自己的密钥
    * new Cesium.Viewer("cesiumContainer"); 生成一个新的图层
2. 加入建筑和地形
    * 在上一步new Viewer的基础上添加terrain地形基础
    * 使用异步函数加载OpenStreetMap建筑物
    * 将建筑添加到Cesium场景中去
3. 添加单个数据点
    * 定义实体点(经度、维度、高度)
    * 创建viewer.entities.add添加实体化数据，description描述属性
        position:position: Cesium.Cartesian3.fromDegrees()将经纬度数据转换为Cartesian3三维坐标
    * viewer.flyTo(目标点);
    * 场景加载
4. 添加多个数据点
    * 和第三步类似
    * flightdata.forEach