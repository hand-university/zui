import { useDemo } from '../src'

it('simple', () => {
  expect(useDemo()).toEqual({
    name: 'demo',
  })
})
