// Your code goes here
// * [x] `mouseover`
// * [x] `keydown`
// * [x] `wheel`
// * [x] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [x] `dblclick`

const logoHeading = document.querySelector('.main-navigation .logo-heading')
console.log(logoHeading)

const wholePage = document.querySelector('body')
console.log(wholePage)

const funBusImg = document.querySelector('.intro img')
console.log(funBusImg)

const introText = document.querySelector('.intro p')
console.log(introText)

const navLinks = document.querySelectorAll('.main-navigation .nav-container .nav > a')
console.log(navLinks)

const middleImgs = document.querySelectorAll('.content-section img')
console.log(middleImgs)

Array.from(navLinks).forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
        event.target.style.border = "2px solid red";
    })
    elem.addEventListener('mouseout', (event) => {
        event.target.style.border = "none"
    })
    elem.addEventListener('click', (event) => {
        event.preventDefault()
    });
})

Array.from(middleImgs).forEach((img) => {
    img.addEventListener('dblclick', (event) => {
        event.target.style.borderRadius = "100%"
    })
})

wholePage.addEventListener('load', (event) => {
    wholePage.alert('the page is loaded!')
})

logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'grey';
    event.target.style.border = "2px dotted blue";
    event.target.style.padding = "1rem"
})
logoHeading.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white';
})

wholePage.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = '#AFD1DE'
},)

wholePage.addEventListener('wheel', (event) => {
    event.target.style.opacity = .5;
})

funBusImg.addEventListener('drag', (event) => {
    event.target.style.border = "2px dotted black"
})

funBusImg.addEventListener('dragend', (event) => {
    event.target.style.border = "none"
})

introText.addEventListener('focus', (event) => {
    event.target.style.width = '100%';
})



// funBusImg.addEventListener('drop', (event) => {
//     event.target.style.border = "4px solid blue"
// })


// const buttonPress = document.querySelectorAll(".destination div.btn")
// console.log(buttonPress)
// buttonPress.addEventListener('click', (event) => {
//   event.target.buttonPress[0].textContent = `Thank you!`;
//   event.target.buttonPress[1].textContent = `Thank you!`;
//   event.target.buttonPress[2].textContent = `Thank you!`;
// });


