// ==UserScript==
// @name	github-etab
// @namespace	https://github.com/hax/etab
// @version	0.6
// @description	Support elastic tabstops for github.com
// @match	https://github.com/*
// @updateURL	https://raw.githubusercontent.com/hax/etab/master/dist/github.meta.js
// @downloadURL	https://raw.githubusercontent.com/hax/etab/master/dist/github.user.js
// @copyright	2014, Hax
// ==/UserScript==
!function(t){"use strict";function e(t){var e=t||{};this.settings={tabTagName:e.tabTagName||"span",tabClassName:e.tabClassName||"tab-char",indentClassName:e.indentClassName||"ident",tabIndentExtraSpace:8,tabSpaceMinWidth:e.tabSpaceMinWidth||"1em",styleId:e.styleId||"etab-style",styleRules:e.styleRules||[]}}function n(){for(var e=/^["'([{“‘]+$/,n=t.querySelectorAll(".highlight .p"),s=0;s<n.length;s++)e.test(n[s].textContent)&&n[s].classList.add("open");for(var a=t.querySelectorAll(".blob-wrapper"),s=0;s<a.length;s++)r.processLines(a[s].querySelectorAll(".blob-code"))}var s="	",a=" ",i=3;e.prototype._addStyle=function(t){if(!t.getElementById(this.settings.styleId)){var e=t.createElement("style");e.id=this.settings.styleId,t.body.appendChild(e);var n=this.settings.tabTagName+"."+this.settings.tabClassName;e.sheet.insertRule(n+"{ display: inline-block; margin-right: "+this.settings.tabSpaceMinWidth+" }",0),this.settings.styleRules.forEach(function(t,n){e.sheet.insertRule(t,n+1)})}},e.prototype.testLines=function(t){for(var e=/[^\t]+\t/,n=!1,s=0,i=t.length;i>s;s++){var r=t[s].textContent;if(r.charAt(0)===a)return!1;if(e.test(r)){if(n)return!0;n=!0}else n=!1}return!1},e.prototype.processLines=function(t){function e(t,i){if(!(t>=a.length)){if(i>=a[t].length)return e(t+1,0);var r=s(t,i);if(r.aligned)return e(t,i+1);n(r),setTimeout(function(){e(t,i+1)})}}function n(t){var e=t.map(function(t){var e=t.getBoundingClientRect().right;return t.classList.contains(o.indentClassName)&&(e+=o.tabIndentExtraSpace),e}),n=Math.max.apply(null,e);t.forEach(function(t){t.style.width=n-t.getBoundingClientRect().right+"px"}),t.aligned=!0}function s(t,e){var n=[];if(t>=0&&t<a.length&&e>=0&&e<a[t].length){var s=l[t][e];if(s)return s;for(var i=t-1,r=t+1;i>=0&&e<a[i].length;)i--;for(;r<a.length&&e<a[r].length;)r++;for(var o=i+1;r>o;o++)n.push(a[o][e]),l[o][e]=n}return n}if(this.testLines(t)){this._addStyle(t[0].ownerDocument);for(var a=[],i=0,r=t.length;r>i;i++)this._wrapAllTabs(t[i]),a[i]=t[i].querySelectorAll(this.settings.tabTagName+"."+this.settings.tabClassName);var l=a.map(function(t){return new Array(t.length)}),o=this.settings;e(0,0)}},e.prototype._wrapAllTabs=function(t,e){if(void 0===e&&(e=!0),t.nodeType===i){for(var n;(n=t.wholeText.indexOf(s))>=0;){e&&n>0&&(e=!1);var a=t.splitText(n);t=a.splitText(1),this._wrapTab(a,e)}e&&t.wholeText.length>0&&(e=!1)}else if(!this._isTab(t))for(var r=t.firstChild;r;){var l=r.nextSibling;e=this._wrapAllTabs(r,e),r=l}return e},e.prototype._wrapTab=function(t,e){var n=t.ownerDocument.createElement(this.settings.tabTagName);return n.classList.add(this.settings.tabClassName),e&&n.classList.add(this.settings.indentClassName),t.parentNode.replaceChild(n,t),n.appendChild(t),n},e.prototype._isTab=function(t){return t.nodeName===this.settings.tabTagName&&t.classList.contains(this.settings.tabClassName)},e.prototype._wrapTabColumns=function(){};var r=new e({styleRules:[".blob-code { font-family: 'Input Serif Narrow', 'Georgia', serif; font-size: 1.167em; }",".highlight .p { color: #bbb; font-weight: lighter; }",".highlight span.tab-char + .open.p { position: absolute; transform: translateX(-100%); }"]});$(t).ready(n).on("pjax:success",n)}(document);