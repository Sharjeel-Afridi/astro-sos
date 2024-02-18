const card = document.querySelector('.map-container');
const map = document.getElementById('map');

if( "geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(position => {
        map.src = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&output=embed`
    })
}else {
    map.remove();
}