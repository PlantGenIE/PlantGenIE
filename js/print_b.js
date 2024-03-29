
var MAIN_GENELIST;
/***
*** Main GLOBAL variables for GENIE-CMS
***/
//var fp4 = new Fingerprint({screen_resolution: true,ie_activex: true,canvas: true});//,
var MAIN_FINGERPRINT="sss";//fp4.get().toString();
var MAIN_GENELIST_DATABASE="plantgenie_genelist";
var MAIN_GENELIST_TABLE="popgenie_potri_v31";
//var MAIN_HOME_PAGE_TREE_PREFIX="z_testing_"; //Only for PopGenIE and ConGenIE home page animation


//Follwoing variables can be changed from the sidebar.js	
var MAIN_ACTIVE_GENELIST="";	
var MAIN_ACTIVE_GENELIST_ID="";
var MAIN_ACTIVE_GENELIST_NAME="";	
var current_opration="";


var main_active_genelist_found=new Boolean(false);
var main_all_genelist_found=new Boolean(false);

var MAIN_GENIE_ARRAY = [];
var MAIN_ACTIVE_GENELIST_ARRAY = [];
var MAIN_ACTIVE_OBJ = {};
var MAIN_ALL_OBJ = {};


var array_listener = function(arr, callback) {
    arr.push = function(e) {
        Array.prototype.push.call(arr, e);
        callback(arr);
    };
};


/***
***Very cool custom function to get parameters from the url
***/

