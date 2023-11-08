const select = document.querySelector('#colors');

select.addEventListener('change', () => {
    const cor = select.value;

    switch (cor) {
        case "vermelho":
            changeColor('red')
            break;
        case "azul":
            changeColor('blue')
            break;
        case "verde":
            changeColor('green')
            break;
        case "magenta":
            changeColor('magenta')
            break;
        case "roxo":
            changeColor('purple')
            break;
        case "amarelo":
            changeColor('yellow')
            break;
        default:
            changeColor('red')
      }
})

function changeColor(colorImage) {
    const image = document.querySelector('.user-image img');
    const buttons = document.querySelectorAll('.list-item');
    const footer = document.querySelector('footer');
    
    image.style.boxShadow = `0px 4px 12px 25px var(--${colorImage}-box-shadow)`
    
    buttons.forEach(item => item.style.boxShadow = `0px 4px 15px 0px var(--${colorImage}-button-box-shadow)`)

    footer.style.background = `var(--${colorImage}-footer-box-shadow)`
}