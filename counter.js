(() => {
    const counterNumber = document.getElementById('js-counter');
    const button = document.getElementById('js-button');

    button.addEventListener('click', () => {
        counterNumber.innerText = parseInt(counterNumber.innerText) + 1;
    });
})();