
function initialize() {
  var center = new google.maps.LatLng(11.982465, 121.919676);
  var sugi = new google.maps.LatLng(11.966155, 121.921543);
  var puka = new google.maps.LatLng(11.9954201,121.913191);
  var yapak = new google.maps.LatLng(11.995205, 121.923652);
  var luho = new google.maps.LatLng(11.9789794,121.9279861);
  var sinagpa = new google.maps.LatLng(11.981084, 121.916557);
  var syapak = new google.maps.LatLng(11.986751, 121.917523);
  var iligan = new google.maps.LatLng(11.9901675,121.9254112);
  var diniwid = new google.maps.LatLng(11.973905,121.914776);
  var bolabog = new google.maps.LatLng(11.966191, 121.925803);

  var prev;

  var mapOptions = {
    zoom: 14,
    center: center
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var current = new google.maps.Marker({
      position: sugi,
      map: map,
      zIndex: google.maps.Marker.MAX_ZINDEX,
      title: 'sugi',
      animation:google.maps.Animation.BOUNCE

  });

  var marker_sugi = new google.maps.Marker({
      position: sugi,
      map: map,
      title: 'sugi',
      icon: '../images/sugisprite.png'
  });



  var sugiString = '<div class="content">'+
      '<h3>Sugidanon Inc.</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/sugi.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var sugiwindow = new google.maps.InfoWindow({
    content: sugiString
  });

  var marker_puka = new google.maps.Marker({
      position: puka,
      map: map,
      title: 'puka beack',
      icon: '../images/dragon.png'

  });

  var pukaString = '<div class="content">'+
      '<h3>Puka Shell Beach</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/puka.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var pukawindow = new google.maps.InfoWindow({
    content: pukaString
  });


  var marker_yapak = new google.maps.Marker({
      position: yapak,
      map: map,
      title: 'yapak',
      icon: '../images/cave.png'

  });

  var yapakString = '<div class="content">'+
      '<h3>Kuweba Yapak</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/yapak.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var yapakwindow = new google.maps.InfoWindow({
    content: yapakString
  });


  var marker_luho = new google.maps.Marker({
      position: luho,
      map: map,
      title: 'luho',
      icon: '../images/mt.png'

  });

  var luhoString = '<div class="content">'+
      '<h3>Mt. Luho</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/luho.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var luhowindow = new google.maps.InfoWindow({
    content: luhoString
  });

  var marker_sinagpa = new google.maps.Marker({
      position: sinagpa,
      map: map,
      title: 'sinagpa',
      icon: '../images/mt.png'

  });

  var sinagpaString = '<div class="content">'+
      '<h3>Mt. Sinagpa</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/sinagpa.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var sinagpawindow = new google.maps.InfoWindow({
    content: sinagpaString
  });

  var marker_syapak = new google.maps.Marker({
      position: syapak,
      map: map,
      title: 'syapak',
      icon: '../images/syapak.png'

  });

  var syapakString = '<div class="content">'+
      '<h3>Sitio Yapak</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/sinagpa.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var syapakwindow = new google.maps.InfoWindow({
    content: syapakString
  });



  var marker_iligan = new google.maps.Marker({
      position: iligan,
      map: map,
      title: 'iligan',
      icon: '../images/beach.png'

  });

  var iliganString = '<div class="content">'+
      '<h3>Ilig-iligan Beach</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/iligan.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var iliganwindow = new google.maps.InfoWindow({
    content: iliganString
  });

  var marker_diniwid = new google.maps.Marker({
      position: diniwid,
      map: map,
      title: 'diniwid',
      icon: '../images/beach.png'

  });

  var diniwidString = '<div class="content">'+
      '<h3>Diniwid Beach</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/iligan.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var diniwidwindow = new google.maps.InfoWindow({
    content: diniwidString
  });

  var marker_bolabog= new google.maps.Marker({
      position: bolabog,
      map: map,
      title: 'bolabog',
      icon: '../images/syapak.png'

  });

  var bolabogString = '<div class="content">'+
      '<h3>Sitio bolabog</h3>'+
      '<div class="col-md-5">'+
        '<img style="width:220px; height:120px" src="../images/sinagpa.png"/>'+
      '</div>'+
      '<div class="col-md-7">'+
        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
        '<a href="#">Tuklasin</a>'+
      '</div>'+
    '</div>';
 
  var bolabogwindow = new google.maps.InfoWindow({
    content: bolabogString
  });

  var SugitoPukaCoordinates = [
	new google.maps.LatLng(11.966155, 121.921543),
    new google.maps.LatLng(11.975706, 121.914097),
    new google.maps.LatLng(11.985950, 121.908604),
    new google.maps.LatLng(11.9954201, 121.913191)
  ];
  var SugitoPukaPath = new google.maps.Polyline({
    path: SugitoPukaCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  
  var SugitotoKuwebaYapakCoordinates = [
	new google.maps.LatLng(11.966155, 121.921543),
    new google.maps.LatLng(11.966191, 121.925803),
    new google.maps.LatLng(11.9789794,121.9279861),
    new google.maps.LatLng(11.981084, 121.916557),
	new google.maps.LatLng(11.973905, 121.914776),
	new google.maps.LatLng(11.985950, 121.908604),
	new google.maps.LatLng(11.9954201,121.913191),
	new google.maps.LatLng(11.986751, 121.917523),
	new google.maps.LatLng(11.9901675,121.9254112),
	new google.maps.LatLng(11.995205, 121.923652)
  ];
  var SugitotoKuwebaYapakPath = new google.maps.Polyline({
    path: SugitotoKuwebaYapakCoordinates,
    geodesic: true,
    strokeColor: '#0000FF',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  

  google.maps.event.addListener(marker_puka, 'mouseover', function() {
  pukawindow.open(map,marker_puka);
  prev = current.getPosition();
  current.setPosition(puka);
  SugitoPukaPath.setMap(map);
  });

  google.maps.event.addListener(marker_puka, 'mouseout', function() {
    pukawindow.close();
    current.setPosition(prev);
    SugitoPukaPath.setMap(null);
  });

  google.maps.event.addListener(marker_puka, 'click', function() {
    
   window.location.href='../js-vine-master/VN/dora.html';

  });


  google.maps.event.addListener(marker_sugi, 'mouseover', function() {
  sugiwindow.open(map,marker_sugi);
  prev = current.getPosition();
  current.setPosition(sugi);
  });

  google.maps.event.addListener(marker_sugi, 'mouseout', function() {
      sugiwindow.close();
      current.setPosition(prev);
    });
	
  google.maps.event.addListener(marker_sugi, 'click', function() {
      window.location.href='../js-vine-master/VN/location_3.html';
    });

  google.maps.event.addListener(marker_yapak, 'mouseover', function() {
  yapakwindow.open(map,marker_yapak);
  prev = current.getPosition();
  current.setPosition(yapak);
  SugitotoKuwebaYapakPath.setMap(map);
  });

  google.maps.event.addListener(marker_yapak, 'mouseout', function() {
      yapakwindow.close();
      current.setPosition(prev);
	  SugitotoKuwebaYapakPath.setMap(null);
    });
	
  google.maps.event.addListener(marker_yapak, 'click', function() {
      window.location.href='../js-vine-master/VN/location_last.html';
    });

  google.maps.event.addListener(marker_luho, 'mouseover', function() {
  luhowindow.open(map,marker_luho);
  prev = current.getPosition();
  current.setPosition(luho);
  });

  google.maps.event.addListener(marker_luho, 'mouseout', function() {
     luhowindow.close();
     current.setPosition(prev);
    });
	
  google.maps.event.addListener(marker_luho, 'click', function() {
     window.location.href='../js-vine-master/VN/location_2.html';
    });


  google.maps.event.addListener(marker_sinagpa, 'mouseover', function() {
  sinagpawindow.open(map,marker_sinagpa);
  prev = current.getPosition();
  current.setPosition(sinagpa);
  });

   google.maps.event.addListener(marker_sinagpa, 'mouseout', function() {
    sinagpawindow.close();
    current.setPosition(prev);
    });

  google.maps.event.addListener(marker_sinagpa, 'click', function() {
    window.location.href='../js-vine-master/VN/index.html';
    });
  
  google.maps.event.addListener(marker_syapak, 'mouseover', function() {
  syapakwindow.open(map,marker_syapak);
  prev = current.getPosition();
  current.setPosition(syapak);
  });

  google.maps.event.addListener(marker_syapak, 'mouseout', function() {
   syapakwindow.close();
   current.setPosition(prev);
    });

  google.maps.event.addListener(marker_syapak, 'click', function() {
   window.location.href='../js-vine-master/VN/location_3.html';
    });

  google.maps.event.addListener(marker_iligan, 'mouseover', function() {
  iliganwindow.open(map,marker_iligan);
  prev = current.getPosition();
  current.setPosition(iligan);
  });

  google.maps.event.addListener(marker_iligan, 'mouseout', function() {
   iliganwindow.close();
   current.setPosition(prev);
    });

  google.maps.event.addListener(marker_iligan, 'click', function() {
   window.location.href='../js-vine-master/VN/location_2.html';
    });

  google.maps.event.addListener(marker_diniwid, 'mouseover', function() {
  diniwidwindow.open(map,marker_diniwid);
  prev = current.getPosition();
  current.setPosition(diniwid);
  });

  google.maps.event.addListener(marker_diniwid, 'mouseout', function() {
   diniwidwindow.close();
   current.setPosition(prev);
    });

  google.maps.event.addListener(marker_diniwid, 'click', function() {
   window.location.href='../js-vine-master/VN/location_3.html';
    });

  google.maps.event.addListener(marker_bolabog, 'mouseover', function() {
  bolabogwindow.open(map,marker_bolabog);
  prev = current.getPosition();
  current.setPosition(bolabog);
  });

  google.maps.event.addListener(marker_bolabog, 'mouseout', function() {
   bolabogwindow.close();
   current.setPosition(prev);
    });

  google.maps.event.addListener(marker_bolabog, 'click', function() {
   window.location.href='../js-vine-master/VN/location_2.html';
    });


}

google.maps.event.addDomListener(window, 'load', initialize);