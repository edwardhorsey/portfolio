import type { AppProps } from 'next/app';
import { UIRefsProvider } from '../contexts/UiRefsContext';
import '../styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
        <UIRefsProvider>
            <Component {...pageProps} />
        </UIRefsProvider>
    );
}

export default MyApp;

// Force no server-side rendering
// export default dynamic(() => Promise.resolve(MyApp), {
//   ssr: false,
// });
