let button = document.querySelector("button");

button.addEventListener('click', function(){
    document.querySelector("#optin-disclaimer a").textContent = '';
})

var disclaimer = document.createElement('p');
disclaimer.id = "optin-disclaimer";
disclaimer.innerHTML = " <a href='https://www.patagonia.com/actionworks/terms-of-use' target='_blank'>We'll only contact you about activism here.</a>";
document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form").after(disclaimer);


var disclaimer = document.createElement('p');
var parentNode = document.querySelector('.p2a-fieldset-optin');
disclaimer.id = "optin-disclaimer";
disclaimer.innerHTML = " <a href='https://www.patagonia.com/actionworks/terms-of-use' target='_blank'>We'll only contact you about activism here.</a>";
parentNode.appendChild(disclaimer)

window.addEventListener('scroll', function(){
    var disclaimer = document.createElement('p');
    disclaimer.id = "optin-disclaimer";
    disclaimer.innerHTML = " <a href='https://www.patagonia.com/actionworks/terms-of-use' target='_blank'>We'll only contact you about activism here.</a>";
    document.querySelector('form').after(disclaimer);
})

var disclaimer = document.createElement('p');
disclaimer.id = "optin-disclaimer";
disclaimer.innerHTML = " <a href='https://www.patagonia.com/actionworks/terms-of-use' target='_blank'>We'll only contact you about activism here.</a>";
document.querySelector("label[for='subscribeSms']").after(disclaimer)

// p2a-checkbox p2a-checkbox-label

var reference = document.querySelector("label[for='subscribeSms']");

if (reference){
    var disclaimer = document.createElement('p');
    disclaimer.id = "optin-disclaimer";
    
    var disclaimerText = document.createElement('a');
    disclaimerText.href = "https://www.patagonia.com/actionworks/terms-of-use";
    disclaimerText.target = '_blank';
    disclaimerText.textContent = `We'll only contact you about activism here.`

    disclaimerText.appendChild(disclaimer);
    document.querySelector('form').after(disclaimer);
} else {
    console.log('element doesnt found');
}