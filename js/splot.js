// SPLOT-based functions
// =====================


	/******************************************************
	*  Expand/collapse feature tree subtrees
	*******************************************************/
	function expandcollapse(featureid){
	   var el = document.getElementById(featureid + "_children");
	   var img = document.getElementById(featureid+"_icon"); 
	   if ( el.style.display != 'none' ) {
	       el.style.display = 'none';
	       img.src = "images/plus.jpg";
	   }
	   else {
	       el.style.display = '';
	       img.src = "images/minus.jpg";
	   }   
	}
	
/*
 *  <div id="{{ id }}">
 *    <div id="{{ id }}_main">
 *    
 *    	<!-- state1 = unknown.gif / known.gif -->
 *      <img src="images/{{ state1 }}>    
 * 
 * 		<!-- expand -->
 *      <img id="{{ id }}_icon" src="images/{{ state2 }}" onclick="javascript:expandcollapse('{{ id }}')">
 *      
 *      <!-- if Undecided -->
 *      
 *      	<!-- SolitaryFeature -->
 *      	<a href="select.egl?id={{ id }}>
 *   			<img src="images/checkmark.gif">
 *    		</a>
 * 			<a href="deselect.egl?id={{ id }}">
 * 				<img src="images/crossmark.gif">
 * 			</a>
 * 
 * 		<!-- if Decided -->
 * 
 * 			<!-- who decide -->
 * 			<!-- who = propagated.gif / manual.gif -->
 * 			<img src="images/{{ who }}.gif">
 * 
 * 			<!-- if changeable -- propagated -->
 *			 
 * 				<a href="change-decision.egl?id={{ id }}">
 * 					<img src="images/toggle-green.gif">
 * 				</a>
 * 
 * 			<!-- if changeable -- propagated -->
 *			 
 * 				<a href="change-decision.egl?id={{ id }}">
 * 					<img src="images/toggle-red.gif">
 * 				</a>
 * 
 * 			<!-- end if -->
 * 
 * 			<!-- if undoable -->
 * 
 * 				<a href="undo.egl?{{ id }}">
 * 					<img src="images/undo.gif">
 * 				</a>
 * 
 * 			<!-- end if -->
 * 
 * 		<!-- end if -->
 *  		
 * 		<!-- type = root.gif, optional.gif, mandatory.gif, group.gif, grouped.gif -->
 * 		<img id="{{ id }}_type" src="images/{{ type }}.gif" alt="{{ type }}">
 * 
 * 		<!-- name -->
 * 			<!-- if group -->
 * 
 * 				<!-- groupType = 1..1 / 1..* -->
 * 				<span title="{{ groupType }}" id="{{ id }}_name" >
 * 					{{ groupType }}
 * 				</span>
 * 	
 * 			<!-- else -->
 * 
 * 				<!-- state2 = normalFeature / selectedFeature / deselectedFeature -->
 * 				<span title="{{ id }}" class="{{ state2 }}" id="{{ id }}_name">
 * 					{{ name }}
 * 				</span>
 * 			<!-- end if -->
 * 
 * 		<!-- end name -->
 * 
 * 	  </div>
 * 
 *	  <div id="{{ id }}_children" style="position:relative; left:20px;">
 *			:
 *    </div>
 *   
 *	</div>
 *
 */
	
/*
 * 	<!-- steps -->
 * 
 * 	<tr>
 *  	<td>
 *  		{{ id }}
 *  
 *  		<!-- if undoable -->

 *  		<a href="undo.egl?id={{ decision.id }}>
 *  			<img src="images/undo.gif">
 *  		</a>
 *  
 *  		<!-- end if -->
 *  
 *  	</td>
 * 		<td>
 * 
 * 			<!-- if selected -->
 *   			<img src="images/checkmark.gif">
 *    		<!-- if deselected -->
 * 				<img src="images/crossmark.gif">
 * 			<!-- end if -->
 * 			
 * 			{{ decision.name }}
 * 
 * 		</td>
 * 
 * 	</tr>
 * 
 */	
	