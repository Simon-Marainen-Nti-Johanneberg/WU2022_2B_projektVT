function toggleMenu(){
    document.querySelector('.nav-link').classList.toggle('nav-link-active')
    document.querySelector('.hamburger').classList.toggle('toggle')
    document.querySelector('.nav').classList.toggle('nav-active')
    console.log("1")
}

document.querySelector('.hamburger').addEventListener('click',toggleMenu)