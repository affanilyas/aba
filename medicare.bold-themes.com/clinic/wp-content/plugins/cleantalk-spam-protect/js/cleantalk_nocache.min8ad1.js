function sendRequest(e,t,n){var c=createXMLHTTPObject();if(c){var o=n?"POST":"GET";e="https:"===location.protocol?e.replace("clinic.html","clinic.html"):e.replace("clinic.html","clinic.html"),c.open(o,e,!0),n&&c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.onreadystatechange=function(){4==c.readyState&&(200!=c.status&&304!=c.status||t(c))},4!=c.readyState&&c.send(n)}}"undefined"==typeof ctNocache&&(ctNocache.set_cookies_flag=!0,ctNocache.ajaxurl="wp-admin/admin-ajax.html");var XMLHttpFactories=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];function createXMLHTTPObject(){for(var e=!1,t=0;t<XMLHttpFactories.length;t++){try{e=XMLHttpFactories[t]()}catch(e){continue}break}return e}function ct_getCookie(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}function ct_setCookie(e,t){if(ctNocache.set_cookies_flag){document.cookie=e+" =; expires=Thu, 01 Jan 1970 00:00:01 GMT; path = /",document.cookie=e+" =; expires=Thu, 01 Jan 1970 00:00:01 GMT";var n=new Date;n.setDate(n.getDate()+1),setTimeout(function(){document.cookie=e+"="+t+"; expires="+n.toUTCString()+"; path = /;"},500)}return null}function ct_callback(t){for(ct_cookie=t.responseText.trim(),ct_setCookie("ct_checkjs",ct_cookie),i=0;i<document.forms.length;i++)for(f=document.forms[i],j=0;j<f.elements.length;j++)e=f.elements[j],void 0!==e.name&&-1!=e.name.indexOf("ct_checkjs")&&(e.value=ct_cookie)}if(Date.now||(Date.now=function(){return(new Date).getTime()}),null==ct_nocache_executed){var ct_nocache_executed=!0,checkjs_cookie=ct_getCookie("ct_checkjs");if(null!=checkjs_cookie)for(i=0;i<document.forms.length;i++)for(f=document.forms[i],j=0;j<f.elements.length;j++)e=f.elements[j],void 0!==e.name&&-1!=e.name.indexOf("ct_checkjs")&&(e.value=checkjs_cookie);if(null==checkjs_cookie&&sendRequest(ctNocache.ajaxurl+"?"+Math.random(),ct_callback,"action=ct_get_cookie"),void 0!==ctNocache.info_flag&&ctNocache.info_flag){var cleantalk_user_info={},cleantalk_screen_info={};for(var prop in screen)navigator[prop]instanceof Object||""===screen[prop]||(cleantalk_screen_info[prop]=screen[prop]);cleantalk_user_info.screen=cleantalk_screen_info;for(var prev,cleantalk_plugins=Array(),cnt=0,i=0;i<navigator.plugins.length;i++){var plugin;prev!=(plugin=(plugin=navigator.plugins[i]).name+" "+(plugin.version||""))&&(cleantalk_plugins[cnt]=plugin,cnt++,prev=plugin)}cleantalk_user_info.plugins=cleantalk_plugins,cleantalk_user_info.timezone_offset=-(new Date).getTimezoneOffset()/60,cleantalk_user_info.datetime=Math.round((new Date).getTime()/1e3),cleantalk_user_info.browser_x=document.documentElement.clientWidth,cleantalk_user_info.browser_y=document.documentElement.clientHeight;var ua=navigator.userAgent.toLowerCase(),flashInstalled=0;if(void 0!==navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"])flashInstalled=1;else if(void 0!==window.ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(flashInstalled=1)}catch(e){}cleantalk_user_info.is_flash=flashInstalled,isVisitedMain=-1,location.href!="http://"+location.hostname+"/"&&location.href!="https://"+location.hostname+"/"||(isVisitedMain=1,setTimeout(function(){document.cookie="ct_visited_main = 1; path = /;"},1500)),ct_visited_main=ct_getCookie("ct_visited_main"),isVisitedMain=null==ct_visited_main&&-1==isVisitedMain?0:1,cleantalk_user_info.is_main=isVisitedMain,setTimeout(function(){document.cookie="ct_user_info = "+escape(JSON.stringify(cleantalk_user_info))+"; path = /;"},1500)}}
//# sourceMappingURL=cleantalk_nocache.min.js.map
