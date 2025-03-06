document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    let draggedItem = null;

    gridItems.forEach(item => {
        item.addEventListener('dragstart', () => {
            draggedItem = item;
            setTimeout(() => {
                item.style.opacity = '0.4';
            }, 0);
        });

        item.addEventListener('dragend', () => {
            setTimeout(() => {
                item.style.opacity = '1';
                draggedItem = null;
            }, 0);
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        item.addEventListener('dragenter', (e) => {
            e.preventDefault();
            if (draggedItem !== item) {
                item.style.opacity = '0.7';
            }
        });

        item.addEventListener('dragleave', () => {
            item.style.opacity = '1';
        });

        item.addEventListener('drop', () => {
            if (draggedItem && draggedItem !== item) {
                // Swap background images
                let tempBackground = window.getComputedStyle(draggedItem).backgroundImage;
                draggedItem.style.backgroundImage = window.getComputedStyle(item).backgroundImage;
                item.style.backgroundImage = tempBackground;

                // Swap text labels
                let tempText = draggedItem.querySelector("span").innerText;
                draggedItem.querySelector("span").innerText = item.querySelector("span").innerText;
                item.querySelector("span").innerText = tempText;
            }
            item.style.opacity = '1';
        });
    });
});

