import { useJss } from '../../../_utils/jss'

const { create } = useJss()

export const sheet = create({
  primaryButton: {
    backgroundColor: 'yellow',
    fontSize: 18,
  },
  jssButton: {
    'composes': ['zui-button', 'zui-button-primary'],
    'fontSize': 18,
    'backgroundColor': 'yellow',
    'padding': [5, 10],
    'margin': [5, 10],
    'border': {
      style: 'solid',
      width: 1,
      color: 'red',
    },
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
})

export const styles = sheet.classes
