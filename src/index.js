const inputs = document.querySelectorAll('input');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const reportBtn = document.getElementById('report');

let inputGiven = false;
let checkboxChecked = false;

const currentUrl = window.location.href;
const parts = currentUrl.split('/');
const lastPart = parseInt(parts[parts.length - 1]);

if(reportBtn){
    reportBtn.addEventListener('click', () => {
        window.location.href = "/1";
    })
}

if(nextBtn){
        previousBtn.addEventListener('click', () => {
        if(lastPart !== 1 ){
            window.location.href = `/${lastPart - 1}`;
        }else{
            window.location.href = "/";
        }
    })

    nextBtn.addEventListener('click', () => {
        console.log('button')
        inputs.forEach(input => {
            if(input.type === "text" && input.value !== ''){
                inputGiven = true;
            }else if(input.type === "checkbox" &&  input.checked !== false ){
                inputGiven = true;
            }else if( input.type === "radio" &&  input.checked !== false){
                inputGiven = true
                
            }
        })
        
        if(inputGiven ){
            if(lastPart === 3){
                window.location.href = '/success';
            }else{
                window.location.href = `/${lastPart + 1}`;
            }
            
        }else{
            alert("Please provide input.")
        }
    })

}