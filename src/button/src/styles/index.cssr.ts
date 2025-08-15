import { c, cB, cM } from '../../../_utils/cssr'

export default c([
  cB('button', {
    backgroundColor: 'red',
  }, [
    cM('primary', {
      backgroundColor: 'blue',
    }),
    cM('disabled', {
      backgroundColor: 'gray',
    }),
  ]),
])
