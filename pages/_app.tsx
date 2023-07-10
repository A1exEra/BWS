import '@/styles/globals.scss';
import '../styles/fonts&colors.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import MainContainer from '@/components/layout/MainContainer';
import theme from '../styles/theme';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/helpers/cartContext';
import { PriceRangeContext } from '../helpers/PriceRangeContext';
import { BWS_DATA } from '@/helpers/api-util';
import { TheAppProvider } from '../helpers/PriceRangeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TheAppProvider>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Header />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </TheAppProvider>
  );
}
