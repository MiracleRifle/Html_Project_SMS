let students = [
    { name: "John Doe", subject: "A" },
    { name: "Jane Doe", subject: "B" },
];

function addStudent() {
    const nameInput = document.getElementById("name");
    const subjectInput = document.getElementById("subject");

    const name = nameInput.value;
    const subject = subjectInput.value;

    if (name && subject) {
        const newStudent = { name, subject };
        students.push(newStudent);

        // Update the displayed student list
        displayStudents();

        // Clear input fields
        nameInput.value = "";
        subjectInput.value = "";

    } else {
        alert("Please enter both name and subject.");
    }
}

function displayStudents() {
    const studentListContainer = document.getElementById("student-list");
    studentListContainer.innerHTML = "";

    students.forEach((student, index) => {
        const studentDiv = document.createElement("div");
        studentDiv.innerHTML = `<strong>${student.name}</strong> - Subject: ${student.subject} <button onclick="deleteStudent(${index})">Delete</button>`;
        studentListContainer.appendChild(studentDiv);
    });
}
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
displayStudents();