import type { AppProps } from 'next/app';
import '../globals.css';

import Layout from '@/components/Layout.component';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
