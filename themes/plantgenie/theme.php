<!doctype html>
<html lang="en"> 
   <head>
      <?php
         echo "<meta charset='utf-8'>
         <title>".trim($c['title'])." : ".ucfirst(trim($c['page']))."</title>
         <base href='$hostname'>
         <link rel='stylesheet' href='themes/".$c['themeSelect']."/css/style.css'>
         <link rel='stylesheet' href='themes/".$c['themeSelect']."/css/toastr.min.css' type='text/css' media='all'>
		  <link rel='stylesheet' href='themes/".$c['themeSelect']."/css/hint.min.css'>
		  
         <script src='js/jquery.min.js'></script>
         <script type='text/javascript' src='js/jquery-ui.js'></script>
         <script src='js/print.js'></script>
     <link rel='shortcut icon' type='image/x-icon' href='/fav.png'/>
	 
     
     <script src='js/toastr.min.js'></script>
         <meta name='description' content='".$c['description']."'>
         <meta name='keywords' content='".$c['keywords']."'>";
         editTags();
         ?>


      <script src="js/bootstrap.min.js"></script>
   </head>
   <body style="top: 10px">
       <div id="plantgenie_box" style="margin-right:24px;border-radius:6px;margin-top:10px; position:fixed;right:0px;background:#fff;opacity:0.8;height:60px;z-index:9">
            <a id="eugra_number_logo" title="Eucalyptus" style="text-decoration:none"   href="#">
            <img  class="grey" id="beta_plantgenie_eugra_v20_image" style="padding:6px;  cursor:pointer;border:none;height:40px" src="img/eg.png">
            <span id="beta_plantgenie_eugra_v20_num_span" class="notificationcount_tiny" style="opacity: 1;">00</span> 
            </a>
            <a id="potra_number_logo" title="Poplar" style="text-decoration:none"  href="#">
            <img class="light" id="beta_plantgenie_potra_v22_image" style="padding:6px;  cursor:pointer;border:none;height:40px" src="img/pl.png">
            <span id="beta_plantgenie_potra_v22_num_span" class="notificationcount_tiny" style="opacity: 1;">00</span>
            </a>
            <a id="piabi_number_logo" title="Spruce" style="text-decoration:none"  href="#">
            <img  class="grey" id="beta_plantgenie_piabi_v10_image" style="padding:6px;  cursor:pointer;border:none;;height:40px" src="img/cl.png">
            <span id="beta_plantgenie_piabi_v10_num_span" class="notificationcount_tiny" style="opacity: 1;">00</span>
            </a>
            <a id="artha_number_logo" title="Arabidopsis" style="text-decoration:none"  href="#">
            <img  class="grey" id="beta_plantgenie_artha_v11_image" style="padding:6px;margin-left:6px;  cursor:pointer;border:none;;height:40px" src="img/al.png">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="beta_plantgenie_artha_v11_num_span" class="notificationcount_tiny" style="opacity: 1;">00</span>
            </a>
                 </div>
      <div id="body_main_div" style="width:100%;">
         <div class="loader-wrap">
            <div class="spinner"> 
               <div class="bounce1"></div>
               <div class="bounce2"></div>
               <div class="bounce3"></div>
            </div>
         </div>
         <header><img id="logo_img" style="margin-left:8%;padding-top:4px;cursor:pointer;background-color:#FFF;padding-left:4px;;padding-right:4px;opacity:0.8;margin-top: 10px;width:160px;;"
            onClick="location.href='<?php echo $c['hostname']?>';" src="themes/<?php echo $c['themeSelect']?>/images/plantgeine_logo.png"/><?php	include_once("plugins/autocomplete/autocompletesearch.php");?> </header>
         <div id="bg_content" style="width:93%;margin-left: 6%;margin-right: 1%;background-color:#FFF;background:#FFF;">
                     <nav id="mainNav">
               <select class="select-style2" id="genie_species_select" >
                  <?php global $db_species_color_array;global $db_species_array;foreach($db_species_array as $k => $v) { ?>
                  <option value="<?php print $k ?>"><?php ($k=="beta_plantgenie_piabi_v10" || $k=="beta_plantgenie_artha_v11" || $k=="beta_plantgenie_eugra_v20" || $k=="beta_plantgenie_potra_v22")?print ucfirst($v)."*":print ucfirst($v); ?></option> 
                  <?php } ?>
               </select>
               <script>$('#genie_species_select').on('change',function(){MAIN_GENIE_ARRAY.splice(0,MAIN_GENIE_ARRAY.length);MAIN_GENIE_ARRAY.push(this.value)});
   
            </script>
               <?php echo '<ul class="egmenu">';genie_menu();echo '</ul>';?>
            </nav>
         <?php if(is_loggedin()) {settings();}?>
         <div class="clear"></div>
         <?php
            if( $c['initialize_tool_plugin']==1){
				if($c['help_button']==1){
					echo "<span style='position: absolute;margin-left: 20px;z-index:9'>
<button onclick='createexampleGenelist();' style='font-size:12px;padding:4px;margin-top:10px;cursor:pointer;line-height: 14px;' class='tourbtn tourbtn-danger'>Load Example</button>&nbsp;<button onclick='mannapperuma.startTour(tour,0);' style='font-size:12px;padding:4px;margin-top:10px;cursor:pointer;background-color:#F90;line-height: 14px;' id='tool_tour' class='tourbtn tourbtn-danger'>Take a Tour</button>&nbsp;<a href='https://help.plantgenie.org/".$rp."' target='_blank' style='font-size:12px;padding:4px;margin-top:10px;cursor:pointer;background-color:#c4b146;line-height: 14px;font-weight:normal' id='tool_tour' class='tourbtn tourbtn-danger'>Help</a></span>";
				}
				if($c['help_button2']==1){
		echo "<span style='position: absolute;margin-left: 20px;z-index:9'>
<button onclick='createexampleGenelist();' style='font-size:12px;padding:4px;margin-top:10px;cursor:pointer;line-height: 14px;' class='tourbtn tourbtn-danger'>Load Example</button>&nbsp;<button onclick='mannapperuma.startTour(tour,0);' style='font-size:12px;padding:4px;margin-top:10px;cursor:pointer;background-color:#F90;line-height: 14px;' id='tool_tour' class='tourbtn tourbtn-danger'>Take a Tour</button>&nbsp;<a href='https://help.plantgenie.org/enrichment/' target='_blank' style='font-size:12px;padding:4px;margin-top:10px;cursor:pointer;background-color:#c4b146;line-height: 14px;font-weight:normal' id='tool_tour' class='tourbtn tourbtn-danger'>Help</a></span>";
				}
            echo " <div id='plugin_wrapper'  class='plborder'>";
            include_once("plugins/".$c['tool_plugin']."/tool.php");
				
            echo "</div>";
            }else{?>
         <div id="wrapper" class="border">
             <?php if($_SERVER[""] =="/"){?>
         	<!--ADD FRONT PAGE CONTENT HERE-->
        <?php } ?> 
            <?php if(is_loggedin()) { ?>
            <textarea class="ckeditor" name="editor"><?php content($c['page'],$c['content']);?></textarea>
            <script type="text/javascript">
               var key = <?php echo json_encode($c['page']); ?>
            </script>
            <button id="btn_submit" onclick="save(key);">save</button>
            <?php include('msg_box.php'); ?>
            <?php }else{ ?>
            <?php content($c['page'],$c['content']);?>
            <?php } ?>
         </div>
        <!-- <div id="side" class="border">
            <?php content('subside',$c['subside']);?>
         </div>-->
         <?php }?>
         <div style="height:100%" class="clear"></div>
         <div class="push"></div>
         <!--<div class="clear"></div>
            <?php if(is_loggedin()) settings();?>-->
         <span id="deletebasket"  style="float:right;right:0px;bottom:0px;width:0px;height:0px;position:relative"></span>
         <div id="myModal" class="modal fade">
            <div class="modal-dialog">
               <div class="modal-content">
               </div>
            </div>
         </div>
         <script type="text/javascript">
            var color_array=<?php print json_encode($db_species_color_array)?>;
         </script>
         <script type="text/javascript" src="js/onload_script.js"></script>
         <footer id="site_footer" style="width:100%" ><?php echo $c['copyright'] ." | $sig | $lstatus";?></footer>
	   </div></div></br></br>
     
     
     
      <?php if(is_dir('plugins/sidebar')==true){ include_once("plugins/sidebar/sidebar.php");} ?>
<a id="genelistlink" href="plugins/genelist/tool.php" data-toggle="modal" data-target="#myModal"  data-refresh="true"><font  style="color:#00F;display:none" >here</font></a>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-90392160-2', 'auto');
  ga('send', 'pageview');
	  

 
</script>

  <?php $list_url = strtolower($_GET['_term']);  if($list_url!="" || isset($_GET['table'])){?>
  <script>
 $(window).load(function(){var genelislink = $("#genelistlink");genelislink.click();});
 </script>
 <?php } ?>
  
  
  <?php if($_SERVER[REQUEST_URI] =="/"){?>
  
<?php } ?>
      <?php	include_once("plugins/cookies/tool.php");?>
   </body>
</html>
