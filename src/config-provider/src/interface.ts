import type { ConfigProviderProps as AntdConfigProviderProps } from 'ant-design-vue'
import type { ExtractPublicPropTypes, PropType, VNode } from 'vue'

export const configProviderProps = {
  /**
   * Ant Design Vue 配置
   */
  antdConfig: Object as PropType<AntdConfigProviderProps>,
  /**
   * 是否开启调试模式
   */
  debug: Boolean,
}

export type ConfigProviderProps = ExtractPublicPropTypes<typeof configProviderProps>

export interface ConfigProviderSlots {
  /**
   * 默认插槽
   */
  default?: () => VNode[]
}
