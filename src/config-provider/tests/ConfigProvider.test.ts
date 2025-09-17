import { mount } from '@vue/test-utils'
import ConfigProvider from '../src/ConfigProvider.vue'

describe('config-provider', () => {
  it('should render with slot', () => {
    const wrapper = mount(ConfigProvider, {
      slots: {
        default: 'myConfigProvider',
      },
    })

    expect(wrapper.text()).toMatchInlineSnapshot('"myConfigProvider"')
  })

  it('should render with antdConfig', () => {
    const wrapper = mount(ConfigProvider, {
      props: {
        antdConfig: {
          theme: {
            token: {
              colorPrimary: 'red',
            },
          },
        },
      },
    })
    expect(wrapper.props().antdConfig).toMatchInlineSnapshot(`
      {
        "theme": {
          "token": {
            "colorPrimary": "red",
          },
        },
      }
    `)
  })

  it('should render with debug', () => {
    const wrapper = mount(ConfigProvider, {
      props: {
        debug: true,
      },
    })
    expect(wrapper.props().debug).toBe(true)
  })
})
