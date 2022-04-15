const ul = document.querySelector('ul')
ul.onclick = (e) => {
    e.target.innerText += '.'
}