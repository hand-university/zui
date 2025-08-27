import type { ButtonType } from 'ant-design-vue/es/button'
import type { ExtractPublicPropTypes, PropType, VNode } from 'vue'

export const buttonProps = {
  /**
   * 按钮类型
   */
  type: String as PropType<ButtonType>,
  /**
   * 按钮颜色
   */
  color: String,
}

export type ButtonProps = ExtractPublicPropTypes<typeof buttonProps>

export interface ButtonEvents {
  /**
   * 点击事件
   */
  (e: 'click'): void
}

export interface ButtonSlots {
  /**
   * 默认插槽
   */
  default?: () => VNode[]
  /**
   * Icon
   */
  icon?: () => VNode[]
}
