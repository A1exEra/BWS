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
import PriceRangeContext from '../helpers/PriceRangeContext';

export default function App({ Component, pageProps }: AppProps) {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <PriceRangeContext.Provider
        value={{
          sortedProducts,
          setSortedProducts,
          filteredProducts,
          setFilteredProducts,
        }}
      >
        <CartProvider>
          <Header />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
          <Footer />
        </CartProvider>
      </PriceRangeContext.Provider>
    </ThemeProvider>
  );
}
