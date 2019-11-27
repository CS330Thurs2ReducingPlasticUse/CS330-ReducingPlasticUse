function createAccount()
{
  var no_problems = true;
    if (document.getElementById('inputPassword').value != document.getElementById('inputPassword2').value)
    {
      no_problems = false;
      document.getElementById('pass1').innerHTML = 'Password: passwords did not match';
      document.getElementById('pass2').innerHTML = 'Reenter password: passwords did not match';
    }
    if (document.getElementById('inputEmail').value == "")
    {
      no_problems = false;
      document.getElementById('Email').innerHTML = 'Email Address: enter an email address';
    }
    else {
      document.getElementById('Email').innerHTML = 'Email Address:'
    }
    if (document.getElementById('inputFirstName').value == "")
    {
      no_problems = false;
      document.getElementById('FirstName').innerHTML = 'First Name: enter a first name';
    }
    else {
      document.getElementById('FirstName').innerHTML = 'First Name:'
    }
    if (document.getElementById('inputLastName').value == "")
    {
      no_problems = false;
      document.getElementById('LastName').innerHTML = 'Last Name: enter a last name';
    }
    else {
      document.getElementById('LastName').innerHTML = 'Last Name:'
    }
    if (document.getElementById('inputUserName').value == "")
    {
      no_problems = false;
      document.getElementById('UserName').innerHTML = 'Username: enter a username';
    }
    else {
      document.getElementById('UserName').innerHTML = 'Username:'
    }
    if (document.getElementById('inputPhoneNumber').value == "")
    {
      no_problems = false;
      document.getElementById('PhoneNumber').innerHTML = 'Phone Number: enter a phone number';
    }
    else {
      document.getElementById('PhoneNumber').innerHTML = 'Phone Number:'
    }
    if (document.getElementById('inputPassword').value == "")
    {
      no_problems = false;
      document.getElementById('pass1').innerHTML = 'Password: enter a password';
    }
    if (document.getElementById('inputPassword2').value == "")
    {
      no_problems = false;
      document.getElementById('pass2').innerHTML = 'Password: reenter your password';
    }
    if (no_problems) {
      window.open('home_page.html','_self');
    }
}

function login()
{
  var no_problems = true
  if (document.getElementById('inputEmail/Un').value == "")
  {
    no_problems = false;
    document.getElementById('loginUsername').innerHTML = 'Email Address or Username: enter an email or username';
  }
  else {
    document.getElementById('loginUsername').innerHTML = 'Email Address or Username:'
  }
  if (document.getElementById('inputPassword3').value == "")
  {
    no_problems = false;
    document.getElementById('loginPassword').innerHTML = 'Password: enter a password';
  }
  else {
    document.getElementById('loginPassword').innerHTML = 'Password:'
  }
  if (no_problems) {
    window.open('home_page.html','_self');
  }
}


var  norbucksString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Norris Starbucks</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Norris Starbucks</b>, also referred to as <b>Norbucks</b>, is a large ' +
            'coffee shops located at 1999 S Campus Dr. Evanston, IL 60208'+
            'At this location, oven-warmed food and pastries are served in addition'+
            'to coffee to be ordered. There is a 25 cent discount if you bring your '+
            'own cup to this location.</p>'+
            '<p><a href="https://www.starbucks.com/store-locator/store/17739/northwestern-university-norris-univ-1999-s-campus-dr-evanston-il-602082500-us">'+
            'Norris University Starbucks Website Link</a> '+
            '</p>'+
            '</div>'+
            '</div>';

var  brewbikeString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Brewbike Coffee</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Brewbike Coffee</b>, also referred to as <b>Brewbike</b>, is a large ' +
            'coffee shop located in University Library (Main) at Cafe Bergson, 1970 Campus Drive'+
            ' Northwestern University Evanston, IL 60201'+
            'At this location, oven-warmed food and pastries are served in addition'+
            'to coffee to be ordered. There is a 50 cent discount if you bring your '+
            'own cup to this location.</p>'+
            '<p><a href="https://brewbikecoffee.com/locations#northwestern-section">'+
            'Brewbike Coffee Website Link</a> '+
            '</p>'+
            '</div>'+
            '</div>';

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
  });

  var marker2 = new google.maps.Marker({
    position: norBucks,
    map: map,
  });

  var infowindow1 = new google.maps.InfoWindow({
    content: brewbikeString
  });

  var infowindow2 = new google.maps.InfoWindow({
    content: norbucksString
  });

  marker1.addListener('click',function(){
    infowindow1.open(map,marker1);
  });

  marker2.addListener('click',function(){
    infowindow2.open(map,marker2);
  });

}//end of initMap
