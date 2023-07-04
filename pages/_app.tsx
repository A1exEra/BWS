import '@/styles/globals.scss';
import '../styles/fonts&colors.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import MainContainer from '@/components/layout/MainContainer';
import theme from '../styles/theme';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/helpers/cartContext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Header />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}
