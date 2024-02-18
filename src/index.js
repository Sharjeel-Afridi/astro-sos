const card = document.querySelector('.map-container');
const map = document.getElementById('map');
const mapSidebar = document.querySelector('.map-sidebar');


if( "geolocation" in navigator){
    let sidebarContent = document.createElement('p');
    
    navigator.geolocation.getCurrentPosition(position => {
        map.src = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&output=embed`
        console.log(position);
        sidebarContent.textContent = `Longitude: ${position.coords.longitude} | Latitude: ${position.coords.latitude}`;
        mapSidebar.appendChild(sidebarContent);
    },
    (err) => {
        map.remove()
        let errorMessage = document.createElement('p');
        errorMessage.textContent = "Error: " + err.message;
        card.appendChild(errorMessage);
    })
}else {
    map.remove();
}