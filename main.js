let plus = document.getElementById('add');

plus.addEventListener('click', function memoAdded() {
    let cont = document.getElementById('todo');
    let input = document.getElementById('memo').value;
    let paragraph = document.createElement('p');
    paragraph.classList.add('para-styling');
    cont.appendChild(paragraph)
    paragraph.innerText = input;
    
    paragraph.addEventListener('click', function completed() {
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function memoRemoved() {
        cont.removeChild(paragraph)
    })
    let clear = document.getElementById('remove')
    clear.addEventListener('click', function memoRemoved() {
        cont.removeChild(paragraph)
    })
});