function $_GET(q, s) {
    s = s ? s : window.location.search;
    var re = new RegExp('&' + q + '(?:=([^&]*))?(?=&|$)', 'i');
    return (s = s.replace('?', '&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined;
}

/***
*** SET and GET cookies
***/
function setCookie(c_name, value, exdays) {
	//if(getCookie(c_name)==null){
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
      document.cookie = c_name + "=" + c_value;
	//}
  }

function getCookie(c_name) {
      var c_value = document.cookie;
      var c_start = c_value.indexOf(" " + c_name + "=");
      if (c_start == -1) {
          c_start = c_value.indexOf(c_name + "=");
      }
      if (c_start == -1) {
          c_value = null;
      } else {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1) {
              c_end = c_value.length;
          }
          c_value = unescape(c_value.substring(c_start, c_end));
      }
      return c_value;
  }

 function pad2(number) {
        return (number < 10 ? 0 : '') + number;
 }

async function getCookie1(c_name) {
      var c_value = document.cookie;
      var c_start = c_value.indexOf(" " + c_name + "=");
      if (c_start == -1) {
          c_start = c_value.indexOf(c_name + "=");
      }
      if (c_start == -1) {
          c_value = null;
      } else {
          c_start = c_value.indexOf("=", c_start) + 1;
          var c_end = c_value.indexOf(";", c_start);
          if (c_end == -1) {
              c_end = c_value.length;
          }
          c_value = unescape(c_value.substring(c_start, c_end));
      }
      return c_value;
  }




/**
 * FingerprintJS v3.1.0 - Copyright (c) FingerprintJS, Inc, 2021 (https://fingerprintjs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */




var FingerprintJS=function(e){"use strict";function t(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]+t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]+t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]+t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]+t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function n(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var n=[0,0,0,0];return n[3]+=e[3]*t[3],n[2]+=n[3]>>>16,n[3]&=65535,n[2]+=e[2]*t[3],n[1]+=n[2]>>>16,n[2]&=65535,n[2]+=e[3]*t[2],n[1]+=n[2]>>>16,n[2]&=65535,n[1]+=e[1]*t[3],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[2]*t[2],n[0]+=n[1]>>>16,n[1]&=65535,n[1]+=e[3]*t[1],n[0]+=n[1]>>>16,n[1]&=65535,n[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],n[0]&=65535,[n[0]<<16|n[1],n[2]<<16|n[3]]}function r(e,t){return 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function a(e,t){return 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function o(e,t){return[e[0]^t[0],e[1]^t[1]]}function i(e){return e=o(e,[0,e[0]>>>1]),e=o(e=n(e,[4283543511,3981806797]),[0,e[0]>>>1]),e=o(e=n(e,[3301882366,444984403]),[0,e[0]>>>1])}function c(e,c){c=c||0;var s,u=(e=e||"").length%16,l=e.length-u,d=[0,c],f=[0,c],h=[0,0],p=[0,0],v=[2277735313,289559509],m=[1291169091,658871167];for(s=0;s<l;s+=16)h=[255&e.charCodeAt(s+4)|(255&e.charCodeAt(s+5))<<8|(255&e.charCodeAt(s+6))<<16|(255&e.charCodeAt(s+7))<<24,255&e.charCodeAt(s)|(255&e.charCodeAt(s+1))<<8|(255&e.charCodeAt(s+2))<<16|(255&e.charCodeAt(s+3))<<24],p=[255&e.charCodeAt(s+12)|(255&e.charCodeAt(s+13))<<8|(255&e.charCodeAt(s+14))<<16|(255&e.charCodeAt(s+15))<<24,255&e.charCodeAt(s+8)|(255&e.charCodeAt(s+9))<<8|(255&e.charCodeAt(s+10))<<16|(255&e.charCodeAt(s+11))<<24],h=r(h=n(h,v),31),d=t(d=r(d=o(d,h=n(h,m)),27),f),d=t(n(d,[0,5]),[0,1390208809]),p=r(p=n(p,m),33),f=t(f=r(f=o(f,p=n(p,v)),31),d),f=t(n(f,[0,5]),[0,944331445]);switch(h=[0,0],p=[0,0],u){case 15:p=o(p,a([0,e.charCodeAt(s+14)],48));case 14:p=o(p,a([0,e.charCodeAt(s+13)],40));case 13:p=o(p,a([0,e.charCodeAt(s+12)],32));case 12:p=o(p,a([0,e.charCodeAt(s+11)],24));case 11:p=o(p,a([0,e.charCodeAt(s+10)],16));case 10:p=o(p,a([0,e.charCodeAt(s+9)],8));case 9:p=n(p=o(p,[0,e.charCodeAt(s+8)]),m),f=o(f,p=n(p=r(p,33),v));case 8:h=o(h,a([0,e.charCodeAt(s+7)],56));case 7:h=o(h,a([0,e.charCodeAt(s+6)],48));case 6:h=o(h,a([0,e.charCodeAt(s+5)],40));case 5:h=o(h,a([0,e.charCodeAt(s+4)],32));case 4:h=o(h,a([0,e.charCodeAt(s+3)],24));case 3:h=o(h,a([0,e.charCodeAt(s+2)],16));case 2:h=o(h,a([0,e.charCodeAt(s+1)],8));case 1:h=n(h=o(h,[0,e.charCodeAt(s)]),v),d=o(d,h=n(h=r(h,31),m))}return d=t(d=o(d,[0,e.length]),f=o(f,[0,e.length])),f=t(f,d),d=t(d=i(d),f=i(f)),f=t(f,d),("00000000"+(d[0]>>>0).toString(16)).slice(-8)+("00000000"+(d[1]>>>0).toString(16)).slice(-8)+("00000000"+(f[0]>>>0).toString(16)).slice(-8)+("00000000"+(f[1]>>>0).toString(16)).slice(-8)}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function c(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function d(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,a++)r[a]=o[i];return r}function f(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))}function h(e,t){void 0===t&&(t=1/0);var n=window.requestIdleCallback;return n?new Promise((function(e){return n((function(){return e()}),{timeout:t})})):f(Math.min(e,t))}function p(e){return parseInt(e)}function v(e){return parseFloat(e)}function m(e,t){return"number"==typeof e&&isNaN(e)?t:e}function g(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function b(){var e=window,t=navigator;return g(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function w(){var e=window,t=navigator;return g(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!b()}function y(){var e=window,t=navigator;return g(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,0===t.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function k(){var e=window,t=navigator;return g(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===t.vendor.indexOf("Apple"),"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}function C(){var e=window;return g(["safari"in e,!("DeviceMotionEvent"in e),!("ongestureend"in e),!("standalone"in navigator)])>=3}function x(){var e,t,n=window;return g(["buildID"in navigator,"MozAppearance"in(null!==(t=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==t?t:{}),"MediaRecorderErrorEvent"in n,"mozInnerScreenX"in n,"CSSMozDocumentRule"in n,"CanvasCaptureMediaStream"in n])>=4}function S(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function A(e){return new Promise((function(t,n){e.oncomplete=function(e){return t(e.renderedBuffer)};var r=3,a=function(){switch(e.startRendering(),e.state){case"running":setTimeout((function(){return n(M("timeout"))}),1e3);break;case"suspended":document.hidden||r--,r>0?setTimeout(a,500):n(M("suspended"))}};a()}))}function _(e){for(var t=0,n=0;n<e.length;++n)t+=Math.abs(e[n]);return t}function M(e){var t=new Error(e);return t.name=e,t}function P(e,t,n){var r,a;return void 0===n&&(n=50),u(this,void 0,void 0,(function(){var o,i;return l(this,(function(c){switch(c.label){case 0:o=document,c.label=1;case 1:return o.body?[3,3]:[4,f(n)];case 2:return c.sent(),[3,1];case 3:i=o.createElement("iframe"),c.label=4;case 4:return c.trys.push([4,,10,11]),[4,new Promise((function(e,n){i.onload=e,i.onerror=n;var r=i.style;r.setProperty("display","block","important"),r.position="absolute",r.top="0",r.left="0",r.visibility="hidden",t&&"srcdoc"in i?i.srcdoc=t:i.src="about:blank",o.body.appendChild(i)}))];case 5:c.sent(),c.label=6;case 6:return(null===(r=i.contentWindow)||void 0===r?void 0:r.document.body)?[3,8]:[4,f(n)];case 7:return c.sent(),[3,6];case 8:return[4,e(i,i.contentWindow)];case 9:return[2,c.sent()];case 10:return null===(a=i.parentNode)||void 0===a||a.removeChild(i),[7];case 11:return[2]}}))}))}function T(e){for(var t=function(e){for(var t,n,r="Unexpected syntax '"+e+"'",a=/^\s*([a-z-]*)(.*)$/i.exec(e),o=a[1]||void 0,i={},c=/([.:#][\w-]+|\[.+?\])/gi,s=function(e,t){i[e]=i[e]||[],i[e].push(t)};;){var u=c.exec(a[2]);if(!u)break;var l=u[0];switch(l[0]){case".":s("class",l.slice(1));break;case"#":s("id",l.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);if(!d)throw new Error(r);s(d[1],null!==(n=null!==(t=d[4])&&void 0!==t?t:d[5])&&void 0!==n?n:"");break;default:throw new Error(r)}}return[o,i]}(e),n=t[0],r=t[1],a=document.createElement(null!=n?n:"div"),o=0,i=Object.keys(r);o<i.length;o++){var c=i[o];a.setAttribute(c,r[c].join(" "))}return a}var E=["monospace","sans-serif","serif"],I=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function L(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}function z(e,t){e.width=240,e.height=60,t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(100,1,62,20),t.fillStyle="#069",t.font='11pt "Times New Roman"';var n="Cwm fjordbank gly "+String.fromCharCode(55357,56835);return t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.2)",t.font="18pt Arial",t.fillText(n,4,45),F(e)}function B(e,t){e.width=122,e.height=110,t.globalCompositeOperation="multiply";for(var n=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];n<r.length;n++){var a=r[n],o=a[0],i=a[1],c=a[2];t.fillStyle=o,t.beginPath(),t.arc(i,c,40,0,2*Math.PI,!0),t.closePath(),t.fill()}return t.fillStyle="#f9c",t.arc(60,60,60,0,2*Math.PI,!0),t.arc(60,60,20,0,2*Math.PI,!0),t.fill("evenodd"),F(e)}function F(e){return e.toDataURL()}var O,D;function R(){return u(this,void 0,void 0,(function(){var e;return l(this,(function(t){switch(t.label){case 0:return j(e=G())?O?[2,d(O)]:S()?[4,(n=document,(n.exitFullscreen||n.msExitFullscreen||n.mozCancelFullScreen||n.webkitExitFullscreen).call(n))]:[3,2]:[3,2];case 1:t.sent(),e=G(),t.label=2;case 2:return j(e)||(O=e),[2,e]}var n}))}))}function G(){var e=screen;return[m(v(e.availTop),null),m(v(e.width)-v(e.availWidth)-m(v(e.availLeft),0),null),m(v(e.height)-v(e.availHeight)-m(v(e.availTop),0),null),m(v(e.availLeft),null)]}function j(e){for(var t=0;t<4;++t)if(e[t])return!1;return!0}var U={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'a[title="7naga poker" i]','img[title="ALIENBOLA" i]'],abpvn:["#quangcaomb",".i-said-no-thing-can-stop-me-warning.dark",".quangcao",'[href^="https://r88.vn/"]','[href^="https://zbet.vn/"]'],adBlockFinland:[".mainostila",".sponsorit",".ylamainos",'a[href*="/clickthrgh.asp?"]','a[href^="https://app.readpeak.com/ads"]'],adBlockPersian:[".widget_arvins_ad_randomizer",'a[href^="https://iqoption.com/lp/mobile-partner/?aff="]','a[href*="fastclick.net/ad/"]','TABLE[width="140px"]',".facebook_shows_ad_cale"],adBlockWarningRemoval:["#adblock_message",".adblockInfo",".deadblocker-header-bar",".no-ad-reminder","#AdBlockDialog"],adGuardAnnoyances:['amp-embed[type="zen"]',".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil"],adGuardBase:[".ad-disclaimer-container","#content_ad_container","#ad_wp_base","#adxtop","#bannerfloat22"],adGuardChinese:['a[href*=".123ch.cn"]','a[href*=".acuxrecv.cn"]','a[href*=".bayiyy.com/download."]','a[href*=".quankan.tv"]',"#j-new-ad"],adGuardFrench:["#div_banniere_pub","#sp-entete-pour-la-pub",'a[href*="fducks.com/"]','a[href^="http://promo.vador.com/"]','a[href^="https://syndication.exdynsrv.com/"]'],adGuardGerman:[".banneritemwerbung_head_1",".boxstartwerbung",".werbung3",'a[href^="http://www.firstload.de/index.php?set_lang=de&log="]','a[href^="http://www.sendung-now.de/tick/click.php?id="]'],adGuardJapanese:[".ad-text-blockA01","._popIn_infinite_video","[class^=blogroll_wrapper]",'a[href^="http://ad2.trafficgate.net/"]','a[href^="http://www.rssad.jp/"]'],adGuardMobile:["amp-auto-ads","#mgid_iframe",".amp_ad","amp-sticky-ad",".plugin-blogroll"],adGuardRussian:['a[href^="https://ya-distrib.ru/r/"]','a[href*=".twkv.ru"]','div[data-adv-type="dfp"]',".b-journalpromo-container",'div[id^="AdFox_banner_"]'],adGuardSocial:['a[href^="//www.stumbleupon.com/submit?url="]','a[href^="//telegram.me/share/url?"]',"#___plusone_0","#inlineShare",".popup-social"],adGuardSpanishPortuguese:[".esp_publicidad","#Publicidade","#publiEspecial","#queTooltip",'[href^="http://ads.glispa.com/"]'],adGuardTrackingProtection:['amp-embed[type="taboola"]',"#qoo-counter",'a[href^="http://click.hotlog.ru/"]','a[href^="http://hitcounter.ru/top/stat.php"]','a[href^="http://top.mail.ru/jump"]'],adGuardTurkish:["#backkapat","#reklam",'a[href^="http://adserv.ontek.com.tr/"]','a[href^="http://izlenzi.com/campaign/"]','a[href^="http://www.installads.net/"]'],bulgarian:["#adbody","#newAd","#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:['[lazy-ad="leftthin_banner"]',".smart_ads_bom_title",".slide-advert_float",".six-ads-wrapper",".showcaseAd"],easyListChina:["#fuo_top_float",".kf_qycn_com_cckf_welcomebox",'a[href*=".caohang.com.cn/"]','a[href*=".yuanmengbi.com/"]','.layui-row[style="border-radius:10px;background-color:#ff0000;padding:15px;margin:15px;"]'],easyListCookie:["#cookieBgOverlay","#alerte-cookies","#cookieLY","#dlgCookies",".Section-Cookie"],easyListCzechSlovak:["#onlajny-stickers","#reklamni-box",".reklama-megaboard",".sklik",'[id^="sklikReklama"]'],easyListDutch:["#advertentie","#vipAdmarktBannerBlock",".adstekst",'a[href^="http://adserver.webads.nl/adclick/"]','a[href^="http://www.site-id.nl/servlet/___?"]'],easyListGermany:[".werb_textlink","#ad-qm-sidebar-oben",".adguru-content-html",".nfy-sebo-ad",".textlinkwerbung"],easyListItaly:[".box_adv_annunci",".sb-box-pubbliredazionale",'a[href^="http://affiliazioniads.snai.it/"]','a[href^="https://adserver.html.it/"]','a[href^="https://affiliazioniads.snai.it/"]'],easyListLithuania:[".reklamos_tarpas",'a[href="http://igrovoi-klub.org/fair-land"]','a[href="http://www.moteris.lt/didieji-grozio-pokyciai/"]','img[alt="Dedikuoti.lt serveriai"]','img[alt="Hostingas Serveriai.lt"]'],estonian:[".flex--align-items-center.flex--justify-content-center.flex.section-branding__digipakett-contents",'A[href*="http://pay4results24.eu"]'],fanboyAnnoyances:["#feedback-tab","#ruby-back-top",".feedburnerFeedBlock",".widget-feedburner-counter",'[title="Subscribe to our blog"]'],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag",'div[style*="box-shadow: rgb(136, 136, 136) 0px 0px 12px; color: "]','div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:[".td-tags-and-social-wrapper-box",".twitterContainer",".youtube-social",'a[title^="Like us on Facebook"]','img[alt^="Share on Digg"]'],frellwitSwedish:['a[href*="casinopro.se"][target="_blank"]','a[href*="doktor-se.onelink.me"]',"article.category-samarbete",'img[alt="Leovegas"]',"ul.adsmodern"],greekAdBlock:['A[href*="adman.otenet.gr/click?"]','A[href*="http://axiabanners.exodus.gr/"]','A[href*="http://interactive.forthnet.gr/click?"]',"DIV.agores300","TABLE.advright"],hungarian:['A[href*="ad.eval.hu"]','A[href*="ad.netmedia.hu"]','A[href*="daserver.ultraweb.hu"]',"#cemp_doboz",".optimonk-iframe-container"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container",".cookie-msg-info-container","#cookies-policy-sticky"],icelandicAbp:['A[href^="/framework/resources/forms/ads.aspx"]'],latvian:['a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]','a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]'],listKr:['a[href*="//kingtoon.slnk.kr"]','a[href*="//playdsb.com/kr"]','a[href*="//simba-kor.com"]','div[data-widget_id="ml6EJ074"]',"ins.daum_ddn_area"],listeAr:[".geminiLB1Ad",".right-and-left-sponsers",'a[href*=".aflam.info"]','a[href*="booraq.org"]','a[href*="dubizzle.com/ar/?utm_source="]'],listeFr:['a[href^="http://look.djfiln.com/"]',"#adcontainer_recherche",'a[href*="weborama.fr/fcgi-bin/"]','a[href^="https://secure.securitetotale.fr/"]','div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",'[href^="https://aff.sendhub.pl/"]','a[href^="http://advmanager.techfun.pl/redirect/"]','a[href^="http://www.trizer.pl/?utm_source"]',"div#skapiec_ad"],ro:['a[href^="//afftrk.altex.ro/Counter/Click"','a[href^="/magazin/"','a[href^="https://blackfridaysales.ro/trk/shop/"','a[href^="https://event.2performant.com/events/click"','a[href^="https://l.profitshare.ro/"]'],ruAd:['a[href*="//febrare.ru/"]','a[href*="//utimg.ru/"]','a[href*="://chikidiki.ru"]',"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]","#ads-google-middle_rectangle-group",".ads300s",".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",".ctpl-fullbanner",".j-share-bar-left",".yt.btn-link.btn-md.btn"]},q=Object.keys(U);function N(e){var t;return u(this,void 0,void 0,(function(){var n,r,a,o,i,c,s,u,d,h;return l(this,(function(l){switch(l.label){case 0:for(n=document,r=n.createElement("div"),a=[],o={},W(r),i=0,c=e;i<c.length;i++)s=c[i],u=T(s),W(d=n.createElement("div")),d.appendChild(u),r.appendChild(d),a.push(u);l.label=1;case 1:return n.body?[3,3]:[4,f(100)];case 2:return l.sent(),[3,1];case 3:n.body.appendChild(r);try{for(h=0;h<e.length;++h)a[h].offsetParent||(o[e[h]]=!0)}finally{null===(t=r.parentNode)||void 0===t||t.removeChild(r)}return[2,o]}}))}))}function W(e){e.style.setProperty("display","block","important")}function H(e){return matchMedia("(inverted-colors: "+e+")").matches}function J(e){return matchMedia("(forced-colors: "+e+")").matches}function V(e){return matchMedia("(prefers-contrast: "+e+")").matches}function K(e){return matchMedia("(prefers-reduced-motion: "+e+")").matches}function $(e){return matchMedia("(dynamic-range: "+e+")").matches}var Y=Math,X=function(){return 0},Z=Y.acos||X,Q=Y.acosh||X,ee=Y.asin||X,te=Y.asinh||X,ne=Y.atanh||X,re=Y.atan||X,ae=Y.sin||X,oe=Y.sinh||X,ie=Y.cos||X,ce=Y.cosh||X,se=Y.tan||X,ue=Y.tanh||X,le=Y.exp||X,de=Y.expm1||X,fe=Y.log1p||X,he=function(e){return Y.pow(Y.PI,e)},pe=function(e){return Y.log(e+Y.sqrt(e*e+1))},ve=function(e){return Y.log((1+e)/(1-e))/2},me=function(e){return Y.exp(e)-1/Y.exp(e)/2},ge=function(e){return(Y.exp(e)+1/Y.exp(e))/2},be=function(e){return Y.exp(e)-1},we=function(e){return(Y.exp(2*e)-1)/(Y.exp(2*e)+1)},ye=function(e){return Y.log(1+e)};var ke={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};var Ce={fonts:function(){return P((function(e,t){var n=t.document,r=n.body;r.style.fontSize="48px";var a=n.createElement("div"),o={},i={},c=function(e){var t=n.createElement("span"),r=t.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,t.textContent="mmMwWLliI0O&1",a.appendChild(t),t},s=E.map(c),u=function(){for(var e={},t=function(t){e[t]=E.map((function(e){return function(e,t){return c("'"+e+"',"+t)}(t,e)}))},n=0,r=I;n<r.length;n++){t(r[n])}return e}();r.appendChild(a);for(var l=0;l<E.length;l++)o[E[l]]=s[l].offsetWidth,i[E[l]]=s[l].offsetHeight;return I.filter((function(e){return t=u[e],E.some((function(e,n){return t[n].offsetWidth!==o[e]||t[n].offsetHeight!==i[e]}));var t}))}))},domBlockers:function(e){var t=(void 0===e?{}:e).debug;return u(this,void 0,void 0,(function(){var e,n,r;return l(this,(function(a){switch(a.label){case 0:return k()||function(){var e=y(),t=x();if(!e&&!t)return!1;var n=window;return g(["onorientationchange"in n,"orientation"in n,e&&"SharedWorker"in n,t&&/android/i.test(navigator.appVersion)])>=2}()?[4,N((r=[]).concat.apply(r,q.map((function(e){return U[e]}))))]:[2,void 0];case 1:return e=a.sent(),t&&function(e){for(var t="DOM blockers debug:\n```",n=0,r=q;n<r.length;n++){var a=r[n];t+="\n"+a+":";for(var o=0,i=U[a];o<i.length;o++){var c=i[o];t+="\n  "+c+" "+(e[c]?"🚫":"➡️")}}console.log(t+"\n```")}(e),(n=q.filter((function(t){var n=U[t];return g(n.map((function(t){return e[t]})))>.5*n.length}))).sort(),[2,n]}}))}))},fontPreferences:function(){return function(e,t){void 0===t&&(t=4e3);return P((function(n,r){var a=r.document,o=a.body,i=o.style;i.width=t+"px",i.webkitTextSizeAdjust=i.textSizeAdjust="none",y()?o.style.zoom=""+1/r.devicePixelRatio:k()&&(o.style.zoom="reset");var c=a.createElement("div");return c.textContent=d(Array(t/20<<0)).map((function(){return"word"})).join(" "),o.appendChild(c),e(a,o)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(e,t){for(var n={},r={},a=0,o=Object.keys(ke);a<o.length;a++){var i=o[a],c=ke[i],s=c[0],u=void 0===s?{}:s,l=c[1],d=void 0===l?"mmMwWLliI0fiflO&1":l,f=e.createElement("span");f.textContent=d,f.style.whiteSpace="nowrap";for(var h=0,p=Object.keys(u);h<p.length;h++){var v=p[h],m=u[v];void 0!==m&&(f.style[v]=m)}n[i]=f,t.appendChild(e.createElement("br")),t.appendChild(f)}for(var g=0,b=Object.keys(ke);g<b.length;g++){r[i=b[g]]=n[i].getBoundingClientRect().width}return r}))},audio:function(){return u(this,void 0,void 0,(function(){var e,t,n,r,a,o,i,c;return l(this,(function(s){switch(s.label){case 0:if(e=window,!(t=e.OfflineAudioContext||e.webkitOfflineAudioContext))return[2,-2];if(k()&&!C()&&!function(){var e=window;return g(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}())return[2,-1];n=4500,5e3,r=new t(1,5e3,44100),(a=r.createOscillator()).type="triangle",a.frequency.value=1e4,(o=r.createDynamicsCompressor()).threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,a.connect(o),o.connect(r.destination),a.start(0),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,A(r)];case 2:return i=s.sent(),[3,4];case 3:if("timeout"===(c=s.sent()).name||"suspended"===c.name)return[2,-3];throw c;case 4:return[2,_(i.getChannelData(0).subarray(n))]}}))}))},screenFrame:function(){return u(this,void 0,void 0,(function(){var e,t;return l(this,(function(n){switch(n.label){case 0:return e=function(e){return null===e?null:function(e,t){if(void 0===t&&(t=1),Math.abs(t)>=1)return Math.round(e/t)*t;var n=1/t;return Math.round(e*n)/n}(e,10)},[4,R()];case 1:return t=n.sent(),[2,[e(t[0]),e(t[1]),e(t[2]),e(t[3])]]}}))}))},osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))y()&&g([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||n.push(t.languages);else if("string"==typeof t.languages){var a=t.languages;a&&n.push(a.split(","))}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return m(v(navigator.deviceMemory),void 0)},screenResolution:function(){var e=screen,t=[p(e.width),p(e.height)];return t.sort().reverse(),t},hardwareConcurrency:function(){return m(p(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t){var n=(new t).resolvedOptions().timeZone;if(n)return n}var r,a=(r=(new Date).getFullYear(),-Math.max(v(new Date(r,0,1).getTimezoneOffset()),v(new Date(r,6,1).getTimezoneOffset())));return"UTC"+(a>=0?"+":"")+Math.abs(a)},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!b()&&!w())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&k()&&!C()?function(){if("iPad"===navigator.platform)return!0;var e=screen,t=e.width/e.height;return g(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,t>2/3&&t<1.5])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var t=[],n=0;n<e.length;++n){var r=e[n];if(r){for(var a=[],o=0;o<r.length;++o){var i=r[o];a.push({type:i.type,suffixes:i.suffixes})}t.push({name:r.name,description:r.description,mimeTypes:a})}}return t}},canvas:function(){var e=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),t=e[0],n=e[1];return function(e,t){return!(!t||!e.toDataURL)}(t,n)?{winding:L(n),geometry:B(t,n),text:z(t,n)}:{winding:!1,geometry:"",text:""}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=p(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(r){e=!1}return{maxTouchPoints:n,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],t=0,n=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];t<n.length;t++){var r=n[t],a=window[r];a&&"object"==typeof a&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(n){return!1}},colorGamut:function(){for(var e=0,t=["rec2020","p3","srgb"];e<t.length;e++){var n=t[e];if(matchMedia("(color-gamut: "+n+")").matches)return n}},invertedColors:function(){return!!H("inverted")||!H("none")&&void 0},forcedColors:function(){return!!J("active")||!J("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: "+e+")").matches)return e;throw new Error("Too high value")}},contrast:function(){return V("no-preference")?0:V("high")||V("more")?1:V("low")||V("less")?-1:V("forced")?10:void 0},reducedMotion:function(){return!!K("reduce")||!K("no-preference")&&void 0},hdr:function(){return!!$("high")||!$("standard")&&void 0},math:function(){return{acos:Z(.12312423423423424),acosh:Q(1e308),acoshPf:(e=1e154,Y.log(e+Y.sqrt(e*e-1))),asin:ee(.12312423423423424),asinh:te(1),asinhPf:pe(1),atanh:ne(.5),atanhPf:ve(.5),atan:re(.5),sin:ae(-1e300),sinh:oe(1),sinhPf:me(1),cos:ie(10.000000000123),cosh:ce(1),coshPf:ge(1),tan:se(-1e300),tanh:ue(1),tanhPf:we(1),exp:le(1),expm1:de(1),expm1Pf:be(1),log1p:fe(10),log1pPf:ye(10),powPI:he(-100)};var e}};function xe(e,t,n){return u(this,void 0,void 0,(function(){var r,a,o,i,c,d,f;return l(this,(function(h){switch(h.label){case 0:r=[],a={},16,o=Date.now(),i=function(i){var c;return l(this,(function(d){switch(d.label){case 0:return function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return!0;return!1}(n,i)?[2,"continue"]:(a[i]=void 0,r.push(function(e,t){return u(this,void 0,void 0,(function(){var n,r,a,o;return l(this,(function(i){switch(i.label){case 0:r=Date.now(),i.label=1;case 1:return i.trys.push([1,3,,4]),o={},[4,e(t)];case 2:return o.value=i.sent(),n=o,[3,4];case 3:return a=i.sent(),n={error:(c=a,c&&"object"==typeof c&&"message"in c?c:{message:c})},[3,4];case 4:return[2,s(s({},n),{duration:Date.now()-r})]}var c}))}))}(e[i],t).then((function(e){a[i]=e}))),(c=Date.now())>=o+16?(o=c,[4,new Promise((function(e){return setTimeout(e)}))]):[3,2]);case 1:return d.sent(),[3,4];case 2:return[4,void 0];case 3:d.sent(),d.label=4;case 4:return[2]}}))},c=0,d=Object.keys(e),h.label=1;case 1:return c<d.length?(f=d[c],[5,i(f)]):[3,4];case 2:h.sent(),h.label=3;case 3:return c++,[3,1];case 4:return[4,Promise.all(r)];case 5:return h.sent(),[2,a]}}))}))}function Se(e){return xe(Ce,e,[])}function Ae(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?s({name:(n=t).name,message:n.message,stack:null===(r=n.stack)||void 0===r?void 0:r.split("\n")},n):t;var n,r}),2)}function _e(e){return c(function(e){for(var t="",n=0,r=Object.keys(e).sort();n<r.length;n++){var a=r[n],o=e[a],i=o.error?"error":JSON.stringify(o.value);t+=(t?"|":"")+a.replace(/([:|\\])/g,"\\$1")+":"+i}return t}(e))}var Me=function(){function e(){!function(){if(void 0===D){var e=function(){var t=G();j(t)?D=setTimeout(e,2500):(O=t,D=void 0)};e()}}()}return e.prototype.get=function(e){return void 0===e&&(e={}),u(this,void 0,void 0,(function(){var t,n;return l(this,(function(r){switch(r.label){case 0:return[4,Se(e)];case 1:return t=r.sent(),n=function(e){var t;return{components:e,get visitorId(){return void 0===t&&(t=_e(this.components)),t},set visitorId(e){t=e},version:"3.1.0"}}(t),e.debug&&console.log("Copy the text below to get the debug data:\n\n```\nversion: "+n.version+"\nuserAgent: "+navigator.userAgent+"\ngetOptions: "+JSON.stringify(e,void 0,2)+"\nvisitorId: "+n.visitorId+"\ncomponents: "+Ae(t)+"\n```"),[2,n]}}))}))},e}();function Pe(e){var t=(void 0===e?{}:e).delayFallback,n=void 0===t?50:t;return u(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,h(n,2*n)];case 1:return e.sent(),[2,new Me]}}))}))}var Te={load:Pe,hashComponents:_e,componentsToDebugString:Ae},Ee=c;return e.componentsToDebugString=Ae,e.default=Te,e.getComponents=xe,e.getFullscreenElement=S,e.getScreenFrame=R,e.hashComponents=_e,e.isChromium=y,e.isDesktopSafari=C,e.isEdgeHTML=w,e.isGecko=x,e.isTrident=b,e.isWebKit=k,e.load=Pe,e.murmurX64Hash128=Ee,e}({});



// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load()

;(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise
  const result = await fp.get()

  // This is the visitor identifier:
  const visitorId = result.visitorId
 // console.log(visitorId)
MAIN_FINGERPRINT=visitorId;



/* if($_GET("id")!=undefined){
	if($_GET("id").substring(0,5).toLowerCase()=="potra"){
		setCookie("genie_select_species","explorer_aspleaf_potra_v11");
	}
	if($_GET("id").substring(0,5).toLowerCase()=="potri"){
		setCookie("genie_select_species","popgenie_potri_v31");
	}	
	if($_GET("id").substring(0,5).toLowerCase()=="potrs"){
		setCookie("genie_select_species","popgenie_potrs_v10");
	}	
	if($_GET("id").substring(0,5).toLowerCase()=="potrx"){
		setCookie("genie_select_species","popgenie_potrx_v10");
	}		
}

if($_GET("species")=="potra" ){
setCookie("genie_select_species","explorer_aspleaf_potra_v11");
setCookie("cookie_view",$_GET("dataset"))	;
}

if($_GET("species")=="potri" ){
setCookie("genie_select_species","popgenie_potri_v31");
setCookie("cookie_view",$_GET("dataset"))	;
}

if($_GET("species")=="potrs"){
setCookie("genie_select_species","popgenie_potrs_v10");
setCookie("cookie_view",$_GET("dataset"))	;
}

if($_GET("species")=="potrx" ){
setCookie("genie_select_species","popgenie_potrx_v10");
setCookie("cookie_view",$_GET("dataset"))	;
}

 */




//Set cookies if not already available
setCookie('fingerprint',MAIN_FINGERPRINT,7);
setCookie('genelist_database',MAIN_GENELIST_DATABASE,7); 
//setCookie('genie_select_species',MAIN_GENELIST_TABLE,7); 












$("#side_menu_waiting").show();
array_listener(MAIN_GENIE_ARRAY, function(newArray) {
	MAIN_GENELIST_TABLE=newArray[0]
	setCookie('genie_select_species',MAIN_GENELIST_TABLE,7);
	/*get_active(function(e){
	});*/

});

array_listener(MAIN_ACTIVE_GENELIST_ARRAY, function(newArray) {
  maingetactiveDB(function(activedb) {
    tmp_selected_species_abb=activedb[0]['abbreviation'];
    setCookie("genie_select_species_abb", activedb[0]['abbreviation'], 10);
    if (typeof reinitTool == 'function') { 
      MAIN_GENELIST=MAIN_ACTIVE_GENELIST_ARRAY[0];
      reinitTool(newArray); 
      //console.log(activedb)
			//console.log("reinitTool from print.js")
		}
  });

});	
	
	
	
get_active(function(e){})	


})()	



if($_GET('species')!= undefined) {
  maingetAllDB(function(activedb) {
      Object.keys(activedb).map(function(i, j) {
          if($_GET('species')==activedb[i]["abbreviation"]){
              setCookie("genie_select_species", activedb[i]['db'], 10); 
          }
      });
  });
}


//if($_GET('species')!= undefined) {
maingetactiveDB(function(activedb) {
	
	if(activedb.length!=0){
    setCookie("genie_select_species_abb", activedb[0]['abbreviation'], 10);
	}else{
	setCookie("genie_select_species_abb", "amtri", 10);
	}
});
//}


/***
*** Update sidebar notification counts
***/
function updategenebasket() {	
	 update_sidebar_numbers("0")
	maingetActiveGeneList(function(activegenes){
		if(activegenes[0]!=undefined && activegenes[0].gene_list.split(",").length>0){
                var numberc = (activegenes[0].gene_list.split(',').filter(function(el) {return el.length != 0})).length;
                update_sidebar_numbers(numberc);
              
              
		}

		});
}

//sub function from the above this function also calles from the plugins/sidebar/listbarang.php
function update_sidebar_numbers(side_number){
                if(typeof(document.getElementById("numberofgenesSpan").innerHTML)!=undefined){
                document.getElementById("numberofgenesSpan").innerHTML = pad2(side_number.toString());
	            }
			 	if(typeof(document.getElementById("notificationcount_2").innerHTML)!=undefined){
                document.getElementById("notificationcount_2").innerHTML = pad2(side_number.toString());
	            }
	  glowme("#numberofgenesSpanx");
}

/***
 **Get Experiments
 ***/
function maingetAllExpriments(all_genelist_func) {
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
	$.ajax({
		url: "//api.plantgenie.org/experiment/get_all?name=" + MAIN_GENELIST_TABLE,
		type: "GET",
		success: all_genelist_func,
		error: function(request, error) { 
     // console.log(request, error);
      //console.log( error);
      alert("No experiments are available for this species. Please select another species.");
      setCookie("genie_select_species", "beta_plantgenie_potra_v22", 10);
      //window.location.href =  "?species=potra#"; 
      location.reload();
		}
	});
}



/***
 **Get database
 ***/
function maingetAllDB(all_genelist_func) {
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
	$.ajax({
		url: "//api.plantgenie.org/db/",
		type: "GET",
		success: all_genelist_func,
		error: function(request, error) {
			console.log(request, error);
		}
	});
}

/***
 **Get active database
 ***/
function maingetactiveDB(all_genelist_func) {
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
	$.ajax({
		url: "//api.plantgenie.org/db/" + MAIN_GENELIST_TABLE,
		type: "GET",
		success: all_genelist_func,
		error: function(request, error) {
			console.log(request, error);
		}
	});
}


/***
 **Get Networks
 ***/
function maingetAllNetworks(all_genelist_func) {
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
	$.ajax({
		url: "//api.plantgenie.org/network/get_all?name=" + MAIN_GENELIST_TABLE,
		type: "GET",
		success: all_genelist_func,
		error: function(request, error) {
      console.log(request, error);
      alert("No networks are available for this species. please select an another species.");
      window.location.href =  "#"; 

		}
	});
}


/***
***Get Active GeneList
***/
function maingetActiveGeneList(active_genelist_func) {
	MAIN_GENELIST_TABLE=getCookie('genie_select_species')
	//if(main_active_genelist_found==false){
            $.ajax({
                url: "//api.plantgenie.org/genelist/get_active_list?name="+MAIN_GENELIST_DATABASE+"&fingerprint="+MAIN_FINGERPRINT+"&table="+MAIN_GENELIST_TABLE,
                type: "GET",
                success: active_genelist_func,
				error: function(request,error) {
                console.log(request, error);
				}				
         	});
	//}

}

/***
***Get All GeneLists
***/
function maingetAllGeneList(all_genelist_func) {
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
	//if(main_all_genelist_found==false){
            $.ajax({
                url: "//api.plantgenie.org/genelist/get_all?name="+MAIN_GENELIST_DATABASE+"&fingerprint="+MAIN_FINGERPRINT+"&table="+MAIN_GENELIST_TABLE,
                type: "GET",
                success: all_genelist_func,
				error: function(request,error) {
                console.log(request, error);
				}				
            });
	//}
}

/***
***Get shared GeneLists
***/
function maingetSharedGeneList(fp,id,tb,get_sharedlist_func) {
	//if(main_all_genelist_found==false){
            $.ajax({
                url: "//api.plantgenie.org/genelist/get_shared_list?name="+MAIN_GENELIST_DATABASE+"&fingerprint="+fp+"&table="+tb+"&gene_basket_id="+id,
                type: "GET",
                success: get_sharedlist_func,
				error: function(request,error) {
                console.log(request, error);
				}				
            });
	//}
}

/***
***Create a new GeneList
***/
function mainCreategenelistbyName(list,list_name,create_genelist_func){
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
	var list_ids=list;
var finalvarx = "name=" + MAIN_GENELIST_DATABASE + "&fingerprint=" + MAIN_FINGERPRINT + "&list=" + list_ids + "&table=" + MAIN_GENELIST_TABLE + "&list_name=" + list_name
$.ajax({
	type: "POST",
	url: "//api.plantgenie.org/genelist/create_list_by_name",
	data: (finalvarx),
	success: create_genelist_func,
	error: function(request,error) {
		console.log(request, error);
	}	
});
	
}



/***
***Add genes to existing list
***/
function mainAddgenestocurrentlist(list_ids,create_genelist_func){
	MAIN_GENELIST_TABLE = getCookie('genie_select_species')
var finalvarx= "name="+MAIN_GENELIST_DATABASE+"&fingerprint="+fingerprint+"&list="+list_ids+"&table="+MAIN_GENELIST_TABLE
$.ajax({
	type: "POST",
	url: "//api.plantgenie.org/genelist/update_active_list",
	data: (finalvarx),
	success: create_genelist_func,
	error: function(request) {
		 get_active(function(){ updategenebasket();})
	}	 
});
	
}


/***
***PlantGenIE Cross species genelist based on PlantGenIE API - 20th April 2018*** | To create genelist please go to plugins/genelist/js/maininit.js
***/
updatecrossspecieslist();

//get and update cross species gene list call back
function updatecrossspecieslist() {
  
  var species_obj = {
    eugra: "beta_plantgenie_eugra_v20",piabi: "beta_plantgenie_piabi_v10",artha: "beta_plantgenie_artha_v11",potra:"beta_plantgenie_potra_v22"
  };
  Object.keys(species_obj).forEach(function(species) {
    getcrossspecies(species_obj[species], function(getactiveList) {
      if (getactiveList[0] != undefined && getactiveList[0].gene_list.split(",").length > 0) {
        $("#" + species_obj[species] + "_num_span").removeClass("notificationcount_tiny").addClass("notificationcount_tiny_2");
        $("#" + species_obj[species] + "_image").removeClass("grey").addClass("light");
        $("#complex").show();
        document.getElementById(species_obj[species] + "_num_span").innerHTML = getactiveList[0].gene_list.split(",").length;
      }
    });
  });
}

//get cross species list by name
function getcrossspecies(table, getcross_species_func) {
  $.ajax({
    url: "//api.plantgenie.org/genelist/get_active_list?name=" + MAIN_GENELIST_DATABASE + "&fingerprint=" + MAIN_FINGERPRINT + "&table=" + table,
    type: "GET",
    success: getcross_species_func,
    error: function(request, error) {
      console.log(request, error);
    }
  });
}

//highlight the genelist number
function glowme(id) {
	//console.log("fired");
	//		 $(id).toggleClass('active');
	//$(id).effect('bounce',100);
	$(id).delay(60).css({
		opacity: 0.6
	}).animate({
		opacity: 1
	}, 60);
	/*$(id).stop().animate({ opacity: 0.2,borderSpacing:"10px" }, 100, 'linear')
	.animate({ opacity: 1,borderSpacing:"0px"  }, 100, 'linear')*/
	//  .stop();
	//	glower.toggleClass('active');
	/*$(id).illuminate({
			'intensity': '0.2',
			'color': '#d35530',
			'blink': 'false',
			'blinkSpeed': '100',
			'outerGlow': 'true',
			'outerGlowSize': '150px',
			'outerGlowColor': '#d35530'
		});*/
}

	
	
var genelist_database="plantgenie_genelist";
var fingerprint=getCookie("fingerprint");	

//Create cross species genelist by name
function createPlantGenIEGeneList(genes,species,method,gene_basket_name,species_ab,createlist_func){
	var list=genes;
	var list_name=gene_basket_name+"_pop2"+species_ab+"_"+method;
	var finalvarx= "name="+genelist_database+"&fingerprint="+fingerprint+"&table="+species+"&list_name="+list_name+"&list="+list
        $.ajax({
            type: "POST",
            url: "//api.plantgenie.org/genelist/create_list_by_name",
			data: (finalvarx),
			success: createlist_func,
			error: function(request,error) {
                console.log(request, error);
            }
		});
}
	


	