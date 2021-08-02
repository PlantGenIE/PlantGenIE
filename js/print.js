;(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) { module.exports = definition(); }
  else if (typeof define === 'function' && define.amd) { define(definition); }
  else { context[name] = definition(); }
})('Fingerprint', this, function () {
  'use strict';

  var Fingerprint = function (options) {
    var nativeForEach, nativeMap;
    nativeForEach = Array.prototype.forEach;
    nativeMap = Array.prototype.map;

    this.each = function (obj, iterator, context) {
      if (obj === null) {
        return;
      }
      if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          if (iterator.call(context, obj[i], i, obj) === {}) return;
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (iterator.call(context, obj[key], key, obj) === {}) return;
          }
        }
      }
    };

    this.map = function(obj, iterator, context) {
      var results = [];
      // Not using strict equality so that this acts as a
      // shortcut to checking for `null` and `undefined`.
      if (obj == null) return results;
      if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
      this.each(obj, function(value, index, list) {
        results[results.length] = iterator.call(context, value, index, list);
      });
      return results;
    };

    if (typeof options == 'object'){
      this.hasher = options.hasher;
      this.screen_resolution = options.screen_resolution;
      this.canvas = options.canvas;
      this.ie_activex = options.ie_activex;
    } else if(typeof options == 'function'){
      this.hasher = options;
    }
  };

  Fingerprint.prototype = {
    get: function(){
      var keys = [];
      keys.push(navigator.userAgent);
      keys.push(navigator.language);
      keys.push(screen.colorDepth);
	   /*if (ip_address!="") {
		 keys.push(ip_address);
	   }*/

      if (this.screen_resolution) {
        var resolution = this.getScreenResolution();
        if (typeof resolution !== 'undefined'){ // headless browsers, such as phantomjs
          keys.push(this.getScreenResolution().join('x'));
        }
      }
      keys.push(new Date().getTimezoneOffset());
      keys.push(this.hasSessionStorage());
      keys.push(this.hasLocalStorage());
      keys.push(!!window.indexedDB);
      //body might not be defined at this point or removed programmatically
      if(document.body){
        keys.push(typeof(document.body.addBehavior));
      } else {
        keys.push(typeof undefined);
      }
      keys.push(typeof(window.openDatabase));
      keys.push(navigator.cpuClass);
      keys.push(navigator.platform);
      keys.push(navigator.doNotTrack);
    //  keys.push(this.getPluginsString());
      if(this.canvas && this.isCanvasSupported()){
        keys.push(this.getCanvasFingerprint());
      }
      if(this.hasher){
        return this.hasher(keys.join('###'), 31);
      } else {

        return this.murmurhash3_32_gc(keys.join('###'), 31);

      }
    },

    /**
     * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
     *
     * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
     * @see //github.com/garycourt/murmurhash-js
     * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
     * @see //sites.google.com/site/murmurhash/
     *
     * @param {string} key ASCII only
     * @param {number} seed Positive integer only
     * @return {number} 32-bit positive integer hash
     */

    murmurhash3_32_gc: function(key, seed) {

      var remainder, bytes, h1, h1b, c1, c2, k1, i;

      remainder = key.length & 3; // key.length % 4
      bytes = key.length - remainder;
      h1 = seed;
      c1 = 0xcc9e2d51;
      c2 = 0x1b873593;
      i = 0;
      while (i < bytes) {
          k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 16) |
            ((key.charCodeAt(++i) & 0xff) << 24);

        ++i;

        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

        h1 ^= k1;
            h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
      }

      k1 = 0;

      switch (remainder) {
        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1: k1 ^= (key.charCodeAt(i) & 0xff);

        k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
      }

      h1 ^= key.length;

      h1 ^= h1 >>> 16;
      h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
      h1 ^= h1 >>> 13;
      h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
      h1 ^= h1 >>> 16;

      return h1 >>> 0;
    },

    // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    hasLocalStorage: function () {
      try{
        return !!window.localStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },

    hasSessionStorage: function () {
      try{
        return !!window.sessionStorage;
      } catch(e) {
        return true; // SecurityError when referencing it means it exists
      }
    },

    isCanvasSupported: function () {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    },

    isIE: function () {
      if(navigator.appName === 'Microsoft Internet Explorer') {
        return true;
      } else if(navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)){// IE 11
        return true;
      }
      return false;
    },

    getPluginsString: function () {
      if(this.isIE() && this.ie_activex){
        return this.getIEPluginsString();
      } else {
        return this.getRegularPluginsString();
      }
    },

    getRegularPluginsString: function () {
      return this.map(navigator.plugins, function (p) {
        var mimeTypes = this.map(p, function(mt){
          return [mt.type, mt.suffixes].join('~');
        }).join(',');
        return [p.name, p.description, mimeTypes].join('::');
      }, this).join(';');
    },

    getIEPluginsString: function () {
      if(window.ActiveXObject){
        var names = ['ShockwaveFlash.ShockwaveFlash',//flash plugin
          'AcroPDF.PDF', // Adobe PDF reader 7+
          'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
         // 'QuickTime.QuickTime', // QuickTime
          // 5 versions of real players
          'rmocx.RealPlayer G2 Control',
          'rmocx.RealPlayer G2 Control.1',
          'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
          'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
          'RealPlayer',
          'SWCtl.SWCtl', // ShockWave player
          'WMPlayer.OCX', // Windows media player
          'AgControl.AgControl', // Silverlight
          'Skype.Detection'];

        // starting to detect plugins in IE
        return this.map(names, function(name){
          try{
            new ActiveXObject(name);
            return name;
          } catch(e){
            return null;
          }
        }).join(';');
      } else {
        return ""; // behavior prior version 0.5.0, not breaking backwards compat.
      }
    },

    getScreenResolution: function () {
      return [screen.height, screen.width];
    },

    getCanvasFingerprint: function () {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      // https://www.browserleaks.com/canvas#how-does-it-work
      var txt = '//valve.github.io';
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125,1,62,20);
      ctx.fillStyle = "#069";
      ctx.fillText(txt, 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText(txt, 4, 17);
      return canvas.toDataURL();
    }
  };

  return Fingerprint;

});



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

