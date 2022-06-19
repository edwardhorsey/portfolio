export const title = 'Edward Horsey Portfolio';
export const description = 'Edward Horsey is a full stack software developer based in London, UK.';
export const siteUrl = 'https://www.edwardhorsey.dev';
export const ogImage = 'https://www.edwardhorsey.dev/img/og.png';
export const favicon = `/img/favicon.png`;

export const IS_DEV = process.env.NODE_ENV === 'development';

export const IMAGE_FOLDER = IS_DEV ? '/img' : '/img';
