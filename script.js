// ==UserScript==
// @name        bypass-mature-userscript - reddit.com
// @namespace   Violentmonkey Scripts
// @match       https://*.reddit.com/*
// @grant       none
// @version     1.0
// @author      https://github.com/Esashiero
// @description 2024/05/16, 10:32:51
// ==/UserScript==

(function () {
  // Function to redirect to the old Reddit version
  const redirectToOldReddit = () => {
    const element = document.querySelector("shreddit-async-loader.theme-beta");
    if (element) {
      window.location.href = window.location.href.replace('www.', 'old.');
    }
  };

  // Function to click on the specified button
  const clickOver18Button = () => {
    const button = document.querySelector("button[name='over18'][value='yes']");
    if (button) {
      button.click();
    }
  };

  // Initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    redirectToOldReddit();
    clickOver18Button();
  });
})();
