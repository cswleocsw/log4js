!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Log4js=e():t.Log4js=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e){function o(t,e){const n=`${t}`;return n.length>=e?n:o(`0${n}`,e)}function n(t,e){this.name=t||"Log4js",this.options=e||{},this.level=r[this.options.level]||r.INFO}const r={DEBUG:1,INFO:2,WARN:3,ERROR:4,FATAL:5},i={1:"DEBUG",2:"INFO",3:"WARN",4:"ERROR",5:"FATAL"};n.prototype.setLevel=function(t){r[t]&&(this.level=r[t])},n.prototype.debug=function(){this.write(r.DEBUG,Array.from(arguments))},n.prototype.info=function(){this.write(r.INFO,Array.from(arguments))},n.prototype.warn=function(){this.write(r.WARN,Array.from(arguments))},n.prototype.error=function(){this.write(r.ERROR,Array.from(arguments))},n.prototype.fatal=function(){this.write(r.FATAL,Array.from(arguments))},n.prototype.write=function(){const t=arguments[0],e=arguments[1];t>=this.level&&console.log.apply(console.log,[`[${function(){let t=new Date;return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${o(t.getHours(),2)}:${o(t.getMinutes(),2)}:${o(t.getSeconds(),2)}:${t.getMilliseconds()}`}()}] [${i[t]}] ${this.name} - ${e[0]} >>`].concat(e.slice(1)))},n.getLogger=function(t,e){return new n(t,e)},t.exports=n}])});