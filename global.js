// CONSTANTS
const body = document.body;
const header = document.querySelector('.header');
const openNav = document.querySelector('.header > svg');
const sideNavPanel = document.querySelector('.header > ul');
const closeNav = document.querySelector('.header > ul > svg');
const navLinks = sideNavPanel.querySelectorAll('li');
const notification = document.querySelectorAll('.notification');
const warning = document.querySelectorAll('.warning');
const info = document.querySelectorAll('.info');
const error = document.querySelectorAll('.error');
const cards = document.querySelectorAll('.card');
const inputs = document.querySelectorAll('input')









// VARIABLES









// FUNCTIONS
function log(x) { console.log(x) };

inputs.forEach((element) => {
    element.value = localStorage.getItem(`${element}`);
})

function popup(x) {
    let popup = document.createElement('div');
    let popup_text = document.createElement('div');
    let popup_button = document.createElement('button');

    popup_text.classList.add('text');
    popup_button.classList.add('button');
    popup.classList.add('popup');

    popup_text.innerHTML = `Player ${state} wins`;
    popup_button.innerHTML = 'OK';

    document.body.appendChild(popup);
    popup.append(popup_text);
    popup.append(popup_button);

    popup_button.onclick = () => {
        popup.style.display = 'none';
        window.history.go(0);
    }
}







// EVENT LISTENERS
closeNav.addEventListener('click', () => {
    sideNavPanel.style.transform = 'translateX(100%)';
})


openNav.addEventListener('click', () => {
    sideNavPanel.style.transform = 'translateX(0)';
})


navLinks.forEach((element) => {

    element.addEventListener('mousemove', () => {
        navLinks.forEach((item) => {
            item.style.filter = 'blur(0.3ch)'
        });
        element.style.filter = 'none';
        element.style.fontWeight = '900';
    });

    element.addEventListener('mouseleave', () => {
        navLinks.forEach((item) => {
            item.style.filter = 'initial'
        });
        element.style.fontWeight = 'initial';
    });

    element.addEventListener('touchstart', () => {
        navLinks.forEach((item) => {
            item.style.filter = 'blur(0.3ch)'
        });
        element.style.filter = 'none';
        element.style.fontWeight = '900';
    });
})


error.forEach((element) => {
    element.addEventListener('click', (position) => {
        if ((element.clientWidth - position.x) < element.clientHeight / 2) {
            element.style.display = 'none';
        }
    })
})


warning.forEach((element) => {
    element.addEventListener('click', (position) => {
        if ((element.clientWidth - position.x) < element.clientHeight / 2) {
            element.style.display = 'none';
        }
    })
})


info.forEach((element) => {
    element.addEventListener('click', (position) => {
        if ((element.clientWidth - position.x) < element.clientHeight / 2) {
            element.style.display = 'none';
        }
    })
})


notification.forEach((element) => {
    element.addEventListener('click', (position) => {
        if ((element.clientWidth - position.x) < element.clientHeight / 2) {
            element.style.display = 'none';
        }
    })
})


inputs.forEach((element) => {
    element.addEventListener('input', (event) => {
        localStorage.setItem(`${element}`, element.value)
    })
})


window.addEventListener('storage', (event) => {
    for (let i in inputs) {
        if (event.key == `${i}`) {
            i.innerHTML = localStorage.getItem(`${i}`);
        }
    }
})











// ELEMENT MODIFICATIONS
cards.forEach((element) => {
    let stars = Math.round(2 * parseFloat(element.querySelector('.stars').getAttribute('stars'))) / 2;
    element.querySelector('.stars').style.backgroundImage = `linear-gradient(to right, yellow ${100 * stars / 5}%, var(--dark) ${100 * stars / 5}%)`
    for (i = 0; i < 5; i++) {
        element.querySelector('.stars').innerHTML += '&starf;';
    }
    // for (i = 0; i < 5 - stars; i++) {
    //     element.querySelector('.stars').innerHTML += '&star;';
    // }
})