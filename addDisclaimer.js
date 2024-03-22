setTimeout(function(){
    document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button").textContent = 'Sign the Pledge'
},500)

var father = document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit")

//creating element
var divDisclaimer = document.createElement('div')
var spanDisclaimer = document.createElement('span')
spanDisclaimer.id = 'disclaimer-button'
divDisclaimer.appendChild(spanDisclaimer)
spanDisclaimer.innerHTML = `By taking action, you will receive emails from Best Friends. Change your mailing preferences or opt-out at any time by <a href="https://bestfriends.org/contact-us">contacting us</a>. Learn more in our <a  href="https://bestfriends.org/privacy-policy ">Privacy Policy</a>.`

//appending right under the button
father.appendChild(divDisclaimer)

document.querySelector("#p2a-campaign-container > div > main > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button").style.marginBottom = '20px'
