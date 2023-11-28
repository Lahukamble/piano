const pianokeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio(newUrl).play()

}

pianokeys.forEach((pianoKey, i) => {
    const newUrl = '24-piano-keys/key' + (i + 1) + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})