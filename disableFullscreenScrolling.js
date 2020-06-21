// ==UserScript==
// @name         Disable Fullscreen Scrolling on YouTube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disables scrolling while fullscreen on YouTube
// @author       You
// @match        https://*.youtube.com/*
// @match        http://*.youtube.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


if (window.top === window.self) { addJsNode(main) }

function main() {
    document.addEventListener("fullscreenchange", () => {
        if (document.fullscreen || document.webkitIsFullScreen) document.getElementsByTagName("ytd-app")[0].removeAttribute("scrolling_")
    });
}

function addJsNode(func) {
  const scriptNode = document.createElement('script')
  scriptNode.type = 'text/javascript'
  scriptNode.textContent = '('+func.toString()+')()'

  const target = document.getElementsByTagName('head')[0] || document.body || document.documentElement
  target.appendChild(scriptNode)
}