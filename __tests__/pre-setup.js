
/*
if the pre-setup is not loaded, jest will show the following error:
- Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
result was found here:
- https://github.com/facebook/jest/issues/4545
 */

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
