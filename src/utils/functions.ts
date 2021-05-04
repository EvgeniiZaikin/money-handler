export const isDevelop = () => process.env.NODE_ENV !== 'production';
export const isBrowser = () => typeof window !== 'undefined';
