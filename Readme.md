## Earth

地球，真实感静物，支持拖拽、放缩等人机交互

GitHub: [Earth](https://github.com/irmowan/Earth/tree/master)

Demo: [Earth](http://irmo.me/Earth/)

#### Introduction

该项目绘制了一个真实感静物——地球，模拟了地球在宇宙背景下，由地球自西向东自转以及太阳光照产生的昼夜。

项目还支持了放缩、拖拽等切换视角的人机交互方式。

#### Installation & Usage

Clone源代码，直接在Chrome浏览器执行即可。

通过拖拽、放缩等方式调整到一个合适的角度即可。

#### File Description

```
├── LICENSE
├── Readme.md
├── index.html
├── css
│   └── style.css
├── img
│   ├── earth.jpg
│   ├── earth2880.jpg
│   └── star-field.png
└── js
    ├── OrbitControls.js
    ├── earth.js
    └── three.min.js

3 directories, 10 files
```

其中，`img`文件夹下保存了地球的图片，用于平铺到球体上，以及星空的图片，用以投影到背景上。`css`文件夹下保存了基本的样式。

`js`文件夹下是核心代码。

- `three.min.js`是压缩后的[three.js](https://threejs.org/)库，支持了3D WebGL，提供了基本的物件(如项目中的球体)、摄像机视角等特性。
- `OrbitControls.js`则是一段WebGL的人机交互支持[代码](https://github.com/Jam3/orbit-controls)。提供了拖拽、放缩等功能，常被应用在街景等需要移动视角的场景。在项目中被用于进行角度的拖拽。
- `earth.js`则是主要的js代码，利用three.js库定义一个球体，然后将地球地图的平面图作为全局样式，覆盖在整个球体上以产生地球仪的效果。同时设置了相应的光照参数、自动旋转以模拟自转、光照产生的昼夜更替效果。此外还设置了星空作为宇宙背景以增加真实感。

#### License

MIT License

------

Author: [irmo](https://github.com/irmowan)

Date: 2016.11