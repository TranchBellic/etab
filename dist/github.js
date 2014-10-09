!function(t){"use strict";function e(t){null==t&&(t={}),this.settings={tabTagName:t.tabTagName||"span",tabClassName:t.tabClassName||"tab-char",tabSpaceMinWidth:t.tabSpaceMinWidth||"1em",styleId:t.styleId||"etab-style",styleRules:t.styleRules||[]}}function n(){for(var e=/^["'([{“‘]+$/,n=t.querySelectorAll(".highlight .p"),s=0;s<n.length;s++)e.test(n[s].textContent)&&n[s].classList.add("open");a.processLines(t.querySelectorAll(".js-file-line"))}var s="	",i=3;e.prototype._addStyle=function(t){if(!t.getElementById(this.settings.styleId)){var e=t.createElement("style");e.id=this.settings.styleId,t.body.appendChild(e);var n=this.settings.tabTagName+"."+this.settings.tabClassName;e.sheet.insertRule(n+"{ display: inline-block; margin-right: "+this.settings.tabSpaceMinWidth+" }",0),this.settings.styleRules.forEach(function(t,n){e.sheet.insertRule(t,n+1)})}},e.prototype.processLines=function(t){function e(t,a){if(!(t>=i.length)){if(a>=i[t].length)return e(t+1,0);var r=s(t,a);if(r.aligned)return e(t,a+1);n(r),setTimeout(function(){e(t,a+1)})}}function n(t){var e=t.map(function(t){return t.getBoundingClientRect().right}),n=Math.max.apply(null,e);t.forEach(function(t){t.style.width=n-t.getBoundingClientRect().right+"px"}),t.aligned=!0}function s(t,e){var n=[];if(t>=0&&t<i.length&&e>=0&&e<i[t].length){var s=l[t][e];if(s)return s;for(var a=t-1,r=t+1;a>=0&&e<i[a].length;)a--;for(;r<i.length&&e<i[r].length;)r++;for(var o=a+1;r>o;o++)n.push(i[o][e]),l[o][e]=n}return n}t.length&&this._addStyle(t[0].ownerDocument);for(var i=[],a=0,r=t.length;r>a;a++)this._wrapTabs(t[a]),i[a]=t[a].querySelectorAll(this.settings.tabTagName+"."+this.settings.tabClassName);var l=i.map(function(t){return new Array(t.length)});e(0,0)},e.prototype._wrapTabs=function(t){if(t.nodeType===i)for(var e;(e=t.wholeText.indexOf(s))>=0;){var n=t.splitText(e);t=n.splitText(1),this._wrapTab(n)}else if(!this._isTab(t))for(var a=t.firstChild;a;)a=this._wrapTabs(a).nextSibling;return t},e.prototype._wrapTab=function(t){var e=t.ownerDocument.createElement(this.settings.tabTagName);return e.classList.add(this.settings.tabClassName),t.parentNode.replaceChild(e,t),e.appendChild(t),e},e.prototype._isTab=function(t){return t.nodeName===this.settings.tabTagName&&t.classList.contains(this.settings.tabClassName)};var a=new e({styleRules:[".blob-code { font-family: 'Input Serif Narrow', 'Georgia', serif; font-size: 1.167em; }",".highlight .p { color: #bbb; font-weight: lighter; }",".highlight span.tab-char + .open.p { position: absolute; transform: translateX(-100%); }"]});$(t).ready(n).on("pjax:success",n)}(document);