var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 29.599465, lng: -95.095214},
        zoom: 8
      });
    };