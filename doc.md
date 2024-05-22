# app-base-framework

> 基于 Vue3 + Vite + Uniapp 的移动端跨端应用基础框架

# 目录结构

# 低代码表单设计雏形

通过设计统一的 JSON 结构，通过 Render 解析成表单，未来可通过前端拖拽实现 JSON 生成。

```json
{
  "type": "TuiFormItem",
  "prop": "area",
  "children": [{ "type": "TuiInput" }]
}
```
