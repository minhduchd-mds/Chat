// Legacy Firebase chat integration intentionally disabled during security cleanup.
// Do not commit Firebase/Google project credentials or project-specific config here.
// Inject runtime configuration from a private deployment environment before re-enabling.
(function () {
    'use strict';
    if (typeof console !== 'undefined') {
        console.warn('Legacy chat backend disabled: runtime Firebase configuration is required.');
    }
})();
