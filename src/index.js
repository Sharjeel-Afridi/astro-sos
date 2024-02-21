const card = document.querySelector('.map-container');
const map = document.getElementById('map');
const mapSidebar = document.querySelector('.map-sidebar');

if( "geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(position => {
        map.src = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&output=embed`
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let zoom = 100;
        mapSidebar.innerHTML = `Longitude: ${lng} | Latitude: ${lat} | Zoom: ${zoom}`;
    })
    console.log(lat)
}else {
    map.remove();
}


const inputs = document.querySelectorAll('input[type="text"]');
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const nextBtn = document.getElementById('next')

let inputGiven = false;
let checkboxChecked = false;


nextBtn.addEventListener('click', () => {
    console.log('button')
    inputs.forEach(input => {
        if( input.value !== '' ){
            inputGiven = true;
        }
    })
    checkbox.forEach(input => {
        if( input.checked !== false ){
            checkboxChecked = true;
        }
    })
    
    
    if(inputGiven && checkboxChecked){
        window.location.href = '/3';
        
    }else{
        alert("Please provide input.")
    }
})

