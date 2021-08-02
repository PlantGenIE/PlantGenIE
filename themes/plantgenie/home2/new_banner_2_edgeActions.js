/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26890, function(sym, e) {
         sym.play("chdiagram")
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blast_btn}", "click", function(sym, e) {
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         window.open("https://eucgenie.org/blast", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${blast_img}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/blast", "_self");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${eximage_img}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/eximage", "_self");
      
      
      });
      //Edge binding end
      
      
      Symbol.bindElementAction(compId, symbolName, "${eximage_btn}", "click", function(sym, e) {
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         window.open("https://eucgenie.org/eximage", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${explot_img}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/explot", "_self");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${explot_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/explot", "_self");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${jbrowse_btn}", "click", function(sym, e) {
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         window.open("https://eucgenie.org/jbrowse", "_self");
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${jbrowse_img}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/jbrowse", "_self");
      });
      //Edge binding end
      
      
      Symbol.bindElementAction(compId, symbolName, "${chrdiagram_img}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/ChrDiagram", "_self");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${chdiagram_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/ChrDiagram", "_self");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${gene_pages_img}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/gene?id=Eucgr.F03221", "_self");
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${genepages_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("https://eucgenie.org/gene?id=Eucgr.F03221", "_self");
      });
      //Edge binding end
      
	    Symbol.bindElementAction(compId, symbolName, "${complex_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://complex2.plantgenie.org/", "_self");
      });
      //Edge binding end
	   
	   
      
      Symbol.bindElementAction(compId, symbolName, "${notice_board}", "click", function(sym, e) {
      	//chrdiagram
         if(sym.getLabelPosition("chdiagram") < sym.getPosition() && sym.getLabelPosition("eximage") > sym.getPosition()){
         	window.open("https://eucgenie.org/ChrDiagram", "_self");
         }
      	//eximage
         if(sym.getLabelPosition("eximage") < sym.getPosition() && sym.getLabelPosition("blast") > sym.getPosition()){
         	window.open("https://eucgenie.org/eximage", "_self");
         }
         //blast
      	if(sym.getLabelPosition("blast") < sym.getPosition() && sym.getLabelPosition("explot") > sym.getPosition()){
         	window.open("https://eucgenie.org/blast", "_self");
         }
         //explot
         if(sym.getLabelPosition("explot") < sym.getPosition() && sym.getLabelPosition("gene_pages") > sym.getPosition()){
         	window.open("https://eucgenie.org/explot", "_self");
         }
		    //gene pages
         if(sym.getLabelPosition("gene_pages") < sym.getPosition() && sym.getLabelPosition("jbrowse") > sym.getPosition()){
         	window.open("https://eucgenie.org/gene?id=Eucgr.F03221", "_self");
         }
		      //jbrowse
         if(sym.getLabelPosition("jbrowse") < sym.getPosition() && sym.getLabelPosition("complex") > sym.getPosition()){
         	window.open("https://eucgenie.org/gene?id=Eucgr.F03221", "_self");
         }
		        //jbrowse
         if(sym.getLabelPosition("complex") < sym.getPosition() ){
         	window.open("http://complex2.plantgenie.org/", "_self");
         }
      
      });
      //Edge binding end
	      Symbol.bindElementAction(compId, symbolName, "${plantgenie22}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://plantgenie.org", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bird-forward-back_symbol_1'
   (function(symbolName) {   
   
   })("bird-forward-back_symbol_1");
   //Edge symbol end:'bird-forward-back_symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4069874");