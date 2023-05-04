import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    ),
  ],

}


export default preview;
