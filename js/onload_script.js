//$(window).load(function() {

    window.addEventListener('DOMContentLoaded', function(){
 
	if (getCookie("acronym_color") != undefined) {
		 var acronym_color = getCookie("acronym_color");
         document.body.style.backgroundColor = acronym_color;

 	    //	console.log("coloured background fron onload")
	    //	document.getElementById('bg_content').style.backgroundColor ="white";
	}

    if(getCookie("genie_select_species")=="beta_plantgenie_potra_v22"){
        document.body.style.backgroundColor = "#9EBF6D"; 
        setCookie("acronym_color", "#9EBF6D", 10);
    }
    
    

    
        $(".loader-wrap").fadeOut("slow");
        if (getCookie("genie_select_species") != undefined) {
            var tmpcookie = getCookie("genie_select_species");
            $('#genie_species_select').val(tmpcookie).change();

var tmp_abb=getCookie("genie_select_species_abb");
if($("#"+tmp_abb+"_number_logo")[0]!=undefined){
    $("#"+tmp_abb+"_number_logo").hide();   
}; 
//$("#"+tmp_abb+"_number_logo").hide();   

           /* if (tmpcookie == "egrandis") {
                document.body.style.backgroundColor = "#9EBF6D"; 
            } else {
                document.body.style.backgroundColor = "#9EBF6D";
            }*/
        }
        $('#genie_species_select').on('change', function() {
           // reinitexperimentdropDown
            $("#piabi_number_logo").show();
            $("#potra_number_logo").show();
            $("#artha_number_logo").show();
            $("#eugra_number_logo").show();

            if(this.value.match("piabi")!=null || this.value.match("artha")!=null || this.value.match("eugra")!=null || this.value.match("potra")!=null){
                borderColor = "#EC7063" ;
               // console.log($("#"+this.value.split("_")[2]+"_number_logo"))
                $("#"+this.value.split("_")[2]+"_number_logo").hide();
             }

         

            setCookie("genie_select_species", this.value, 10);
            //$('input:radio[name="genie"][value=' + this.value + ']').attr('checked', true);
            
           

           get_active(function(e){ updategenebasket();})

           var url = window.location.href
          if(url=="https://beta.plantgenie.org/explorer"){
            location.reload();
           }
           //
           
			if (typeof reinitTool == 'function') { 
			//reinitTool(newArray); 
				location.reload();
			//console.log("reinitTool from print.js")
		}
			
           /* if (this.value == "egrandis") {
                document.body.style.backgroundColor = "#9EBF6D";
            } else {
                document.body.style.backgroundColor = "#9EBF6D";
            }*/
        });
    })


    //$('#myAnchor')[0].click();
$('#myModal').on('show.bs.modal', function(e) {
    $(".loader-wrap").show();

  if  ($(".geniemenu-controller").hasClass("open") == true ){ //&& mainspan_boolean!=true
	$.fn.genieMenu.toggleMenu("#nav");
      $("#editpanel").hide()
      $("#mainspan").delay( 200 ).show(200);
  }else{
      // $.fn.genieMenu.refreshMenu();
     }
	//e.stopPropagation();

});
$('#myModal').on('shown.bs.modal', function(e) {
    $(".loader-wrap").hide();
});
$('#myModal').on('hide.bs.modal', function(e) {
  	location.reload();
    $('#myModal').hide();
	window.location.href =  window.location.href;//.split("?")[0]; 
   // location.href ="https://geniecms.org/demo"
});
$(document).on('hidden.bs.modal', function(e) {
    if ($(e.target).attr('data-refresh') == 'true') {
        $(e.target).removeData('bs.modal');
        $(e.target).html('');
    }
});

if(getCookie("open_side_menu")==null ){
setCookie("open_side_menu","close");
}

