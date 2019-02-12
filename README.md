# vue+Typescript+ElementUi 后台管理系统

### 项目使用技术
```

```

### 项目目录结构说明
```
|-public // 非编译的静态资源
|-src // 开发目录
|----assets // 存放需要编译的静态资源
|----components // 组件
|--------------common // 公用组件
|--------------login // 存放用户注册登录等组件
|----layouts // 存放布局组件：页头、左边目录、页脚等
|----pages // 页面路由入口组件
|---------admin 
|---------login
|---------others
|---------index.vue
|----plugins // 存放全局插件
|-----------axios.ts
|----routes // 存放路由文件
|----------index.ts // 应用路由总入口
|----stores // 存放模块状态管理文件
|----------index.ts // 应用状态管理总入口
|----utils // 常用的功能工具类
|----App.vue // 应用入口组件
|----main.ts // 应用入口类
|----shims-tsx.d.ts // ts 支持jsx语法
|----shims-vue.d.ts // ts 支持vue文件
|-vue.config.js // webpack配置
```

## 项目安装
```
npm install
```

### 项目开发启动
```
npm run serve
```

### 项目编译发布
```
npm run build
```
