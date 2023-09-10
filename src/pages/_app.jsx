import '@/styles/globals.css';
import '@/styles/sidebar.css';
import '@/styles/minieditor.css';
import '@/styles/clickdetector.css';
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

export default function App({ Component, pageProps }) {
  return (
  <ThinBackend>
    <Component {...pageProps} />
  </ThinBackend> )
}