!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.ScrollReveal=e()}(this,function(t,e,n){return function(){var t,e,n;this.ScrollReveal=function(){function o(n){return window==this?new o(n):(e=this,e.tools=new t,e.tools.extend(e.defaults,n||{}),e.tools.isMobile()&&!e.defaults.mobile?!1:e.tools.browserSupports("transform")?(e.store={elements:{},containers:[]},e.history=[],e.counter=0,e.blocked=!1,e.initialized=!1,e):console.warn("Your browser does not support CSS transform."))}return o.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier( 0.6, 0.2, 0.1, 1 )",container:null,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(t){},afterReset:function(t){}},o.prototype.reveal=function(t,n,o){var i,r,s,a;if(r=n&&n.container?n.container:window.document.documentElement,i=Array.prototype.slice.call(r.querySelectorAll(t)),!i.length)return console.warn("reveal('"+t+"') failed: no elements found."),e;for(var l=0;l<i.length;l++)s={},a=i[l].getAttribute("data-sr-id"),a?s=e.store.elements[a]:(s={id:++e.counter,domEl:i[l],seen:!1,revealed:!1},s.domEl.setAttribute("data-sr-id",s.id)),e.configure(s,n||{}),e.style(s),e.updateStore(s),s.revealed||s.domEl.setAttribute("style",s.styles.inline+s.styles.transform.initial);return o||e.record(t,n),e.init(),e},o.prototype.configure=function(t,n){t.config?t.config=e.tools.extendClone(t.config,n):t.config=e.tools.extendClone(e.defaults,n),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X",("top"===t.config.origin||"left"===t.config.origin)&&(t.config.distance="-"+t.config.distance)},o.prototype.style=function(t){function e(e){parseInt(n.distance)&&(e.initial+=" translate"+n.axis+"("+n.distance+")",e.target+=" translate"+n.axis+"(0)"),n.scale&&(e.initial+=" scale("+n.scale+")",e.target+=" scale(1)"),n.rotate.x&&(e.initial+=" rotateX("+n.rotate.x+"deg)",e.target+=" rotateX(0)"),n.rotate.y&&(e.initial+=" rotateY("+n.rotate.y+"deg)",e.target+=" rotateY(0)"),n.rotate.z&&(e.initial+=" rotateZ("+n.rotate.z+"deg)",e.target+=" rotateZ(0)"),e.initial+="; opacity: "+n.opacity+";",e.target+="; opacity: "+t.styles.computed.opacity+";"}var n=t.config,o=window.getComputedStyle(t.domEl);t.styles||(t.styles={transition:{},transform:{},computed:{}},t.styles.inline=t.domEl.getAttribute("style")||"",t.styles.inline+="; visibility: visible; ",t.styles.computed.opacity=o.opacity,o.transition&&"all 0s ease 0s"!=o.transition?t.styles.computed.transition=o.transition+", ":t.styles.computed.transition=""),t.styles.transition.instant="-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" 0s, opacity "+n.duration/1e3+"s "+n.easing+" 0s; transition: "+t.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" 0s, opacity "+n.duration/1e3+"s "+n.easing+" 0s; ",t.styles.transition.delayed="-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+n.delay/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+n.delay/1e3+"s; transition: "+t.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+n.delay/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+n.delay/1e3+"s; ",t.styles.transform.initial+=" -webkit-transform:",t.styles.transform.target+=" -webkit-transform:",e(t.styles.transform),t.styles.transform.initial="transform:",t.styles.transform.target="transform:",e(t.styles.transform)},o.prototype.updateStore=function(t){var n=t.config.container;n&&-1==e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t},o.prototype.record=function(t,n){var o={selector:t,config:n};e.history.push(o)},o.prototype.init=function(){e.animate();for(var t=e.store.containers.length-1;t>=0;t--)e.store.containers[t].addEventListener("scroll",e.handler),e.store.containers[t].addEventListener("resize",e.handler);return e.initialized||(window.addEventListener("scroll",e.handler),window.addEventListener("resize",e.handler),e.initialized=!0),e},o.prototype.handler=function(){e.blocked||(e.blocked=!0,n(e.animate))},o.prototype.animate=function(){function t(t,e){var n=0,o=0,i="after";switch(t){case"reveal":o=e.config.duration+e.config.delay,i+="Reveal";break;case"reset":o=e.config.duration,i+="Reset"}return e.timer&&(n=Math.abs(e.timer.started-new Date),window.clearTimeout(e.timer.clock)),e.timer={started:new Date},e.timer.clock=window.setTimeout(function(){e.config[i](e.domEl),e.timer=null},o-n),"reveal"===t?e.revealed=!0:e.revealed=!1}var n,o;e.tools.forOwn(e.store.elements,function(i){n=e.store.elements[i],o=e.isElemVisible(n),o&&!n.revealed?("always"===n.config.useDelay||"onload"===n.config.useDelay&&!e.initialized||"once"===n.config.useDelay&&!n.seen?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),n.seen=!0,t("reveal",n)):!o&&n.config.reset&&n.revealed&&(n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),t("reset",n))}),e.blocked=!1},o.prototype.getContainerSize=function(t){t||(t=window.document.documentElement);var e=t.clientWidth||0,n=t.clientHeight||0;return{width:e,height:n}},o.prototype.getScrolled=function(t){if(t){var n=e.getOffset(t);return{x:t.scrollLeft+n.left,y:t.scrollTop+n.top}}return{x:window.pageXOffset,y:window.pageYOffset}},o.prototype.getOffset=function(t){var e=0,n=0;do isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft);while(t=t.offsetParent);return{top:e,left:n}},o.prototype.isElemVisible=function(t){function n(){var e=f+l*a,n=d-l*a,o=u+c*a,i=y-c*a,p=s.y+t.config.viewOffset.top,g=s.y-t.config.viewOffset.bottom+r.height,m=s.x+t.config.viewOffset.left,w=s.x-t.config.viewOffset.right+r.width;return g>e&&n>p&&o>m&&w>i}function o(){return"fixed"===window.getComputedStyle(t.domEl).position}var i=e.getOffset(t.domEl),r=e.getContainerSize(t.config.container),s=e.getScrolled(t.config.container),a=t.config.viewFactor,l=t.domEl.offsetHeight,c=t.domEl.offsetWidth,f=i.top,d=f+l,u=i.left,y=u+c;return n()||o()},o.prototype.sync=function(){if(e.history.length)for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.selector,n.config,!0)}else console.warn("sync() failed: no reveals found.");return e},o}();var t=function(){function t(){}return t.prototype.isObject=function(t){return null!==t&&"object"==typeof t&&t.constructor==Object},t.prototype.forOwn=function(t,e){if(!this.isObject(t))throw new TypeError("Expected 'object', but received '"+typeof t+"'.");for(var n in t)t.hasOwnProperty(n)&&e(n)},t.prototype.extend=function(t,e){return this.forOwn(e,function(n){this.isObject(e[n])?(t[n]&&this.isObject(t[n])||(t[n]={}),this.extend(t[n],e[n])):t[n]=e[n]}.bind(this)),t},t.prototype.extendClone=function(t,e){return this.extend(this.extend({},t),e)},t.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t.prototype.browserSupports=function(t){for(var e=document.createElement("sensor"),n="Webkit,Moz,O,".split(","),o=(t+n.join(t+",")).split(","),i=0;i<o.length;i++)if(""===!e.style[o[i]])return!1;return!0},t}(),n=this.requestAnimationFrame||this.webkitRequestAnimationFrame||this.mozRequestAnimationFrame}.call(this),ScrollReveal});

