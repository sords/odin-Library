

let library = []
let newbook;


let displaybookcontainer = document.querySelector('.displaybookcontainer')
let form = document.querySelector('.form')
let overlay = document.querySelector('.overlay')
let popup = document.querySelectorAll('[data-addbook]')
let closebtn = document.querySelectorAll('[data-close-button]')

function popupform() {
    form.classList.toggle('active')
    overlay.classList.toggle('active')
}



popup.forEach(button => {
    button.addEventListener('click', popupform)
})


// form popup and book creation
let createbook = document.querySelector('.createbook')
let titlevalue = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#nopages')
let readstatus = document.querySelector('#readstatus')

console.log(1, createbook.value, titlevalue.value, author.value, pages.value, readstatus.value)

createbook.addEventListener('click', () => {
    console.log(titlevalue.value, author.value, pages.value, readstatus.value)
    addbookstolibrary();
    displaylibrary();
    popupform();
})





//make book object constructor
function book(title, author, pagesread, readyet) {
    this.title = title
    this.author = author
    this.pagesread = pagesread
    this.readyet = readyet
}

function addbookstolibrary() {
    // hav to change a log
    newbook = new book(titlevalue.value, author.value, pages.value, readstatus.value)
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
            div.textContent =`${library[i][j]}`;
            divparent.appendChild(div)
        }
        displaybookcontainer.appendChild(divparent)
    }
    library = []

}
// addbookstolibrary()
// displaylibrary()

console.log(newbook)


