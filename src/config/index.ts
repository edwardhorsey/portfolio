export const title = 'Edward Horsey Portfolio';
export const description = 'Edward Horsey is a software developer and designer based in London, UK.';
export const siteUrl = 'https://www.edwardhorsey.io';
export const ogImage = '';
export const favicon = `/img/favicon.png`;

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
export const isAmplifyApp = hostname.indexOf('amplifyapp') !== -1;

export const IS_DEV = process.env.NODE_ENV === 'development';

export const IMAGE_FOLDER = IS_DEV ? '/img' : '/img';
