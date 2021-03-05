const sm = 620;
const md = 960;

const ellipse1 = document.getElementById('ellipse1')
const aboutDescription = document.getElementById('about-description')
const aboutDescriptionText = aboutDescription.innerHTML
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');

const handleHeader = () => {
    burger.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            header.style.height = '80px';
        } else { 
            navLinks.style.display = 'flex';
            header.style.height = '300px';
        }
    })
}

const handleResolutions = () => {
    const width = window.innerWidth;
    if (width <= sm) {
        ellipse1.setAttribute('rx', '130%')
        ellipse1.setAttribute('ry', '70%')
        aboutDescription.innerHTML = `${aboutDescriptionText.substring(0, 100)}...`
    } else {
        ellipse1.setAttribute('rx', '52%')
        ellipse1.setAttribute('ry', '70%')
        aboutDescription.innerHTML = aboutDescriptionText
    }
    
}

handleResolutions();
handleHeader();

window.addEventListener('resize', () => {
    handleResolutions();
    // header edge cases
    const width = window.innerWidth;
    if (width >= md) {   
        header.style.height = '80px';
        navLinks.style.display = 'flex';
    } else {
        if (header.style.height === '80px') {
            navLinks.style.display = 'none';
        }
    }
})

