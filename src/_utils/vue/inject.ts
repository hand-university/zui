import type { InjectionKey } from 'vue'

export function createInjectionKey<T>(name: string): InjectionKey<T> {
  return Symbol(name)
}
