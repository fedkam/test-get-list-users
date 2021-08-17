import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ResetCss from './ResetCss';

const UiKit: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ResetCss />
    {children}
  </ThemeProvider>
);

export default UiKit;
