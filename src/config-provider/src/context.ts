import type { ConfigProviderProps } from './interface'

import { inject } from 'vue'
import { createInjectionKey } from '../../_utils/vue'

export const configProviderInjectionKey = createInjectionKey('z-config-provider')

export function useConfigProvider() {
  const configProvider = inject<ConfigProviderProps>(configProviderInjectionKey, () => ({}))

  // TODO: 可以在此做一些合并配置的操作

  return configProvider
}
