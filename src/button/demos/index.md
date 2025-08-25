# 按钮 Button

按钮用来触发一些操作。

## 演示

<!-- DEMO -->

<demo vue="button/demos/basic.vue" />
<demo vue="button/demos/color.vue" />

<!-- DEMO -->

## API

<!-- API -->

### Button Props

| 名称  | 类型                                                                                  | 默认值      | 说明                                                                      | 版本 |
| ----- | ------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------- | ---- |
| type  | `'default' \| 'tertiary' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | 按钮的类型                                                                |      |
| color | `string`                                                                              | `undefined` | 按钮颜色（支持形如 `#FFF`， `#FFFFFF`， `yellow`，`rgb(0, 0, 0)` 的颜色） |      |

### Button Slots

| 名称    | 参数 | 说明       |
| ------- | ---- | ---------- |
| default | `()` | 按钮的内容 |
| icon    | `()` | 按钮的图标 |

<!-- API -->
