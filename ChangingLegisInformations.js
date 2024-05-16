/*
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function changeWelcomeBackIfVisible() {
    const welcomeBack = document.querySelector('.cookie__welcome');
    const buttonText = document.querySelector('.btn__text');
    const buttonReset = document.querySelector('.cookie-reset');
    if (welcomeBack && isElementInViewport(welcomeBack)) {
        welcomeBack.textContent = 'Bon retour! Est-ce que ces informations sont correctes?';
        buttonText.textContent = 'Cést parti';
        buttonReset.textContent = `Non, ce n'est pas moi`;
    }
}

function updateTextOnViewportChange() {
    changeWelcomeBackIfVisible();
    requestAnimationFrame(updateTextOnViewportChange);
}

updateTextOnViewportChange();


###################### OLD SCRIPTS ###############################################################################################

document.querySelector('.subject-line').textContent = 'Asunto: Congreso, ¡extiendan el Programa de Conectividad Asequible (ACP)!';


const twitterTab = document.querySelector("#twitter-tab > svg > rect");
twitterTab.addEventListener('click', changeButtonTextToLegislators);

function changeButtonTextToLegislators() {
    const button = document.querySelector('button');
    button.textContent = 'Encontra Legisladores';
}

function updateTextOnViewportChange() {
    changeErrorMessageIfVisible();
    requestAnimationFrame(updateTextOnViewportChange);
}

const greetings = document.querySelector('.p2a-fieldset-message.p2a-message-intro.greeting');
addressInput.addEventListener('change', function(){
    greetings.textContent.replace('Dear', 'Estimado(a)');
})
*/
const selectElement = document.getElementById('input-title');

if (selectElement) {
    selectElement.innerHTML = ''; 
    
    var placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.textContent = 'Título';
    selectElement.appendChild(placeholderOption);

    var newOptions = [
        'ADM',
        'BGEN',
        'Cap.',
        'Capellán',
        'Capitán',
        'CAPT',
        'Cardenal',
        'CDR',
        'CMSgt',
        'COL',
        'Congresista',
        'Coronel',
        'CT',
        'Del.',
        'Dr.',
        'DRS.',
        'Embajador',
        'Fr.',
        'GEN',
        'Gob.',
        'Hermana',
        'Hermano',
        'Honorable',
        'Honorable',
        'Imam',
        'Judge',
        'LCDR',
        'LGEN',
        'LTC',
        'LTG',
        'MAJ',
        'MajGen',
        'Master',
        'Mayor General',
        'MG',
        'MSG',
        'MSgt',
        'Muy reverendo',
        'Obispo',
        'Prof.',
        'Rabino',
        'RADM',
        'Rector',
        'Rep.',
        'Rev.',
        'Reverendísimo',
        'Senador',
        'SFC',
        'SGM',
        'SGT',
        'SgtMaj',
        'Sr.',
        'Sra.',
        'Srta.',
        'Srta.',
        'SSG',
        'SSGT',
        'Teniente general',
        'TG',
        'VADM'
    ];

    newOptions.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

//visible fields
document.querySelector("#input-name").placeholder = 'Nombre completo';
document.querySelector("#input-address1").placeholder = 'Dirección';
document.querySelector("#input-zip5").placeholder = 'Código postal';
document.querySelector("#input-phone").placeholder = 'Teléfono';
document.querySelector("#input-email").placeholder = 'Correo electrónico';
document.querySelector('.p2a-city-state-message').textContent = 'La ciudad y el estado no son obligatorios';
document.querySelector('.subject-line').textContent = 'Asunto: Congreso, ¡extiendan el Programa de Conectividad Asequible (ACP)!';

//Visible fields Twitter
const twitterTab = document.querySelector("#twitter-tab");
twitterTab.addEventListener('click', function(){
    setTimeout(function(){
        document.querySelector("#input-address1").placeholder = 'Dirección';
        document.querySelector("#input-zip5").placeholder = 'Código postal';
        document.querySelector("#input-phone").placeholder = 'Teléfono';
        document.querySelector('.p2a-city-state-message').textContent = 'La ciudad y el estado no son obligatorios';   
    },500)
})


//call functions
updateErrorTexts();

// functions to change invisible elements
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Invisible elements
// error messages
function changeErrorMessagesFields(){
    const errorMessageTitle = document.querySelectorAll('.p2a-error-message')[0];
    const errorMessageName = document.querySelectorAll('.p2a-error-message')[1];
    const errorMessageAddress = document.querySelectorAll('.p2a-error-message')[4];
    const errorMessageZip = document.querySelectorAll('.p2a-error-message')[6];
    const errorMessagePhone = document.querySelectorAll('.p2a-error-message')[7];
    const errorMessageEmail = document.querySelectorAll('.p2a-error-message')[8];
    if(errorMessageTitle && isElementInViewport(errorMessageTitle)){
        errorMessageTitle.textContent = 'Por favor, seleccione su título';
        errorMessageName.textContent = 'Por favor, ingrese su nombre completo';
        errorMessageAddress.textContent = 'Por favor, ingrese su dirección postal';
        errorMessageZip.textContent = 'Por favor, ingrese su código postal de 5 dígitos.';
        errorMessagePhone.textContent = 'Por favor, ingrese un número de teléfono válido.';
        errorMessageEmail.textContent = 'Por favor, ingrese una dirección de correo electrónico válida.';
    }
}

function updateErrorTexts(){
    changeErrorMessagesFields();
    requestAnimationFrame(updateErrorTexts);
}


// falta mudar 3a pagina do twitter
function changeTweetToText(){
    var tweetTo = document.querySelector('.p2a-legislator-list-heading');
    const button = document.querySelector('button')
    if(tweetTo && isElementInViewport(tweetTo)){
        tweetTo.textContent = 'Enviaremos este tuit a: ';
        button.textContent = 'Publicar tuit';
    }
}

function updateTweetToText(){
    changeTweetToText();
    requestAnimationFrame(updateTweetToText);
}

updateTweetToText();



