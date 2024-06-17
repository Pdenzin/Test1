let state = true
document.getElementById("Peter").addEventListener('click', function () {
    state = (!state)
    if (state == true) document.getElementById("Peter").style.display = "block"
    else document.getElementById("Peter").style.display = "none"
})


document.getElementById('colorButton').addEventListener('click', function () {
    let aColor = "#3366FF"
    document.body.style.backgroundColor = aColor
    this.style.fontStyle = "ffffff"
})

document.getElementById('removeParagraph').addEventListener('mouseenter', function () {
    this.classList.add('hiddentext')
})

document.getElementById('removeParagraph').addEventListener('mouseleave', function () {
    this.classList.remove('hiddentext')
})

document.getElementById('deleteButton').addEventListener('click', function () {
    state = (!state)
    if (state = true) document.getElementById('removeParagraph').style.display = "none"
})


