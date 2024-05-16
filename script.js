// ==UserScript==
// @name        bypass-mature-userscript - reddit.com
// @namespace   Violentmonkey Scripts
// @match       https://*.reddit.com/*
// @grant       none
// @version     1.0
// @author      https://github.com/Esashiero
// @description 2024/05/16, 10:32:51
// ==/UserScript==
// ==UserScript==
// @name        Shreddit - reddit.com
// @namespace   Violentmonkey Scripts
// @match       https://*.reddit.com/*
// @grant       none
// @version     1.1
// @author      https://github.com/calebvisage
// @description 2023/11/06, 13:01:25
// ==/UserScript==

// Function to redirect to the old Reddit version
const redirectToOldReddit = () => {
	const element = document.querySelector("shreddit-async-loader.theme-beta");
	if (element) {
		window.location.href = window.location.href.replace('www.', 'old.');
	}
	console.log("test")
};


// Function to click on the specified button
const clickOver18Button = () => {
	const button = document.querySelector("button[name='over18'][value='yes']");
	if (button) {
		button.click();
	}
};

redirectToOldReddit();
clickOver18Button();
