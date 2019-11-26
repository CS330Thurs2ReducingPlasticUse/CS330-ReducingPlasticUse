function initMap()
{
  var uluru = {lat: 42.0579, lng: -87.6805};
  var brewBike = {lat: 42.0530, lng: -87.673890};
  var norBucks = {lat: 42.0534, lng: -87.672710};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14.5,
    center: uluru
  });

  var marker1 = new google.maps.Marker({
    position: brewBike,
    map: map
  })

  var marker2 = new google.maps.Marker({
    position: norBucks,
    map: map
  })


}
