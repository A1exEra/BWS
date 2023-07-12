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
import { TheAppProvider } from '../helpers/PriceRangeContext';
import { NotificationContextProvider } from '@/helpers/Notificationcontext';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <TheAppProvider>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <NotificationContextProvider>
            <Header />
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
          </NotificationContextProvider>
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </TheAppProvider>
  );
}
