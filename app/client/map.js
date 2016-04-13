Meteor.startup(function() {  
  GoogleMaps.load();
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-33.890542, 151.274856),
        zoom: 12,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        // scrollwheel: false,
        backgroundColor: '#da9881'
      };
    }
  }
});

var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];



Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
          position: {lat: beach[1], lng: beach[2]},
          map: map.instance,
          animation: google.maps.Animation.DROP
        });
      }
  });
});