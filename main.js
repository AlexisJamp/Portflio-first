let currentSize = 60; 
let sizeCahnged = 220;


function handleButtonClick(button) {
    // Defined elements
    const container = button.closest('.steps');
    const bottomText = container.querySelector('#steps-bottom-text');
    const image = button.querySelector('img');

    // If current button pressed, then changing size, else bring baack to previous values
    if (image) {
        const source = image.getAttribute('src'); //
        if (source.includes('plus.svg')){
            image.setAttribute('src', '/First/img/vector/minus.svg');
            container.style.height = `${sizeCahnged}px`;
            container.style.color = `'#B9FF66'`;
            bottomText.style.display = 'block'
        } else if (source.includes('minus.svg')) {
            image.setAttribute('src', '/First/img/vector/plus.svg');
            container.style.height = `${currentSize}px`;
            bottomText.style.display = 'none'
    }}
};