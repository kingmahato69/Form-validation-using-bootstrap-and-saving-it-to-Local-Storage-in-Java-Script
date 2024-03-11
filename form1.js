document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('studentForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            SID: document.getElementById('SID').value,
            email: document.getElementById('exampleInputEmail1').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            day: document.getElementById('day').value,
            month: document.getElementById('month').value,
            year: document.getElementById('year').value,
            contactNumber: document.getElementById('contactNumber').value,
        };

        var existingData = JSON.parse(localStorage.getItem('studentData')) || [];

        existingData.push(formData);

        localStorage.setItem('studentData', JSON.stringify(existingData));
        
        displayStudentData();

        form.reset();
    });

    function displayStudentData() {
        const tableBody = document.querySelector('#studentTableBody');
        tableBody.innerHTML = ''; // Clear the table body

        const storedData = JSON.parse(localStorage.getItem('studentData')) || [];

        storedData.forEach((student, index) => {
            const newRow = tableBody.insertRow();

            newRow.insertCell().textContent = index + 1; // Index

            const studentNameCell = newRow.insertCell();
            studentNameCell.textContent = student.firstName + ' ' + student.lastName;

            const uidCell = newRow.insertCell();
            uidCell.textContent = student.SID;

            const emailCell = newRow.insertCell();
            emailCell.textContent = student.email;

            const contactNoCell = newRow.insertCell();
            contactNoCell.textContent = student.contactNumber;

            const dob = `${student.day}-${student.month}-${student.year}`;
            const dobCell = newRow.insertCell();
            dobCell.textContent = dob;

            const genderCell = newRow.insertCell();
            genderCell.textContent = student.gender;
        });
    }

    // Call the function to display data initially
    displayStudentData();

    (function () {
        'use strict';

        var forms = document.querySelectorAll('.needs-validation');

        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        event.preventDefault();
                    }

                    form.classList.add('was-validated');
                }, false);
            });
    })();

    
    var daySelect = document.getElementById('day');
    var dayPlaceholder = document.createElement('option');
    dayPlaceholder.value = '';
    dayPlaceholder.text = 'Date';
    daySelect.appendChild(dayPlaceholder);
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }

    var monthSelect = document.getElementById('month');
    var monthPlaceholder = document.createElement('option');
    monthPlaceholder.value = '';
    monthPlaceholder.text = 'Month';
    monthSelect.appendChild(monthPlaceholder);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < months.length; i++) {
        var option = document.createElement('option');
        option.value = months[i];
        option.text = months[i];
        monthSelect.appendChild(option);
    }

    var yearSelect = document.getElementById('year');
    var yearPlaceholder = document.createElement('option');
    yearPlaceholder.value = '';
    yearPlaceholder.text = 'Year';
    yearSelect.appendChild(yearPlaceholder);
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= 1960; i--) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
});