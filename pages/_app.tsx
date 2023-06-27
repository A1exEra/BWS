import '@/styles/globals.scss';
import '../styles/fonts&colors.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import MainContainer from '@/components/layout/MainContainer';
import theme from '../styles/theme';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Component {...pageProps} />;
      </MainContainer>
    </ThemeProvider>
  );
}
