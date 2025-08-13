import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  setup(props, { slots }) {
    return () => {
      return (
        <Button
          type={props.type}
          color={props.color}
        >
          {slots.default?.()}
        </Button>
      )
    }
  },
})
