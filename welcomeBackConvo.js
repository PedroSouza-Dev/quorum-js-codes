// Check if the element is visible

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

window.addEventListener('scroll', changeWelcomeBackIfVisible);
*/

/*
const welcomeBack = document.querySelector('.cookie__welcome');
const buttonText = document.querySelector('.btn__text');
const buttonReset = document.querySelector('.cookie-reset');

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
    if (welcomeBack && isElementInViewport(welcomeBack)) {
        welcomeBack.textContent = 'Bon retour! Est-ce que ces informations sont correctes?';
        buttonText.textContent = 'Cést parti';
        buttonReset.textContent = `Non, ce n'est pas moi`;

        window.removeEventListener('scroll', changeWelcomeBackIfVisible);
    }
}

window.addEventListener('scroll', changeWelcomeBackIfVisible);

changeWelcomeBackIfVisible();

*/

//foncionou
// Check if the element is visible
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