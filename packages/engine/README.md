# 引擎核心

## 结构

1. 核心
   1. editor      引擎编辑器核心
   2. plugin      插件系统
   3. skeleton    引擎骨架
   4. layout      工作台布局
   5. data        数据中心/文档模型
   6. designer    设计器核心
   7. utils       工具方法
   8. assets      资产管理 挂载点
      1. material    物料
      2. setters     设置器
      3. request     请求数据及处理
2. 扩展
   1. 画布渲染
      1. renderer             渲染器
      2. simulator-renderer   模拟器
      3. bem-tools            辅助操作器
      4. preview              预览功能
   2. 物料扩展
      1. material             物料加载管理
      2. components-panel     组件面板
   3. 设置器扩展
      1. setters              设置器加载管理
      2. setters-panel        设置器操作面板
3. 其他
   1. request                 数据请求扩展
   2. 其他扩展
