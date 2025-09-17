import { createStyleSheet } from '../../../_utils/jss'

export const sheet = createStyleSheet({
  primaryButton: {
    backgroundColor: 'yellow',
    fontSize: 18,
  },
  jssButton: {
    'composes': ['zui-button', 'zui-button-primary'],
    'fontSize': 18,
    'color': 'red',
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
