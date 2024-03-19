setInterval(function(){

    var first = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")
    first.textContent = 'Review Message'
    var second = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

    first.addEventListener('click', function(){
        second.textContent = 'Send Email'
    })
})

setTimeout(function(){

    var first = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")
    first.textContent = 'Review Message'
    var second = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

    first.addEventListener('click', function(){
        second.textContent = 'Send Email'
    })
},1000)

setTimeout(function(){

    var first = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")
    first.textContent = 'Review Message'

},500)




var paragraphElement = document.querySelector("#p2a-campaign-container > div > footer > div.p2a-copyright > p");

var newLinkElement = document.createElement('a');
newLinkElement.href = 'https://ownitvoiceit.com/privacy-polic';
newLinkElement.textContent = 'Privacy Policy'; 

var existingLinkElement = paragraphElement.querySelector('#p2a-campaign-container > div > footer > div.p2a-copyright > p > a');
var nextSpanElement = existingLinkElement.nextElementSibling;

paragraphElement.insertBefore(newLinkElement, nextSpanElement);


/*
function enableButton() {

    var inputValue = document.querySelector("#input-address1").value;

    var button = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button");

    if (inputValue.trim() !== "") {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "disabled");
    }
}

enableButton()
*/

// another code
//first: change the campaign settings


var button = document.querySelector('button')

button.addEventListener('click', function() {
    document.body.classList.add('change-button');
});

document.addEventListener('DOMContentLoaded', function() {
    if (document.body.classList.contains('change-button')) {
        var button = document.querySelectorAll('button');
        if (button) {
            button.textContent = 'Send Email';
        }
    }
});

window.addEventListener('load', function() {
    // Código para executar após a página inteira ter sido carregada
});

/////////////////////////////////////////////////////////////////////
// addEventListner
var button = document.querySelector('button')

button.addEventListener('click', function(){
    window.addEventListener('load', function(){
        button.textContent = 'Send Email'
    })
})


//////////////////////////////////////////////////////////////////////
// onClick
var button = document.querySelector('button')

button.onClick =  function(){
    window.addEventListener('load', function(){
        button.textContent = 'Send Email'
    })
}

button.disabled = false

//////////////////////////////////////////////////////////////////////
// Adding a CSS selector to 2nd step
var button = document.querySelector('button')

button.addEventListener('click', function(){
    console.log('test_1');
    var button = document.querySelector('button');
    if (button){
        button.id = 'second-step';
    } else {'button not found'}    
})

//////////////////////////////////////////////////////////////////////
// load event
var button = document.querySelector('button')

button.addEventListener('click', function(){
    console.log('test_1');
    
    window.addEventListener('load', function(){   
        console.log('test_2')
        var button = document.querySelector('button');
        button.id = 'second-step';  
    })

})

//////////////////////////////////////////////////////////////////////
// async/await



//////////////////////////////////////////////////////////////////////
// using the first page class

// Check if the element is visible
const buttonText = document.querySelector('button')

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function changeSecondStepButtonText() {
    const buttonText = document.querySelector('button');

    if (buttonText && isElementInViewport(buttonText)) {
        buttonText.textContent = 'Send Email';

    }
}

function updateTextOnViewportChange() {
    changeSecondStepButtonText();
    requestAnimationFrame(updateTextOnViewportChange);
}


updateTextOnViewportChange();

/*
var parentElement = document.querySelector('.p2a-action-form.p2a-action-form-email'); 
// Get the parent element
var newElement = document.createElement("div"); // Create a new element
// Check if parentElement exists before attempting to insert the new element
if (parentElement) {
    var referenceNode = document.querySelector("button[type='button']"); 
// Get the reference node
    parentElement.insertBefore(newElement, referenceNode); 
// Insert newElement before referenceNode
    // Função para lidar com o clique no botão
function handleClick() {
    // Altera o texto do botão para 'Send Email' após o primeiro clique
    button.textContent = 'Send Email';
    // Remove o ouvinte de evento após o primeiro clique para evitar múltiplas mudanças de texto
    button.removeEventListener('click', handleClick);
}
// Select the button element
var button = document.querySelector("button[type='button']"); 
// Verifica se o botão foi encontrado
if (button) {
    // Define o texto inicial do botão
    button.textContent = 'Review Message';
    // Adiciona um ouvinte de evento para lidar com o clique
    button.addEventListener('click', handleClick);
} else {
    console.error("Botão não encontrado com o seletor especificado.");
}
} else {
    console.error("Parent element not found.");
}




/*
// Função para lidar com o clique no botão
function handleClick() {
    // Altera o texto do botão para 'Send Email' após o primeiro clique
    button.textContent = 'Send Email';
    // Remove o ouvinte de evento após o primeiro clique para evitar múltiplas mudanças de texto
    button.removeEventListener('click', handleClick);
}
// Select the button element
var button = document.querySelector("button[type='button']"); 
// Verifica se o botão foi encontrado
if (button) {
    // Define o texto inicial do botão
    button.textContent = 'Review Message';
    // Adiciona um ouvinte de evento para lidar com o clique
    button.addEventListener('click', handleClick);
} else {
    console.error("Botão não encontrado com o seletor especificado.");
}
*/

var button = document.querySelector("button[type='button']");

button.addEventListener('click', function(){
    window.addEventListener('scroll', function(){
        document.querySelector("button[type='button']").textContent = 'Send Email';
    })
})


//////////////////////////////////////
var button = document.querySelector("button[type='button']");

button.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
    window.addEventListener('scroll', function(){
        document.querySelector("button[type='button']").textContent = 'Send Email';
    })
})