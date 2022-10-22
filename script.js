

let library = []
let newbook;


let displaybookcontainer = document.querySelector('.displaybookcontainer')
let form = document.querySelector('.form')
let overlay = document.querySelector('.overlay')
let popup = document.querySelectorAll('[data-addbook]')
let closebtn = document.querySelectorAll('[data-close-button]')
let createbook = document.querySelector('.createbook')
let titlevalue = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#nopages')
let readstatus1 = document.querySelector('#readstatus')

function popupform() {
    form.classList.toggle('active')
    overlay.classList.toggle('active')
}

closebtn.forEach(button => {
    button.addEventListener('click', () => {
        // clearform();
        popupform();
    })
})

popup.forEach(button => {
    button.addEventListener('click', () => {
        popupform();
        // clearform();
    })
})

overlay.addEventListener('click', () => {
    // clearform();
    popupform();
})

// preventdefault
// function preventdefault() {

// }

function clearform() {
    titlevalue.value = '';
    author.value = ''
    pages.value = ''
    readstatus1.checked = false
}




// form popup and book creation

// console.log(1, createbook, titlevalue.value, author.value, pages.value, readstatus1)

createbook.addEventListener('click', () => {
    console.log('frombool', titlevalue.value, author.value, pages.value, readstatus())
    addbookstolibrary();
    displaylibrary();
    popupform();
    clearform();
})

function readstatus() {
    if (readstatus1.checked) {
        return 'readed'
    }
    return 'not read';
}



//make book object constructor
function book(title, author, pagesread, readyet) {
    this.title = title
    this.author = author
    this.pagesread = pagesread
    this.readyet = readyet
}

function addbookstolibrary() {
    // hav to change a log
    newbook = new book(titlevalue.value, author.value, pages.value, readstatus())
    library.push(newbook)
    // displaylibrary();
}
function displaylibrary() {
    for (let i = 0; i < library.length; i++) {
        const divparent = document.createElement('div');
        divparent.setAttribute('class', 'book')
        for (let j in library[i]) {
            console.log(library[i][j])
            const div = document.createElement('div');
            div.textContent = `${library[i][j]}`;
            divparent.appendChild(div)
        }
        displaybookcontainer.appendChild(divparent)
    }
    library = []
}
// addbookstolibrary()
// displaylibrary()

// console.log('its new book', newbook)


