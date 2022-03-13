const hamburger = document.getElementsByClassName('hamburger')[0]
const closeNav = document.getElementsByClassName('close-nav')[0]
const mobileNavbar = document.getElementsByClassName('mobile-nav-links')[0]

hamburger.addEventListener('click', () => {
    mobileNavbar.classList.remove('fadeout')
    mobileNavbar.classList.add('fadein')
    hamburger.style.display = 'none'
    closeNav.style.display = 'block'
})

closeNav.addEventListener('click', () => {
    mobileNavbar.classList.remove('fadein')
    mobileNavbar.classList.add('fadeout')
    hamburger.style.display = 'block'
    closeNav.style.display = 'none'
})
