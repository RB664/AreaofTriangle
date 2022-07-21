const button = document.getElementById('calculate')

button.addEventListener('click',() => {
    let area = document.getElementById('base','height')
    area = parseInt(base.value*height.value)/2
    document.getElementById('answer').innerHTML = area
});