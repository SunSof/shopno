parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"/Emm":[function(require,module,exports) {
var e={title:"Designing is The CooL LOVE",body:"Our most popular service is our Virtual Receptionist. We know that sometimes it’s something and you middle most this job was posted less than five minutes ago, and we think it’s a good match for you. If you submit a proposal now, you’ll be one of the first candidates."},t=document.querySelector(".b-card__btn"),o=document.querySelector(".b-card__cont");o.addEventListener("click",function(){var t=event.target,o=(document.querySelector(".b-card__cont"),t.parentElement),r=document.querySelector(".b-card__heading"),a=document.querySelector(".b-card__text"),d=document.querySelector(".b-card__btn");if(t.classList.contains("b-card__btn")){o.classList.add("b-card-hov"),r.parentNode.removeChild(r),a.parentNode.removeChild(a),d.parentNode.removeChild(d),o.classList.remove("b-card","b-card--bg1","b-card--bg2","b-card--bg3","b-card--bg4","b-card--bg5","b-card--bg6"),r.classList.remove("b-card__heading");document.querySelector(".b-card__hover");var c=document.createElement("h2");c.textContent=e.title,c.classList.add("b-card__h2");var n=document.createElement("h4");n.textContent=e.body,n.classList.add("b-card__h4");var s=document.createElement("button");s.textContent="Close",s.classList.add("b-card__cross"),o.appendChild(c),o.appendChild(n),o.appendChild(s)}document.querySelector(".b-card__hover")});
},{}]},{},["/Emm"], null)
//# sourceMappingURL=https://sunsof.github.io/shopno/services.fd00ce3b.js.map