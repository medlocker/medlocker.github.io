let aibox = document.querySelector('.ai')
let aibtn = document.querySelector('#aibtn')
let aicontentprnt = document.querySelector('.aicontent-parent')

let isSliding = false;

aibtn.addEventListener('click', function () {
    if (isSliding == false) {
        aibox.style.height = '43vh';
        aicontentprnt.style.display = 'flex';
        isSliding = true;
    } else {
        aibox.style.height = '10vh';
        aicontentprnt.style.display = 'none';
        isSliding = false;
    }
});