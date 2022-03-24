function toggleMenu(){
    document.querySelector('.nav-link').classList.toggle('nav-active')
    document.querySelector('.hamburger').classList.toggle('toggle')
    console.log("1")
}

document.querySelector('.hamburger').addEventListener('click',toggleMenu)