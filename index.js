function initMap() {

	var map = {	
		center: new google.maps.LatLng(50.129720, -8.679740),
		zoom: 5,
	};

	var map = new google.maps.Map(document.getElementById("googleMap"),map);
	var markers = [];

	var locations = [
	  ['Salzgitter', 50.129720, -8.679740, 4, 'http://labs.google.com/ridefinder/images/mm_20_gray.png'],
	  ['Hildesheim', 52.150002, 9.950000, 5, 'http://labs.google.com/ridefinder/images/mm_20_red.png'],
	  ['Siegen', 50.883331, 8.016667, 3, 'http://labs.google.com/ridefinder/images/mm_20_gray.png'],
	  ['Erlangen', 49.583332, 11.016667, 2, 'http://labs.google.com/ridefinder/images/mm_20_red.png'],
	  ['Erlangen', 51.183334, 7.200000, 1, 'http://labs.google.com/ridefinder/images/mm_20_red.png']
	];

	var marker, i;
	var infowindow = new google.maps.InfoWindow();
	

	var contentString = '<div id="info-window-container">' +
							'<div class="info-window-title">' + 
								'<span> Bike </span>' + '<span> <img class="arrow" src="./angular_right_arrow.png" alt="arrow"</span>' + '<span> Henry </span>' + '<span> <img class="arrow" src="./angular_left_arrow.png" alt="arrow"</span>' +
								'<span> <img class="bicycle-img" src="./bicycle.png" alt="bicycle"</span>' + 
							'</div>' +
							'<div class="info-window-subTitle">This bike is for rent</div>' +
							'<div class="info-window-content">' +
								'<div>' +
									'<ol>' +
									 ' <li>Click on "Rent Bicycle"</li>' +
									 ' <li>Bicycle lock will unlock automatically</li>' +
									  '<li>Adjust saddle height</li>' +
									'</ol>' +
								'</div>' + 
							'</div>' +
							'<div class="info-window-button"><button id="rent-button" type="button" >RENT BIKE</button></div>' +
						'</div>';
			

	// Looping through the array of markers & place them on the map  
	for(i= 0; i < locations.length; i++)
	{
		var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
		
		marker = new google.maps.Marker({
			position: position,
			map: map,
			icon: locations[i][4]
		});	
		
		 markers.push(marker); 
		 
		
		 
		google.maps.event.addListener(marker,'click', (function(marker,contentString,i){ 
			return function() {
			   infowindow.setContent(contentString);
			   infowindow.open(map,marker);
			   
			  //var newButton = document.querySelector('div.info-window-button button');
			   //changeButton();
			   //newButton.click(function(event){
				//	console.log('hi');
				//});
				
			};
		})(marker,contentString,i));

		
	}
	
	
}



