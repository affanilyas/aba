function apbct_js_keys__set_input_value(e,t,n,o){if(null!==document.getElementById(n.input_name)){var i=document.getElementById(n.input_name).value;document.getElementById(n.input_name).value=document.getElementById(n.input_name).value.replace(i,e.js_key)}}if(!function(){var e=new Date,t=(new Date).getTime(),n=!0,o=[],i=0;function a(e,t){document.cookie=e+"="+encodeURIComponent(t)+"; path=/"}function c(e,t,n){"function"==typeof window.addEventListener?e.addEventListener(t,n):e.attachEvent(t,n)}function r(e,t,n){"function"==typeof window.removeEventListener?e.removeEventListener(t,n):e.detachEvent(t,n)}a("ct_ps_timestamp",Math.floor((new Date).getTime()/1e3)),a("ct_fkp_timestamp","0"),a("ct_pointer_data","0"),a("ct_timezone","0"),setTimeout(function(){a("ct_timezone",e.getTimezoneOffset()/60*-1)},1e3);var u=function(){a("ct_fkp_timestamp",Math.floor((new Date).getTime()/1e3)),r(window,"mousedown",u),r(window,"keydown",u)},l=setInterval(function(){n=!0},150),m=setInterval(function(){a("ct_pointer_data",JSON.stringify(o))},1200),s=function(e){!0===n&&(o.push([Math.round(e.clientY),Math.round(e.clientX),Math.round((new Date).getTime()-t)]),n=!1,50<=++i&&(r(window,"mousemove",s),clearInterval(l),clearInterval(m)))};c(window,"mousemove",s),c(window,"mousedown",u),c(window,"keydown",u);var d,p,f,v,_,g,b=!0,w={orientation:{alpha:{},beta:{},gamma:{}},motion:{x:{},y:{},z:{}}};var y=setInterval(function(){var e=+new Date;w.orientation.alpha[e]=d,w.orientation.beta[e]=p,w.orientation.gamma[e]=f,w.motion.x[e]=v,w.motion.y[e]=_,w.motion.z[e]=g,a("abpct_hyro_acc_collect",JSON.stringify(w))},1e3);setTimeout(function(){clearInterval(y)},1e4),window.DeviceOrientationEvent&&c(window,"deviceorientation",function(e){var t,n,o,i=0,a=0,c=0;if(b)return i=e.alpha,a=e.beta,c=e.gamma,void(b=!1);t=e.alpha-i,n=e.beta-a,o=e.gamma-c,d=parseInt(t,10),p=parseInt(n,10),f=parseInt(o,10)}),window.DeviceMotionEvent&&c(window,"devicemotion",function(e){v=parseInt(e.accelerationIncludingGravity.x,10),_=parseInt(e.accelerationIncludingGravity.y,10),g=parseInt(e.accelerationIncludingGravity.z,10)}),c(window,"DOMContentLoaded",function(){a("apbct_visible_fields",0),a("apbct_visible_fields_count",0),setTimeout(function(){for(var e=0;e<document.forms.length;e++){var t=document.forms[e];t.onsubmit_prev=t.onsubmit,t.onsubmit=function(e){var t=[];for(var n in this.elements)isNaN(+n)||(t[n]=this.elements[n]);var o=(t=t.filter(function(o){return"none"!==getComputedStyle(o).display&&"hidden"!==getComputedStyle(o).visibility&&"0"!==getComputedStyle(o).opacity&&"hidden"!==o.getAttribute("type")&&"submit"!==o.getAttribute("type")&&""!==o.value&&null!==o.getAttribute("name")&&("radio"===o.getAttribute("type")&&t.forEach(function(e,t,n){o.getAttribute("name")!==e.getAttribute("name")||!1}),!0)})).length,i="";t.forEach(function(e,t,n){i+=" "+e.getAttribute("name")}),a("apbct_visible_fields",i=i.trim()),a("apbct_visible_fields_count",o),e.target.onsubmit_prev instanceof Function&&setTimeout(function(){e.target.onsubmit_prev.call(e.target,e)},500)}}},1e3)})}(),"undefined"!=typeof jQuery){function apbct_sendAJAXRequest(o,t,n){var i=t.callback||null,a=t.notJson||null,e=t.timeout||15e3;n=n||null;o._ajax_nonce=ctPublic._ajax_nonce,jQuery.ajax({type:"POST",url:ctPublic._ajax_url,data:o,success:function(e){a||(e=JSON.parse(e)),e.error||i&&i(e,o,t,n)},error:function(e,t,n){console.log("APBCT_AJAX_ERROR"),console.log(o),console.log(e),console.log(t),console.log(n)},timeout:e})}jQuery(document).ajaxComplete(function(e,t,n){var o;t.responseText&&-1!==t.responseText.indexOf('"apbct')&&void 0!==(o=JSON.parse(t.responseText)).apbct&&(o=o.apbct).blocked&&alert(o.comment)})}
//# sourceMappingURL=apbct-public.min.js.map
