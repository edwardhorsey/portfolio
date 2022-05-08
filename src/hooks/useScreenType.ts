import { useMediaQuery } from 'react-responsive';

// Tailwind CSS prefixes
export const DESKTOP_2XL = '2xl';
export const DESKTOP_XL = 'xl';
export const DESKTOP = 'lg';
export const TABLET = 'md';
export const MOBILE = 'sm';

export const DESKTOP_XL_AND_BIGGER = [DESKTOP_XL, DESKTOP_2XL];
export const DESKTOP_SIZES = [DESKTOP, DESKTOP_XL, DESKTOP_2XL];
export const MOBILE_SIZES = [MOBILE, TABLET];

type ScreenType = '2xl' | 'xl' | 'lg' | 'md' | 'sm';

// see tailwind.config.js
const DESKTOP_2XL_BREAKPOINT = 1536;
const DESKTOP_XL_BREAKPOINT = 1280;
const DESKTOP_BREAKPOINT = 960; // 1024
const TABLET_BREAKPOINT = 768;

const useScreenType = (): ScreenType => {
    const isDesktop2XL = useMediaQuery({ minWidth: DESKTOP_2XL_BREAKPOINT });
    const isDesktopXL = useMediaQuery({ minWidth: DESKTOP_XL_BREAKPOINT });
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_BREAKPOINT });
    const isTablet = useMediaQuery({ minWidth: TABLET_BREAKPOINT });

    if (isDesktop2XL) {
        return DESKTOP_2XL;
    }

    if (isDesktopXL) {
        return DESKTOP_XL;
    }

    if (isDesktop) {
        return DESKTOP;
    }

    if (isTablet) {
        return TABLET;
    }

    return MOBILE;
};

export default useScreenType;
