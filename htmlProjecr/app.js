let students = [
    { name: "John Doe", grade: "A" },
    { name: "Jane Doe", grade: "B" },
];

function addStudent() {
    const nameInput = document.getElementById("name");
    const gradeInput = document.getElementById("grade");

    const name = nameInput.value;
    const grade = gradeInput.value;

    if (name && grade) {
        const newStudent = { name, grade };
        students.push(newStudent);

        // Update the displayed student list
        displayStudents();

        // Clear input fields
        nameInput.value = "";
        gradeInput.value = "";

    } else {
        alert("Please enter both name and grade.");
    }
}

function displayStudents() {
    const studentListContainer = document.getElementById("student-list");
    studentListContainer.innerHTML = "";

    students.forEach((student, index) => {
        const studentDiv = document.createElement("div");
        studentDiv.innerHTML = `<strong>${student.name}</strong> - Grade: ${student.grade} <button onclick="deleteStudent(${index})">Delete</button>`;
        studentListContainer.appendChild(studentDiv);
    });
}
function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}
displayStudents();