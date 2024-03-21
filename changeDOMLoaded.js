/*Code to change loaded elements Javascript */
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

function changeCallInstructions() {
    const ol = document.querySelector('.call-instruction-list');
    if (ol && isElementInViewport(ol)) {
        document.querySelector('.callInstruction2').textContent = 'Answer and listen to a short recording of talking points.';
        document.querySelector('.callInstruction3').textContent = 'After it plays, you will be connected to your first legislator’s office.';
        document.querySelector('.callInstruction4').textContent = 'Read the script aloud, filling in the appropriate blanks depending on if they are a Senator or Representative. Feel free to add!';

        let existingLiFive = document.querySelector('.callInstruction5');
        let existingLiSix = document.querySelector('.callInstruction6');

        if (!existingLiFive) {
            let liFive = document.createElement('li');
            liFive.classList.add('callInstruction5');
            liFive.innerHTML = 'Once the office hangs up, stay on the call and <b>do not hang up</b>.';
            ol.appendChild(liFive);
        }

        if (!existingLiSix) {
            let liSix = document.createElement('li');
            liSix.classList.add('callInstruction6');
            liSix.textContent = 'You will be automatically connected to your next legislator’s office.';
            ol.appendChild(liSix);
        }
    }
}

function updateTextOnViewportChange() {
    changeCallInstructions();
    requestAnimationFrame(updateTextOnViewportChange);
}

document.addEventListener('DOMContentLoaded', updateTextOnViewportChange);