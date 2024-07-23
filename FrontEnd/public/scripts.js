
document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('/get_data');
    const data = await response.json();

    const courseList = document.getElementById('courseList');
    data.data.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
        `;
        courseList.appendChild(courseDiv);
    });
});
