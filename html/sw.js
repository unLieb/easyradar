// Minimal service worker whose only job is the 'notificationclick' handler
// below - the Clients API (focusing an open tab, or opening a new one, from
// a background notification) only exists in a service worker, not for a
// plain page-created `new Notification(...)`. See showBrowserNotification()
// in index.html: it calls this registration's showNotification() so clicks
// land here instead of on a page-level onclick.
// No fetch handling, no caching, no offline support - none of that is the
// point of this worker, so it's kept out to avoid the failure modes that
// come with it (stale cached responses, etc.).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const data = event.notification.data || {};
  const hex = data.hex;
  const url = data.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (new URL(client.url).origin !== self.location.origin) continue;
        // Already-open tab: focus it and hand it the hex directly - no
        // reload needed, the page just re-centers/selects in place.
        if ('focus' in client) client.focus();
        if (hex && 'postMessage' in client) client.postMessage({ type: 'FOCUS_AIRCRAFT', hex });
        return;
      }
      // No easyRADAR tab left open: open one and pass the hex as a URL
      // param instead, since there's no live client yet to postMessage to -
      // index.html reads ?focusHex= on startup once aircraft data has loaded.
      if (self.clients.openWindow) {
        return self.clients.openWindow(hex ? `${url}?focusHex=${encodeURIComponent(hex)}` : url);
      }
    })
  );
});
