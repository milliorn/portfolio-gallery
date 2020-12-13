/*
Detect SW updates
https://github.com/gatsbyjs/gatsby/issues/9087
*/
export function onServiceWorkerUpdateReady() {
    return window.location.reload(true);
}