var MAIN_GENELIST;
/***
*** Main GLOBAL variables for GENIE-CMS
***/
//var fp4 = new Fingerprint({screen_resolution: true,ie_activex: true,canvas: true});//,
var tmp_c=getCookie('fingerprint');
var fp4='_' + Math.random().toString(36).substr(2, 9);
var MAIN_FINGERPRINT="";
if(!tmp_c){
MAIN_FINGERPRINT=fp4	
}else{
	MAIN_FINGERPRINT=tmp_c;
} 
//var ;//.get().toString();


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

//Set cookies if not already available
setCookie('fingerprint',MAIN_FINGERPRINT,365);
setCookie('genelist_database',MAIN_GENELIST_DATABASE,30); 
//setCookie('genie_select_species',MAIN_GENELIST_TABLE,7); 



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



 


$("#side_menu_waiting").show();
array_listener(MAIN_GENIE_ARRAY, function(newArray) {
	MAIN_GENELIST_TABLE=newArray[0]
	setCookie('genie_select_species',MAIN_GENELIST_TABLE,30);
	/*get_active(function(e){
	});*/

});

array_listener(MAIN_ACTIVE_GENELIST_ARRAY, function(newArray) {
  maingetactiveDB(function(activedb) {
    tmp_selected_species_abb=activedb[0]['abbreviation'];
    setCookie("genie_select_species_abb", activedb[0]['abbreviation'], 30);
    if (typeof reinitTool == 'function') { 
      MAIN_GENELIST=MAIN_ACTIVE_GENELIST_ARRAY[0];
      reinitTool(newArray); 
      //console.log(activedb)
			//console.log("reinitTool from print.js")
		}
  });

});	


if($_GET('species')!= undefined) {
  maingetAllDB(function(activedb) {
      Object.keys(activedb).map(function(i, j) {
          if($_GET('species')==activedb[i]["abbreviation"]){
              setCookie("genie_select_species", activedb[i]['db'], 30); 
          }
      });
  });
}


//if($_GET('species')!= undefined) {
maingetactiveDB(function(activedb) {
	
	if(activedb.length!=0){
    setCookie("genie_select_species_abb", activedb[0]['abbreviation'], 30);
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
      setCookie("genie_select_species", "beta_plantgenie_potra_v22", 30);
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