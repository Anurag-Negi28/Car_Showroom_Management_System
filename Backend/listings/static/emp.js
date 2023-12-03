
function searchEmployees() {
    var input, filter, employees, employee, i, txtValue;
    input = document.getElementById("employeeSearch");
    filter = input.value.toUpperCase();
    employees = document.getElementsByClassName("employee-section");

    for (i = 0; i < employees.length; i++) {
        employee = employees[i];
        txtValue = employee.textContent || employee.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            employee.style.display = "";  // Show the employee section
            employee.style.width = "75%";  // Set width explicitly
            employee.style.maxWidth = "calc(75% - 20px)";  // Adjust max-width accordingly
            employee.style.flexDirection = "row"; // Ensure horizontal layout
            employee.style.height = "auto"; // Allow height to adjust based on content
        } else {
            employee.style.display = "none";  // Hide the employee section
        }
    }
}

