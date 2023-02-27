import Layout from '@/src/components/Layout';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '@/src/constants/defaultSEO';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
