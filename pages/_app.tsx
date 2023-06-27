import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import MainContainer from '@/components/layout/MainContainer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContainer>
      <Component {...pageProps} />;
    </MainContainer>
  );
}
