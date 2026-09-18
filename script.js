const addForm = document.querySelector('#Student-form');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
const list = document.querySelector("#Student-info");

addForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = nameField.value;
    const program = programField.value;

    const studentCard = document.createElement('li');

    const studentName = document.createElement('span');
    studentName.innerText = name;

    const studentProgram = document.createElement('span');
    studentProgram.innerText = program;

    studentCard.append(studentName, studentProgram);

    list.append(studentCard);
})