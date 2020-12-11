const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const h1 = document.querySelector('.h1')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

