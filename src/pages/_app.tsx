import type { AppProps } from 'next/app';
import '../globals.css';

import Navbar from '@/components/navbar/Navbar.component';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      {' '}
      <Component {...pageProps} />
      <div className="flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}
