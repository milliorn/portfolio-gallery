/*
Detect SW updates
https://github.com/gatsbyjs/gatsby/issues/9087
*/

//Inform plugins when a service worker has been updated in the background and the page is ready to reload to apply changes.
export function onServiceWorkerUpdateReady() {
    return window.location.forcedReload(true);
}

//Inform plugins of when a service worker has an update available.
export function onServiceWorkerUpdateFound() {
    return window.location.forcedReload(true);
}
