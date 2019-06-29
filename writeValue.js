function writeValue()
{		
	$(document).ready(function() {
		  var table = $('#example').DataTable( {
			"columns": 
			[
				{ "title": "Name", "data": "name" },	
                                { "title": "Height", "data": "height" },
				{ "title": "Hair Color", "data": "hair_color" },
				{ "title": "Skin Color", "data": "skin_color" },
				{ "title": "Gender", "data": "gender" },	
				{ "width": "15%","title": "Films", "data": "films",render: function (data, type, row, meta) {			   
					var currentCell = $("#example").DataTable().cells({"row":meta.row, "column":meta.col}).nodes(0);
	
		                     if(data.length == 1)
					{
						var filmTitle = getFilmTitle(data[0]);
						filmTitle.done(function(msg) {
							$(currentCell).text(msg.title); 		
						});
					}
					else if(data.length == 2)
					{
						var filmTitle1 = getFilmTitle(data[0]);
						var filmTitle2 = getFilmTitle(data[1]);
		
						filmTitle1.done(function(msg1) {	
						filmTitle2.done(function(msg2) {
							   $(currentCell).text(msg1.title + ', ' + msg2.title); 		
						});
						});
					}
					else if(data.length == 3)
					{
						var filmTitle1 = getFilmTitle(data[0]);
						var filmTitle2 = getFilmTitle(data[1]);
						var filmTitle3 = getFilmTitle(data[2]);
		
						filmTitle1.done(function(msg1) {	
						filmTitle2.done(function(msg2) {
						filmTitle3.done(function(msg3) {
							    $(currentCell).text(msg1.title + ', ' + msg2.title+ ', ' + msg3.title); 
						});
						});
						});
					}
					else if(data.length == 4)
					{
						var filmTitle1 = getFilmTitle(data[0]);
						var filmTitle2 = getFilmTitle(data[1]);
						var filmTitle3 = getFilmTitle(data[2]);
						var filmTitle4 = getFilmTitle(data[3]);
		
						filmTitle1.done(function(msg1) {	
						filmTitle2.done(function(msg2) {
						filmTitle3.done(function(msg3) {
						filmTitle4.done(function(msg4) {	
							    $(currentCell).text(msg1.title + ', ' + msg2.title+ ', ' + msg3.title+ ', ' + msg4.title); 
						});
						});
						});
						});
					}
					else if(data.length == 5)
					{
						var filmTitle1 = getFilmTitle(data[0]);
						var filmTitle2 = getFilmTitle(data[1]);
						var filmTitle3 = getFilmTitle(data[2]);
						var filmTitle4 = getFilmTitle(data[3]);
						var filmTitle5 = getFilmTitle(data[4]);
		
						filmTitle1.done(function(msg1) {	
						filmTitle2.done(function(msg2) {
						filmTitle3.done(function(msg3) {
						filmTitle4.done(function(msg4) {
                                                filmTitle5.done(function(msg5) {							
							    $(currentCell).text(msg1.title + ', ' + msg2.title+ ', ' + msg3.title+ ', ' + msg4.title+ ', ' + msg5.title); 
						});
						});
						});
						});
						});
					}
					else if(data.length == 6)
					{
						var filmTitle1 = getFilmTitle(data[0]);
						var filmTitle2 = getFilmTitle(data[1]);
						var filmTitle3 = getFilmTitle(data[2]);
						var filmTitle4 = getFilmTitle(data[3]);
						var filmTitle5 = getFilmTitle(data[4]);
						var filmTitle6 = getFilmTitle(data[5]);
		
						filmTitle1.done(function(msg1) {	
						filmTitle2.done(function(msg2) {
						filmTitle3.done(function(msg3) {
						filmTitle4.done(function(msg4) {
                                             filmTitle5.done(function(msg5) {
						filmTitle6.done(function(msg6) {
							    $(currentCell).text(msg1.title + ', ' + msg2.title+ ', ' + msg3.title+ ', ' + msg4.title+ ', ' + msg5.title+ ', ' + msg6.title); 
						});
						});
						});
						});
						});
						});
					}
					else if(data.length == 7)
					{
						var filmTitle1 = getFilmTitle(data[0]);
						var filmTitle2 = getFilmTitle(data[1]);
						var filmTitle3 = getFilmTitle(data[2]);
						var filmTitle4 = getFilmTitle(data[3]);
						var filmTitle5 = getFilmTitle(data[4]);
						var filmTitle6 = getFilmTitle(data[5]);
						var filmTitle7 = getFilmTitle(data[6]);
		
						filmTitle1.done(function(msg1) {	
						filmTitle2.done(function(msg2) {
						filmTitle3.done(function(msg3) {
						filmTitle4.done(function(msg4) {
                                              filmTitle5.done(function(msg5) {
						filmTitle6.done(function(msg6) {
						filmTitle7.done(function(msg7) {	
							    $(currentCell).text(msg1.title + ', ' + msg2.title+ ', ' + msg3.title+ ', ' + msg4.title+ ', ' + msg5.title+ ', ' + msg6.title+ ', ' + msg7.title); 
						});
						});
						});
						});
						});
						});
						});
					}					
					return null;
				}},							
                              { "title": "Planet", "data": "homeworld", render: function (data, type, row, meta) {			   
					var currentCell = $("#example").DataTable().cells({"row":meta.row, "column":meta.col}).nodes(0);				
					
					var PlanetName = getName(data);
						PlanetName.done(function(msg) {
							$(currentCell).text(msg.name); 		
						});
					return null;
				}},
				{ "title": "Species", "data": "species",render: function (data, type, row, meta) {			   
					var currentCell = $("#example").DataTable().cells({"row":meta.row, "column":meta.col}).nodes(0);
					if(data.length == 1)
					{
						var SpeciesName = getName(data[0]);
						SpeciesName.done(function(msg) {
							$(currentCell).text(msg.name); 		
						});
					}
					return null;	   
				}},
				{ "title": "Vehicles", "data": "vehicles",render: function (data, type, row, meta) {			   
					var currentCell = $("#example").DataTable().cells({"row":meta.row, "column":meta.col}).nodes(0);
					if(data.length == 1)
					{
						var VehicleName = getName(data[0]);
						VehicleName.done(function(msg) {
							$(currentCell).text(msg.name); 		
						});
					}
					else if(data.length == 2)
					{
						var PlanetName1 = getName(data[0]);
						var PlanetName2 = getName(data[1]);
						PlanetName1.done(function(msg1) {
						PlanetName2.done(function(msg2) {	
							$(currentCell).text(msg1.name+','+msg2.name); 		
						});
						});
					}
					return null;	   
				}},
				{ "title": "Starships", "data": "starships",render: function (data, type, row, meta) {			   
					var currentCell = $("#example").DataTable().cells({"row":meta.row, "column":meta.col}).nodes(0);
					if(data.length == 1)
					{
						var StarshipName = getName(data[0]);
						StarshipName.done(function(msg) {
							$(currentCell).text(msg.name); 		
						});
					}
					else if(data.length == 2)
					{
						var StarshipName1 = getName(data[0]);
						var StarshipName2 = getName(data[1]);
						StarshipName1.done(function(msg1) {
						StarshipName2.done(function(msg2) {	
							$(currentCell).text(msg1.name+','+msg2.name); 		
						});
						});
					}
					else if(data.length == 3)
					{
						var StarshipName1 = getName(data[0]);
						var StarshipName2 = getName(data[1]);
						var StarshipName3 = getName(data[2]);
						StarshipName1.done(function(msg1) {
						StarshipName2.done(function(msg2) {
                                               StarshipName3.done(function(msg3) {							
							$(currentCell).text(msg1.name+','+msg2.name+','+msg3.name); 		
						});
						});
						});
					}
					else if(data.length == 5)
					{
						var StarshipName1 = getName(data[0]);
						var StarshipName2 = getName(data[1]);
						var StarshipName3 = getName(data[2]);
						var StarshipName4 = getName(data[3]);
						var StarshipName5 = getName(data[4]);
						StarshipName1.done(function(msg1) {
						StarshipName2.done(function(msg2) {
                                             StarshipName3.done(function(msg3) {
                                             StarshipName4.done(function(msg4) {	
                                             StarshipName5.done(function(msg5) {						
							$(currentCell).text(msg1.name+','+msg2.name+','+msg3.name+','+msg4.name+','+msg5.name); 		
						});
						});
						});
						});
						});
					}
					return null;	   
				}}
			]
		});	
	
	for(var i = 1; i < 10; i++) {			
	  $.ajax({
		 url: 'https://swapi.co/api/people/?page='+i+'&format=json',
		 dataType: 'json',
		 success: function(json){
		   table.rows.add(json.results).draw();
	   }
	 });
	}
	function getFilmTitle(data) {
			var Film = jQuery.ajax({
				type: "GET",
				url: data
			});
			return Film;
    }
	function getName(data) {
			var Name = jQuery.ajax({
				type: "GET",
				url: data
			});
			return Name;
    }
});		
$(document).ready(function() {
	var table2 = $('#example2').DataTable( {
			"columns": 
			[
				{ "width": "15%","title": "Title", "data": "title" },	
                               { "width": "10%","title": "Episode Id", "data": "episode_id" },
				{ "width": "30%","title": "Opening Crawl", "data": "opening_crawl" },
				{ "title": "Director", "data": "director" },
				{ "title": "Producer", "data": "producer" },
				{ "width": "10%","title": "Release Date", "data": "release_date" }
			]
		});	 	
	$.ajax({
		 url: 'https://swapi.co/api/films/?format=json',
		 dataType: 'json',
		 success: function(json){
		   table2.rows.add(json.results).draw();
	   }
	 });
});		
}
