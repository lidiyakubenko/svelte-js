const userAgent = global.window ? window.navigator.userAgent : "";

const isAndroid = /android/i.test(userAgent);
const isIos = /ip[honead]{2,4}/i.test(userAgent);
const isDesktop = !isAndroid && !isIos;

export { isAndroid, isIos, isDesktop };
