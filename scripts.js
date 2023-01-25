const form = document.querySelectorAll('form').item(0);
const today = new Date().toLocaleDateString('pt-Br', {
    day: 'numeric',
    month: 'numeric'
});
const recordedDays = []

function handleRecordMyHabits() {

    recordedDays.filter(day => {
        if(day === today) {
            alert('Opa, você já registrou este dia!')
        };
    });

    const habitsQuantity = [1, 2, 3, 4, 5, 6];
    const container = form.appendChild(document.createElement('div'));

    container.classList.add('check-habits');

    habitsQuantity.forEach(habit => {
        container
        .appendChild(document.createElement('div'))
        .appendChild(document.createElement('input')).setAttribute('type', 'checkbox');
        container.lastElementChild.classList.add('checkmark');
    });
    
    container.insertAdjacentHTML('beforeend', `<div class="date">${today}</div>`);

    recordedDays.push(today);

    callback()
};

console.log(recordedDays)

const button = document.getElementById('record-button');
button.addEventListener("click", handleRecordMyHabits);
