import { mount } from '@vue/test-utils'
import Button from '../src/Button.vue'

describe('button', () => {
  it('should render with slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'myButton',
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
