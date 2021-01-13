const topPanel = document.querySelector('.toppanel')
const polButton = document.querySelector('.polbutton')
const notifBottom = document.querySelector('.notification')
const fixBottom = document.querySelector('.fix-nav-bottom')
const theBody = document.getElementsByTagName("body")[0];

polButton.addEventListener('click', ()=> {
    topPanel.classList.add('show')
    document.body.classList.add('show')
})

// setTimeout(() => {
//     topPanel.classList.remove('show')
//     document.body.classList.remove('show')
// }, 2000);

//Fix top notif
const panelHeight = topPanel.getBoundingClientRect().height
const bodyHeight = theBody.getBoundingClientRect().height
window.addEventListener('scroll', ()=> {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > panelHeight) {
        topPanel.classList.add("fix-nav");
      } else {
        topPanel.classList.remove("fix-nav");
      }

})

var fixBotBool = false

function closebutton() {
    notifBottom.classList.add("fix-nav-bottom")
    fixBotBool = true
    setTimeout(() => {
        notifBottom.classList.remove("fix-nav-bottom")
        fixBotBool = false
    }, 600000);
}

window.addEventListener('scroll', ()=> {
    const scrollHeight = window.pageYOffset;
    if(fixBotBool) {
        notifBottom.classList.add("fix-nav-bottom")
    } else {
        if (scrollHeight > (bodyHeight/3)) {
            notifBottom.classList.remove("fix-nav-bottom")
        } else {
            notifBottom.classList.remove("fix-nav-bottom")
        }
    }
})