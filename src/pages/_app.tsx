import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { UIRefsProvider } from '../contexts/UiRefsContext';
import '../styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
        <UIRefsProvider>
            <Component {...pageProps} />
            <Analytics />
        </UIRefsProvider>
    );
}

export default MyApp;
