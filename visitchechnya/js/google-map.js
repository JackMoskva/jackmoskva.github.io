// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,
                    scrollwheel: false,
                    mapTypeControl: false,
                    streetViewControl: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(42.7767937, 45.5704731), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"},{"lightness":"4"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#e5f3f4"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#e5f3f4"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#e5f3f4"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#54beb1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"-9"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"-2"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"36"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]

                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var neighborhoods = [
                    // Main
                    {lat: 42.7767937, lng: 45.5704731, icon: 'marker.svg'},
                    {lat: 42.724752, lng: 45.609436, icon: 'map-pin.svg'},
                    {lat: 42.7455622, lng: 45.5593509, icon: 'marker.svg'}
                ];

                /* Info windows
                ===================== */
                infoWindow = new google.maps.InfoWindow();

                function displayMarkers() {

                    // this variablesets the map bounds and zoom level according to markers position
                    var bounds = new google.maps.LatLngBounds();

                    // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
                    for (var i = 0; i < neighborhoods.length; i++){

                        var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
                        var icon = neighborhoods[i].icon;

                        createMarker(latlng, name, content, icon, i * 350);

                        // Marker's Lat. and Lng. values are added to bounds variable
                        bounds.extend(latlng);
                    }
                }


                function createMarker(latlng, title, content, icon, timeout) {

                    window.setTimeout(function() {
                        var marker = new google.maps.Marker({
                            map: map,
                            position: latlng,
                            clickable: true,
                            icon: {
                                url: "img/" + icon
                            },
                            animation: google.maps.Animation.DROP
                        });
                    }, timeout);
                }

                displayMarkers();





    map.addListener('click', function() {
        map.setOptions({
            scrollwheel: true
        });
    });
    
    map.addListener('drug', function() {
        map.setOptions({
            scrollwheel: true
        });
    });
    
    map.addListener('mouseout', function() {
        map.setOptions({
            scrollwheel: false
        });
    });


     /* Map center on resize
    =========================*/
    var getCen = map.getCenter();

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(getCen);
    });


}