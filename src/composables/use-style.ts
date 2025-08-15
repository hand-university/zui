import type { CNode } from 'css-render'
import { onBeforeMount } from 'vue'
import { prefix } from '../_utils/cssr'

export function useStyle(mountId: string, style: CNode | undefined) {
  function mountStyle() {
    if (style) {
      style.mount({
        id: `${prefix}${mountId}`,
        head: true,
      })
    }
  }

  onBeforeMount(mountStyle)
}
