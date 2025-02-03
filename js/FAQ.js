document.querySelectorAll('.fheader').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('factive');

        if (button.classList.contains('factive')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            button.querySelector('.icon').textContent = '-'; // Change + to -

        } else {
            accordionContent.style.maxHeight = 0;
            button.querySelector('.icon').textContent = '+'; // Change + to -

        }

        // Close other open accordion items
        document.querySelectorAll('.fheader').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('factive');
                otherButton.nextElementSibling.style.maxHeight = 0;
                otherButton.querySelector('.icon').textContent = '+'; // Change - to +

            }
        });
    });
});
