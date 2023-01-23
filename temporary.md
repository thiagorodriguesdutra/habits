function registerHabitsOfDay() {
    array.map(item => {
        form.appendChild(container).classList.add('check-habits');
        container.appendChild(child).classList.add('checkmark');
        child.appendChild(input).setAttribute('type', 'checkbox');
        
        document.getElementsByClassName('check-habits').item(0)
            .insertAdjacentElement('beforeend', dateElement)
            .classList.add('date');
    
            dateElement.innerText = "13/01"
    })
}
