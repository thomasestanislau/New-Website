window.onload = function(){

    var map;

    function initialize(){
        var mapInicio = {
            center: new google.maps.LatLng(-8.182196, -34.918476),
            scrollwheel: false,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        }
        map = new google.maps.Map(document.getElementById("mapa"),mapInicio);
    }

    function addMarker(lat,long,icon,content){
        var latLong = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position: latLong,
            map: map,
            icon: icon
        });
            
        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });
            
        infoWindow.open(map,marker);
        
    }


    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;">Meu endereço</p>';
    addMarker(-8.182196, -34.918476, '', conteudo);


}