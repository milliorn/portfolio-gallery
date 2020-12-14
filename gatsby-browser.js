/*
Detect SW updates
https://github.com/gatsbyjs/gatsby/issues/9087
*/

//Inform plugins when a service worker has been updated in the background and the page is ready to reload to apply changes.
exports.onServiceWorkerUpdateReady = () => window.location.forcedReload(true);

//Inform plugins of when a service worker has an update available.
exports.onServiceWorkerUpdateFound = () => window.location.forcedReload(true);
