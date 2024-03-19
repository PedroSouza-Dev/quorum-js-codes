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