var image_class_animate = {
  origin   : "bottom",
  distance : "0vw",
  duration : 800,
  delay    : 400,
  easing   : 'ease-in-out',
  scale    : 1

  };

var image_class_animate2 = {
origin   : "bottom",
  distance : "2vw",
  duration : 800,
  delay    : 400,
  easing   : 'ease-in-out',
  scale    : 1

  };


//window.sr = ScrollReveal();
//sr.reveal('.search',image_class_animate);
//sr.reveal('#wrapper', image_class_animate2);
//sr.reveal('#site_footer', { delay: 2000, scale: 0.9 });
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}




$('#eugra_number_logo').on('click', function(e) {
    console.log(e.target.id)
    MAIN_GENIE_ARRAY.splice(0,MAIN_GENIE_ARRAY.length);
    MAIN_GENIE_ARRAY.push("beta_plantgenie_eugra_v20"); 
    setCookie("genie_select_species_abb",'eugra', 10);
    g_d();
    
});

$('#piabi_number_logo').on('click', function(e) {
    MAIN_GENIE_ARRAY.splice(0,MAIN_GENIE_ARRAY.length);
    MAIN_GENIE_ARRAY.push("beta_plantgenie_piabi_v10");
    setCookie("genie_select_species_abb",'piabi', 10);
     g_d();
});

$('#potra_number_logo').on('click', function(e) { 
    MAIN_GENIE_ARRAY.splice(0,MAIN_GENIE_ARRAY.length);
    MAIN_GENIE_ARRAY.push("beta_plantgenie_potra_v22"); 
    setCookie("genie_select_species_abb",'potra', 10);
    g_d();
});

$('#artha_number_logo').on('click', function(e) {
    MAIN_GENIE_ARRAY.splice(0,MAIN_GENIE_ARRAY.length);
    MAIN_GENIE_ARRAY.push("beta_plantgenie_artha_v11"); 
    setCookie("genie_select_species_abb",'artha', 10);
    g_d();
});

function g_d(){ 
   // updatecrossspecieslist();

    $("#piabi_number_logo").show();
    $("#potra_number_logo").show();
    $("#artha_number_logo").show();
    $("#eugra_number_logo").show();

var tmp_abb=getCookie("genie_select_species_abb");
if($("#"+tmp_abb+"_number_logo")[0]!=undefined){
    $("#"+tmp_abb+"_number_logo").hide();   
}; 
}


