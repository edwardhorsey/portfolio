import { useMediaQuery } from 'react-responsive';

// Tailwind CSS prefixes
export const DESKTOP = 'lg';
export const MOBILE = 'sm';

type ScreenType = '2xl' | 'xl' | 'lg' | 'md' | 'sm';

// see tailwind.config.js
const DESKTOP_BREAKPOINT = 960;

const useScreenType = (): ScreenType => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_BREAKPOINT });

    if (isDesktop) {
        return DESKTOP;
    }

    return MOBILE;
};

export default useScreenType;
