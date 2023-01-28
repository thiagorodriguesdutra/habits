const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
    const date = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    const dayExists = nlwSetup.dayExists(date);

    if (dayExists) {
        alert('Day already added! 🔴');
        return
    };

    nlwSetup.addDay(date);
};

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
};

const data = JSON.parse(localStorage.getItem('NLWSetup@habits'));

nlwSetup.setData(data ?? {});
nlwSetup.load();



 