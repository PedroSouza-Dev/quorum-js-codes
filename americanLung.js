//<!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-LB6HH8THFH"></script> -->

//window.dataLayer = window.dataLayer || [];
//function gtag(){dataLayer.push(arguments);}
//gtag('js', new Date());
//gtag('config', 'G-LB6HH8THFH');

// content element that will be wrapped
var campaignContent = document.querySelector('section.p2a-campaign-content');

// create content wrapper container
var campaignContentWrapper = document.createElement('div');
campaignContentWrapper.classList.add('p2a-campaign-content-wrap')

// insert content wrapper before content element in the DOM tree
campaignContent.parentNode.insertBefore(campaignContentWrapper, campaignContent);

// move content element into content wrapper
campaignContentWrapper.appendChild(campaignContent);

// form element that will be wrapped
var campaignForm = document.querySelector('section.p2a-campaign-action');

// create form wrapper container
var campaignFormWrapper = document.createElement('div');
campaignFormWrapper.classList.add('p2a-campaign-action-wrap')

// insert form wrapper before form element in the DOM tree
campaignForm.parentNode.insertBefore(campaignFormWrapper, campaignForm);

// move form element into form wrapper
campaignFormWrapper.appendChild(campaignForm);

// move mobile description before tabs
var campaignAction = document.querySelector('section.p2a-campaign-action');
var actionHeading = document.querySelector('h2.p2a-action-heading');
var mobileDescription = document.querySelector('section.p2a-content-mobile');
campaignAction.parentNode.insertBefore(mobileDescription, campaignAction);
campaignAction.parentNode.insertBefore(actionHeading, mobileDescription);

// add class to campaign content if tabs exist
var hasTwoTabs = document.querySelector('ul.halves');
var hasThreeTabs = document.querySelector('ul.thirds');

setTimeout(() => {
if(hasTwoTabs || hasThreeTabs){
campaignContent.classList.add("has-tabs")
}
}, 1000);

var toggleButton = mobileDescription.firstElementChild;
var mobileDescriptionContent = mobileDescription.lastElementChild;
mobileDescription.insertBefore(mobileDescriptionContent, toggleButton);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-2228733-25');

//

setInterval(function(){
    console.log('test_2')
    var submitButtom = document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

    var parentContainer = document.querySelector('.p2a-action-form');
    var thankYou = document.querySelector('.p2a-thank-you')

    submitButtom.addEventListener('click', function(){
    console.log('test');
    parentContainer.id = 'parent-container'
    thankYou.id = 'thank-you-message'

    })
})

setInterval(function(){
    console.log('test_2')
    var submitButtom = document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

    submitButtom.addEventListener('click', function(){
        console.log('test');
        document.querySelector('.p2a-action-form').style.position = 'relative'
        document.querySelector('.p2a-thank-you').style.position = 'absolute'
        document.querySelector('.p2a-thank-you').style.bottom = '25px'
        document.querySelector('.p2a-thank-you').style.left = '30px'

    })
})

// onclick
var submitButtom = document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

setInterval(function(){
    console.log('test_2')
    
    submitButtom.onclick = function(){

        console.log('test');
        document.querySelector('.p2a-action-form').style.position = 'relative'
        document.querySelector('.p2a-thank-you').style.position = 'absolute'
        document.querySelector('.p2a-thank-you').style.bottom = '25px'
        document.querySelector('.p2a-thank-you').style.left = '30px'
    
    }

})

// check element
var submitButtom = document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

submitButtom.onclick = function(){

    console.log('test');

    if (document.querySelector('.p2a-action-form')){
        document.querySelector('.p2a-action-form').style.position = 'relative'
    } else {
        console.log('element not loaded')
    }
    
    if (document.querySelector('.p2a-thank-you')){
        document.querySelector('.p2a-thank-you').style.position = 'absolute'
        document.querySelector('.p2a-thank-you').style.bottom = '25px'
        document.querySelector('.p2a-thank-you').style.left = '30px'
    } else {
        console.log('element not loaded')
    }
}

// check element - event listner

var submitButtom = document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

setInterval(function(){
    submitButtom.addEventListener('click', function(){

        console.log('test');

        if (document.querySelector('.p2a-action-form')){
            document.querySelector('.p2a-action-form').style.position = 'relative'
        } else {
            console.log('element not loaded')
        }
        
        if (document.querySelector('.p2a-thank-you')){
            document.querySelector('.p2a-thank-you').style.position = 'absolute'
            document.querySelector('.p2a-thank-you').style.bottom = '25px'
            document.querySelector('.p2a-thank-you').style.left = '30px'
        } else {
            console.log('element not loaded')
        }
    })
})

var submitButton = document.document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button");

submitButton.addEventListener('click', function() {
    localStorage.setItem('formSubmitted', 'true');
});

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('formSubmitted') === 'true') {
        if (document.querySelector('.p2a-action-form')) {
            document.querySelector('.p2a-action-form').style.position = 'relative';
        }

        var thankYouElement = document.querySelector('.p2a-thank-you');
        if (thankYouElement) {
            thankYouElement.style.position = 'absolute';
            thankYouElement.style.bottom = '25px';
            thankYouElement.style.left = '30px';
        }

        localStorage.removeItem('formSubmitted');
    }
});


setTimeout(function(){
    var submitButtom = document.querySelector("#p2a-campaign-container > div > main > div.p2a-campaign-action-wrap > section.p2a-campaign-action > form > fieldset.p2a-fieldset-submit > button")

    submitButtom.addEventListener('click', function(){
        setInterval(function(){
            var thankYouElement = document.querySelector('.p2a-thank-you');
            thankYouElement.style.position = 'absolute';
            thankYouElement.style.bottom = '25px';
            thankYouElement.style.left = '30px';

        })
    })

},700)
