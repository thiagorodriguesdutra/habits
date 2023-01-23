const form = document.getElementById('habits-form');
const array = [1, 2, 3, 4, 5, 6]

function registerHabitsOfDay() {
    const fragment = document.createDocumentFragment();
    array.forEach(item => {
        const container = fragment
            .appendChild(document.createElement('div'))
            .appendChild(document.createElement('div'))
            .appendChild(document.createElement('input'))

            form.appendChild(fragment)
    })
}

const button = document.getElementById('registerDay');
button.addEventListener('click', registerHabitsOfDay);
