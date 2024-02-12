burger = document.querySelector('.burger')
headerContainer = document.querySelector('.header-container')
rightContainer = document.querySelector('.right-container')

burger.addEventListener('click',()=>{
    headerContainer.classList.toggle('h-class-resp')
    rightContainer.classList.toggle('v-class-resp')
})
