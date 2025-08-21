import { useJss } from '../../../_utils/jss'

const { create } = useJss()

const sheet = create({
  jssButton: {
    color: 'red',
    fontSize: '16px',
    backgroundColor: 'yellow',
  },
})

export const styles = sheet.classes
