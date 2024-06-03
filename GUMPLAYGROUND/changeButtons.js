const buttonsById = [
    'share', 'show-video', 'stop-video', 'change-size', 'start-record', 
    'stop-record', 'play-record', 'share-screen'
];

// buttonEls will be an array of DOM elements in order of buttonsById
const buttonEls = buttonsById.map(buttonId => document.getElementById(buttonId));

const colorClassMap = {
    "green": "btn-success",
    "blue": "btn-primary",
    "grey": "btn-secondary",
    "red": "btn-danger"
};

const changeButtons = (colorsArray) => {
    colorsArray.forEach((color, i) => {
        const buttonEl = buttonEls[i];
        Object.values(colorClassMap).forEach(className => {
            buttonEl.classList.toggle(className, colorClassMap[color] === className);
        });
    });
};

