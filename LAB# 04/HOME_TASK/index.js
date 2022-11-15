var coursesId = [];
function addNewCourse() {
    const body = document.querySelector('tbody');
    const row = document.createElement('tr');
    const tdCourseID = document.createElement('td');
    const tdCourseName = document.createElement('td');
    const tdcredithour = document.createElement('td');
    const tdYearTaken = document.createElement('td');
    const courseId = ((Math.round(Math.random() * 100)) + 4);
    const courseName = ((Math.round(Math.random() * 500))+ 50);
    const credithour = ((Math.round(Math.random() * 4)) + 1);
    const yearTaken = (Math.round(Math.random() * 2020)) +2020;
    row.id = 'row' + courseId;
    tdCourseID.innerHTML = 'Course ' + courseId;
    tdCourseName.innerHTML = 'Course - ' +  courseName;
    tdcredithour.innerHTML = credithour;
    tdYearTaken.innerHTML = yearTaken;
    row.appendChild(tdCourseID);
    row.appendChild(tdCourseName);
    row.appendChild(tdcredithour);
    row.appendChild(tdYearTaken);
    body.appendChild(row);
    coursesId.push(row.id = 'row' + courseId);
}
function deleteAllCourses() {
    for (let index = 0; index < coursesId.length; index++) {
        const row = document.getElementById(coursesId[index]);
        const body = document.querySelector('tbody');
        body.removeChild(row);
    }
}
function deleteCourse() {
    const courseId = prompt('Please enter course#');
    if (courseId) {
        const row = document.getElementById('row' +
            courseId);
        if (row) {
            const body = document.querySelector('tbody');
            body.removeChild(row);
        }
    }
}
function updateCourse() {
    const newCourseYear = prompt('Please enter course# and  new year delimited by comma');
    if (newCourseYear) {
        const courseId = newCourseYear.split(',')[0];
        const courseYear = newCourseYear.split(',')[1];
        const row = document.getElementById('row' +
            courseId);
        if (row) {
            const tdYearTaken =
                row.querySelector('#row' + courseId + ' > td:nth-child(3)');
            tdYearTaken.innerHTML = courseYear;
        }
    }
}

const btnTableBorder = document.getElementById('addTableBorder');
const btnRowColor = document.getElementById('addRowColor');
const btnButtonStyling = document.getElementById('addButtonStyling');
btnTableBorder.addEventListener('click', function (event) {
    const table = document.getElementById('studentCourses');
    table.style.border = '1px solid green';
});
